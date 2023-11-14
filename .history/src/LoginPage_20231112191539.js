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
            <Form.Group
              as={Row}
              className="mb-3"
              controlId="formPlaintextEmail"
            >
              <Form.Label column sm="2">
                Email
              </Form.Label>
              <Col sm="10">
                <Form.Control
                  plaintext
                  readOnly
                  defaultValue="email@example.com"
                />
              </Col>
            </Form.Group>

            <Form.Group
              as={Row}
              className="mb-3"
              controlId="formPlaintextPassword"
            >
              <Form.Label column sm="2">
                Password
              </Form.Label>
              <Col sm="10">
                <Form.Control type="password" placeholder="Password" />
              </Col>
            </Form.Group>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default LoginPage;
