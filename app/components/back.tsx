"use client";
import { Button } from "@mui/material";
import { useRouter } from "next/navigation"; // before 'next/router'

export default function BackButton() {
  const router = useRouter();
  return (
    <Button
      onClick={() => router.back()}
      type='button'
      variant='outlined'
      aria-label='back button'
      size='small'
    >
      Back
    </Button>
  );
}
