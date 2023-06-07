"use client";
import { useState } from "react";
import { Typography, Grid, Button } from "@mui/material";
import styled from "@emotion/styled";
import RateCircle from "@/app/components/rateCircle";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import TrailerModal from "./components/trailer";

const OverlayImage = styled.div<{ $url?: string }>`
  background-image: linear-gradient(
      to right,
      rgba(226, 226, 226, 0.8) 0%,
      rgba(226, 226, 226, 0.5) 100%
    ),
    url("https://www.themoviedb.org/t/p/w1920_and_h600_multi_faces_filter(duotone,00192f,00baff)${(
      props
    ) => props.$url || "/ym1dxyOk4jFcSl4Q2zmRrA5BEEN.jpg"}");
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

type Props = {
  overview: string;
  production_companies: Array<{}>;
  url: string;
  rate: number;
  id: string;
  status: string;
  title: string;
  youtubeId: string;
};
export default function Main({
  overview,
  production_companies,
  url,
  rate,
  id,
  status,
  title,
  youtubeId,
}: Props) {
  const [open, setOpen] = useState<boolean>(false);

  const toggleOpen = () => {
    setOpen((prev: boolean) => !prev);
  };

  return (
    <>
      <OverlayImage $url={url} />
      <TrailerModal
        open={open}
        handleClose={toggleOpen}
        title={title}
        youtubeId={youtubeId}
      />
      <section className='mt-5'>
        <div className='my-5 flex items-center gap-3'>
          <RateCircle rate={rate * 10} size={70} />
          <Typography variant='h5' className='font-bold'>
            User <span className='block'>Score</span>
          </Typography>

          <Button type='button' variant='text' onClick={toggleOpen}>
            <PlayArrowIcon />
            Play trailer
          </Button>
        </div>

        <Typography variant='h5' className='font-bold my-5'>
          Status: {status}
        </Typography>

        <Typography variant='h5' className='font-bold'>
          Overview
        </Typography>
        <Typography variant='body1' className='leading-5 text-lg'>
          {overview}
        </Typography>

        {/* production companies */}
        <Typography variant='h5' className='font-bold mt-10'>
          Production Companies
        </Typography>
        <Grid container>
          {production_companies &&
            production_companies.map((a: any) => {
              return (
                <Grid key={a.id} item xs={4}>
                  <Typography variant='h5' className='text-lg'>
                    {a.name}
                  </Typography>
                </Grid>
              );
            })}
        </Grid>
      </section>
    </>
  );
}
