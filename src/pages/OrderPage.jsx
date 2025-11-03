import React from "react";
// import { useParams } from "react-router-dom";
import { useLocation, useNavigate, useParams } from "react-router-dom";

const OrderPage = () => {
  //state
  const navigate = useNavigate();
  const location = useLocation();
  // const {prenom} = useParams();
  const prenom = location.state?.prenom || "inconnu";

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
