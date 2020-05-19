import React, { Component } from 'react';

import Body from './body';

import './App.css';


class App extends Component{
   
  render(){
  return (
    <div className="App" >
      <div className="form-layout">
        <div className="header-container"> Login</div>
        <Body check={123}/>
      </div>
    </div>
  );
  }
}

export default App;
