import React, { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../all.css'
import { useRoutes, Outlet, Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useAuth } from "./Context";

const Layout = () => {
  const { token, setToken } = useAuth()

  const handleLogOut = () => {
    console.log('logout')
    localStorage.clear()
    setToken(null)
    localStorage.setItem('user', JSON.stringify(''));
  }
  return (
    <div>
      <div id="todoListPage" className="bg-half">

        {/* <h1><a href="#">ONLINE TODO LIST</a></h1> */}
        <Navbar className="nav-bar" expand="lg">
          <Container>
            <Navbar.Brand href="#home"><h1 className="title">ONLINE TODO LIST</h1></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link as={Link} to="/SignIn" >Login</Nav.Link>
                <Nav.Link as={Link} to="/Tabs">TodoList</Nav.Link>
                <Nav.Link as={Link} to="/" onClick={handleLogOut}>Logout</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>

        <main>

          <Outlet />

        </main>
      </div>
    </div>
  );
}

export default Layout;
