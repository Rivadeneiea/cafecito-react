import React from "react";
import { Navigate } from "react-router-dom";

const EncapsularRutas = ({ children }) => {
  // aqui agrego logica para quienes pueden adminitrar la web
  const usuarioLogeado =
    JSON.parse(sessionStorage.getItem("usuarioLogeado")) || null;
  if (!usuarioLogeado) {
    return <Navigate to={"/login"}></Navigate>;
  } else {
    return children;
  }
};

export default EncapsularRutas;
