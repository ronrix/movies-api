"use client";
import { useEffect, useState } from "react";
import { options } from "../config/config";
import VerticalCard from "./vertical-card";

export default function Trending() {
  const [latest, setLatest] = useState<any>();

  useEffect(() => {
    fetchLatests();
  }, []);

  const fetchLatests = async () => {
    try {
      const response = await fetch(
        "https://api.themoviedb.org/3/tv/latest",
        options
      );
      const data = response.json();

      //   set the data to the state variable
      setLatest(data);
      console.log(data);
    } catch (error) {
      console.log("Error fetching data: " + error);
    }
  };

  return (
    <section className='mt-10 w-full container mx-auto'>
      <div className='flex gap-2'>
        <h3 className='font-bold text-2xl'>Latest</h3>

        <div className='flex items-center border border-black rounded-full gap-3 p-0 m-0 font-bold'>
          <div className='bg-primary rounded-full px-3 m-0'>
            <span className='bg-gradient-to-r from-[#16CCBA] to-blue-500 bg-clip-text text-transparent'>
              Today
            </span>
          </div>
          <span className='pr-3'>This Week</span>
        </div>
      </div>

      {/* latests movies - cards */}
      <div className='mt-5 flex items-center gap-5'>
        {Array.from([0, 0, 0]).map((a, id) => {
          return <VerticalCard key={id} />;
        })}
      </div>
    </section>
  );
}
