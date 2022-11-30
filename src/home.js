import React from 'react';
import './styles/bootstrap.min.css';
import { Container, Row} from 'react-bootstrap';

function home() {
    return (
        <main>
            <div id="home" className="view hm-black-strong container-fluid d-flex h-100">
                <Container>
                    <div className="row d-flex justify-content-center">
                        <div className="col-md-10 text-center">
                            <h1 className="display-3 font-bold white-text mb-2">#WeBuild</h1>
                            <h2 className="display-3 font-bold white-text mb-2">Wake Up Your SharePoint</h2>
                            <h4 className="white-text my-4">SPWakeUp wake up all sites collection in SharePoint OnPremises.</h4>
                            <h5 className="white-text">Latest version: 2.5.1 - October 14th 2022</h5>
                        </div>
                    </div>
                </Container>
            </div>
        </main>
    )
}

export default home;