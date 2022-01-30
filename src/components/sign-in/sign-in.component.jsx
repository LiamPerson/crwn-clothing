import React from "react";

import FormInput from '../form-input/form-input.component';
import CustomButton from "../custom-button/custom-button.component";

import { auth, signInWithGoogle } from "../../firebase/firebase.utils";

import { SignInContainer, ButtonsContainer, Title } from './sign-in.styles';

class SignIn extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = async event => {
        event.preventDefault();

        const { email, password } = this.state;

        try {
            await auth.signInWithEmailAndPassword(email, password);
            this.setState({ email: '', password: '' })
        } catch (error) {
            console.error('Failed to sign in', error);
        }
    };

    handleChange = event => {
        const { value, name } = event.target;
        this.setState({ [name]: value })
    }

    render() {
        return (
            <SignInContainer>
                <Title>I already have an account</Title>
                <span>Sign in with your email and password.</span>
                
                <form onSubmit={this.handleSubmit}>
                    <FormInput label='email' handleChange={this.handleChange} type="email" name="email" value={this.state.email} required />
                    <FormInput label='password' handleChange={this.handleChange} type="password" name="password" value={this.state.password} required />
                    <ButtonsContainer>
                        <CustomButton type="submit">Sign In</CustomButton>
                        <CustomButton type="button" isGoogleSignIn onClick={signInWithGoogle}>Sign In with Google {' '}</CustomButton>
                    </ButtonsContainer>
                </form>
            </SignInContainer>
        )
    }
}

export default SignIn;