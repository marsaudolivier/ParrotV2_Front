import { useEffect, useState } from "react";

export function Footer() {
  const [Jours, setJours] = useState([]);
  const API_URL = "https://marsaud.onrender.com/Jours";

  // The separate async function
  const getJours = async () => {
    const response = await fetch(API_URL);
    const JoursData = await response.json();
    setJours(JoursData);
  };

  useEffect(() => {
    getJours();
  }, []);

  return (
    <>
      <div className=" container-fluid text-bg-dark py-3 text-success">
        <div className="row">
          <div className="col-12 col-md-4 align-item-center align-items-center text-center">
            <div>
              <h4>Nos Horaires</h4>
              {Jours.map((Jour) => (
                <div key={Jour.Id_Jours}>
                  <div className="p-2">
                    <p className="horaire">
                      {Jour.jour} : {Jour.heure_matin} ,{Jour.heure_soir}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="p-2  d-md-none"></div>
          <div className="col-12 col-md-4 align-self-center text-center">
            <a href="https:/www.facebook.com" className="p-2">
                <img src="/facebook.svg" alt="Facebook " width='50'/>
                </a>
                <a href="https:/www.instagram.com"className="p-2">
                <img src="/instagram.svg" alt="Instagram " width='50'/>
                </a>
                <a href="https:/www.twitter.com" className="p-2">
                <img src="/twitter.svg" alt="Twitter" width='50'/>
                </a>
          </div>
          <div className="p-2  d-md-none"></div>
          <div className="col-12 col-md-4 align-self-center  text-center">
            <div>
              <h4>Adresse</h4>
              <p>GARAGE V. PARROT </p>
              <p>1 RUE DU GARAGE</p>
              <p>TOULOUSE 05 46 00 00 00</p>
            </div>
          </div>
        </div>
        <ul className="nav col-12  justify-content-evenly p-3">
        <li className="nav-item">
              <a
                href="/mentions"
                className="nav-link px-2 text-secondary"
                aria-current="page"
              >
                Mentions Légales
              </a>
            </li>
            <li className="nav-item">
              <a href="/Cookie" className="nav-link text-secondary">
                Politique de cookies
              </a>
            </li>
          </ul>
      </div>
    </>
  );
}
