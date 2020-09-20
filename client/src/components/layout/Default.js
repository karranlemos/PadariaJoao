import React from 'react';


import FullPageImage from '../components/FullPageImage/FullPageImage';
import Header from './inc/Header';
import Footer from './inc/Footer';

import './Default.scss';

export default (props) => {
    const fullPageImage = (props.fullPageImage ? getFullPageImage(props) : null);
    return (
        <div className="body-container">
            <Header/>
            <main id="main">
                {fullPageImage}
                {props.children}
            </main>
            <Footer/>
        </div>
    );
};

function getFullPageImage(props) {
    const fullPageImage = props.fullPageImage;
    return (
        <FullPageImage
            imageUrl={fullPageImage.imageUrl || ''}
            content={fullPageImage.content || null}
            bigImage={fullPageImage.bigImage || false}
        />
    );
}