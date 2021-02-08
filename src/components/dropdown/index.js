import React from 'react';

import {
    
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
   
  } from 'reactstrap';
  


const Genre = ({listG}) => {
    return (
        <UncontrolledDropdown >
              <DropdownToggle nav caret style={{color:'#c0c0c0'}}>
               Genre
              </DropdownToggle>
                <DropdownMenu right>
                        <DropdownItem>
                           {listG.id}
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


export default Genre;