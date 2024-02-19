import React, { useState, useEffect } from "react";

export function ShowHoraire() {
  const [horaire, setHoraire] = useState([]);
  const API_URL = "https://marsaudolivier.alwaysdata.net/Jours";

  // The separate async function
  const getHoraire = async () => {
    const response = await fetch(API_URL);
    const horaireData = await response.json();
    setHoraire(horaireData);
  };

  useEffect(() => {
    getHoraire();
  }, []);
  
  return (
    <>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">jour</th>
            <th scope="col">heure_matin</th>
            <th scope="col">heure_soir</th>
            {/* bouton pour modifier en récupérant l'id */}
            <th scope="col">Modifier</th>
          </tr>
        </thead>
        <tbody>
          {horaire.map((heure) => (
            <tr scope="row" key={heure.Id_Utilisateurs}>
              <td>{heure.jour}</td>
              <td>{heure.heure_matin}</td>
              <td>{heure.heure_soir}</td>
              <td>
                <button
                  onClick={() => {
                    window.location.href =
                      "/admin/horaires/show/" + heure.Id_Utilisateurs;
                  }}
                  className="btn btn-outline-danger p-4"
                >
                  Modifier
                </button>
              </td>
              <td>
              
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
