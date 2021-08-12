import React from 'react';

/* this hook returns an object with the key data which is based on the prop name,
it could return an array as well, but is desirable return an object. */

const useCustom = (name) => {
    const dataToRender = () => {
        const data = {
            'edgar': <h5>Hey I'm edgar</h5>,
            'juan': <h5>Hey I'm Juan</h5>,
        };

        return data[name] ?? null;

    };
    return {
        data: dataToRender()
    }
};

export default useCustom;