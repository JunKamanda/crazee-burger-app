import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const OrderPage = () => {
  //state
  const location = useLocation();
  const prenom = location.state?.prenom || "inconnu";
  const navigate = useNavigate();

  //comportement
  const handleClick = ()=>{
    navigate("/")
  }

  //render
  return (
    <div>
      <h1>Bonjour {prenom}</h1>
      <br />
      <button onClick={handleClick}>Déconnexion</button>
    </div>
  );
};

export default OrderPage;
