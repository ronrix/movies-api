import { Typography } from "@mui/material";

type Props = {
  rate: number;
  size: number;
};
export default function RateCircle({ rate, size }: Props) {
  const rating = 62.84 - (rate / 100) * 62.84;
  return (
    <div
      className={`bg-primary rounded-full flex items-center justify-center relative`}
      style={{ width: size + "px", height: size + "px" }}
    >
      <Typography component='p' className='text-white flex text-sm'>
        {rate.toFixed(1)}
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
  );
}
