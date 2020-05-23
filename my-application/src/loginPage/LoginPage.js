import React, { Component } from 'react';

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
    state = {
        email: '',
        emptyFields: true,
        error: '',
        password: '',
    }

    inputMapper = () => {
        return INPUT_BOXES.map(({ id, name, type }) => (<InputBox key={id} name={name} type={type} textChange={this.textChange} />));
    }

    textChange = (evt) => {
        this.setState({ [evt.target.name]: evt.target.value }, () => {
            const { email = '', password = '' } = this.state;
            const checkEmptyFields = !(email.length && password.length);
            this.setState({ emptyFields: checkEmptyFields });
        })
        this.setState({ error: '' });
    }

    validate = (event) => {
        event.preventDefault();
        const { email = '', password = '' } = this.state;
        const { setRegistered = '' } = this.props;
        if (email === CREDENTIALS.email && password === CREDENTIALS.password) {
            setRegistered();
        }
        else {
            this.setState({ error: ERROR_MESSAGE });
        }
    }

    render() {
        const { emptyFields = true, error = '' } = this.state;
        return (
            <form className='App'  >
                {this.inputMapper()}
                <LoginBox emptyFields={emptyFields} key={3} validate={this.validate} />
                <span>{error}</span>
            </form >
        );
    }
}

function InputBox({ name, textChange, type }) {
    return (
        <input className="input-box" name={name} onChange={(evt) => textChange(evt)} placeholder={name} type={type} />
    );
}

function LoginBox({ emptyFields, validate }) {
    return (
        < input className={emptyFields ? "white-login-box" : "green-login-box"} onClick={validate} type="submit" value="Login" />
    )
}

export default LoginPage;