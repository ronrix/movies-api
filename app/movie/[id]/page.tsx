import { Dancing_Script } from "next/font/google";
import { movie_img_url } from "@/app/config/config";
import Image from "next/image";
import RatingStar from "./components/rating";
import Main from "./main";
import clsx from "clsx";
import BackButton from "@/app/components/back";

const font = Dancing_Script({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export default async function MoviePage({ params }: any) {
  const id = params.id; // get the slug id
  const data = await fetch(
    `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.API_KEY}`
  );
  const res = await data.json();
  console.log(res);
  return (
    <main className='p-5'>
      <BackButton />
      <section className='flex flex-col md:flex-row items-center justify-center gap-5 mt-10 relative p-5'>
        <Image
          src={movie_img_url + "original/" + res.poster_path}
          width={300}
          height={300}
          className='mx-auto'
          alt={`this is the thumbnail of the movie ${res.title}`}
        />
        <div>
          <h1 className='font-bold text-5xl'>{res.original_title}</h1>
          <div className='text-lg flex items-center gap-5'>
            <h3>{res.release_date}</h3>
            {res.genres.map((a: any) => (
              <p key={a.id}>{a.name} , </p>
            ))}
          </div>
          <RatingStar rate={Math.floor((res.vote_average * 10) / 20)} />
          <h2 className={clsx("text-2xl", font.className)}>{res.tagline}</h2>
          <Main
            overview={res.overview}
            production_companies={res.production_companies}
            url={res.poster_path}
          />
        </div>
      </section>
    </main>
  );
}
