import React, { Component } from 'react';

import { Link } from 'react-router-dom';
import './index.css';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    };
  }
  handleOnFieldsChange = (event, fieldName) => {
    const state = {};
    state[fieldName] = event.target.value;
    this.setState(state);
  };

  handleOnSubmitForm = () => {
    const { username, password } = this.state;
    if (username === 'admin' && password === 'admin') {
      localStorage.setItem('isAuthenticated', 'true');
      window.location.href = '/dashboard';
    } else {
      alert('username or password is incorrect');
    }
  };
  loginHTML = () => {
    const { username, password } = this.state;
    return (
      <div className="login-section">
        <h1 className="heading">Login</h1>
        <input
          type="text"
          value={username}
          name="username"
          className="input"
          placeholder="User Name"
          onChange={event => this.handleOnFieldsChange(event, 'username')}
        />
        <input
          type="password"
          value={password}
          name="password"
          className="input"
          placeholder="Password"
          onChange={event => this.handleOnFieldsChange(event, 'password')}
        />

        <input type="submit" className="submit-button" value="SUBMIT" onClick={this.handleOnSubmitForm} />
        <Link to="/signup" className="signup-link">SignUP</Link>
        
      </div>
    );
  };
  render() {
    return <div>{this.loginHTML()}</div>;
  }
}
export default Login;
