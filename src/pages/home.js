import React from "react";
import "../css/home.css";

export default class home extends React.Component {
    refresh = () => {
        this.setState({});
    };
    render() {
        return(
            <div id="main">
            <div id="container">
                <h1 id="title">Home</h1>
                <div id='form'>
                    <input id="input" placeholder="Enter Username"></input>
                    <input id="input" type='password' placeholder="Enter Password"></input>
                    <button>Login</button>
                    <div id='links'>Forgot password? <a href="">Reset password</a></div>
                    <div id='links'>Don't have an account? <a href="">Register new account</a></div>
                </div>
            </div>
            </div>
        )
    }
}
