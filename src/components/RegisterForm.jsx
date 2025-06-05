import React from 'react';
import styled from "styled-components";
import FormRow from "../ui/FormRow.jsx";
import FormInput from "../ui/FormInput.jsx";
import {useForm} from "react-hook-form";
import FormButton from "../ui/FormButton.jsx";
import FormTitle from "../ui/FormTitle.jsx";
import StyledLink from "../ui/StyledLink.jsx";
import {useMutation} from "@tanstack/react-query";
import {registerUser} from "../utils/useUsers.js";
import toast from "react-hot-toast";
import {useNavigate} from "react-router-dom";

const StyledFormWrapper = styled.div`
    grid-column: 4 / 10;
    width: 60%;
    margin: 0 auto;
    background: linear-gradient(135deg, #dbeafe, #f0f9ff);
    //border: 1px solid red;

`
const FormBox = styled.form`

    width: 100%;
    //max-width: 450px; /* Limit width so it’s not too wide */
    padding: 3rem 4rem;
    background: white;
    border-radius: 1.2rem;
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
`



const BottomWrapper=styled.div`
    display: flex;
    justify-content: center;
    margin-block-start: 10px;
`



function RegisterForm({title="Register"}) {

    const navigate=  useNavigate();


    const {reset,register, formState, handleSubmit,watch} = useForm()

    const {mutate:registerNewUser,isPending}=useMutation({
        mutationFn:(user)=>{
            toast.loading("Please Wait ",{id:"form"})
            return registerUser(user)
        },
        onError:(e)=>{
            console.log("ERROE ON FRONTEND ",e.response.data.message)

            const{message}=e.response.data
            toast.error(message,{id:"form"})
        }
        ,onSuccess:(data)=>{
            console.log("Register User is ,",data)
            toast.success(data.message,{id:"form"})
            localStorage.setItem("token",JSON.stringify(data.token))
            // reset()
            navigate("/")

        }
    })

    const {errors} = formState

    console.log("ERROR ",errors)
    console.log("Status  ",isPending)

    const onFormSubmit = (data) => {
        console.log("Form Data ", data)

        registerNewUser(data)

    }

    const onErrorSubmit = (errors) => {

        if(errors.password){
            toast.error(errors.password.message,{id:"form"})
        }

        if(errors.confirmPassword){
            toast.error(errors.confirmPassword.message,{id:"form"})
        }

        if(errors.firstName){
            toast.error(errors.firstName.message,{id:"form"})
        }

        if(errors.lastName){
            toast.error(errors.lastName.message,{id:"form"})
        }

    }

    return (
        <StyledFormWrapper>
            <FormBox onSubmit={handleSubmit(onFormSubmit,onErrorSubmit)}>

                <FormTitle>{title}</FormTitle>

                <FormRow  error={errors?.firstName?.message} label={"First Name"}>
                    <FormInput
                        type={"text"} id={"firstName"}
                        name={"firstName"}
                        {...register("firstName",
                            {
                                required: "First Name is required",
                            })
                        }
                    />
                </FormRow>

                <FormRow  error={errors?.lastName?.message} label={"Last Name"}>
                    <FormInput
                        type={"text"} id={"lastName"}
                        name={"lastName"}
                        {...register("lastName",
                            {
                                required: "Last Name is required",
                            })
                        }
                    />
                </FormRow>

                <FormRow  error={errors?.email?.message} label={"Email"}>
                    <FormInput
                        type={"text"} id={"email"}
                        name={"email"}
                        {...register("email",
                            {
                                required: "Email is required",
                            })
                        }
                    />
                </FormRow>

                <FormRow  error={errors?.password?.message} label={"Password"}>
                    <FormInput
                        type={"password"} id={"password"}
                        name={"password"}
                        {...register("password",
                            {
                                required: "Password is Required ",

                            })
                        }
                    />
                </FormRow>

                <FormRow  error={errors?.confirmPassword?.message} label={"Confirm Password"}>
                    <FormInput
                        type={"password"} id={"confirmPassword"}
                        name={"confirmPassword"}
                        {...register("confirmPassword",
                            {
                                required: "Re enter the password to confirm",
                                validate:(value)=>{
                                    return  value === watch("password") || "Passwords do not match"
                                }


                            })
                        }
                    />
                </FormRow>

                <FormButton type={"submit"} color={"#FFF5E4"}>Register</FormButton>

                <BottomWrapper>
                    <p>Already have a account ?</p><StyledLink to={"/login"} >Login</StyledLink>
                </BottomWrapper>

            </FormBox>
        </StyledFormWrapper>
    );
}

export default RegisterForm;