// import React from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import  {FaHome}  from 'react-icons/fa';
import  {FaHeart}  from 'react-icons/fa';
import  {FaToggleOn}  from 'react-icons/fa';
import { BiFontSize, BiWorld } from "react-icons/bi";
import SearchComponent from './SeachComponent';
import { useAppSelector } from '../app/hooks';
import { CountryT } from '../types/CountryTypes';


const MyNavbar = () => {

   const {favorites} = useAppSelector((state)=> state.countriesR);
 let favoriteCount = favorites.length;
  //  console.log(favoriteCount);
    return (
    <Navbar bg="light" expand="lg">
      <Container fluid>
          <Link to='/'>    
          <Navbar.Brand  href="#"><FaHome /></Navbar.Brand>
        </Link>
        <Link to='/'> 
        <Navbar.Brand href="#"><BiWorld /></Navbar.Brand>
        </Link>
        
          <Link to='/favorites'>
        <Navbar.Brand href="#"><FaHeart /></Navbar.Brand>
        </Link>
        <p style={{marginLeft:"-15px", marginRight:'10px', marginBottom:"-18px", 
        fontWeight:"bold", fontSize:"15px"}}>{favoriteCount}</p>
        <Navbar.Brand href="#"><FaToggleOn /></Navbar.Brand>
        {/* <Navbar.Toggle aria-controls="navbarScroll" /> */}
        <Form>
        <Form.Check
        type="switch"
        id="custom-switch"
               />
        </Form>
           <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
           </Nav>
           <SearchComponent />
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
  }
export default MyNavbar