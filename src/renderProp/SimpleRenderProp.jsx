import React from 'react';
import RenderProp from './RenderProp';

/* The render prop pattern is useful to share code between components using a prope whose
value is a function. In this brief example the RenderProp component receives the render
prop which is a function that returns some content that will be rendered */

const SimpleRenderProp = () => {
    return (
        <>
            <h1>SimpleRenderProps Component</h1>
            <RenderProp name="edgar" render={(data) => data} />
        </>

    );
};

export default SimpleRenderProp;