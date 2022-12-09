import React from 'react';
import ReactDOM from 'react-dom/client';
import { Navi } from './components/navi';
import { Banner } from './components/banner';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/main.scss'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <>
        <Navi />
        <Banner />
    </>
);
