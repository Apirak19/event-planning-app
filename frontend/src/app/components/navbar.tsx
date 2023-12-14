"use client"
import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

export const NavTab:React.FC = () => {
  return (
   <Navbar expand="lg" className="">
     <Container className='flex justify-start items-center w-screen bg-slate-700 p-3 h-[60px]'>
       <Navbar.Brand href="/" className='text-white text-4xl font-semibold ml-5'>Event-Planner</Navbar.Brand>
       <Navbar.Toggle aria-controls="basic-navbar-nav" className='bg-yellow-300'/>
       <Navbar.Collapse id="basic-navbar-nav" className='ml-12'>
         <Nav className="flex items-center gap-3">
           <Nav.Link href="/calendar" className='text-white text-2xl'>Calendar</Nav.Link>
           <Nav.Link href="#link" className='text-white text-2xl'>Link</Nav.Link>
            <Nav.Link href="/profile" className='text-white text-2xl'>Profile</Nav.Link>
            <Nav.Link href="/api/auth/login" className='text-white text-2xl'>Login</Nav.Link>
            <Nav.Link href="/api/auth/logout" className='text-white text-2xl'>Log out</Nav.Link>
          </Nav>
          
       </Navbar.Collapse>
     </Container>
   </Navbar>
 );
};