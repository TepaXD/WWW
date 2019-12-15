import React, { Component } from 'react';
import Nav from 'react-bootstrap/Nav';
import NavItem from 'react-bootstrap/NavItem';
import Form from 'react-bootstrap/Form';

class SearchForm extends Component {
	state = {
		author_typed: '',
	};

	constructor(props) {
		super(props);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleChange = this.handleChange.bind(this);
	}

	handleSubmit(e) {
		e.preventDefault();
	}

	handleChange(e) {
		this.setState({ author_typed: e.target.value });
	}

	render() {
		return (
			<Nav>
				<Form inline className="navbar-right" onSubmit={this.handleSubmit}>
					<NavItem>
						<Form.Control
							type="text"
							className="input"
							placeholder="Enter username"
							onChange={this.handleChange}
						></Form.Control>
					</NavItem>
					<NavItem>
						<input type="submit" className="btn" type="submit" value="Search posts!"></input>
					</NavItem>
				</Form>
			</Nav>
		);
	}
}

export default SearchForm;
