import React from 'react';

const PageNotFound = () => {
    return (
        <div style={{ textAlign: 'center' }}>
            <h1>404</h1>
            <h2>Página no encontrada</h2>
            <p>Lo sentimos, la página que buscas no existe.</p>
            <a href="/">Volver al inicio</a>
        </div>
    );
};

export default PageNotFound;
