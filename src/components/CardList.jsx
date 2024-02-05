import React, { useState } from "react";

const CardList = ({ voitures, setSelectedAnnonceTitle  }) => {
  const [Serv, setServ] = useState([]);
  const [Avoir, setAvoir] = useState([]);
  const [Conso, setConso] = useState([]);
  // Utilisez useState pour stocker les données du service
  const [isButtonClicked, setIsButtonClicked] = useState(false);

  const handleMoreInfoClick = async (idAnnonces, titreAnnonce) => {
    console.log("clicked on service with id: " + idAnnonces);
    const API_URLServ = `https://marsaud.onrender.com/Annonces/voiture/${idAnnonces}`;

    try {
      const responseServ = await fetch(API_URLServ);
      const ServData = await responseServ.json();
      setServ(ServData);
      console.log(ServData);

      const API_URLAvoir = `https://marsaud.onrender.com/avoir/${idAnnonces}`;
      const responseAvoir = await fetch(API_URLAvoir);
      const AvoirData = await responseAvoir.json();
      setAvoir(AvoirData);
      console.log(AvoirData);

      const API_URLConso = `https://marsaud.onrender.com/consommer/${idAnnonces}`;
      const responseConso = await fetch(API_URLConso);
      const ConsoData = await responseConso.json();
      setConso(ConsoData);
      console.log(ConsoData);
      setSelectedAnnonceTitle(titreAnnonce);
      setIsButtonClicked(true);
    } catch (error) {
      console.error("Error fetching data:", error);
      // Handle errors as needed
    }
  };
  const handleBackClick = () => {
    setIsButtonClicked(false);
  };

  if (!isButtonClicked) {
    // Utilisez l'état pour conditionner le rendu
    return (
      <>
        <div className="container p-5">
          <div className="row">
            {voitures.map((voiture) => (
              <div className="col-12 col-md-4 text-center" key={voiture.id}>
                <div className="p-2"></div>
                <div className="card_vente p-2">
                  <h3>{voiture.titre}</h3>
                  <img
                    src={`https://marsaud.onrender.com/public/images/${voiture.photo_principal}`}
                    alt="Photo principale"
                    className="Vente_Photo"
                  />
                  <p>Prix: {voiture.prix} €</p>
                  <p>Année: {voiture.annee}</p>
                  <p>Marque: {voiture.marque}</p>
                  <p>Modèle: {voiture.modele}</p>
                  <p>Nombre de Km:{voiture.kilometrage} Km</p>
                  <button
                    type="button"
                    className="btn btn-dark"
                    onClick={() => handleMoreInfoClick(voiture.Id_Voitures, voiture.titre)}
                  >
                    Plus d'info
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </>
    );
  } else {
    return (
      <>
        {Serv.map((se) => (
          <div key={se.Id_Services}>
            <div className="p-2 para text-center">
              <h2>{se.titre}</h2>
              <div className="row justify-content-around">
                <div className="col-3">
                <img
                    src={`https://marsaud.onrender.com/public/images/${se.photo_principal}`}
                    alt="Photo principale"
                    className="Vente_PhotoDetail"
                  />
                </div>
                <div className="col-3 card_detail">
                  <h3>détail</h3>
                  <p>Prix:{se.prix} €</p>
                  <p> Année:{se.annee}</p>
                  <p> Kilométrage:{se.kilometrage} Km</p>
                  <p> Marques:{se.marque}</p>
                  <p> Modèle:{se.modele}</p>
                </div>
                <div className="col-3 card_detail">
                  <h3>Energie</h3>
                  {Conso.map((consom) => (
                    <div key={consom.Id_Avoir}>
                      <div className="p-2">
                        <p>{consom.energie}</p>
                      </div>
                    </div>
                  ))}
                  <h3>Options:</h3>
                  {Avoir.map((av) => (
                    <div key={av.Id_Avoir}>
                      <div className="p-2">
                        <p>{av.optionn}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <button className="btn btn-dark " onClick={handleBackClick}>
                Retour
              </button>
            </div>
          </div>
        ))}
      </>
    );
  }
};

export { CardList };
