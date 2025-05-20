import React from 'react';
import styled, {keyframes} from "styled-components";

// Focus ring animation
const pulseFocus = keyframes`
  0% {
    box-shadow: 0 0 0 0 rgba(37, 99, 235, 0.4);
  }
  100% {
    box-shadow: 0 0 0 6px rgba(37, 99, 235, 0);
  }
`;

// Input

const Input = styled.input`
  width: 100%;
  padding: 0.75rem 1rem;
  border: 1px solid #d1d5db;
  border-radius: 0.6rem;
  font-size: 1rem;
  font-weight: 500;
  background-color: #f9fafb;
  color: #111827;
  margin-bottom: 0.5rem;
  transition: all 0.3s ease;
  
  &:hover {
    border-color: #93c5fd;
    background-color: #f3f4f6;
  }

  &:focus {
    border-color: #2563eb;
    background-color: #fff;
    outline: none;
    animation: ${pulseFocus} 0.4s ease-out;
    box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.3);
  }

  &::placeholder {
    color: #9ca3af;
    transition: color 0.2s ease;
  }

  &:focus::placeholder {
    color: transparent;
  }
`;


const FormInput = React.forwardRef((props, ref) => {
 return <Input ref={ref} {...props} />;
});

export default FormInput;