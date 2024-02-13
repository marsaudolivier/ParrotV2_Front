// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";

export function DeleteAvis() {
  const id = window.location.pathname.split("/").pop();
  //on utilise un state pour stocker le user

  const [avis, setAvis] = useState(null);
  //on utilise une fonction pour récupérer le user correspondant à l'id

  const API_URL = "https://marsaud.onrender.com/avis/" + id;
  // The separate async function
  const getAvis = async () => {
    const response = await fetch(API_URL);
    const avisData = await response.json();
    setAvis(avisData);
    console.log(avisData);
  };
  useEffect(() => {
    getAvis();
  }, []);
  if (!avis) {
    return <p>Chargement...</p>;
  } else {
    return (
      <>
      <h3>Affichage utilisateur a effacer</h3>
      <div className="para">
   <p>Nom: {avis[0].nom}</p>
      <p>Prénom: {avis[0].prenom}</p>
      <p>Commentaire: {avis[0].commentaire}</p>
      <p>Note : {avis[0].note}/5</p>
      <p>Avis validé:  {avis[0].Id_Validations === 1 ? "Non validé" : "validé"}</p> 
      </div>
   
   
      <button
        onClick={() => {
          fetch("https://marsaud.onrender.com/avis/" + id, {
            method: "DELETE",
          })
            .then((response) => response.json())
            .then((data) => {
              console.log("Success:", data);
              window.location.href = "/admin/avis/show";
            })
            .catch((error) => {
              console.error("Error:", error);
            });
        }}
        className="btn btn-outline-danger p-4"
      >
        Supprimer ce compte
      </button>
      </>
    );
}
}
    
 
