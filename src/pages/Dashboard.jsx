import React, {useState} from 'react';
import styled from "styled-components";
import SideBar from "../components/SideBar.jsx";
import ContentWrapper from "../components/ContentWrapper.jsx";
import MobileSideBar from "../components/MobileSideBar.jsx";

const GridContainer = styled.div`

    display: grid;
    grid-template-columns:repeat(12, 1fr);
    border: 1px solid orangered;

`

function Dashboard() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);
    return (
        <>
            <SideBar/>
            <MobileSideBar/>
            <ContentWrapper/>
        </>

    );
}

export default Dashboard;