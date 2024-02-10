import { useEffect, useState } from "react";

export function CarsList() {
  const [cars, setCars] = useState([]);
  const API_URL = "https://marsaud.onrender.com/annonces";

  // The separate async function
  const getCars = async () => {
    const response = await fetch(API_URL);
    const carsData = await response.json();
    setCars(carsData);
  };

  useEffect(() => {
    getCars();
  }, []);

  return (
    <div>
      <h2>Gestion des voitures</h2>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Titre</th>
            <th scope="col">Marque</th>
            <th scope="col">Modèle</th>
            <th scope="col">Année</th>
            <th scope="col">Kilométrage</th>
            <th scope="col">Prix</th>
            <th scope="col">Image</th>
          </tr>
        </thead>
        <tbody>
          {cars.map((car) => (
            <tr scope="row" key={car.Id_Annonces}>
              <td>{car.titre}</td>
              <td >{car.marque}</td>
              <td>{car.modele}</td>
              <td>{car.annee}</td>
              <td>{car.kilometrage}</td>
              <td>{car.prix}</td>
              <td><img src={`https://marsaud.onrender.com/public/images/${car.photo_principal}`} alt="car" width="100" /></td>
              <td><a href={`/admin/cars/${car.Id_Annonces}`}><button type="button" className="btn btn-primary">Voir</button></a></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );

}

export default CarsList;
