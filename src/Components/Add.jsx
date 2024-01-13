import React, { useState } from 'react'
import Tooltip from '@mui/material/Tooltip';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import { styled, Typography, Avatar, Stack } from '@mui/material';
import TextField from '@mui/material/TextField';
import EmojiEmotionsRoundedIcon from '@mui/icons-material/EmojiEmotionsRounded';
import pranavCrop from "../images/pranavCrop.jpg";
import { Image, PersonAdd, VideoCameraBack } from '@mui/icons-material';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import DateRangeIcon from '@mui/icons-material/DateRange';

const StyledModal = styled(Modal) ({
    display:"flex",
    alignItems:"center",
    justifyContent:"center",
});

const UserBox = styled(Box) ({
    display:"flex",
    alignItems:"center",
    gap:"10px",
    marginBottom:"20px",
});


const Add = () => {
    const [open, setOpen] = useState(false);
  return (
    <>
      <Tooltip onClick = {e=>setOpen(true)} title="Add Post" sx={{position:"fixed", bottom:20, left:{xs:"calc(50% - 25px)", md:30}}}>
        <Fab color="primary" aria-label="add">
          <AddIcon />
        </Fab>
      </Tooltip>
      <StyledModal open={open} onClose= {e=>setOpen(false)} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
        <Box width={400} height={280} bgcolor={"background.default"} color={"text.primary"} p={3} borderRadius={5}>
           <Typography variant='h6' color="gray" textAlign="center">Create Post</Typography>
           <UserBox>
             <Avatar src={pranavCrop} sx={{width:30, height:30}} />
             <Typography fontWeight={500} variant='span'>pranav.sabnis</Typography>
           </UserBox>
           <TextField sx={{width:"100%"}} id="standard-multiline-static" multiline rows={3} placeholder="What's on your mind ?" variant="standard" />
           <Stack direction="row" gap={1} mt={2} mb={3}>
                <EmojiEmotionsRoundedIcon color='primary' />
                <Image color='secondary' />
                <VideoCameraBack color='success' />
                <PersonAdd color='primary' />
           </Stack>
           <ButtonGroup fullWidth variant="contained" aria-label="outlined primary button group">
            <Button>Post</Button>
            <Button sx={{width:"100px"}}>
                <DateRangeIcon />
            </Button>
           </ButtonGroup>
        </Box>
     </StyledModal>
    </>
  )
}

export default Add;