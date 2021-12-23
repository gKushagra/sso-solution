import React from "react";
import { Link } from "react-router-dom";

class ResetPassword extends React.Component {

    render() {
        return (
            <div className="page">
                <div className="box">
                    <div className="box-title-row">
                        <i className="bi bi-key-fill title"></i>
                        <div className="spacer"></div>
                        <div className="title">
                            Reset Password
                        </div>
                    </div>
                    <div className="box-control-row">
                        <input className="form-control" type="email" placeholder="Email" aria-label="email" />
                    </div>
                    <div className="box-title-row">
                        <button type="button" className="btn btn-light">Request Reset Link</button>
                    </div>
                    <div className="box-footer-row">
                        <div className="extra-options text-blue">
                            Go back to login?
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

export default ResetPassword;