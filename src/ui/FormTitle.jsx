import React from 'react';
import styled from "styled-components";

const Title = styled.h2`
  text-align: center;
  margin-bottom: 2.5rem;
  color: #1e3a8a;
  font-size: 2.4rem;
  font-weight: 700;
  letter-spacing: 1px;
  border-bottom: 2px solid #2563eb;
  padding-bottom: 0.8rem;
  max-width: 200px;
  margin-left: auto;
  margin-right: auto;
`;

function FormTitle({children}) {
 return (
  <Title>
      {children}
  </Title>
 );}

export default FormTitle;