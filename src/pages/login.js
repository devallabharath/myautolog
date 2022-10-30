import React from "react";
import {Link} from 'react-router-dom';
import "../css/login.css";


export default class login extends React.Component {
    render() {
        return(
            <div id="main">
                <div id="container">
                    <h1 id="title">MyAutoLog</h1>
                    <div id='form'>
                        <input id="input" class='username' placeholder="Enter Username"></input>
                        <input id="input" class='password' type='password' placeholder="Enter Password"></input>
                        <Link id='button' to='/garage'>Login</Link>
                        <div id='links'>Forgot password? <span>Reset password</span></div>
                        <div id='links'>Don't have an account? <span>Register new account</span></div>
                    </div>
                </div>
            </div>
        )
    }
}
