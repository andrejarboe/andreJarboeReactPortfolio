import React from 'react';
// import { Link } from 'react-router-dom';
import {Navbar, NavItem} from 'react-materialize';

const Nav = props => 
  <Navbar brand='Andre Jarboe II' right>
    <NavItem>Home</NavItem>
    <NavItem>Projects</NavItem>
    <NavItem href='/blog'>Blog</NavItem>
    <NavItem>About</NavItem>
    <NavItem>Contact</NavItem>    
  </Navbar>


export default Nav;
