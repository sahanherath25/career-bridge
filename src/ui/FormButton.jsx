import React from 'react';
import styled from "styled-components";

// Button
export const Button = styled.button`
    width: 100%;
    padding: 0.75rem;
    background-color: ${(props)=>props.color? props.color: "#FFF5E4"};
    color: fff;
    border: none;
    border-radius: 0.6rem;
    font-weight: 600;
    font-size: 1rem;
    cursor: pointer;
    transition: background-color 0.2s;
    margin-block-start: 10px;
 

    &:hover {
        background-color: #D3E671;
    }
`;

function FormButton({children,...props}) {
 return (
  <Button {...props}>
      {children}
  </Button>
 );
}

export default FormButton;