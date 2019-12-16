import React, { Component } from 'react';
import NavBar from './components/CustomNavbar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Posts from './components/Posts';
import About from './components/About';
import NotFound from './components/NotFound';

//Building the views and using Switch to prevent any unwanted route
class App extends Component {
	render() {
		return (
			<Router>
				<NavBar />
				<Switch>
					<Route exact path="/" component={Posts} />
					<Switch>
						<Route exact path="/about" component={About} />
						<Route exact path="/*" component={NotFound} />
					</Switch>
				</Switch>
			</Router>
		);
	}
}

export default App;
