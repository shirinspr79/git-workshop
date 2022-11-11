import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Container,Col,Row } from "react-bootstrap";
import {
  AiFillGithub,
  BsUiChecks,
  BsChatText
} from "react-icons/ai";

export default function Main() {
  return ( 
    <Container
    style={{
      padding: 50,
      alignItems: "center",
      flexDirection: "column",
      display: "flex",
    }}
    fluid
  >
   <Row>
    <Col>
      <Card style={{ width: '14rem', marginLeft: "10%" }}>
          <Card.Img variant="top" src="/../img/avatar.png" />
          <Card.Body>
            <Card.Title>Erfan faravani</Card.Title>
            <Card.Text>
              text to build on the card the card's content.
            </Card.Text>
            <Button variant="primary">more</Button>
          </Card.Body>
          </Card>
          </Col>   
      <Col>
      <Card style={{ width: '14rem', marginLeft: "10%" }}>
        <Card.Img variant="top" src="/../img/avatar2.jpg" />
          <Card.Body>
            <Card.Title>Ali ahmadi</Card.Title>
            <Card.Text>
             the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary">more</Button>
          </Card.Body> 
          </Card>
          </Col> 
                 <Col>
                     <AiFillGithub />
                     <BsUiChecks />
                     <BsChatText />
                 </Col>
        </Row>  
        </Container>
      );
    }
    
  