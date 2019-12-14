import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/CustomNavbar';

import { BrowserRouter as Router, Route } from 'react-router-dom';
import Posts from './components/Posts';

//constructor to initialize state
class App extends Component {
	render() {
		return (
			<Router>
				<NavBar />
				<Posts />
			</Router>
		);
	}
}

export default App;
