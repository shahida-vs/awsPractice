import React, { Component } from 'react';

import { BrowserRouter, Route, Switch } from 'react-router-dom'


import LoginPage from './loginPage/LoginPage';
import SelectionPage from './selectionPage/SelectionPage';

import './App.css';

class App extends Component {
  state = {
    isRegisteredUser: false
  }

  setRegistered = () => {
    this.setState({ isRegisteredUser: true });
  }

  render() {
    const { isRegisteredUser = false } = this.state
    return (
      <BrowserRouter>
        {!isRegisteredUser ?
          <Route path='/'>
            <LoginPage setRegistered={this.setRegistered} />
          </Route>
          :
          <Switch>
            <Route path='/'>
              <SelectionPage />
            </Route>
            <Route path='/login'>
              <LoginPage setRegistered={this.setRegistered} />
            </Route>
          </Switch>
        }
        <Route component={Error} />
      </BrowserRouter>
    );
  }
}

function Error() {
  return <h1>Error 404</h1>
}
export default App;


