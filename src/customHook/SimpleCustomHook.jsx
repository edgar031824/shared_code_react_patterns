import React from 'react';
import useCustom from './useCustom';

/* This component calls the useCustom to get the dynamic data to render */

const SimpleCustomHook = () => {
    const { data } = useCustom('edgar');

    return (
        <>
            <h1>SimpleCustomHook Component</h1>
            {data}
        </>
    );
};

export default SimpleCustomHook;