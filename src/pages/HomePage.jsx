import React from 'react';
import styled from "styled-components";

import * as keyframes from "../styles/keyframes.js"
import ImagePicker from "../components/ImagePicker.jsx";
import IntroSection from "../components/IntroSection.jsx";

const LeftContainer = styled.div`
    grid-column: 1/7;
    max-width: 75%;
    margin: 0 auto;
    animation: ${keyframes.fadeInUp} 1s ease forwards;
`

const RightContainer = styled.div`
    grid-column: 7/13;
    animation: ${keyframes.fadeInUp} 1s ease forwards;
`

const Image = styled.img`
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
`

const StyledButton = styled.button`

    background-color: #b10101;
    color: #ffffff;
    padding: 0.75rem 1.75rem;
    border: none;
    border-radius: 999px;
    font-size: 1.1rem;
    font-weight: 600;
    cursor: pointer;
    margin-top: 1.5rem;
    transition: all 0.3s ease;
    box-shadow: 0 4px 15px rgba(177, 1, 1, 0.3);

    &:hover {
        background-color: #8e0000;
        transform: translateY(-3px) scale(1.03);
        box-shadow: 0 6px 20px rgba(177, 1, 1, 0.5);
    }

    &:active {
        transform: translateY(0) scale(1);
    }

`;

const H2 = styled.h2`
    margin-bottom: 16px;
    font-size: 2.2rem;
    font-weight: bold;
    color: #111827;
`


const P=styled.p`
    font-size: 1.05rem;
    line-height: 1.6;
    color: #374151;
    margin-bottom: 16px;
    
    
`

function HomePage() {
    return (
        <>
            <LeftContainer>
                <H2>Discover Jobs. Hire Talent. Build Careers.</H2>
                <P>
                    Welcome to <strong>JobPost</strong> – your all-in-one platform to connect job seekers with top
                    employers. Whether you're looking for your next career move or hiring the right talent, JobPost
                    simplifies the process with powerful tools and an intuitive experience. Explore thousands of job
                    listings, filter by industry, location, and skills, and apply in just a few clicks. Employers can
                    post jobs, manage applications, and find the perfect candidates quickly and efficiently. Join
                    JobPost today and take the next step in your hiring or job search journey.
                </P>

                <StyledButton>
                    Get Started
                </StyledButton>

                {/*<ImagePicker/>*/}


            </LeftContainer>

            <RightContainer>
                <Image
                    src="https://images.unsplash.com/photo-1635350736475-c8cef4b21906?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt=""/>
            </RightContainer>


        </>
    );
}


export default HomePage;