import React from "react"
import Navbar from "react-bootstrap/Navbar"
import Nav from "react-bootstrap/Nav"
import { Link } from "gatsby"
import { Container } from "react-bootstrap"

import "bootstrap/dist/css/bootstrap.min.css"
import "./Navbar.scss"

const MainNavbar = ({auth}) => {
  const authText=auth ? "logout" : "login"
  return (
    <div>
      <Navbar bg="light" expand="lg" className="main-navbar">
        <Container>
          <Navbar.Brand>
            <Link to="/">
              <span className="nav-concert">Concert</span>
              <span className="nav-party">Party</span>
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto" style={{ marginLeft: "auto" }}>
              <Link to="/Concert" className="nav-link">
                Concert_Info
              </Link>
              <Link to="/Login" className="nav-link">
                {authText}
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  )
}

export default MainNavbar
