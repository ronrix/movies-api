import Image from "next/image";
import Trending from "./components/trending";

export default function Home() {
  return (
    <main className='min-h-screen flex flex-col items-center'>
      <section
        className={`flex flex-col items-center justify-center gap-2 relative w-full h-[500px]`}
      >
        <div
          className={`absolute top-0 bottom-0 left-0 right-0 flex flex-col items-center justify-center gap-2 bg-[url(/bg-hero.gif)] bg-no-repeat bg-cover p-5 w-full h-[500px] opacity-20`}
        ></div>
        <h3 className='rounded-full px-3 py-1 bg-black text-white font-medium inline-block text-sm z-10'>
          movies
        </h3>
        <h1 className='text-5xl font-bold bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent z-10'>
          Lists of Movies
        </h1>
        <h2 className='text-center text-sm text-gray-700 w-3/4 z-10'>
          Find the latest and greatest movies and shows all available on all
          over the world. From award-winning hits to independent releases
        </h2>

        {/* search */}
        <form action='' className='z-10 mt-10'>
          <input
            type='text'
            placeholder='Search Movies'
            className='border rounded-full p-2 border-black placeholder:text-gray-700 bg-transparent outline-black'
          />
          <button
            type='submit'
            className='border rounded-full border-black p-2 px-3 ml-2 bg-primary text-white outline-black'
          >
            <i className='fa-solid fa-magnifying-glass'></i>
          </button>
        </form>
      </section>

      <Trending />
    </main>
  );
}
