import axios from "axios";

export const registerUser= async (user)=>{

    const {firstName,lastName,email,password}=user;

    console.log("FORM SUBMIT DATA ARE ",user)

    const response=await axios.post("http://localhost:3005/api/v1/auth/register", {firstName,lastName,email,password});

    console.log(response.data)

    return response.data;


}

export const verifyLoginUser= async (user)=>{

    const {email,password}=user;
    const response=await axios.post("http://localhost:3005/api/v1/auth/login", {email,password});

    console.log(response.data)
    return response.data;
}

