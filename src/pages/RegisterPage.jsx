import React from 'react';
import RegisterForm from "../components/RegisterForm.jsx";
import {useSelector} from "react-redux";

function RegisterPage() {

    const state=useSelector((state)=>{
        return state.users;
    })

    console.log(state)

    return (
        <RegisterForm title={"Register"}/>
    );
}

export default RegisterPage;