import React from "react";
import { Link } from "react-router-dom";
import '../css/garage.css'

export default class Garage extends React.Component{
    render(){
        return(
            <div id='main'>
                <div id="header">
                    <div id='head'>
                        <h1>MyGarage</h1>
                    </div>
                    <div id='navcontainer'>
                        <div id='iconcontainer'>
                            <div id='icons'><Link id='icon' to={'/'}>Logout</Link></div>
                            <div id='icons'><Link id='icon' to={'/'}>Back</Link></div>
                            <div id='icons'><Link id='icon' to={'/'}>Garage</Link></div>
                        </div>
                    </div>
                </div>
                <div id='body'>
                    <div id="card">
                        <img id='img' src="/img/fordfigo.png" alt="Vehicle"/>
                        <div id="cardname">
                            <h4><b>Ford Figo</b></h4>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
