import React from 'react';
import styled, {keyframes} from "styled-components";

const StyledFormRow = styled.div`
    min-height: 4.5rem;
    display: flex;
    flex-direction: column;
    margin-block: 1px;
   
`


const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(6px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const StyledError = styled.span`
  font-size: 0.875rem; /* Slightly smaller and consistent */
  color: #dc2626; /* Tailwind's red-600 for accessibility */
  font-weight: 500;
  animation: ${fadeInUp} 0.3s ease-out;
    font-family: "Montserrat", sans-serif;
  /* Optional: make error stand out with icon or border */
  padding-left: 0.5rem;
    
  
`;

// Label
export const Label = styled.label`
    display: block;
    margin-bottom: 0.5rem;
    color: #1f2937;
    font-weight: 500;
`;


function FormRow({children, error, label}) {
    return (
        <StyledFormRow>
            {label && <Label style={{marginBlock:"5px",fontFamily:"Montserrat"}} htmlFor={children.props.id}>{label}</Label>}
            {children}
            {error && <StyledError>{error}</StyledError>}
        </StyledFormRow>
    );
}

export default FormRow;