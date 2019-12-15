import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/CustomNavbar';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Posts from './components/Posts';
import About from './components/About';

//constructor to initialize state
class App extends Component {
	render() {
		return (
			<Router>
				<NavBar />
				<Route path="/" component={Posts} />
				<Route exact path="/about" component={About} />
			</Router>
		);
	}
}

export default App;
