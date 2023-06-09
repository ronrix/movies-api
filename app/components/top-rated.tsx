"use client";
import { useState } from "react";
import { Typography } from "@mui/material";
import styled from "@emotion/styled";
import Image from "next/image";
import { movie_img_url, movie_url } from "../config/config";
import PlayArrowOutlinedIcon from "@mui/icons-material/PlayArrowOutlined";
import Trailer from "./trailer";

const OverlayImage = styled.div<{ $url?: string }>`
  background-image: linear-gradient(
      to right,
      rgba(8, 27, 151, 0.8) 0%,
      rgba(8, 27, 151, 0) 100%
    ),
    url("https://www.themoviedb.org/t/p/w1920_and_h600_multi_faces_filter(duotone,00192f,00baff)${({
      $url,
    }) => $url || "/ym1dxyOk4jFcSl4Q2zmRrA5BEEN.jpg"}");
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2;
  width: 100%;
  height: 100%;
  z-index: -1;
`;

//
async function fetchVideoURL(id: string) {
  const res = await fetch(
    `${movie_url}/movie/${id}?api_key=${process.env.NEXT_PUBLIC_API_KEY}&append_to_response=videos`
  );
  return res.json();
}

type Props = {
  topRated: Array<any>;
};
export default function TopRated({ topRated }: Props) {
  const [activeBg, setActiveBg] = useState<string>(topRated[0]?.poster_path);
  const [openTrailer, setShowTrailer] = useState<boolean>(false);
  const [activeTrailerYTId, setActiveTrailerYTId] = useState<string>("");

  const handleHoverChangeActiveBg = (newImg: string) => {
    setActiveBg(newImg);
  };

  const handleShowTrailer = async (id: string) => {
    const res = await fetchVideoURL(id);
    setActiveTrailerYTId(res.videos.results[0].key);
    setShowTrailer(true);
  };

  const closeTrailer = () => {
    setShowTrailer(false);
  };

  return (
    <main className='flex flex-col items-center w-full border relative'>
      <OverlayImage $url={activeBg} />
      <Trailer
        handleClose={closeTrailer}
        open={openTrailer}
        youtubeId={activeTrailerYTId}
        key={activeTrailerYTId}
      />

      <section className='mt-10 w-full container mx-auto p-2'>
        <div className='flex gap-2'>
          <Typography variant='h6' className='font-bold text-white'>
            Top Rated
          </Typography>

          <div className='bg-primary rounded-full px-3 m-0 flex items-center'>
            <span className='bg-gradient-to-r from-[#16CCBA] to-blue-500 bg-clip-text text-transparent'>
              Movies
            </span>
          </div>
        </div>

        {/* latests movies - cards */}
        <div className='my-2 flex gap-5 overflow-x-auto'>
          {topRated &&
            topRated.map((movie: any) => {
              return (
                <section key={movie.id}>
                  <div className='w-[500px] h-[300px] relative overflow-hidden'>
                    <Image
                      src={movie_img_url + "original" + movie.poster_path}
                      width={700}
                      height={100}
                      alt={movie.title}
                      className='w-full object-cover hover:scale-110 duration-75'
                      onMouseEnter={() =>
                        handleHoverChangeActiveBg(movie.poster_path)
                      }
                      onClick={() => handleShowTrailer(movie.id)}
                    />
                    <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none'>
                      <PlayArrowOutlinedIcon
                        className='text-white'
                        fontSize='large'
                      />
                    </div>
                  </div>
                  <Typography
                    variant='h6'
                    className='text-center font-bold text-white'
                  >
                    {movie.title}
                  </Typography>
                </section>
              );
            })}
        </div>
      </section>
    </main>
  );
}
