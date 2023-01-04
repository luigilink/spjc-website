import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { faTwitter, faGithubAlt, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const Footer = () => {
    return (
        <footer className="footer">
            <Container>
                <Row className="align-items-center">
                    <Col size={12} sm={6} className="text-center text-sm-end">

                    </Col>
                    <Col size={12} sm={6} className="text-center text-sm-end">
                        <div className="social-icon">
                            <a target='_blank' href='https://www.linkedin.com/in/jean-cyril-drouhin/'><FontAwesomeIcon icon={faLinkedinIn} /></a>
                            <a target='_blank' href='https://github.com/luigilink'><FontAwesomeIcon icon={faGithubAlt} /></a>
                            <a target='_blank' href='https://twitter.com/luigilinkwii'><FontAwesomeIcon icon={faTwitter} /></a>
                        </div>
                        <p>Copyright 2022. All Rights Reserved</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}