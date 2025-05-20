// Footer.js
import React from 'react';
import styled from 'styled-components';

const FooterWrapper = styled.footer`
  background-color: #111827;
  color: #d1d5db;
  padding: 2rem;
  text-align: center;
  margin-top: 4rem;
`;

const FooterText = styled.p`
  font-size: 0.95rem;
  margin: 0.5rem 0;
`;

const Footer = () => {
    return (
        <FooterWrapper>
            <FooterText>&copy; {new Date().getFullYear()} JobPost. All rights reserved.</FooterText>
            <FooterText>Designed with ❤️ to connect talents with opportunities.</FooterText>
        </FooterWrapper>
    );
};

export default Footer;
