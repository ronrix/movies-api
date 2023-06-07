"use client";
import { movie_img_url } from "@/app/config/config";
import { Typography, Card, CardContent, CardMedia } from "@mui/material";
import Link from "next/link";

type Props = {
  data: Array<{}>;
};

export default function Recommendation({ data }: Props) {
  return (
    <section className='container mx-auto my-10'>
      <Typography variant='h5'>Recommendations</Typography>
      <div className='mt-5 flex items-center overflow-x-auto'>
        {data &&
          data.map((a: any) => (
            <Link key={a.id} href={`/movie/${a.id}`}>
              <Card sx={{ minWidth: 300, minHeight: 250 }}>
                <CardMedia
                  image={movie_img_url + "/original/" + a.poster_path}
                  sx={{ height: 140 }}
                  title={`movie ${a.title}`}
                  className='object-cover max-h-[150px]'
                />
                <CardContent>
                  <Typography variant='h6' className='text-base'>
                    {a.title}
                  </Typography>
                </CardContent>
              </Card>
            </Link>
          ))}
      </div>
    </section>
  );
}
