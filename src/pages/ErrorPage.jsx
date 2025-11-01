import React from "react";
import { useNavigate } from "react-router-dom";

const ErrorPage = () => {
  //state
  const navigate = useNavigate();

  //comportement
  const handleClick = () => {
    navigate("/");
  };

  //render
  return (
    <div>
      <h1>Page Not Found</h1>
      <button onClick={handleClick}>Retourner vers la page d'accueil</button>
    </div>
  );
};

export default ErrorPage;
