"use client";
import { Rating } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";

type Props = {
  rate: number;
};
export default function RatingStar({ rate }: Props) {
  return (
    <Rating
      name='hover-feedback'
      value={rate}
      precision={0.5}
      emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize='inherit' />}
    />
  );
}
