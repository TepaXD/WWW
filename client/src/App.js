import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/CustomNavbar';

import { BrowserRouter as Router, Route } from 'react-router-dom';
import Message from './components/MessagesContainer';

//constructor to initialize state
class App extends Component {
	state = {
		searchable: '',
	};

	getSearchable = data => {
		this.setState({ searchable: data });
	};

	constructor(props) {
		super(props);
		this.state = { apiResponse: '' };
	}

	render() {
		return (
			<Router>
				<NavBar parentGetSearchable={this.getSearchable} />
				<Message />
			</Router>
		);
	}
}

export default App;
