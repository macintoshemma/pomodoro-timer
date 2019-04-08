import React, { Component } from 'react';
import { Button, ButtonToolbar } from 'react-bootstrap';
import './Timer.css';

class Timer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      minutes: '25',
      seconds: '00',
      started: false,
      break: false,
      buttonState: 'Start',
      play: false
    };
    this.startInterval = this.startInterval.bind(this);
    this.pauseInterval = this.pauseInterval.bind(this);
    this.resetTimer = this.resetTimer.bind(this);
    this.url = '/Sound fx/breakTTS.mp3'
    this.audio = new Audio(this.url)
  }

  play() {
    this.setState({
      play: true,
    })
    this.audio.play()
  }

  countDownTime() {
    let seconds = parseInt(this.state.seconds);
    let minutes = parseInt(this.state.minutes);
    let isBreak = this.state.break;
    
    if(minutes === 0 && seconds === 0 && isBreak === true){
      this.resetTimer()
    }

    if(minutes === 0 && seconds === 0 && isBreak === false){
      this.startBreak()
    }

    minutes >= 1 && seconds <= 1
      ? this.setState({ minutes: (minutes -= 1), seconds: 59 })
      : this.setState({ seconds: (seconds -= 1) });
  }

  startInterval() {
    if (this.state.started === false) {
      this.setState({ started: true, buttonState: 'Pause' });
      this.started = setInterval(() => this.countDownTime(), 1000);
    } else {
      this.pauseInterval();
    }
  }

  pauseInterval() {
    clearInterval(this.started);
    this.setState({ started: false, buttonState: 'Resume' });
  }

  resetTimer() {
    clearInterval(this.started);
    this.setState({ minutes: '25', seconds: '00', buttonState: 'Start', break: false });
  }

  startBreak() {
    this.play()
    clearInterval(this.started);
    this.setState({ minutes: '05', seconds: '00', started: false, buttonState: 'Start', break: true});
  }

  render() {
    return (
      <div className="timer">
        <h1>
          {this.state.minutes}:{this.state.seconds}
        </h1>
        <ButtonToolbar className="btn__toolbar">
          <Button
            className="btn__start"
            variant="outline-primary"
            onClick={this.startInterval}
          >
            {this.state.buttonState}
          </Button>
          <Button
            className="btn__reset"
            variant="outline-danger"
            onClick={this.resetTimer}
          >
            Reset
          </Button>
        </ButtonToolbar>
      </div>
    );
  }
}

export default Timer;
