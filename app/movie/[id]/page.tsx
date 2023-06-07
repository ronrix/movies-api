import { Dancing_Script } from "next/font/google";
import { movie_img_url, movie_url } from "@/app/config/config";
import Image from "next/image";
import RatingStar from "./components/rating";
import Main from "./main";
import clsx from "clsx";
import BackButton from "@/app/components/back";
import Recommendation from "./components/recommendation";

const font = Dancing_Script({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export default async function MoviePage({ params }: any) {
  const id = params.id; // get the slug id

  // fetching the movie details
  const data = await fetch(
    `${movie_url}/movie/${id}?api_key=${process.env.API_KEY}`
  );
  const res = await data.json();

  // fetching recommendations
  const recommendationsData = await fetch(
    `${movie_url}/movie/${res.id}/recommendations?api_key=${process.env.API_KEY}`
  );
  const recommendationResult = await recommendationsData.json();

  return (
    <main>
      <div className='m-5'>
        <BackButton />
      </div>
      <section className='flex flex-col md:flex-row items-center justify-center gap-5 mt-5 relative p-5'>
        <Image
          src={movie_img_url + "original/" + res.poster_path}
          width={300}
          height={300}
          className='mx-auto h-full object-fit flex-1 w-full'
          alt={`this is the thumbnail of the movie ${res.title}`}
        />
        <div className='flex-2'>
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
            rate={res.vote_average}
            id={res.id}
            status={res.status}
          />
        </div>
      </section>

      {/* recommendations */}
      <Recommendation data={recommendationResult.results} />
    </main>
  );
}
