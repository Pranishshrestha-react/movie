import React from 'react';

import {
    
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
   
  } from 'reactstrap';
  


const DropDown = ({genres}) =>{
    return (
        <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
               Genre
              </DropdownToggle>
                <DropdownMenu right>
                        <DropdownItem>
                            Comedy
                        </DropdownItem>
                        <DropdownItem>
                            Thriller
                        </DropdownItem>
                        <DropdownItem>
                            Drama
                        </DropdownItem>
                        <DropdownItem>
                            Documentary
                        </DropdownItem>
                  </DropdownMenu>
              
            </UncontrolledDropdown>
        )
    }


export default DropDown;