import React, { Component } from 'react';
import { connect } from 'react-redux';

import { get, set, cloneDeep } from 'lodash';

import { login } from '../actions/LoginPageAction';

import '../App.css'

const CREDENTIALS = {
    "email": "info@vectoscalar.com",
    "password": "vs123"
};
const ERROR_MESSAGE = 'Incorrect login credentials!';
const INPUT_BOXES = [
    {
        id: 1,
        name: 'email',
        type: 'text'
    },
    {
        id: 2,
        name: 'password',
        type: 'password'
    }
];



class LoginPage extends Component {

    inputMapper = () => {
        return INPUT_BOXES.map(({ id = '', name = '', type = '' }) => (<InputBox key={id} name={name} type={type} textChange={this.textChange} />));
    }
    componentWillReceiveProps = (nextProps) => {
        const { email = '', password = '' } = nextProps.loginReducer;
        const { userLogin } = this.props;
        if (email !== this.props.loginReducer.email || password !== this.props.loginReducer.password) {
            const emptyFields = !(email.length && password.length);
            userLogin({ emptyFields });
        }
    }
    textChange = (evt = {}) => {
        const { userLogin } = this.props
        userLogin({ [get(evt, ["target", "name"], 'KEY_NOT_FOUND')]: get(evt, ["target", "value"], '') })
        userLogin({ error: '' });
    }

    validate = (event = {}) => {
        event.preventDefault();
        const { email = '', password = '' } = this.props.loginReducer;
        const { setRegistered = '', userLogin } = this.props;
        if (email === CREDENTIALS.email && password === CREDENTIALS.password) {
            setRegistered();
        }
        else {
            userLogin({ error: ERROR_MESSAGE });
        }
    }

    render() {
        const { emptyFields = true, error = '' } = this.props.loginReducer;
        return (
            <form className='App'  >
                {this.inputMapper()}
                <LoginBox emptyFields={emptyFields} key={3} validate={this.validate} />
                <span>{error}</span>
            </form >
        );
    }
}

function InputBox({ name = '', textChange = () => { }, type = '' }) {
    return (
        <input className="input-box" name={name} onChange={(evt) => textChange(evt)} placeholder={name} type={type} />
    );
}

function LoginBox({ emptyFields = true, validate = () => { } }) {
    return (
        < input className={emptyFields ? "white-login-box" : "green-login-box"} onClick={validate} type="submit" value="Login" />
    )
}

const mapStateToProps = (store) => {
    return {
        loginReducer: store.LoginReducer
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        userLogin: (value) => dispatch(login(value))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);