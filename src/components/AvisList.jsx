import { useEffect, useState } from "react";

export function AvisList() {
  const [avis, setAvis] = useState([]);
  const API_URL = "https://marsaudolivier.alwaysdata.net/avis";

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
    <div>
      <h2>Gestion des avis</h2>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Nom</th>
            <th scope="col">Prénom</th>
            <th scope="col">commentaire</th>
            <th scope="col">Note</th>
            <th scope="col">Validation</th>
          </tr>
        </thead>
        <tbody>
          {avis.map((avi) => (
            <tr scope="row" key={avi.Id_Avis}>
              <td >{avi.nom}</td>
              <td>{avi.prenom}</td>
              <td>{avi.commentaire}</td>
              <td>{avi.note}</td>
              <td>{avi.Id_Validations === 1 ? "Non validé" : "validé"}</td>  
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    
   
  );
}

export default AvisList;
