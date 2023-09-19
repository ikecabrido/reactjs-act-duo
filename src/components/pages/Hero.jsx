import React from 'react'
import  Container  from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Row/Col";

export const Hero = () => {
 return <section id = "hero">
    <Container>
        <Row>
            <Col>
                <h3>We don’t just teach code.</h3>
                <p>We teach code that gets you hired. At KodeGo, our graduates undergo intensive tech bootcamps and are then placed with our Company partners</p>
            </Col>
        </Row>
    </Container>

 </section>
}
