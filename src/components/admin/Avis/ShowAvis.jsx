import React, { useState, useEffect } from "react";
export function ShowAvis() {
  const [avis, setAvis] = useState([]);
  const API_URL = "https://marsaud.onrender.com/avis";

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
            <th scope="col">Nom</th>
            <th scope="col">Prénom</th>
            <th scope="col">Commentaire</th>
            <th scope="col">Note</th>
            <th scope="col">Validation</th>
            {/* bouton pour modifier en récupérant l'id */}
            <th scope="col">Modifier</th>
            <th scope="col">Suprimer</th>
          </tr>
        </thead>
        <tbody>
          {avis.map((avi) => (
            <tr scope="row" key={avi.Id_Avis}>
              <td>{avi.nom}</td>
              <td>{avi.prenom}</td>
              <td>{avi.commentaire}</td>
              <td>{avi.note}</td>
              <td>{avi.Id_Validations === 1 ? "Non validé" : "validé"}</td>  
              <td>
                <button
                  onClick={() => {
                    window.location.href =
                      "/admin/avis/show/" + avi.Id_Avis;
                  }}
                  className="btn btn-outline-danger p-4"
                >
                  Modifier
                </button>
              </td>
              <td>
                <button
                  onClick={() => {
                    window.location.href =
                      "/admin/avis/delete/" + avi.Id_Avis;
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
