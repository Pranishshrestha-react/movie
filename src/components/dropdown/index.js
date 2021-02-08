import React from 'react';

import {
    
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
   
  } from 'reactstrap';
  


const Genre = ({listG}) => {
    return (
        <div>
        <UncontrolledDropdown >
              <DropdownToggle nav caret style={{color:'#c0c0c0'}}>
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
            
            </div>
        )
    }


export default Genre;