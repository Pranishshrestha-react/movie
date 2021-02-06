import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink, 
  NavbarText
} from 'reactstrap';

import Genre from '../dropdown/genre.js';

const NavBar = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="dark" dark expand="md">
          <div class="container-fluid">
        <NavbarBrand> <Link to ="/" style={{color:'#c0c0c0'}}>DUDE-MOVIES</Link></NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink><Link to ="/all_pmovies" style={{color:'#c0c0c0'}}>Movies </Link></NavLink>
            </NavItem>
            <NavItem>
              <NavLink><Link to ="/all_tmovies" style={{color:'#c0c0c0'}}>TV Series</Link></NavLink>
            </NavItem>
           <Genre />
          </Nav>
          <NavbarText><Link to ="/all_tmovies" style={{color:'#c0c0c0'}}>Used API</Link></NavbarText>
        </Collapse>
        </div>
      </Navbar>
      
    </div>
  );
}

export default NavBar;