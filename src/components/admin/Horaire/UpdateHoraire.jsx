import React, { useState, useEffect } from "react";

export function UpdateHoraire() {

  const id = window.location.pathname.split("/").pop();
  //on utilise un state pour stocker le user

  const [jours, setJours] = useState(null);
  //on utilise une fonction pour récupérer le user correspondant à l'id

  const API_URL = "https://marsaud.onrender.com/Jours/" + id;
  // The separate async function
  const getJours = async () => {
    const response = await fetch(API_URL);
    const joursData = await response.json();
    setJours(joursData);
  };
  useEffect(() => {
    getJours();
  }, []);
  // récupération du formulaire
  const handleSudmit = (e) => {
    e.preventDefault();
    // console.log(e.target);
    const form = e.target;
    const elements = form.elements;
    // console.log("titre: " + selectedAnnonceTitle )
    // console.log(elements);
    // création d'un objet formData
    let formData = {
      jour: elements.jour.value,
      heure_matin: elements.heure_matin.value,
      heure_soir: elements.heure_soir.value,
      Id_Utilisateurs: 1,
    };
    // envoi des données au serveur
    console.log(formData);
    fetch("https://marsaud.onrender.com/jours/" + id, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
        window.location.href = "/admin/horaires/show";
      })
      .catch((error) => {
        console.error("Error:", error);
      });
    form.reset();
  };

  if (!jours) {
    return <p>Chargement...</p>;
  } else {
    return (
      <>
      <form onSubmit={handleSudmit}>
       <div className="row para">
            <div className="col-12 col-lg-5 mx-auto">
              <div className="form-group">
                <label htmlFor="jour">jour</label>
                <input
                  type="text"
                  className="form-control"
                  id="jour"
                  placeholder="jour"
                  value={jours[0].jour}
                  onChange={(e) =>
                    setJours([{ ...jours[0], jour: e.target.value }])
                  }
                />
                <label htmlFor="heure_matin">Heure matin</label>
                <input
                  type="text"
                  className="form-control"
                  id="heure_matin"
                  placeholder="Heure matin"
                  value={jours[0].heure_matin}
                  onChange={(e) =>
                    setJours([{ ...jours[0], jours: e.target.value }])
                  }
                />
                <label htmlFor="heure_soir">heure_soir</label>
                <input
                  type="text"
                  className="form-control"
                  id="heure_soir"
                  placeholder="heure_soir"
                  value={jours[0].commentaire}
                  onChange={(e) =>
                    setJours([{ ...jours[0], commentaire: e.target.value }])
                  }
                />
              </div>
            </div>
          </div>
          <div className="p-5">
          <button type="submit" className="btn btn-outline-danger  p-5">
                Modifier
              </button>
          </div>
        </form>
      </>
    );
  }
}

