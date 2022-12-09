import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { faTwitter, faGithubAlt, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import SelfPortraitImg from '../assets/selfportrait.jpg'

export const About = () => {

    return (
        <section className="about" id="about">
            <Container>
                <Row className="aligh-items-center">
                    <Col xs={12} md={6} xl={7}>
                        <div>
                            <h1>About Me</h1>
                            <p>I have an extensive background in SharePoint Online and SharePoint On premise, with skills in Infrastructure and development.</p>
                            <p>I also contribute to open source projects on Github around M365 and PowerShell Desired Configuration. I've also been playing a lot with Azure, especially around Azure Resource Manager templates and DSC deployment.</p>
                            <p>You can follow all my contributions and projects on LinkeDin, Github and Twitter.</p>
                            <div className="social-icon">
                                <a target='_blank' href='https://www.linkedin.com/in/jean-cyril-drouhin/'><FontAwesomeIcon icon={faLinkedinIn} /></a>
                                <a target='_blank' href='https://github.com/luigilink'><FontAwesomeIcon icon={faGithubAlt} /></a>
                                <a target='_blank' href='https://twitter.com/luigilinkwii'><FontAwesomeIcon icon={faTwitter} /></a>
                            </div>
                        </div>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <img className='img-fluid rounded-circle shadow-lg' src={SelfPortraitImg} alt='Self-Portrait'></img>
                    </Col>
                </Row>
            </Container>
        </section>
    );

}
