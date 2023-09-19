import { Accordion, Button } from "react-bootstrap";
import { Container, Row, Col, Card } from "react-bootstrap";
import "./Courses.css";

const Courses = () => {
  return (
    <section>
      <div className="text">
        <h1>Courses</h1>
        <p>Build your Tech Career</p>
      </div>
      <div className="card">
        <Accordion>
          <Accordion.Item eventKey="0">
            <Accordion.Header></Accordion.Header>
            <Accordion.Body>
              <Container>
                <Row>
                  <Col>
                    <Card style={{ width: "18rem" }}>
                      <Card.Img
                        variant="top"
                        src="./src/assets/pics/cardimg1.jpg"
                      />
                      <Card.Body>
                        <Card.Title>
                          Full-Stack Web Development (Day Classes)
                        </Card.Title>
                        <Card.Text>
                          Become a full-stack web developer with the
                          fundamentals of both front-end and back-end web
                          development. Enroll now!
                        </Card.Text>
                      </Card.Body>
                      <Card.Footer className="text-muted">
                        <p>32/40 enrolled</p>
                        <Button>Learn more</Button>
                      </Card.Footer>
                    </Card>
                  </Col>
                  <Col>
                    <Card style={{ width: "18rem" }}>
                      <Card.Img
                        variant="top"
                        src="./src/assets/pics/cardimg1.jpg"
                      />
                      <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                          Some quick example text to build on the card title and
                          make up the bulk of the card's content.
                        </Card.Text>
                      </Card.Body>
                    </Card>
                  </Col>
                  <Col>
                    <Card style={{ width: "18rem" }}>
                      <Card.Img
                        variant="top"
                        src="./src/assets/pics/cardimg1.jpg"
                      />
                      <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                          Some quick example text to build on the card title and
                          make up the bulk of the card's content.
                        </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                      </Card.Body>
                    </Card>
                  </Col>
                  <Col className="d-flex justify-content-center align-items-center">
                    <Card style={{ width: "18rem" }}>
                      <Card.Img
                        variant="top"
                        src="./src/assets/pics/cardimg1.jpg"
                      />
                      <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                          Some quick example text to build on the card title and
                          make up the bulk of the card's content.
                        </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                      </Card.Body>
                    </Card>
                  </Col>
                </Row>
              </Container>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
    </section>
  );
};
export default Courses;
