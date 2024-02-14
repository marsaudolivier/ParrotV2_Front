import React, { useState, useEffect } from "react";
export function ShowServices() {
  const [avis, setAvis] = useState([]);
  const API_URL = "https://marsaud.onrender.com/services";

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
 
            {/* bouton pour modifier en récupérant l'id */}
            <th scope="col">Modifier</th>
            <th scope="col">Suprimer</th>
          </tr>
        </thead>
        <tbody>
          {avis.map((avi) => (
            <tr scope="row" key={avi.Id_Avis}>
              <td>{avi.titre}</td>
              <td>
                <button
                  onClick={() => {
                    window.location.href =
                      "/admin/services/show/" + avi.Id_Services;
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
                      "/admin/services/delete/" + avi.Id_Services;
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
