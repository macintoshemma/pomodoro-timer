import React, { Component } from 'react';
import './Settings.css';

class Settings extends Component {
  render() {
    return (
      <div className="settings">
        <p>
          <Timer random={randoNum}/>
          Settings - Fill content later
        </p>
      </div>
    );
  }
}

export default Settings;
class Timer extends Component {
  render() {
    return(
      <div whatevs={this.props.vadsom}>
        <p randomNum={this.props.random}></p>
      </div>
    )
  }

}