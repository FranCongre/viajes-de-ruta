import React from "react";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "../../Styles/Componentes/Layout/Nav.css";

function newNav() {
  return (
    <Navbar className="barra" expand="lg">
      <Navbar className="menu">
          <NavDropdown
            title="MENU"
            className="opcion"
            id="navbarScrollingDropdown"
          >     <li>
            <NavDropdown.Divider />
            <NavDropdown.Item href="/">
              <a>Home</a>
            </NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="/Experiencias">
            <a>Experiencia</a>
            </NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="/Consejos"><a>Consejos</a></NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="/Sumate"><a>Sumate</a></NavDropdown.Item>
            <NavDropdown.Divider />
            </li>
          </NavDropdown>
      </Navbar>
    </Navbar>
  );
}

export default newNav;
