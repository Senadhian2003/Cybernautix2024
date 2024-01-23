// import React from 'react'
import * as React from 'react';
import  { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./navbar.css";
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import HomeIcon from '@mui/icons-material/Home';
import DirectionsBusFilledIcon from '@mui/icons-material/DirectionsBusFilled';import { Link } from "react-router-dom";
import Paper from '@mui/material/Paper';
import ContactPageIcon from '@mui/icons-material/ContactPage';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import HowToRegIcon from '@mui/icons-material/HowToReg';

export default function Mob() {
  const [value, setValue] = React.useState(-1);

  const [windowDimension, setWindowDimension] = useState(null);

  useEffect(() => {
    setWindowDimension(window.innerWidth);
  }, []);

  useEffect(() => {
    function handleResize() {
      setWindowDimension(window.innerWidth);
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  const isMobile = windowDimension <= 640;

  return (
    <div class="">
            {!isMobile ? (<></>) : (
          <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={0}>
          <Box sx={{ width: 400 }}>
          <BottomNavigation
            showLabels
            value={value}
            // onChange={(event, newValue) => {
            //   setValue(newValue);
            // }}
          >

            <BottomNavigationAction label="Home" icon={<HomeIcon />} component={Link} to="/" />            
            <BottomNavigationAction label="Contact" icon={<ContactPageIcon />} component={Link} to="/contactus" />
            <BottomNavigationAction label="Events" icon={<EmojiEventsIcon />} component={Link} to="/events" />
            <BottomNavigationAction label="Register" icon={<HowToRegIcon />} component={Link} to="/register"/>
            <BottomNavigationAction label="Bus Route" icon={<DirectionsBusFilledIcon />} component={Link} to="/bus"/>

          </BottomNavigation>

        </Box>
        </Paper>
        
        )}


        
       </div>
  )
}
