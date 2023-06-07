"use client";
import Image from "next/image";
import { movie_img_url } from "../config/config";
import { Card, CardContent, Typography, Chip } from "@mui/material";
import Link from "next/link";
import RateCircle from "./rateCircle";

interface Props {
  rate: number;
  poster_path: string;
  movie_date: string;
  title: string;
  id: string;
}

export default function VerticalCard(props: Props) {
  const { rate, poster_path, title, movie_date, id } = props;
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
              <RateCircle rate={rate} size={50} />
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
