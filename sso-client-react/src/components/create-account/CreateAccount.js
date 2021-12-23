import React from "react";
import { Link } from "react-router-dom";
import "../../App.css";

class CreateAccount extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            fullName: '',
            fullNameError: false,
            fullNameErrorMsg: '',
            email: '',
            emailError: false,
            emailErrorMsg: '',
            password: '',
            passwordError: false,
            passwordErrorMsg: '',
            securityQuestion: '',
            securityQuestionError: false,
            securityQuestionErrorMsg: '',
            securityQuestionAnswer: '',
            securityQuestionAnswerError: false,
            securityQuestionAnswerErrorMsg: '',
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() { }

    componentDidUpdate(prevProps) { }

    componentWillUnmount() { }

    handleChange(event) {
        if (event.target.getAttribute("name") === "fullName") {
            this.removeErrorClass(event);
            this.setState({
                fullNameError: false
            });
            let fullName = event.target.value;
            if (fullName === '') {
                // error
                this.setState({
                    fullNameError: true,
                    fullNameErrorMsg: 'Full name is required',
                });
                event.target.classList.add('error-outline');
                return;
            }
            this.setState({ fullName: event.target.value });
        } else if (event.target.getAttribute("name") === "email") {
            this.removeErrorClass(event);
            this.setState({
                emailError: false
            });
            let email = event.target.value;
            if (email.indexOf("@") < 0) {
                // error
                this.setState({
                    emailError: true,
                    emailErrorMsg: 'Invalid email address',
                });
                event.target.classList.add('error-outline');
                return;
            }
            this.setState({ email: event.target.value });
        } else if (event.target.getAttribute("name") === "password") {
            this.removeErrorClass(event);
            this.setState({
                passwordError: false
            });
            let password = event.target.value;
            if (password.length < 12) {
                // error
                this.setState({
                    passwordError: true,
                    passwordErrorMsg: 'Weak Password',
                });
                event.target.classList.add('error-outline');
                return;
            }
            this.setState({ password: event.target.value });
        } else if (event.target.getAttribute("name") === "securityQuesAns") {
            this.removeErrorClass(event);
            this.setState({
                securityQuestionAnswerError: false
            });
            let securityQuesAns = event.target.value;
            if (securityQuesAns === '') {
                // error
                this.setState({
                    securityQuestionAnswerError: true,
                    securityQuestionAnswerErrorMsg: 'Please answer the security question',
                });
                event.target.classList.add('error-outline');
                return;
            }
            this.setState({ securityQuestionAnswer: event.target.value });
        } else {
            this.removeErrorClass(event);
            this.setState({
                securityQuestionError: false
            });
            let securityQues = event.target.value;
            console.log(securityQues);
            if (securityQues === 'Select' || securityQues === '') {
                // error
                this.setState({
                    securityQuestionError: true,
                    securityQuestionErrorMsg: 'Please select a security question',
                });
                event.target.classList.add('error-outline');
                return;
            }
            this.setState({ securityQuestion: event.target.value });
        }
    }

    removeErrorClass(event) {
        if (event.target.classList.contains('error-outline'))
            event.target.classList.remove('error-outline')
        return;
    }

    handleSubmit(event) {
        event.preventDefault();
        if (this.state.fullName === '') {
            this.setState({
                fullNameError: true,
                fullNameErrorMsg: 'Full name is required',
            });
            const control = event.target.querySelector("input[name='fullName']");
            control.classList.add('error-outline');
        } else if (this.state.email === '') {
            this.setState({
                emailError: true,
                emailErrorMsg: 'Invalid email address',
            });
            const control = event.target.querySelector("input[name='email']");
            control.classList.add('error-outline');
        } else if (this.state.password === '') {
            this.setState({
                passwordError: true,
                passwordErrorMsg: 'Weak Password',
            });
            const control = event.target.querySelector("input[name='password']");
            control.classList.add('error-outline');
        } else if (this.state.securityQuestion === '') {
            this.setState({
                securityQuestionError: true,
                securityQuestionErrorMsg: 'Please select a security question',
            });
            const control = event.target.querySelector("select[name='securityQues']");
            control.classList.add('error-outline');
        } else if (this.state.securityQuestionAnswer === '') {
            this.setState({
                securityQuestionAnswerError: true,
                securityQuestionAnswerErrorMsg: 'Please answer the security question',
            });
            const control = event.target.querySelector("input[name='securityQuesAns']");
            control.classList.add('error-outline');
        }

        // post to api
        console.log(this.state);
    }

    render() {
        return (
            <div className="page">
                <div className="box">
                    <div className="box-title-row">
                        <i className="bi bi-person-plus-fill title"></i>
                        <div className="spacer"></div>
                        <div className="title">
                            Create New Account
                        </div>
                    </div>
                    {/* <div hidden={!this.state.error} className="box-msg-row">
                        <span className="error">{this.state.errorMessage}</span>
                    </div> */}
                    <form className="form" onSubmit={this.handleSubmit}>
                        <div className="box-control-row">
                            <input className="form-control" name="fullName" type="text" placeholder="Full Name" aria-label="full name"
                                onChange={this.handleChange} />
                            <small className="error" hidden={!this.state.fullNameError}>
                                {this.state.fullNameErrorMsg}
                            </small>
                        </div>
                        <div className="box-control-row">
                            <input className="form-control" name="email" type="email" placeholder="Email" aria-label="email"
                                onChange={this.handleChange} />
                            <small className="error" hidden={!this.state.emailError}>
                                {this.state.emailErrorMsg}
                            </small>
                        </div>
                        <div className="box-control-row">
                            <input className="form-control" name="password" type="password" placeholder="Password" aria-label="password"
                                onChange={this.handleChange} />
                            <small className="error" hidden={!this.state.passwordError}>
                                {this.state.passwordErrorMsg}
                            </small>
                        </div>
                        <div className="box-control-row">
                            <select className="form-control" defaultValue="Select" name="securityQues" aria-label="security question"
                                onChange={this.handleChange}>
                                <option value="Select">Select</option>
                                <option value="What is your nickname?">
                                    What is your nickname?
                                </option>
                                <option value="Name of a place you visited recently?">
                                    Name of a place you visited recently?
                                </option>
                                <option value="Name of your favorite teacher?">
                                    Name of your favorite teacher?
                                </option>
                            </select>
                            <small className="error" hidden={!this.state.securityQuestionError}>
                                {this.state.securityQuestionErrorMsg}
                            </small>
                        </div>
                        <div className="box-control-row">
                            <input className="form-control" name="securityQuesAns" type="text" placeholder="Answer" aria-label="answer to security question"
                                onChange={this.handleChange} />
                            <small className="error" hidden={!this.state.securityQuestionAnswerError}>
                                {this.state.securityQuestionAnswerErrorMsg}
                            </small>
                        </div>
                        <div className="box-title-row">
                            <button type="submit" className="btn btn-light">Submit</button>
                        </div>
                    </form>
                    <div className="box-footer-row">
                        <div className="extra-options text-blue">
                            Sign in with Email or Google?
                        </div>
                        <div className="spacer"></div>
                        <Link className="custom-btn" to="/">
                            Click here
                        </Link>
                    </div>
                </div>
            </div>
        )
    }
}

export default CreateAccount;