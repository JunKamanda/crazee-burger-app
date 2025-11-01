import React from 'react';
import { useLocation } from 'react-router-dom';

const OrderPage = () => {
    //state
    const location =  useLocation()
    const prenom =  location.state?.prenom || "inconnu";
    //comportement

    //render
    return (
        <div>
            <h1>Bonjour {prenom}</h1>
        </div>
    );
};

export default OrderPage;