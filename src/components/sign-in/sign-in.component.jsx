import React from "react";
import './sign-in.styles.scss';
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";

class SignIn extends React.Component {
    constructor (props) {
        super(props);
        this.state ={
            email: '',
            password: ''
        }
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.setState({email : '', password: ''})};
    handleChange = (e) => {
        const {value, name} =e.target;
        this.setState({[name]: value  })
    };
    render() {
        return (
            <div className={'sign-in'}>
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>
                <form onSubmit={this.handleSubmit}>
                    <FormInput
                        label={'email'}
                        type="email"
                        name={'email'}
                        handleChange={this.handleChange}
                        value={this.state.email}
                        required
                    />

                    <FormInput
                        label={'password'}
                        type="password"
                        name='password'
                        value={this.state.password}
                        handleChange={this.handleChange}
                        required
                    />

                    <CustomButton type="submit" >Sign In</CustomButton>
                </form>

            </div>
        );
    }
}
export default SignIn;