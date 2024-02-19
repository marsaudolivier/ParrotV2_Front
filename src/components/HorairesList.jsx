import { useEffect, useState } from "react";

export function HorairesList() {
  const [horaires, setHoraires] = useState([]);
  const API_URL = "https://marsaudolivier.alwaysdata.net/jours";

  // The separate async function
  const getHoraires = async () => {
    const response = await fetch(API_URL);
    const horairesData = await response.json();
    setHoraires(horairesData);
  };

  useEffect(() => {
    getHoraires();
  }, []);

  return (
    <div>
      <h2>Gestion des horaires</h2>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Jour</th>
            <th scope="col">Ouverture</th>
            <th scope="col">Fermeture</th>
          </tr>
        </thead>
        <tbody>
          {horaires.map((horaire) => (
            <tr scope="row" key={horaire.Id_Jours}>
              <td >{horaire.jour}</td>
              <td>{horaire.heure_matin}</td>
              <td>{horaire.heure_soir}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );

}

export default HorairesList;
