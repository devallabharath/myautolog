import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './pages/home';
import Login from './pages/login';
import Garage from './pages/garage';
import Trips from './pages/trips';
import "./css/dynamic.css"


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<Router>
		<Routes>
			<Route exact path='/' element={<Home/>}/>
			<Route exact path='/login' element={<Login/>}/>
			<Route exact path='/garage' element={<Garage/>}/>
			<Route exact path='/trips' element={<Trips/>}/>
		</Routes>
	</Router>
);
