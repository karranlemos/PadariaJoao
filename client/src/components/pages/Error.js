import React from 'react';

import Default from '../layout/Default';

export default (props) => (
    <Default>
        <div className="container">
            <h1>{props.error || 'Unknown Error'}</h1>
        </div>
    </Default>
);