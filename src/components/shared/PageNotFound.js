import React from "react";
import NotFoundImage from "././../../assets/error 404.png";

const PageNotFound = () => {
  return (
    <div style={{ textAlign: "center" }}>
      <h1>404</h1>
      <h2>Página no encontrada</h2>
      <p>Lo sentimos, la página que buscas no existe.</p>

      <img
        src={NotFoundImage}
        alt="Página no encontrada"
        style={{ maxWidth: "100%", height: "auto" }}
      />
      <a href="/">Volver al inicio</a>
    </div>
  );
};

export default PageNotFound;
