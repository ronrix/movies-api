"use client";
import { Modal, Box, Typography } from "@mui/material";

type Props = {
  open: boolean;
  handleClose: () => void;
  title: string;
  youtubeId: string;
};
const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 700,
  bgcolor: "#032541",
  border: "1px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function Trailer({
  open,
  handleClose,
  title,
  youtubeId,
}: Props) {
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby='modal-modal-title'
      aria-describedby='modal-modal-description'
    >
      <Box sx={style}>
        <iframe
          height='315'
          src={`https://www.youtube.com/embed/${youtubeId}`}
          className='w-full'
          allowFullScreen
          frameBorder={0}
        ></iframe>
        <Typography variant='h6' component='h3' className='text-white'>
          {title}
        </Typography>
      </Box>
    </Modal>
  );
}
