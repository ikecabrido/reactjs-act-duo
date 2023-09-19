import { Container, Row, Col, Card, Form } from "react-bootstrap";
import "./signin.css";
const SignIn = () => {
  return (
    <section id="signin">
      <Container>
        <Row>
          <Col className="img w-100"></Col>
          <Col>
            <Card>
              <Card.Body>
                <h3 className="text-align-center">Sign In to Your Account</h3>
                <Form>
                  <Form.Group controlId="formGroupEmail">
                    <Form.Control type="email" placeholder="Enter email" />
                  </Form.Group>
                  <Form.Group controlId="formGroupPassword">
                    <Form.Control type="password" placeholder="Password" />
                  </Form.Group>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default SignIn;
