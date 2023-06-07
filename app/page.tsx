import Footer from "./components/footer";
import Header from "./components/header";
import Main from "./components/main";

export default async function Home() {
  const popular: any = await getData();
  console.log(popular.results);
  return (
    <>
      <Header />
      <Main popular={popular.results} />
      <Footer />
    </>
  );
}

/*
 * this needs to be separated from the server component, since server component can't have async await in it
 */
async function getData() {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.API_KEY}`
  );

  // handle errors
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}
