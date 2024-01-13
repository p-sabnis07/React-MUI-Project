import styled from '@emotion/styled';
import { AppBar, Avatar, Badge, Box, InputBase, Menu, MenuItem, Toolbar, Typography } from '@mui/material';
import Divider from '@mui/material/Divider';
import HomeIcon from '@mui/icons-material/Home';
import React, { useState } from 'react'
import { Mail, Notifications } from '@mui/icons-material';
import pranavCrop from "../images/pranavCrop.jpg";


const StyledToolbar = styled(Toolbar) ({
    display:"flex",
    justifyContent:"space-between",
});

const Search = styled("div") (({theme}) => ({
    backgroundColor:"white",
    padding:"0 10px",
    width:"40%",
}));

const Icons = styled(Box) (({theme}) => ({
    // If its smaller than this below breakpoint that is 600px then,
    display: "none",
    alignItems:"center",
    gap:"20px",
    // If its bigger than small then,
    [theme.breakpoints.up("sm")]: {
      display:"flex",
    }
}));

// For Mobile Responsiveness
const UserBox = styled(Box) (({theme}) => ({
  // If its smaller than this below breakpoint that is 600px then,
  display: "flex",
  alignItems:"center",
  gap:"10px",
  // If its bigger than small then,
  [theme.breakpoints.up("sm")]: {
    display:"none",
  }
}));

const Navbar = () => {
  // This useState hook for the opening the menu or managing the states of menu
  const [open, setOpen] = useState(false);
  return (
    <AppBar position='sticky'>
        <StyledToolbar>
            <Typography variant='h6' sx={{ display: {xs:"none", sm:"block" }}}>
                pranav.sabnis
            </Typography>
            <HomeIcon sx={{ display: {xs:"block", sm:"none" }}} />
            <Search><InputBase placeholder='Search' /></Search>
            <Icons>
              <Badge badgeContent={4} color="error">
                 <Mail color="action" />
              </Badge>
              <Badge badgeContent={2} color="error">
                <Notifications />
              </Badge>
              {/* When we click on the Avatar the menu opens. We are handling the above state here */}
              <Avatar src={pranavCrop} sx={{width:30, height:30}} onClick = {e=>setOpen(true)} />
            </Icons>
            {/* This below UserBox is for mobile responsiveness */}
            <UserBox onClick = {e=>setOpen(true)}>
            <Avatar src={pranavCrop} sx={{width:30, height:30}} />
            <Typography variant='span'>Pranav</Typography>
            </UserBox>
        </StyledToolbar>
        <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        open={open}
        onClick={e=>setOpen(false)}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <MenuItem>Profile</MenuItem>
        <MenuItem>My account</MenuItem>
        <MenuItem>Logout</MenuItem>
      </Menu>
      <Divider sx={{bgcolor:"red"}}/>
    </AppBar>
  )
};

export default Navbar;