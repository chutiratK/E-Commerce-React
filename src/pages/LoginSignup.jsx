import React from 'react'
import './CSS/LoginSignUp.css'

const LoginSignup = () => {
  return (
    <div className='loginsignup'>
      <div className="loginSignUp-container">
        <h1>Sign Up</h1>
        <div className="loginSignUp-fields">
          <input type='text' placeholder='Enter Your Name'/>
          <input type='email' placeholder='example@gmail.com'/>
          <input type='password' placeholder='Password'/>
        </div>
        <button>Continue</button>
        <p className='loginSignUp-login'>Already have an account?<span>Login here</span></p>
        <div className="loginSignUp-agree">
          <input type='checkbox' name='' id=''/>
          <p>By continueing, I agree to the terms of use & privacy policy</p>
        </div>
      </div>

    </div>
  )
}

export default LoginSignup