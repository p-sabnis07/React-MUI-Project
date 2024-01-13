import { Box, Typography } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import pranavCrop from "../images/pranavCrop.jpg";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import React from 'react'

const Rightbar = () => {
  return (
    <Box flex={2} p={2} sx={{display: { xs:"none", sm: "block" } }}>
        <Box position="fixed" width={300}>
          <Typography variant='h6' sx={{textAlign:"center"}}>Friends</Typography>
          <AvatarGroup max={4}>
            <Avatar alt="Krishna" src={pranavCrop} />
            <Avatar alt="Nana Devne" src={pranavCrop} />
            <Avatar alt="Yash Deshpande" src={pranavCrop} />
            <Avatar alt="Mohini Shinde" src={pranavCrop} />
            <Avatar alt="Prathamesh Sabnis" src={pranavCrop} />
          </AvatarGroup>
          <Typography variant='h6' mt={2} mb={2} sx={{textAlign:"center"}}>Latest Posts</Typography>
          <ImageList cols={3} rowHeight={100} gap={5}>
            <ImageListItem>
                <img src={pranavCrop} alt='' />
            </ImageListItem>
            <ImageListItem>
                <img src={pranavCrop} alt='' />
            </ImageListItem>
            <ImageListItem>
                <img src={pranavCrop} alt='' />
            </ImageListItem>
          </ImageList>
          <Typography variant='h6' mt={2} sx={{textAlign:"center"}}>Latest Conversations</Typography>
          <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
          <ListItem alignItems="flex-start">
          <ListItemAvatar>
            <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
          </ListItemAvatar>
          <ListItemText
          primary="Brunch this weekend?"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                Ali Connors
              </Typography>
              {" — I'll be in your neighborhood doing errands this…"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Summer BBQ"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                to Scott, Alex, Jennifer
              </Typography>
              {" — Wish I could come, but I'm out of town this…"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
    </List>
        </Box>
    </Box>
  )
}

export default Rightbar;