import React from 'react'
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Checkbox from '@mui/material/Checkbox';
import nature from "../images/nature.jpg";
import { Favorite, FavoriteBorder, Share } from '@mui/icons-material';

const Post = () => {
  return (
    <Card sx={{margin:5}}>
    <CardHeader
      avatar={
        <Avatar sx={{ bgcolor: "purple" }} aria-label="pranav">
          P
        </Avatar>
      }
      action={
        <IconButton aria-label="settings">
          <MoreVertIcon />
        </IconButton>
      }
      title="pranav.sabnis"
      subheader="August 18, 2023"
    />
    <CardMedia
      component="img"
      height="20%"
      image={nature}
      alt="pranavsabnis"
    />
    <CardContent>
      <Typography variant="body2" color="text.secondary">
         Nature photography is a genre of photography that focuses on elements of the outdoors. It can include landscapes, wildlife, plants, and close-ups of natural scenes and textures.
      </Typography>
    </CardContent>
    <CardActions disableSpacing>
      <IconButton aria-label="add to favorites">
       <Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite sx={{color:"red"}} />} />
      </IconButton>
      <IconButton aria-label="share">
        <Share />
      </IconButton>
    </CardActions>
  </Card>
  )
}

export default Post;