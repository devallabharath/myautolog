import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from './pages/login';
import Garage from './pages/garage';
import "./index.css"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<Router>
			<Routes>
				<Route exact path='/' element={<Login/>}/>
				<Route exact path='/garage' element={<Garage/>}/>
			</Routes>
		</Router>
	</React.StrictMode>
);
