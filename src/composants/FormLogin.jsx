import React, { useState } from "react";

const FormLogin = () => {
  //State
  const [prenom, setPrenom] = useState("");

  //comportements
  const handleChange = (e) => {
    const valueAfterChange = e.target.value;
    setPrenom(valueAfterChange);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Bonjour ${prenom}`);
    setPrenom("");
  };
  //render
  return (
    <div>
      <form action="submit" onSubmit={handleSubmit}>
        <h1>Bienvenue chez nous !</h1>
        <br />
        <h2>connectez-vous</h2>
        <input
          onChange={handleChange}
          type="text"
          placeholder="Entrez votre prenom..."
          value={prenom}
          required
        />
        <button>Accéder à votre espace</button>
      </form>
    </div>
  );
};

export default FormLogin;
