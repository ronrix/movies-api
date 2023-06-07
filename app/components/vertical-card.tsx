"use client";
import Image from "next/image";
import { movie_img_url } from "../config/config";
import { Card, CardContent, Typography, Chip } from "@mui/material";
import Link from "next/link";

interface Props {
  rate: number;
  poster_path: string;
  movie_date: string;
  title: string;
  id: string;
}

export default function VerticalCard(props: Props) {
  const { rate, poster_path, title, movie_date, id } = props;
  const rating = 62.84 - (rate / 100) * 62.84;
  return (
    <Link href={`/movie/${id}`}>
      <Card sx={{ minWidth: 200, height: 450 }} className='group'>
        <div className='relative'>
          <Image
            src={movie_img_url + "w500" + poster_path}
            alt='movie thumbnail'
            className='w-full rounded-xl'
            width='300'
            height='300'
          />
          {/* rating */}
          <CardContent>
            <div className='absolute bottom-5 left-2'>
              <div className='w-[50px] h-[50px] bg-primary rounded-full flex items-center justify-center relative'>
                <Typography component='p' className='text-white flex'>
                  {rate}
                  <span className='text-[10px]'>%</span>
                </Typography>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 24 24'
                  className='absolute top-0 left-0 w-full h-full'
                >
                  <defs>
                    <linearGradient id='high' x1='0%' y1='0%' x2='100%' y2='0%'>
                      <stop offset='0%' stopColor='#16CCBA' />
                      <stop offset='100%' stopColor='#07B4E2' />
                    </linearGradient>
                    <linearGradient id='low' x1='0%' y1='0%' x2='100%' y2='0%'>
                      <stop offset='0%' stopColor='#793909' />
                      <stop offset='100%' stopColor='#ff8f00' />
                    </linearGradient>
                  </defs>
                  <circle
                    cx='12'
                    cy='12'
                    r='10'
                    fill='none'
                    strokeLinecap='round'
                    style={{
                      stroke: rate <= 70 ? "url(#low)" : "url(#high)",
                    }}
                    strokeWidth='2'
                    strokeDasharray='62.84' /* 50% of the circumference: 2 * π * 10 * 0.5 ≈ 31.42 */
                    strokeDashoffset={
                      rating
                    } /* "12.84" - 25% of the circumference: 2 * π * 10 * 0.25 ≈ 15.71 */
                  />
                </svg>
              </div>
            </div>
          </CardContent>
        </div>

        {/* info */}
        <Typography
          variant='h6'
          className='font-bold mt-7 group-hover:text-blue-500'
        >
          {title}
        </Typography>
        <Typography variant='p' className='text-gray-500 text-sm mt-5'>
          {movie_date}
        </Typography>
      </Card>
    </Link>
  );
}
