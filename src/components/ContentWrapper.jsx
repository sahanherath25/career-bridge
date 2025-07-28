import React from 'react';
import styled from "styled-components";


const StyledContainer = styled.div`
    //width: 100%;
    grid-column: 3/13;
    background-color: #6c757d;
    align-items: center;

`


function ContentWrapper() {

    return (

        <StyledContainer>
            <h1>Admin Cotent</h1>
            <p>Lorem ipsum dolor sit amet, consectetur aendis rem.</p>
            <h3>FUcking </h3>
        </StyledContainer>
    )

}

export default ContentWrapper;