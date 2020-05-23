import React, { Component } from 'react';

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
      !isRegisteredUser ?

        <LoginPage setRegistered={this.setRegistered} />
        :
        <SelectionPage />
    );
  }
}


export default App;


