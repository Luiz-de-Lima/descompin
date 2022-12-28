import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";
export const HeaderPartial = () => {
  return (
    <>
      <Navbar>
        <Container>
          <Navbar.Brand href="">DesconPin</Navbar.Brand>
          <Nav className="me-auto">
            <Link className="nav-link" to="/">Home</Link>
            <Link className="nav-link" to="minhas-pastas">Minhas Pastas</Link>
          </Nav>z
        </Container>
      </Navbar>

    </>
  );
};
