import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css'
import MaterialIcon from 'material-icons-react';

class NavBar extends Component {

  render() {
    return (
      <React.Fragment>
        <div className="timer__icon"  >
        <MaterialIcon icon="timer" size="large" color="#FAFAFA" />
        </div>
        <div className="title__container">
        <div className="title">Pomodoro Timer</div>
        </div>
        <div className="header">
        <NavLink className="link" to="/">Home</NavLink>
        <NavLink className="link" to="/settings">Settings</NavLink>
        <NavLink className="link" to="/tasks">Tasks</NavLink>
        <NavLink className="link" to="/mob">Mob</NavLink> 
        </div>
      </React.Fragment>
    )
  }
}

export default NavBar;