// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";

export function DeleteCars() {
  const id = window.location.pathname.split("/").pop();
  //on utilise un state pour stocker le user

  const [avis, setAvis] = useState(null);
  //on utilise une fonction pour récupérer le user correspondant à l'id

  const API_URL = "https://marsaudolivier.alwaysdata.net/annonces/" + id;
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
   <p>Nom: {avis[0].titre}</p>
      <p>Prénom: {avis[0].kilometrage}</p>
      <p>Commentaire: {avis[0].annee}</p>
      <p>Note : {avis[0].prix}</p>
      <p>Marque : {avis[0].marque}</p>
      <p>Modele : {avis[0].modele}</p>
      <p>Photo : <img src={`https://marsaudolivier.alwaysdata.net/public/images/${avis[0].photo_principal}`} alt="car" width="100" /></p>
      </div>
   
   
      <button
        onClick={() => {
          //récupération de l'Id_Voitures et passage en formData pour l'envoyer au serveur
          const formData = new FormData();
          formData.append("Id_Voitures", avis[0].Id_Voitures);
          //On envoie la requête DELETE vers le serveur avec les données du formula
          // fetch("http://localhost:3000/annonces/" + id, {

          fetch("https://marsaudolivier.alwaysdata.net/annonces/" + id, {
            method: "DELETE",
            body: formData,
          })
            .then((response) => response.json())
            .then((data) => {
              console.log("Success:", data);
              window.location.href = "/admin/cars/show";
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
    
 
