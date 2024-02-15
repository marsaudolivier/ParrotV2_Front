import React, { useState, useEffect } from "react";
export function ShowContact() {
  const [avis, setAvis] = useState([]);
  const API_URL = "https://marsaud.onrender.com/formulaires";

  // The separate async function
  const getAvis = async () => {
    const response = await fetch(API_URL);
    const avisData = await response.json();
    setAvis(avisData);
  };

  useEffect(() => {
    getAvis();
  }, []);
  
  return (
    <>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">nom</th>
            <th scope="col">prenom</th>
            <th scope="col">email</th>
            <th scope="col">telephone</th>
            <th scope="col">message</th>
            <th scope="col">annonce</th>
            <th scope="col">Etat</th>
            {/* bouton pour modifier en récupérant l'id */}
            <th scope="col">Switch Etat</th>
            <th scope="col">Suprimer</th>
          </tr>
        </thead>
        <tbody>
          {avis.map((avi) => (
            <tr scope="row" key={avi.Id_Avis}>
              <td>{avi.nom}</td>
              <td>{avi.prenom}</td>
              <td>{avi.mail}</td>
              <td>{avi.telephone}</td>
              <td>{avi.message}</td>
              {/* si avi.annonce est null alor affiché rien sinon affichage "Demande Voiture" */}
              <td>{avi.annonce === "" ? " " : "Demande Voiture"}</td>
              <td>{avi.Id_FormulairesOk === 1 ? "Traité" : "Non traité"}</td>
              <td>
                <button
                  onClick={() => {
                    if(avi.Id_FormulairesOk ===1){//envoie update  etat a 2 = Non traité
                      fetch("https://marsaud.onrender.com/formulaires/" + avi.Id_Formulaires, {
                        method: "PUT",
                        headers: {
                          "Content-Type": "application/json",
                        },
                        body: JSON.stringify({Id_FormulairesOk:2}),
                      })
                        .then((response) => response.json())
                        .then((data) => {
                          console.log("Success:", data);
                          window.location.href = "/admin/contact/show";
                        })
                        .catch((error) => {
                          console.error("Error:", error);
                        });
                      
                    }else{
                      fetch("https://marsaud.onrender.com/formulaires/" + avi.Id_Formulaires, {
                        method: "PUT",
                        headers: {
                          "Content-Type": "application/json",
                        },
                        body: JSON.stringify({Id_FormulairesOk:1}),
                      })
                        .then((response) => response.json())
                        .then((data) => {
                          console.log("Success:", data);
                          window.location.href = "/admin/contact/show";
                        })
                        .catch((error) => {
                          console.error("Error:", error);
                        });
                    
                    }
                  }}
                  className="btn btn-outline-danger p-4"
                >
                  Modifier
                  </button>{" "}
                  </td>
              <td>
                <button
                  onClick={() => {
                    window.location.href =
                      "/admin/contact/delete/" + avi.Id_Formulaires;
                  }}
                  className="btn btn-outline-danger p-4"
                >
                  Suprimer
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
