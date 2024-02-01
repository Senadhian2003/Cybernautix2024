// import React from 'react'
import * as React from 'react';
import  { useEffect, useState } from "react";

import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';

import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
export default function Navigation() {
  const [value, setValue] = React.useState(0);

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
    <div >
            {!isMobile ? (

        <Navbar expand="xxl"  variant="dark">
      <Container fluid>
        <Navbar.Brand  href="/contactus"><img className="hed-img hlogo" src="https://github.com/nitinmano/image-store/blob/main/CYBERNAUTIX.png?raw=true" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-xxl`}
              aria-labelledby={`offcanvasNavbarLabel-expand-xxl`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
              </Offcanvas.Header>
              <Offcanvas.Body>
        {/* <Navbar.Collapse id="basic-navbar-nav"> */}
          <Nav className="me-auto hc1">
            <Nav.Link href="/"><span className='hp1'>Home</span></Nav.Link>
            <Nav.Link href="/events"><span className='hp1'>Events</span></Nav.Link>
           
            <Nav.Link href="/contactus"><span className='hp1'>Contact</span></Nav.Link>
            <Nav.Link href="/bus"><span className='hp1'>Bus</span></Nav.Link>
            <Nav.Link href="/register"><span className='hp1'>Register</span></Nav.Link>
            <Nav.Link href="/login"><span className='hp1'>Login</span></Nav.Link>

          </Nav>
          </Offcanvas.Body>
          </Navbar.Offcanvas>

        {/* </Navbar.Collapse> */}
      </Container>
    </Navbar>) : (<></>)}


        
       </div>
  )
}
