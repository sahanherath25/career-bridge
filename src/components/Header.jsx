// Header.js
import React from 'react';
import styled from 'styled-components';
import {motion} from 'framer-motion';
import {AiFillBug} from "react-icons/ai";
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {toggleSideBar} from "../features/toggle/toggleSlice.js";

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
    display: flex;
    align-items: center;
    justify-content: space-between;
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

    const sideBarStatus = useSelector((state) => {
        return state.toggle.showSideBar
    })

    const dispatch=useDispatch()

    const onClickHandler=()=>{

        console.log("TOGGLE STAUTS ",sideBarStatus);
        dispatch(toggleSideBar(!sideBarStatus))
    }

    return (
        <HeaderWrapper>
            <Link to={"/"}>
                <Logo
                    initial={{x: -50, opacity: 0}}
                    animate={{x: 0, opacity: 1}}
                    transition={{type: 'spring', stiffness: 100}}
                >
                    <AiFillBug/>
                    <span>  Career Build</span>
                </Logo>
            </Link>

            <button onClick={onClickHandler}>Collapse Side bar</button>


            <Nav>
                <NavLink
                    href="#home"
                    initial={{y: -20, opacity: 0}}
                    animate={{y: 0, opacity: 1}}
                    transition={{delay: 0.2}}
                >
                    Home
                </NavLink>
                <NavLink
                    href="#jobs"
                    initial={{y: -20, opacity: 0}}
                    animate={{y: 0, opacity: 1}}
                    transition={{delay: 0.3}}
                >
                    Jobs
                </NavLink>
                <NavLink
                    href="#about"
                    initial={{y: -20, opacity: 0}}
                    animate={{y: 0, opacity: 1}}
                    transition={{delay: 0.4}}
                >
                    About
                </NavLink>
                <NavLink
                    href="#contact"
                    initial={{y: -20, opacity: 0}}
                    animate={{y: 0, opacity: 1}}
                    transition={{delay: 0.5}}
                >
                    Contact
                </NavLink>
            </Nav>
        </HeaderWrapper>
    );
};

export default Header;
