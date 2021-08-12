import React from 'react';
import HOC from './HOC';

/* This component is passed to the HOC and then exported,the data returned
depends on the props which are already passed as a first parameter
(in this case a simple object with the key name). */

const SimpleHoc = () => {
    return (
        <>
            <h1>SimpleHoc Component</h1>
        </>
    );
};

export default HOC({ name: 'edgar' })(SimpleHoc);