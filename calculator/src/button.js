import React, { Component } from 'react';
import './button-box.css';

class Button extends Component {
    render() {
        return (
            <div className="button-box" style={this.props.style} onClick={() => this.props.clicked(this.props.value)}>
                {this.props.value}
            </div>
        )
    }
}

export default Button