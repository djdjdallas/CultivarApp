import React from "react";
import { Col, Container, Row } from "react-bootstrap";

import Form from "react-bootstrap/Form";
function LoginPage() {
  return (
    <Container>
      <Row className="px-5 my-5">
        <Col>
          <h1>login</h1>
        </Col>
      </Row>
      <Row className="px-5 my-5">
        <Col>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="name@example.com" />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Example textarea</Form.Label>
              <Form.Control as="textarea" rows={3} />
            </Form.Group>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default LoginPage;
