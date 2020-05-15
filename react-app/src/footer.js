import React, { Component } from 'react';

import './App.css'

const BUTTONS = [{
    id: 'btn1',
    name: 'Reset',
    type:'reset',
  },
  {
    id: 'btn2',
    name: 'Submit',
    type:'submit'
  }];
  
class Footer extends Component {
    buttonMapper = (clicked) => BUTTONS.map((item)=><button key={item.id} onClick={clicked} style={{ height: 30 }}  >{item.name}</button>)
    render() {
        const {clicked} = this.props;
        return (
            <div className="footer-container">
                {this.buttonMapper(clicked)}
            </div>
        )
    }
}
export default Footer;