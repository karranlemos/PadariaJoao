import React from 'react';

import Header from './inc/Header';
import Footer from './inc/Footer';

import './Default.scss';

export default (props) => (
    <div className="body-container">
        <Header/>
        <main id="main">
            {props.children}
        </main>
        <Footer/>
    </div>
);