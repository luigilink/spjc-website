import { faTwitter, faGithubAlt, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState, useEffect } from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';

export const Navi = () =>  {
    const [activeLink, SetActiveLink] = useState('home');
    const [scrolled, seScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 50) {
                seScrolled(true);
            }
            else {
                seScrolled(false);
            }
        }
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, [])

    const onUpdateActiveLink = (value) => {
        SetActiveLink(value);
    }

    return (
        <Navbar bg='dark' variant='dark' expand='lg' fixed='top' className={scrolled ? "scrolled" : ""}>
            <Container>
                <Navbar.Brand href='#home'>SPJC</Navbar.Brand>
                <Navbar.Toggle aria-controls='basic-navbar-nav' />
                <Navbar.Collapse id='basic-navbar-nav'>
                    <Nav className='me-auto'>
                        <Nav.Link href='#home' className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
                        <Nav.Link href='#about' className={activeLink === 'about' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('about')}>About</Nav.Link>
                        <Nav.Link href='#projects' className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Projects</Nav.Link>
                        <Nav.Link href='#contact' className={activeLink === 'contact' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('contact')}>Contact</Nav.Link>
                    </Nav>
                    <Nav className='flex-icons'>
                        <Nav.Link target='_blank' href='https://www.linkedin.com/in/jean-cyril-drouhin/'><FontAwesomeIcon icon={faLinkedinIn} /></Nav.Link>
                        <Nav.Link target='_blank' href='https://github.com/luigilink'><FontAwesomeIcon icon={faGithubAlt} /></Nav.Link>
                        <Nav.Link target='_blank' href='https://twitter.com/luigilinkwii'><FontAwesomeIcon icon={faTwitter} /></Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}
