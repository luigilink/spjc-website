import React from 'react';
import ReactDOM from 'react-dom/client';
import { Navi } from './components/navi';
import { Banner } from './components/banner';
import { About } from './components/about';
import { Projects } from './components/projects';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/main.scss'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <>
        <Navi />
        <Banner />
        <About />
        <Projects />
    </>
);