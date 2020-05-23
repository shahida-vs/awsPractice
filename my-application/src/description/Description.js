import React, { Component } from 'react';

import './Description.css';

const HEADING = 'Description'
class Description extends Component {
    render() {
        const { description = '' } = this.props;
        return (
            <div className="description-container">
                <div className='description-head'>
                    {HEADING}
                </div>
                <div className='description-body'>
                    {description}
                </div>
            </div>
        )
    }
}

export default Description