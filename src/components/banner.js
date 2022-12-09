import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Typewriter } from 'react-simple-typewriter';
import { faTwitter, faGithubAlt, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const Banner = () => {

    const [state] = useState({
        webuild: "#WeBuild",
        mynameis: "Hi, I'm JC!",
    });

    return (
        <section className="banner" id="home">
            <Container>
                <Row>
                    <Col>
                        <div>
                            <h1>{state.webuild}</h1>
                            <h1>{state.mynameis}</h1>
                            <h2 className='pt-3'>
                                <Typewriter
                                    words={['A SharePoint Guy', 'SharePoint Developer', 'PowerShell Developer', 'DevOps Engineer', 'Passionate Geek']}
                                    loop={0}
                                    cursor
                                    cursorStyle='_'
                                    typeSpeed={90}
                                    deleteSpeed={50}
                                    delaySpeed={1000}
                                />
                            </h2>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <div className="social-icon pt-5 text-center">
                            <a target='_blank' href='https://www.linkedin.com/in/jean-cyril-drouhin/'><FontAwesomeIcon icon={faLinkedinIn} /></a>
                            <a target='_blank' href='https://github.com/luigilink'><FontAwesomeIcon icon={faGithubAlt} /></a>
                            <a target='_blank' href='https://twitter.com/luigilinkwii'><FontAwesomeIcon icon={faTwitter} /></a>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}
