import React, { Component } from 'react';
import Nav from 'react-bootstrap/Nav';
import NavItem from 'react-bootstrap/NavItem';
import Form from 'react-bootstrap/Form';
import { useSelector, useDispatch } from 'react-redux';
import { author } from './actions/GetAuthor';

class SearchForm extends Component {
	state = {
		author: '',
	};

	constructor(props) {
		super(props);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.input = React.createRef();
		this.state = { address: '' };
	}

	handleSubmit(e) {
		this.state.name = this.input.current.value;
		window.event.preventDefault();
		this.sendData();
	}

	sendData = () => {
		this.props.parentGetSearchable(window.name);
	};

	render() {
		return (
			<Nav>
				<Form inline className="navbar-right" onSubmit={this.handleSubmit}>
					<NavItem>
						<input type="text" className="input" ref={this.input} placeholder="Enter username" />
					</NavItem>
					<NavItem>
						<input type="submit" className="btn btn-sm" type="submit" value="Search"></input>
					</NavItem>
				</Form>
			</Nav>
		);
	}
}

export default SearchForm;
