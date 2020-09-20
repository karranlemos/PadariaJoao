import React from 'react';

import Header from './inc/Header';
import Footer from './inc/Footer';

export default (props) => (
    <div className="body-container">
        <Header/>
        <main id="main">
            <div className="container">
                {props.children}
            </div>
        </main>
        <Footer/>
    </div>
);