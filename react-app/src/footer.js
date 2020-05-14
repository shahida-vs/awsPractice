import React, { Component } from 'react';

class Footer extends Component {
    resetPressed = () => {
        console.log("Reset Pressed");
        
      }
       submitPressed = () => {
        console.log("Submit Pressed");
        
      }
    render() {
        return (
            <div style={{ height: '30%', display: 'flex', width: '100%', justifyContent: 'space-around' }}>
                <button style={{ height: 30 }} onClick={this.resetPressed}>Reset</button>
                <button style={{ height: 30 }} onClick={this.submitPressed}>Submit</button>
            </div>
        )
    }
}
export default Footer;