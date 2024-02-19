import React, { useState, useEffect } from "react";

export function UpdateAvis() {

  const id = window.location.pathname.split("/").pop();
  //on utilise un state pour stocker le user

  const [avis, setAvis] = useState(null);
  //on utilise une fonction pour récupérer le user correspondant à l'id

  const API_URL = "https://marsaudolivier.alwaysdata.net/avis/" + id;
  // The separate async function
  const getAvis = async () => {
    const response = await fetch(API_URL);
    const avisData = await response.json();
    setAvis(avisData);
  };
  useEffect(() => {
    getAvis();
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
      nom: elements.nom.value,
      prenom: elements.prenom.value,
      commentaire: elements.commentaire.value,
      note: elements.note.value,
      Id_Validations: elements.Id_Validations.value,
    };
    // envoi des données au serveur
    console.log(formData);
    fetch("https://marsaudolivier.alwaysdata.net/avis/" + id, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
        window.location.href = "/admin/avis/show";
      })
      .catch((error) => {
        console.error("Error:", error);
      });
    form.reset();
  };

  if (!avis) {
    return <p>Chargement...</p>;
  } else {
    return (
      <>
      <form onSubmit={handleSudmit}>
       <div className="row para">
            <div className="col-12 col-lg-5 mx-auto">
              <div className="form-group">
                <label htmlFor="nom">Nom</label>
                <input
                  type="text"
                  className="form-control"
                  id="nom"
                  placeholder="Nom"
                  value={avis[0].nom}
                  onChange={(e) =>
                    setAvis([{ ...avis[0], nom: e.target.value }])
                  }
                />
                <label htmlFor="prenom">Prénom</label>
                <input
                  type="text"
                  className="form-control"
                  id="prenom"
                  placeholder="Prénom"
                  value={avis[0].prenom}
                  onChange={(e) =>
                    setAvis([{ ...avis[0], prenom: e.target.value }])
                  }
                />
                <label htmlFor="commentaire">commentaire</label>
                <input
                  type="text"
                  className="form-control"
                  id="commentaire"
                  placeholder="Mot de passe"
                  value={avis[0].commentaire}
                  onChange={(e) =>
                    setAvis([{ ...avis[0], commentaire: e.target.value }])
                  }
                />
                  <label htmlFor="note">note</label>
                <input
                  type="text"
                  className="form-control"
                  id="note"
                  placeholder="Mot de passe"
                  value={avis[0].note}
                  onChange={(e) =>
                    setAvis([{ ...avis[0], note: e.target.value }])
                  }
                />
                <label htmlFor="Id_Validations">Role</label>
                <select
                  className="form-select"
                  id="Id_Validations"
                  value={avis[0].Id_Validations}
                  onChange={(e) =>
                    setAvis([{ ...avis[0], Id_Validations: e.target.value }])
                  }
                >
                  <option value="1">Non valider</option>
                  <option value="2">Valider</option>
                </select>
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

