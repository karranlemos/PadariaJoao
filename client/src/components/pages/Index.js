import path from 'path';

import React from 'react';

import Default from '../layout/Default';

export default () => {
    const fullPageImage = {
        imageUrl: path.join('/image/pages/home.jpg'),
        content: (
            <React.Fragment>
                <h1>Padaria do João</h1>
                <p>Os pães mais quentinhos do país</p>
            </React.Fragment>
        ),
        bigImage: true
    };

    return (
        <Default fullPageImage={fullPageImage}>
            <div className="container">
                {fullPageImage.imageUrl}
            </div>
        </Default>
    );
};