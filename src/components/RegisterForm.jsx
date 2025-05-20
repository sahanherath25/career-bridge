import React from 'react';
import styled from "styled-components";
import FormRow from "../ui/FormRow.jsx";
import FormInput from "../ui/FormInput.jsx";
import {useForm} from "react-hook-form";
import FormButton from "../ui/FormButton.jsx";
import FormTitle from "../ui/FormTitle.jsx";
import StyledLink from "../ui/StyledLink.jsx";

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


    const {register, formState, handleSubmit} = useForm()

    const {errors} = formState

    console.log("ERROR ",errors)

    const onFormSubmit = (data) => {
        console.log("Form Data ", data)
    }

    const onErrorSubmit = (data) => {

    }

    return (
        <StyledFormWrapper>
            <FormBox onSubmit={handleSubmit(onFormSubmit,onErrorSubmit)}>

                <FormTitle>{title}</FormTitle>

                <FormRow  error={errors?.email?.message} label={"First Name"}>
                    <FormInput
                        type={"text"} id={"name"}
                        name={"name"}
                        {...register("name",
                            {
                                required: "name is required",
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
                                required: "Password is Required",

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