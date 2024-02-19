import React, { useState, useEffect } from "react";
export function ShowCars() {
  const [avis, setAvis] = useState([]);
  const API_URL = "https://marsaudolivier.alwaysdata.net/annonces";

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
            <th scope="col">titre</th>
            <th scope="col">kilometrage</th>
            <th scope="col">annee</th>
            <th scope="col">prix</th>
            <th scope="col">marque</th>
            <th scope="col">modele</th>
            <th scope="col">photo</th>
            {/* bouton pour modifier en récupérant l'id */}
            <th scope="col">Modifier</th>
            <th scope="col">Suprimer</th>
          </tr>
        </thead>
        <tbody>
          {avis.map((avi) => (
            <tr scope="row" key={avi.Id_Annonces}>
              <td>{avi.titre}</td>
              <td>{avi.kilometrage}</td>
              <td>{avi.annee}</td>
              <td>{avi.prix}</td>
              <td>{avi.marque}</td>
              <td>{avi.modele}</td>
              <td><img src={`https://marsaudolivier.alwaysdata.net/public/images/${avi.photo_principal}`} alt="car" width="100" /></td>

            
              <td>
                <button
                  onClick={() => {
                    window.location.href =
                      "/admin/cars/show/" + avi.Id_Annonces;
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
                      "/admin/cars/delete/" + avi.Id_Annonces;
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
