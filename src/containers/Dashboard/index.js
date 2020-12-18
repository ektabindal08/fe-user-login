import React, { Component } from 'react';
import './index.css';
import mockData from './dashboar.mock.json';

class Dashboard extends Component {
  constructor(props){
    super(props)
    if(localStorage.getItem("isAuthenticated")!=="true"){
      window.location.href="/"
    }
  }
  render() {
    const {username,firstName,lastName,age} = mockData
    return (
      <section className="dashboard-section">
        <h1 className="heading">User Profile</h1>
        <div className="user-info">
          username: {username}
        </div>
        <div className="user-info">name: {`${firstName} ${lastName}`}</div>
        <div className="user-info">age: {age}</div>
      </section>
    );
  }
}
export default Dashboard;
