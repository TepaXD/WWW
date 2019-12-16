import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';
import './styles/CustomNavbar.css';
import NavItem from 'react-bootstrap/NavItem';
//Navbar for the app that is shown on all views
class CustomNavbar extends Component {
	render() {
		return (
			<Navbar sticky="top" expand="md" className="navbar my-navbar">
				<Navbar.Brand className="navbar-brand">
					<img src="./assets/Avocado_logo.png" width="80px" />
					Avocado
				</Navbar.Brand>
				<Navbar.Toggle aria-controls="responsive-navbar-nav" />
				<Navbar.Collapse id="responsive-navbar-nav">
					<Nav className="ml-auto">
						<Nav className="nav-container">
							<NavItem href="/" to="/">
								<Link to="/" href="#" className="navbar-text">
									Home
								</Link>
							</NavItem>
							<NavItem href="/" to="/">
								<Link to="/about" href="#" className="navbar-text">
									About
								</Link>
							</NavItem>
						</Nav>
					</Nav>
				</Navbar.Collapse>
			</Navbar>
		);
	}
}

export default CustomNavbar;
