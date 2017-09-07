import React, { Component } from 'react';

import './Login.css'
import logo from '../../images/logo.png'

const Login = (props) => {
  return (
    <div className='page-login'>
      <div className='login-form'>
        <div className='form-logo'>
          <img src={logo} />
        </div>

        <div className='form-input-group'>
          <div className='input-group--username'>
            <input placeholder='Username' />
          </div>
          <div className='input-group--password'>
            <input placeholder='Password' />
          </div>
          <div className='forget-link'><a href='#'>Forgot password?</a></div>
          <div className='login-button-box'>
            <button>LOGIN</button>
          </div>
        </div>
      </div>
    </div>
  )
}


export default Login;
