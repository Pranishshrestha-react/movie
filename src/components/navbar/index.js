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
  
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  
} from 'reactstrap';

import Genre from '../dropdown';

const NavBar = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
 

  return (
    <div>
      <Navbar dark expand="md" fixed="top" style={{background:'transparent'}}>
          <div class="container-fluid">
        <NavbarBrand> <Link to ="/" style={{color:'#c0c0c0'}}>DUDE-MOVIES</Link></NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink><Link to ="/all_pmovies" style={{color:'#c0c0c0'}}>Movies </Link></NavLink>
            </NavItem>
            <NavItem>
              <NavLink><Link to ="/all_series" style={{color:'#c0c0c0'}}>TV Series</Link></NavLink>
            </NavItem>
           <Genre />
           <NavItem>
              <NavLink><Link to ="/blank_test" style={{color:'#c0c0c0'}}>Blank</Link></NavLink>
            </NavItem>
          </Nav>
            <UncontrolledDropdown>
              <DropdownToggle nav caret style={{color:'#c0c0c0'}}>
                API USED 
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                 <a target="#" href="https://developers.themoviedb.org/3/trending/get-trending"style={{color:'#000'}}>List of Movies</a>
                </DropdownItem>
                <DropdownItem>
                <a target="#" href="https://developers.themoviedb.org/3/movies/get-latest-movie" style={{color:'#000'}}>Latest Movies</a>
                </DropdownItem>
                <DropdownItem>
                <a target="#" href="https://developers.themoviedb.org/3/movies/get-now-playing" style={{color:'#000'}}>NowPlaying Movies</a>
                </DropdownItem>
                <DropdownItem>
                <a target="#" href="https://developers.themoviedb.org/3/movies/get-upcoming" style={{color:'#000'}}>Upcoming Movies</a>
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          
        </Collapse>
        </div>
      </Navbar>
      
    </div>
  );
}

export default NavBar;