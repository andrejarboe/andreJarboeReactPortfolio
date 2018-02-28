import React from 'react';
// import { Link } from 'react-router-dom';
import {Navbar, NavItem} from 'react-materialize';

const Nav = props => 
  <Navbar brand='Andre Jarboe II' right>
    <NavItem href='/'>Home</NavItem>
    <NavItem href='/projects'>Projects</NavItem>
    <NavItem href='/blog'>Blog</NavItem>
    <NavItem href='/about'>About</NavItem>
    <NavItem href='/contact'>Contact</NavItem>    
  </Navbar>


export default Nav;
