import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Footer from '../footer/Footer';

import '../App.css';

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
  const defaultProps = {
      check:'ab'
  };
  const propTypes = {
      check:PropTypes.string
  }
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
    inputMapper = () => INPUTS.map(({id='',name='',type=''})=><div key={id}>{name}:<input onChange={(value)=>this.change(value)} placeholder={name} type={type}></input> </div>)
                
    render() {
        const {sideText = '',toBeShown = false}=this.state
        const {check} = this.props;
        return (
            <div className="body-container">
                default props : {check}
                {this.inputMapper()}
                <Footer clicked={this.show}/>
                {toBeShown && <div>{sideText}</div>}
            </div>
        )
    }
}

Body.defaultProps=defaultProps
Body.propTypes = propTypes
export default Body;