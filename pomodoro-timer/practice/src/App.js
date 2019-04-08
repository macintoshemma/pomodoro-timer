import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Timer from './components/Timer.js';
import NavBar from './components/Navbar.js';
import Settings from './components/Settings.js';
import Error from './components/Error.js';


class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <React.Fragment>
        <NavBar />
        <Switch>
          <Route path="/" component={<Timer />} exact />
          <Route path="/settings" component={Settings} />
          <Route component={Error} />
        </Switch>
      </React.Fragment>
      </BrowserRouter>
    );
  }
}

export default App;
