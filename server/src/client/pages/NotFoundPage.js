import React from 'react';

const NotFountPage = ({ staticContext = {} }) => {
    staticContext.notFound = true;
    return <h1>Page not found...</h1>
}

export default {
    component: NotFountPage
}