import React from 'react';
import {Navigate, useNavigate} from "react-router-dom";


function ProtectedRoutes({children}) {

    const storedToken = localStorage.getItem('token');
    const navigate = useNavigate();

    console.log("Token Number",storedToken);

    if (storedToken) {
        return children

    } else {
        console.log("IN inside NOT HAVING TOKEN")
        return <Navigate to="/login" />
    }


}

export default ProtectedRoutes;