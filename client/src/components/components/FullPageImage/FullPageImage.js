import React from 'react';

import './FullPageImage.scss';

export default (props) => {
    const bigImageClass = props.bigImage ? 'big-image' : '';
    const css = {
        backgroundImage:
            `linear-gradient(to bottom, rgba(0, 0, 0, 40%), rgba(0, 0, 0, 40%)), `+
            `url("${props.imageUrl}") `
    };

    return (
        <div className={`full-page-image ${bigImageClass}`} style={css}>
            {props.children}
        </div>
    );
};