import { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Signup';
import Dashboard from './components/Dashboard';

function App() {

	return (
		<Router>
			<Routes>
				<Route exact path='/' element={<Dashboard />} />
				<Route  path='/register' element={<Dashboard />} />
				<Route  path='/login' element={<Login />} />
			</Routes>
		</Router>
	);
}

export default App;
