import React, { Component } from 'react';
import axios from 'axios';
import './index.css';
class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      age: '',
      username: '',
      password: ''
    };
  }
  handleOnFieldsChange = (event, fieldName) => {
    const state = {};
    state[fieldName] = event.target.value;
    this.setState(state);
  };

  hanldeOnSubmitClick = () => {
    const { firstName, lastName, age, username, password } = this.state;
    const data = {
      firstName:firstName,
      lastName:lastName,
      age:age,
      username:username,
      password:password
    }
    axios.post('http://localhost:3000/submit',data).then(()=>{
      alert("SignIn Successfull");
    }).catch(()=>{
      alert("SignIn Successfull");
      window.location.href = "/"
    })

  };
  SignupHTML = () => {
    const { firstName, lastName, age, username, password } = this.state;
    return (
      <div className="sign-up-section">
        <h1 className="heading">SignUp</h1>
        <input
          type="text"
          value={firstName}
          name="firstName"
          className="input"
          placeholder="First Name"
          onChange={event => this.handleOnFieldsChange(event, 'firstName')}
        />
        <input
          type="text"
          value={lastName}
          name="lastName"
          className="input"
          placeholder="Last Name"
          onChange={event => this.handleOnFieldsChange(event, 'lastName')}
        />
        <input
          type="number"
          value={age}
          name="age"
          className="input"
          placeholder="Age"
          onChange={event => this.handleOnFieldsChange(event, 'age')}
        />
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
        <input type="submit" className="submit-button" value="SUBMIT" onClick={this.hanldeOnSubmitClick} />
      </div>
    );
  };
  render() {
    return <div>{this.SignupHTML()}</div>;
  }
}
export default Signup;
