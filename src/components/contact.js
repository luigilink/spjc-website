import React from 'react';
import { Container, Row, Col, Button, Form } from 'react-bootstrap';

export const Contact = () => {
    const formInitialDetails = {
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        message: ''
    }
    return (
        <section className="contact" id="contact">
            <Container>
                <Row className="aligh-items-center">
                    <Col xs={12} md={6} xl={7}>
                        <div>
                            <h1>Get it touch !</h1>
                        </div>
                    </Col>
                    <Col>
                        <Form>
                            <Form.Group className='mb-3' controlId='formBasicName'>
                                <Form.Label>Your Name</Form.Label>
                                <Form.Control type="name" placeholder="Enter your name" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" placeholder="Enter your email" />
                            </Form.Group>
                            <Form.Group className='mb-3' controlId='formBasicPhone'>
                                <Form.Label>Your Phone</Form.Label>
                                <Form.Control type="phone" placeholder="Enter your phone" />
                                <Form.Text className="text-muted">
                                    We'll never share your personal information with anyone else.
                                </Form.Text>
                            </Form.Group>
                            <Form.Group className='mb-3' controlId='formBasicSubject'>
                                <Form.Control type="subject" placeholder="Subject" />
                            </Form.Group>
                            <Form.Group className='mb-3' controlId='formBasicDescription'>
                                <Form.Control as="textarea" rows={3} />
                            </Form.Group>                            
                            <Button variant="primary" type="submit" placeholder='qksdhqlsg'>
                                Submit
                            </Button>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}
