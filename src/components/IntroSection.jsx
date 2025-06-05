import React from 'react';
import styled from "styled-components";
import {FaArrowRight} from "react-icons/fa";


const StyledContainer = styled.div`

    margin-block-start: 100px;
    width: 100%;
    //display: grid;
    //grid-template-columns: repeat(2,minmax(0,1fr));
    border: 1px solid red;
    grid-column: 1/13;
    align-items: flex-start;
    position: relative;
    
    &>h1{
        text-align: center;
        font-size: 3rem;
        font-weight: bold;
        
        
    }
    
`

const StyledButton = styled.button`
    
    cursor: pointer;
    color: #ed1616;
    padding: 10px;
    font-size: 16px;
    display: block;
    //font-weight: 600;

    //position: absolute;
    //top: 50%;
    //right: 0;
`
const StyledLink = styled.a`
    display: inline-flex;
    align-items: center;
    gap: 0.4rem;
    color: #323131;
    text-decoration: none;

    &:hover {
        text-decoration: underline;
        color: orangered;
    }

    svg {
        transition: transform 0.2s;
    }

    &:hover svg {
        transform: translateX(4px);
    }
`;

const ColorBox=styled.div`

    padding:10px;
    margin-right: 10px;
    width: 20px;
    height: 20px;
    background-color: ${(props)=>props.color? `${props.color}`:"#000"};
    
    
`
const ColorBoxWrapper=styled.div`
    
    display: flex;
    margin-top: 20px;
    
    
`

const P=styled.p`

    position: absolute;
    top: -10px;
    left: -30px;
    padding: 20px;
    background-color: red;


`





function IntroSection() {

    return (
        <StyledContainer className={""}>

            <h1>Converse CHUCK TAYLOR ALL START LOW TOP</h1>

            <P>Sale</P>

            <div className="content-wrapper">

                <div className="img-wrapper">
                    <figure>
                        <img
                            width="350"
                            height={"300"}
                            src="https://plus.unsplash.com/premium_photo-1745616638280-305b6a90a25d?q=80&w=1995&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            alt=""/>
                    </figure>

                </div>

                <div className="text-wrapper">

                    <span>$65.00</span>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor, eum soluta? Architecto debitis
                        dolores eaque eius omnis optio quibusdam tenetur.</p>


                    <StyledLink href="">
                        More Information<FaArrowRight/>
                    </StyledLink>

                    <ColorBoxWrapper className="color-boxes">

                        <ColorBox color={"#323131"}/>
                        <ColorBox color={"#245bc5"}/>
                        <ColorBox color={"#ed1616"}/>
                        <ColorBox color={"#f3bd32"}/>
                        <ColorBox color={"#89c54e"}/>
                        <ColorBox color={"#704428"}/>

                    </ColorBoxWrapper>

                    <div className="wrapper-list">
                        <h2>Product Details</h2>
                        <ul>
                            <li>list-1</li>
                            <li>list-2</li>
                            <li>list-3</li>
                            <li>list-4</li>
                        </ul>
                    </div>





                </div>

                <StyledButton>ADD TO CART</StyledButton>

            </div>


        </StyledContainer>
    );
}

export default IntroSection;