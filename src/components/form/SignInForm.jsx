import React from 'react';
import './SignInForm.css';
import Footer from '../Footer';

const SignInForm = () => {
  return (
    <div className="formBody">
    <div className="signin-container">
      <div className="signin-header">
        <h2>Signin</h2>
        <button className="close-button">✖</button>
      </div>
      <div className="demo-credentials">
        <p>Username: <span className="demo-text">demo</span></p>
        <p>Password: <span className="demo-text">demo</span></p>
      </div>
      <form>
        <input type="text" placeholder="Enter username or email" className="signin-input" />
        <input type="password" placeholder="Enter Password" className="signin-input" />
        <div className="signin-options">
          <label>
            <input type="checkbox" /> Keep me signed in
          </label>
          <a href="/" className="forgot-password">Lost Your Password?</a>
        </div>
        <button type="submit" className="signin-button">Login</button>
      </form>
      <div className="register-link">
        <p>Don't have an account</p>
        <a href="/" className="register-text">Register</a>
      </div>
    </div>
    <div className='fotr'>
    <Footer/>
    </div>
    </div>
  );
}

export default SignInForm;
