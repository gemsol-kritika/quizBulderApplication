import { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Signup';
import Dashboard from './components/Dashboard';
import Form from './components/Form';

function App() {

	return (
		<Router>
			<Routes>
				<Route exact path='/' element={<Dashboard />} />
				<Route  path='/register' element={<Register />} />
				<Route  path='/login' element={<Login />} />
				<Route  path='/form' element={<Form />} />
			</Routes>
		</Router>
	);
}

export default App;
