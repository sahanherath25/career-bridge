import React from 'react';
import styled from "styled-components";
import {useSelector} from "react-redux";

const StyledMobileSideBar = styled.aside`
    width: 100%;
    grid-column: 1/3;
    background: #d54141;
    display: none;

    @media screen and (min-width: 768px) {
        display: block;
    }

`

function SideBar() {


    const sideBarStatus = useSelector((state) => {
        return state.toggle.showSideBar
    })

    console.log("SIDE BAR IS ", sideBarStatus);

    return (
        <StyledMobileSideBar>
            <h2>Desktop Sidebar </h2>

            <h2>SideBar is {sideBarStatus ? "OPEN" : "Side Bar Is Closed"}</h2>

        </StyledMobileSideBar>
    )

}

export default SideBar;