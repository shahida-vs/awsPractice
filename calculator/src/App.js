import React, { Component } from 'react';

import Button from './button';

import './App.css';

class App extends Component {
  state = {
    val: 0
  }
  clicked = (value) => {
    this.setState({ val: this.state.val + value })
  }
  render() {
    return (
      <div className="App">
        <div className="container">
          <div className="input-box">
            <input type="text" value={this.state.val} />
          </div>
          <div className="keypad">
            <div className="button-row">
              <Button value={"A/C"} style={{ backgroundColor: 'rgb(109,112,116)' }} clicked={(value) => this.clicked(value)} />
              <Button value={"+/-"} style={{ backgroundColor: 'rgb(109,112,116)' }} clicked={(value) => this.clicked(value)} />
              <Button value={"%"} style={{ backgroundColor: 'rgb(109,112,116)' }} clicked={(value) => this.clicked(value)} />
              <Button value={"/"} style={{ backgroundColor: 'rgb(255, 155, 0)' }} clicked={(value) => this.clicked(value)} />
            </div>
            <div className="button-row">
              <Button value={"7"} clicked={(value) => this.clicked(value)} />
              <Button value={"8"} clicked={(value) => this.clicked(value)} />
              <Button value={"9"} clicked={(value) => this.clicked(value)} />
              <Button value={"x"} style={{ backgroundColor: 'rgb(255, 155, 0)' }} clicked={(value) => this.clicked(value)} />
            </div>
            <div className="button-row">
              <Button value={"4"} clicked={(value) => this.clicked(value)} />
              <Button value={"5"} clicked={(value) => this.clicked(value)} />
              <Button value={"6"} clicked={(value) => this.clicked(value)} />
              <Button value={"-"} style={{ backgroundColor: 'rgb(255, 155, 0)' }} clicked={(value) => this.clicked(value)} />
            </div>
            <div className="button-row">
              <Button value={"1"} clicked={(value) => this.clicked(value)} />
              <Button value={"2"} clicked={(value) => this.clicked(value)} />
              <Button value={"3"} clicked={(value) => this.clicked(value)} />
              <Button value={"+"} style={{ backgroundColor: 'rgb(255, 155, 0)' }} clicked={(value) => this.clicked(value)} />
            </div>
            <div className="button-row">
              <Button value={"0"} style={{ flexGrow: 1 }} clicked={(value) => this.clicked(value)} />
              <Button value={"."} clicked={(value) => this.clicked(value)} />
              <Button value={"="} style={{ backgroundColor: 'rgb(255, 155, 0)' }} clicked={(value) => this.clicked(value)} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
