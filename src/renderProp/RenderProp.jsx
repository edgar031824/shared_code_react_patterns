import React from 'react';

/* This component executes the render prop with the data that depends of the name prop */

const RenderProp = ({ name, render }) => {
    const dataToRender = () => {
        const data = {
            'edgar': <h5>Hey I'm edgar</h5>,
            'juan': <h5>Hey I'm Juan</h5>,
        };

        return data[name] ?? null;

    };
    return (
        render(dataToRender())
    );
};

export default RenderProp;