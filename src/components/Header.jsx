// Header.js
import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const HeaderWrapper = styled.header`
  background-color: #ffffff;
  padding: 1.5rem 2rem;
  border-bottom: 1px solid #e5e7eb;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
  position: sticky;
  top: 0;
  z-index: 1000;
`;

const Logo = styled(motion.h1)`
  font-size: 1.75rem;
  font-weight: 700;
  color: #b10101;
`;

const Nav = styled.nav`
  display: flex;
  gap: 1.5rem;
`;

const NavLink = styled(motion.a)`
  text-decoration: none;
  color: #374151;
  font-weight: 500;
  transition: color 0.3s ease;

  &:hover {
    color: #b10101;
  }
`;

const Header = () => {
    return (
        <HeaderWrapper>
            <Logo
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ type: 'spring', stiffness: 100 }}
            >
                Career Build
            </Logo>
            <Nav>
                <NavLink
                    href="#home"
                    initial={{ y: -20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2 }}
                >
                    Home
                </NavLink>
                <NavLink
                    href="#jobs"
                    initial={{ y: -20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.3 }}
                >
                    Jobs
                </NavLink>
                <NavLink
                    href="#about"
                    initial={{ y: -20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.4 }}
                >
                    About
                </NavLink>
                <NavLink
                    href="#contact"
                    initial={{ y: -20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.5 }}
                >
                    Contact
                </NavLink>
            </Nav>
        </HeaderWrapper>
    );
};

export default Header;
