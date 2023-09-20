import React from 'react';
import SignUpForm from '../components/SignUpForm/SignUpForm';
import LogInForm from '../components/LogInForma/LogInForm';
import logo from '../images/gatoLocal.jpg'


export default function AuthPage({ setUser }) {
  return (
      <div className="auth-container"> 
    
      <h1 className="logo-container">
        <img src={logo} alt='logo' className='logo1' />
      </h1>
      
      
      <div className="sign-up"> 
        <h2>Sign Up</h2>
        <SignUpForm setUser={setUser} />
      </div>
      <div className="sign-in"> 
        <h2>Log In</h2>
        <LogInForm setUser={setUser} />
      </div>
    </div>
  );
  }
