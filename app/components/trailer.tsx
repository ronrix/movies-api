"use client";
import { Modal, Box, Typography } from "@mui/material";

type Props = {
  open: boolean;
  handleClose: () => void;
  youtubeId: string;
};
const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "#032541",
  border: "1px solid #000",
  boxShadow: 24,
};

export default function Trailer({ open, handleClose, youtubeId }: Props) {
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby='modal-modal-title'
      aria-describedby='modal-modal-description'
    >
      <Box sx={style} className='w-full sm:w-[800px]'>
        <iframe
          height='500'
          src={`https://www.youtube.com/embed/${youtubeId}`}
          className='w-full'
          allowFullScreen
          frameBorder={0}
        ></iframe>
      </Box>
    </Modal>
  );
}
