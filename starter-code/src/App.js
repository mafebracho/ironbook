import React, { Component } from 'react';
import './App.css';
import users from './users.json';
import linkedin from './linkedin.png';

export default class App extends Component {

  state = {
    users: users,
    firstName: "",
    lastName: "",
    campus: "",
    role: "",
    linkedin: ""
  }

  render() {
    return (
      <div className="App">
        <h1>IronBook</h1>
        <table>
          <thead>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Campus</th>
              <th>Role</th>
              <th>Links</th>
            </tr>
          </thead>
          <tbody>
            { this.state.users.map(user => {
              return (
                <tr key={ user.id }>
                  <td>{ user.firstName }</td>
                  <td>{ user.lastName }</td>
                  <td>{ user.campus }</td>
                  <td>{ user.role }</td>
                  <td>{ user.linkedin && <a href={user.linkedin}><img height="20px" src={linkedin} alt="Linkedin"></img></a> }</td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    )
  }
}