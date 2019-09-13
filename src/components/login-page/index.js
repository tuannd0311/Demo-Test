import React from 'react';

import Input from '../input'
import Button from '../button'

import './login.css';

export default class Login extends React.Component {
  state = {
    total: null,
    next: null,
    operation: null,
  };

  onLogin() {
    this.props.history.push('/home')
  };

  render() {
    return (
      <div className="login-wrapper">
        <div className="left-content-login">
          <span className="text-login-left">Hello! Wellcome to Demo</span>
        </div>
        <div className="form-login">
          <Input type='text' placeholder='Enter Username' />
          <Input type='password' placeholder='Enter Password' />
          <Button text='Login' handleClick={() => this.onLogin()} />
        </div>
      </div>
    );
  }
}
