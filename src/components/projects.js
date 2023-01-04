import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { ProjectCard } from './projectcard';
import imgSPWakeup from '../assets/download.jpg'
import imgSPCUInator from '../assets/inputxml.jpg'
import imgSPTrustFarm from '../assets/unzipcopy.jpg'

export const Projects = () => {

    const projects = [
        {
            title: 'SPWakeUp',
            description: 'Wake up all sites collection in SharePoint OnPremises',
            imgUrl: imgSPWakeup,
        },
        {
            title: 'SPCUInator',
            description: 'Install Cumulative Updates and Upgrade Farm Databases',
            imgUrl: imgSPCUInator,
        },
        {
            title: 'SPTrustFarm',
            description: "Design & Development",
            imgUrl: imgSPTrustFarm,
        }
    ];
    
    return (
        <section className='projects' id='projects'>
            <Container>
                <Row className='aligh-items-center'>
                    <Col xs={12} md={6} xl={7}>
                    <div>
                        <h1>Projects</h1>
                    </div>
                    </Col>
                </Row>
                <Row>
                    {
                        projects.map((project, index) => {
                            return (
                                <ProjectCard
                                    key={index}
                                    {...project}
                                />
                            )
                        })
                    }
                </Row>
            </Container>
        </section>
    );
}
