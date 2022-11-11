import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Alert from 'react-bootstrap/Alert';
import Accordion from 'react-bootstrap/Accordion';

export default function Additional() {
  return (
    <Alert variant="success">
      <Alert.Heading>Hey, nice to see you</Alert.Heading>
      <p>
        Aww yeah, you successfully read this important alert message.
      </p>
      <hr />
      <p className="mb-0">
        Whenever need to: 
      </p>

<Accordion>
<Accordion.Item eventKey="0">
  <Accordion.Header>our suggestion</Accordion.Header>
  <Accordion.Body>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
  </Accordion.Body>
</Accordion.Item>
</Accordion>
</Alert>
  );

}
