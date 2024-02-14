// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";

export function DeleteServices() {
  const id = window.location.pathname.split("/").pop();
  //on utilise un state pour stocker le user

  const [avis, setAvis] = useState(null);
  //on utilise une fonction pour récupérer le user correspondant à l'id

  const API_URL = "https://marsaud.onrender.com/services/" + id;
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
   <p>Id_Services: {avis[0].Id_Services}</p>
      <p>titre: {avis[0].titre}</p>
      <p>description: {avis[0].description}</p>

      </div>
   
   
      <button
        onClick={() => {
          fetch("https://marsaud.onrender.com/services/" + id, {
            method: "DELETE",
          })
            .then((response) => response.json())
            .then((data) => {
              console.log("Success:", data);
              window.location.href = "/admin/services/show";
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
    
 
