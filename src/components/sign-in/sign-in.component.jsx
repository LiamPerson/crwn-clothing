import React from "react";
import { connect } from "react-redux";

import FormInput from '../form-input/form-input.component';
import CustomButton from "../custom-button/custom-button.component";

import { googleSignInStart, emailSignInStart } from "../../redux/user/user.actions";

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
        const { emailSignInStart } = this.props;
        const { email, password } = this.state;

        emailSignInStart(email, password);
    };

    handleChange = event => {
        const { value, name } = event.target;
        this.setState({ [name]: value })
    }

    render() {
        const { googleSignInStart } = this.props;
        return (
            <SignInContainer>
                <Title>I already have an account</Title>
                <span>Sign in with your email and password.</span>
                
                <form onSubmit={this.handleSubmit}>
                    <FormInput label='email' handleChange={this.handleChange} type="email" name="email" value={this.state.email} required />
                    <FormInput label='password' handleChange={this.handleChange} type="password" name="password" value={this.state.password} required />
                    <ButtonsContainer>
                        <CustomButton type="submit">Sign In</CustomButton>
                        <CustomButton type="button" isGoogleSignIn onClick={googleSignInStart}>Sign In with Google</CustomButton>
                    </ButtonsContainer>
                </form>
            </SignInContainer>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    googleSignInStart: () => dispatch(googleSignInStart()),
    emailSignInStart: (email, password) => dispatch(emailSignInStart({ email, password }))
})

export default connect(null, mapDispatchToProps)(SignIn);