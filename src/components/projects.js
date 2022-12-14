import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

export const Projects = () => {
    return (
        <section className="projects" id="projects">
            <Container>
                <Row className="aligh-items-center">
                    <Col xs={12} md={6} xl={7}>
                    <div>
                        <h1>Projects</h1>
                    </div>
                    </Col>
                </Row>
            </Container>
        </section>
        )
}
