"use client";
import VerticalCard from "./vertical-card";
import Typography from "@mui/material/Typography";

type Props = {
  popular: Array<any>;
};

export default function Trending(props: Props) {
  const { popular } = props;
  return (
    <section className='mt-10 w-full container mx-auto'>
      <div className='flex gap-2'>
        <Typography variant='h6' className='font-bold'>
          Popular
        </Typography>

        <div className='bg-primary rounded-full px-3 m-0 flex items-center'>
          <span className='bg-gradient-to-r from-[#16CCBA] to-blue-500 bg-clip-text text-transparent'>
            Movies
          </span>
        </div>
      </div>

      {/* latests movies - cards */}
      <div className='my-10 flex items-start gap-5 overflow-x-auto'>
        {popular &&
          popular.map((movie: any) => {
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
    </section>
  );
}
