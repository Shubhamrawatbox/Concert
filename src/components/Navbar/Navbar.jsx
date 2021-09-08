import React from "react"
import Navbar from "react-bootstrap/Navbar"
import Nav from "react-bootstrap/Nav"
import { Link } from "gatsby"
import { Container } from "react-bootstrap"

import "bootstrap/dist/css/bootstrap.min.css"
import './Navbar.scss'

const MainNavbar = () => {
  return (
    <div>
      <Navbar bg="light" expand="lg" className="main-navbar">
        <Container>
          <Navbar.Brand href="#home ">
              <span className="nav-concert">Concert</span>
              <span className="nav-party">Party</span>
              </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto" style={{marginLeft:'auto'}}>
              <Link to='/' className="nav-link">Home</Link>
              <Link to='/Contact' className="nav-link">Contact</Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  )
}

export default MainNavbar
