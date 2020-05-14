import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Body from './body';
import Footer from './footer';

class App extends Component{
   
  render(){
  return (
    <div className="App" style={{ width: '100%', display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center' }}>
      <div style={{ height: '50%', border: '2px solid black', width: '20%', display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center' }}>
        <div style={{ height: '20%', display: 'flex',alignItems:'center'}}> Login</div>
        <Body />
        <Footer />
      </div>
    </div>
  );
  }
}

export default App;
