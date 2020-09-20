import React from 'react';

import Default from '../layout/Default';

export default (props) => (
    <Default>
        <h1>{props.error || 'Unknown Error'}</h1>
    </Default>
);