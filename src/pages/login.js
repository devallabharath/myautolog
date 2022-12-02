import React from "react";
import {useNavigate} from 'react-router-dom';
import {LoginHeader} from '../components/header'
import "../css/dynamic.css";

export default function Login (props) {
    const Goto = useNavigate();
    const Login = (props) => {
        const name = document.getElementsByName('username')[0]
        const pass = document.getElementsByName('password')[0]
        if (name.value === "devalla" && pass.value ==="6134"){
            Goto('/garage')
        }else if (name.value === "" || pass.value ===""){
            document.getElementById('l_msg').innerText="Enter your credentials"
            document.getElementById('l_msg').style.display='block'
        }else{
            document.getElementById('l_msg').innerText="Incorrect Username or Password"
            document.getElementById('l_msg').style.display='block'
        }
    }
    return(
        <div style={css.page}>
            <LoginHeader/>
            <div style={css.main}>
                <div id='l_container' style={css.container}>
                    <h1 style={css.title}>SignIn</h1>
                    <div style={css.form}>
                        <div style={css.inputdiv}>
                            <input id="l_input" style={css.input} name="username" type="email" placeholder="Username"></input>
                            {/* <span class='l_inputtitle'>Username</span> */}
                            <span id='l_inputline'></span>
                        </div>
                        <div style={css.inputdiv}>
                            <input id="l_input" style={css.input} name='password' type='password' placeholder="Password"></input>
                            {/* <span class='l_inputtitle'>Password</span> */}
                            <span id='l_inputline'></span>
                        </div>
                        <span id="l_msg" class="l_msg" style={css.msg}></span>
                        <button id="l_button" style={css.button} onClick={Login}>Sign In</button>
                        <div style={css.links}>Forgot password? <span id='l_linkspan' style={css.span} onClick={()=>{Goto('/garage')}}>Reset password</span></div>
                        <div style={css.links}>Don't have an account? <span id='l_linkspan' style={css.span} onClick={()=>{Goto('/trips')}}>Register new account</span></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

const css = {
    page:{
        backgroundColor: '#ddddddaa',
        height:'100%',
        display: 'flex',
        flexDirection: 'column',
    },
    main:{
        width: '100%',
        height: '90%',
        backgroundColor: '#ddddddcc',
        display: 'flex',
        justifyContent: 'center',
        overflow: 'scroll'
    },
    container:{
        height: '70%',
        backgroundColor: '#f7f7f7',
        borderRadius: '7px',
        boxShadow: '-5px 5px 3px #2e4da788',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        overflow: 'scroll',
        minHeight: '400px',
        maxHeight: '600px',
        minWidth: '350px',
        maxWidth: '500px',
    },
    form:{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        height: '100%',
        width: '75%',
    },
    title:{
        alignSelf: 'center',
        marginTop: '10%',
        color:'#2e4da7',
        cursor: 'default',
    },
    inputdiv: {
        width: '100%',
        marginBottom: '6%',
        position: 'relative',
        backgroundColor: 'transparent',
    },
    msg:{
        color: 'red',
        display: 'none',
    },
    button:{
        width: '50%',
        height:'10%',
        marginTop: '8%',
        color: 'white',
        backgroundColor: '#2e4da7',
        border: 'none',
        borderRadius: '25px',
        letterSpacing: '2px'
    },
    links:{
        marginTop: '8%',
        cursor: 'default',
    },
    span:{
        color:'#2e4da7',
    },
}
