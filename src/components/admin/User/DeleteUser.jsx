import React, { useState, useEffect } from "react";

export function DeleteUser() {
  const id = window.location.pathname.split("/").pop();
  //on utilise un state pour stocker le user

  const [user, setUser] = useState(null);
  //on utilise une fonction pour récupérer le user correspondant à l'id

  const API_URL = "https://marsaud.onrender.com/utilisateurs/" + id;
  // The separate async function
  const getUser = async () => {
    const response = await fetch(API_URL);
    const userData = await response.json();
    setUser(userData);
    console.log(userData);
  };
  useEffect(() => {
    getUser();
  }, []);
  if (!user) {
    return <p>Chargement...</p>;
  } else {
    return (
      <>
      <h3>Affichage utilisateur a effacer</h3>
      <p>{user[0].nom}</p>
      <p>{user[0].prenom}</p>
      <p>{user[0].mail}</p>
   
      <button
        onClick={() => {
          fetch("https://marsaud.onrender.com/utilisateurs/" + id, {
            method: "DELETE",
          })
            .then((response) => response.json())
            .then((data) => {
              console.log("Success:", data);
              window.location.href = "/admin/user/show";
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
    
 
