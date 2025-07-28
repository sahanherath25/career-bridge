import React from 'react';
import styled from "styled-components";
import {Outlet} from "react-router-dom";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";

const StyledAppLayout=styled.div`
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    //background-color: red;
`


const Main=styled.div`
    width: 100%;
    flex-grow: 1;
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    //justify-items: center;
    //align-items: center;
    
    //justify-content: center;
    //align-content: center; 
`

function AppLayout() {

 return (
  <StyledAppLayout>

      <Header/>
      <Main>
          <Outlet/>
      </Main>
      {/*<Footer/>*/}

  </StyledAppLayout>
 );}

export default AppLayout;