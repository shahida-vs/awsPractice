import React, { Component } from 'react';
import Footer from './footer';
import './App.css';

const INPUTS = [{
    id: 'inp1',
    name: 'Name',
    type:'text',
  },
  {
    id: 'inp2',
    name: 'Password',
    type:'password'
  }];
class Body extends Component{
    state={
        sideText:'',
        toBeShown:false
    }
    change = (evt) => {
        this.setState({sideText:evt.target.value,toBeShown:false})
    }
    show = () => {
       this.setState({toBeShown:true})
    }
    inputMapper = () => INPUTS.map((input)=><div key={input.id}>{input.name}:<input type={input.type} onChange={(value)=>this.change(value)} placeholder={input.name}></input> </div>)
                
    render() {
        return (
            <div className="body-container">
                {this.inputMapper()}
                <Footer clicked={this.show}/>
                {this.state.toBeShown && <div>{this.state.sideText}</div>}
            </div>
        )
    }
}
export default Body;