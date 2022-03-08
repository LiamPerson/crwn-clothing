import React, { useState } from "react";
import { connect } from "react-redux";

import FormInput from '../form-input/form-input.component';
import CustomButton from "../custom-button/custom-button.component";

import { googleSignInStart, emailSignInStart } from "../../redux/user/user.actions";

import { SignInContainer, ButtonsContainer, Title } from './sign-in.styles';

const SignIn = ({ emailSignInStart, googleSignInStart }) => {

    const [userCredentials, setUserCredentials] = useState({ email: '', password: '' });
    const { email, password } = userCredentials;

    const handleSubmit = async event => {
        event.preventDefault();
        emailSignInStart(email, password);
    };

    const handleChange = event => {
        const { value, name } = event.target;
        setUserCredentials({ ...userCredentials, [name]: value })
    }

    return (
        <SignInContainer>
            <Title>I already have an account</Title>
            <span>Sign in with your email and password.</span>
            
            <form onSubmit={handleSubmit}>
                <FormInput label='email' handleChange={handleChange} type="email" name="email" value={email} required />
                <FormInput label='password' handleChange={handleChange} type="password" name="password" value={password} required />
                <ButtonsContainer>
                    <CustomButton type="submit">Sign In</CustomButton>
                    <CustomButton type="button" isGoogleSignIn onClick={googleSignInStart}>Sign In with Google</CustomButton>
                </ButtonsContainer>
            </form>
        </SignInContainer>
    )
}

const mapDispatchToProps = dispatch => ({
    googleSignInStart: () => dispatch(googleSignInStart()),
    emailSignInStart: (email, password) => dispatch(emailSignInStart({ email, password }))
})

export default connect(null, mapDispatchToProps)(SignIn);