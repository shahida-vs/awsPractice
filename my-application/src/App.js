import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { connect } from 'react-redux';

import LoginPage from './loginPage/LoginPage';
import SelectionPage from './selectionPage/SelectionPage';
import { login_user } from './actions/AppAction';

import './App.css';

class App extends Component {
  setRegistered = () => {
    //this.setState({ isRegisteredUser: true });
    const { login_user = () => { } } = this.props;
    login_user({ isRegisteredUser: true })
  }

  render() {
    const { isRegisteredUser = false } = this.props.login
    return (
      <BrowserRouter>
        {!isRegisteredUser ?
          <Switch>
            <Route path='/' exact>
              <LoginPage setRegistered={this.setRegistered} />
            </Route>
            <Route path='/login' exact>
              <LoginPage setRegistered={this.setRegistered} />
            </Route>
            <Route component={Error} />
          </Switch>
          :
          <Switch>
            <Route path='/' exact>
              <SelectionPage />
            </Route>
            <Route path='/login'>
              <LoginPage setRegistered={this.setRegistered} />
            </Route>
            <Route component={Error} />
          </Switch>
        }

      </BrowserRouter>
    );
  }
}

function Error() {
  return <h1>Error 404</h1>
}

const mapStateToProps = (store) => {
  return {
    login: store.AppReducer
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    login_user: (value) => dispatch(login_user(value))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);


