import React from 'react';
import ReactDOM from 'react-dom/client';
import Navi from './navi';
import Home from './home';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <>
        <Navi />
        <Home />
    </>    
);
