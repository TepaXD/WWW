import React, { Component } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import "./palkki.css";
import NavItem from "react-bootstrap/NavItem";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import SearchForm from "./SearchForm";
import "./CustomNavbar.css";

class CustomNavbar extends Component {
  state = {
    searchable: ""
  };

  getSearchable = data => {
    this.setState({ searchable: data });
    this.sendData();
  };

  sendData = () => {
    this.props.parentGetSearchable(this.state.searchable);
  };

  render() {
    return (
      <Router>
        <div>
          <Navbar
            sticky="top"
            collapseOnSelect
            expand="ml"
            className="navbar-default"
          >
            <Navbar.Brand className="navbar-brand">Avocado</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="mr-auto">
                <SearchForm parentGetSearchable={this.getSearchable} />
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </div>
      </Router>
    );
  }
}

export default CustomNavbar;
