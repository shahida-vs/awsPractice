import React, { Component } from 'react';
import {identity} from 'lodash';

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
const defaultProps = {
    //clicked:()=>{console.log("default function");}
    clicked:identity
};
class Footer extends Component {
    buttonMapper = (clicked) => BUTTONS.map(({id='',name=''})=><button key={id} onClick={clicked} style={{ height: 30 }}  >{name}</button>)
    render() {
        const {clicked = ''} = this.props;
        return (
            <div className="footer-container">
                {this.buttonMapper(clicked)}
            </div>
        )
    }
}

Footer.defaultProps = defaultProps;
export default Footer;