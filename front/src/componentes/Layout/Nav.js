import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import'../../Styles/Componentes/Layout/Nav.css'

function newNav() {
  return (
    <Navbar expand="lg" className="barra bg-body-tertiary">
      <Container fluid>
        <Navbar.Toggle aria-controls="menu" />
        <Navbar.Collapse id="menu">
          <Nav
            className="opcion me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            menu
          >
            <NavDropdown title="Link" id="activo">
              <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default newNav;