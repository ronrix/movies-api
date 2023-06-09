"use client";
import { Typography } from "@mui/material";
import VerticalCard from "./vertical-card";

type Props = {
  nowPlaying: Array<any>;
};
export default function NowPlaying({ nowPlaying }: Props) {
  return (
    <main className='w-full container mx-auto mt-10'>
      <div className='flex gap-2'>
        <Typography variant='h6' className='font-bold'>
          Now Playing
        </Typography>
        <div className='bg-primary rounded-full px-3 m-0 flex items-center'>
          <span className='bg-gradient-to-r from-[#16CCBA] to-blue-500 bg-clip-text text-transparent'>
            Movies
          </span>
        </div>
      </div>
      <div className='my-10 flex items-start gap-5 overflow-x-auto'>
        {nowPlaying &&
          nowPlaying.map((movie: any) => {
            return (
              <VerticalCard
                key={movie.id}
                rate={movie.vote_average * 10}
                poster_path={movie.poster_path}
                title={movie.title}
                movie_date={movie.release_date}
                id={movie.id}
              />
            );
          })}
      </div>
    </main>
  );
}
