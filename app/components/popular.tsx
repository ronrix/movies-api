"use client";
import Trending from "./trending";
import { styled } from "@mui/material/styles";
import { Box, Button, TextField, Typography } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const SearchButton = styled(Button)({
  backgroundColor: "#032541 !important",
  color: "#fff",
});
const HeroImage = styled("div")({
  backgroundImage: `linear-gradient(to right, rgba(8, 27, 151, 0.8) 0%, rgba(8, 27, 151, 0) 100%), url('https://www.themoviedb.org/t/p/w1920_and_h600_multi_faces_filter(duotone,00192f,00baff)/ym1dxyOk4jFcSl4Q2zmRrA5BEEN.jpg')`,
  backgroundPosition: "center",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  position: "absolute",
  top: 0,
  bottom: 0,
  right: 0,
  left: 0,
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  gap: 2,
  width: "100%",
  height: "500px",
});

type Props = {
  popular: Array<any>;
};
export default function Popular({ popular }: Props) {
  return (
    <main className='min-h-screen flex flex-col items-center'>
      <section
        className={`flex flex-col items-center justify-center gap-2 relative w-full h-[500px]`}
      >
        {/* background */}
        <HeroImage />
        <h3 className='rounded-full px-3 py-1 bg-black text-white font-medium inline-block text-sm z-10'>
          movies
        </h3>
        <h2 className='text-5xl font-bold z-10 text-white'>Lists of Movies</h2>
        <Typography
          variant='h5'
          className='text-center text-white z-10 text-sm'
        >
          Find the latest and greatest movies and shows all available on all
          over the world. From award-winning hits to independent releases
        </Typography>

        {/* search */}
        <form action='' className='z-10 mt-10 flex gap-2'>
          <Box
            sx={{
              width: 500,
              maxWidth: "100%",
            }}
          >
            <TextField
              fullWidth
              variant='filled'
              className='bg-white'
              label='Search'
              id='search'
            />
          </Box>
          <SearchButton
            type='submit'
            // variant='contained'
            endIcon={<SearchIcon />}
            arial-label='search button'
          >
            Search
          </SearchButton>
        </form>
      </section>

      <Trending popular={popular} />
    </main>
  );
}
