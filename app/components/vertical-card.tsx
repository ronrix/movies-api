import Image from "next/image";

export default function VerticalCard() {
  return (
    <div className='w-[150px]'>
      <div className='relative'>
        <Image
          src='https://www.themoviedb.org/t/p/w220_and_h330_face/8Vt6mWEReuy4Of61Lnj5Xj704m8.jpg'
          alt='movie thumbnail'
          className='w-full rounded-xl'
          width='100'
          height='100'
        />
        {/* rating */}
        <div className='absolute -bottom-5 left-2'>
          <div className='w-[50px] h-[50px] bg-primary rounded-full flex items-center justify-center relative'>
            <p className='p-0 m-0 text-white font-bold'>88</p>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 24 24'
              className='absolute top-0 left-0 w-full h-full'
            >
              <defs>
                <linearGradient id='gradient' x1='0%' y1='0%' x2='100%' y2='0%'>
                  <stop offset='0%' stop-color='#16CCBA' />
                  <stop offset='100%' stop-color='#07B4E2' />
                </linearGradient>
              </defs>
              <circle
                cx='12'
                cy='12'
                r='10'
                fill='none'
                style={{ stroke: "url(#gradient)" }}
                stroke-width='2'
                strokeDasharray={50}
              />
            </svg>
          </div>
        </div>
      </div>

      {/* info */}
      <h3 className='font-bold text-lg mt-7'>
        Spider Man: Across the Spider-Verse
      </h3>
      <p className='text-gray-700 text-sm'>June 3, 2023</p>
    </div>
  );
}
