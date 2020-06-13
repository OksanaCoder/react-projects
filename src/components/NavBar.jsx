import React, { Component } from 'react';
import { Nav, Navbar, Button, FormControl, Form} from 'react-bootstrap';
import { Link } from 'react-router-dom';
const NavBar = () => {
    return(
        <>
  <Navbar bg="dark" variant="dark">
    <Navbar.Brand href="#home">Test</Navbar.Brand>
    <Nav className="mr-auto">
      <Link to='/main' className='links'>Current</Link>
      <Link to='/timer' className='links'>Timer</Link>
     
    </Nav>
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-info">Search</Button>
    </Form>
  </Navbar>
  
</>
    )
}

export default NavBar;