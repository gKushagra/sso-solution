import React from "react";
import { Link } from "react-router-dom";

class EmailLogin extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    /**
     * invoked immediately after a component is mounted
     * if you need to load data from remote endpoint,
     * this would be a good lifecycle method to do that!
     * 
     * you may call setState() here, but remember it will
     * render the component again.
     */
    componentDidMount() { }

    /**
     * 
     * @param {*} prevProps state before this update
     * 
     * good place to do network requests only if
     * this.state != prevState
     */
    componentDidUpdate(prevProps) {}

    /**
     * do cleanup here
     */
    componentWillUnmount() { }

    handleChange(event) {
        // console.log(event.target);
        if(event.target.getAttribute("name") === "email") {
            this.setState({ email: event.target.value });
        } else {
            this.setState({ password: event.target.value });
        }
    }

    handleSubmit(event) {
        event.preventDefault();
        // post to api
        
        console.log(this.state);
    }

    render() {
        return (
            <div className="page">
                <div className="box">
                    <div className="box-title-row">
                        <i className="bi bi-envelope-fill title"></i>
                        <div className="spacer"></div>
                        <div className="title">
                            Login with Email
                        </div>
                    </div>
                    <form className="form" onSubmit={this.handleSubmit}>
                        <div className="box-control-row">
                            <input className="form-control" name="email" type="email" placeholder="Email" aria-label="email"
                                value={this.state.email} onChange={this.handleChange} />
                        </div>
                        <div className="box-control-row">
                            <input className="form-control" name="password" type="password" placeholder="Password" aria-label="password"
                                value={this.state.password} onChange={this.handleChange} />
                        </div>
                        <div className="box-title-row">
                            <button type="submit" className="btn btn-light">Submit</button>
                        </div>
                    </form>
                    <div className="box-footer-row">
                        <div className="box-footer-row-item">
                            <div className="extra-options text-blue">
                                Create new account?
                            </div>
                            <div className="spacer"></div>
                            <Link className="custom-btn" to="/create-account">
                                Click here
                            </Link>
                        </div>
                        <div className="box-footer-row-item">
                            <div className="extra-options text-blue">
                                Forgot your password?
                            </div>
                            <div className="spacer"></div>
                            <Link className="custom-btn" to="/reset-password">
                                Click here
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default EmailLogin;