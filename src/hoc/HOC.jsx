import React from 'react';

/* This HOC component returns the incoming component with an additional data
based on the prop name */

const HOC = ({ name }) => (Component) => {
    const newCmp = () => {
        const dataToRender = () => {
            const data = {
                'edgar': <h5>Hey I'm edgar</h5>,
                'juan': <h5>Hey I'm Juan</h5>,
            };

            return data[name] ?? null;

        };

        return (
            <>
                <Component />
                {dataToRender()}
            </>
        );
    }
    return newCmp;
};

export default HOC;

