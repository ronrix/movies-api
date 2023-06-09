import Footer from "./components/footer";
import Header from "./components/header";
import NowPlaying from "./components/now-playing";
import Popular from "./components/popular";
import TopRated from "./components/top-rated";
import { movie_url } from "./config/config";

export default async function Home() {
  const popular: any = await getData();
  const nowPlaying: any = await getNowPlaying();
  const topRated: any = await getTopRated();
  return (
    <>
      <Header />
      <Popular popular={popular.results} />
      <TopRated topRated={topRated.results} />
      <NowPlaying nowPlaying={nowPlaying.results} />
      <Footer />
    </>
  );
}

/*
 * this needs to be separated from the server component, since server component can't have async await in it
 */
async function getData() {
  const res = await fetch(
    `${movie_url}/movie/popular?api_key=${process.env.API_KEY}`
  );

  // handle errors
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

async function getNowPlaying() {
  const res = await fetch(
    `${movie_url}/movie/now_playing?api_key=${process.env.API_KEY}`
  );
  // handle errors
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

async function getTopRated() {
  const res = await fetch(
    `${movie_url}/movie/top_rated?api_key=${process.env.API_KEY}`
  );
  // handle errors
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}
