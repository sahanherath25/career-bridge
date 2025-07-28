import React from 'react';
import styled from "styled-components";


const StyledSideBar=styled.aside`

    width: 100%;
    grid-column: 1/3;
    background: #d54141;
    
    @media  screen and  (min-width: 768px) {
        display: none;
    }
    
`

function MobileSideBar() {

 return (
 
        <StyledSideBar>
            <h1>Mobile Sidebar</h1>
        </StyledSideBar>
   )
 
}

export default MobileSideBar;