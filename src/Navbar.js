import './App.css';
import React from "react";
import { Button, Container, Nav } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

export function CustomNavbar() {
  return (
    <Container
    style={{
      padding: 10,
      alignItems: "center",
      flexDirection: "column",
      display: "flex",
    }}
    fluid
  >
    <Nav variant="pills">
      <Nav.Item style={{  paddingInline: 10 }}>
        <Nav.Link
          as={Button}
        >
          Home
        </Nav.Link>
      </Nav.Item>
    
      <Nav.Item style={{ paddingInline: 10 }}>
        <Nav.Link
          as={Button}
        >
          About me
        </Nav.Link>
      </Nav.Item>
    </Nav>
  </Container>
  );
}
