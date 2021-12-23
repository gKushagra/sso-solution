import { Link } from 'react-router-dom';
import './App.css';

function App() {

  return (
    <div className="page">
      <div className="box">
        <div className="box-title-row">
          <i className="bi bi-box-arrow-in-right title"></i>
          <div className="spacer"></div>
          <div className="title">
            Login Options
          </div>
        </div>
        <div className="box-row">
          <i className="bi bi-envelope-fill"></i>
          <div className="spacer"></div>
          <Link className="custom-btn" to="/email-login">
            Login With Email
          </Link>
        </div>
        <div className="box-row">
          <i className="bi bi-google"></i>
          <div className="spacer"></div>
          <a className="custom-btn" href="/">
            Sign-in with Google
          </a>
        </div>
        <div className="box-footer-row">
          <div className="extra-options text-blue">
            Need an account?
          </div>
          <div className="spacer"></div>
          <Link className="custom-btn" to="/create-account">
            Create Account
          </Link>
        </div>
      </div>
    </div>
  );
}

export default App;
