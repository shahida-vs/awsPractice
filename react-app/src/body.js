import React, { Component } from 'react';

class Body extends Component{
    render() {
        return (
            <div style={{ height: '40%', display: 'flex', flexDirection: 'column', justifyContent: 'space-evenly', alignItems: 'center' }}>
                <div >
                    Name : <input type='text' placeholder="Name"></input>
                </div>
                <div >
                    Password : <input type='text' placeholder="Password"></input>
                </div>
            </div>
        )
    }
}
export default Body;