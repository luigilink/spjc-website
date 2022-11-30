import React from 'react';
import { Container, Navbar, Nav} from 'react-bootstrap';
import './styles/bootstrap.min.css';

function navi() {
    return (
        <header>
            <Navbar bg='dark' variant='dark' expand='lg' fixed='top'>
                <Container>
                    <Navbar.Brand href='#home'>SPWakeUp</Navbar.Brand>
                    <Navbar.Toggle aria-controls='basic-navbar-nav' />
                    <Navbar.Collapse id='basic-navbar-nav'>
                        <Nav className='me-auto'>
                            <Nav.Link href='#features'>Features</Nav.Link>
                            <Nav.Link href='#guide'>Guide</Nav.Link>
                            <Nav.Link target='_blank' href='https://github.com/luigilink/spswakeup/releases'>Releases</Nav.Link>
                            <Nav.Link target='_blank' href='https://github.com/luigilink/spswakeup'>View on Github</Nav.Link>
                        </Nav>
                        <Nav className='flex-icons'>
                            <Nav.Link target='_blank' href='https://www.linkedin.com/in/jean-cyril-drouhin/'>linkedin</Nav.Link>
                            <Nav.Link target='_blank' href='https://github.com/luigilink'>Releases</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    );
}

export default navi;