import { useEffect, useState } from "react";

export function AddAvis() {
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
      commentaire: elements.Commentaire.value,
      note: elements.note.value,
      Id_Validations: 1,
    };
    // envoi des données au serveur
    console.log(formData);
    fetch("https://marsaud.onrender.com/avis", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
        // window.location.href = "/admin/avis/show";
      })
      .catch((error) => {
        console.error("Error:", error);
      });
    form.reset();
  };
  return (
    <>
      <form onSubmit={handleSudmit}>
        <div className="row">
          <div className="col-12 col-lg-5 mx-auto">
            <div className="form-group">
              <label htmlFor="nom">Nom</label>
              <input
                type="text"
                className="form-control"
                id="nom"
                placeholder="Nom"
              />
            </div>
          </div>
          <div className="col-12 col-lg-5 mx-auto">
            <div className="form-group">
              <label htmlFor="prenom">Prénom</label>
              <input
                type="text"
                className="form-control"
                id="prenom"
                placeholder="Prénom"
              />
            </div>
          </div>
          <div className="col-12 col-lg-5 mx-auto">
            <div className="form-group">
              <label htmlFor="mail">Commentaire</label>
              <input
                type="text"
                className="form-control"
                id="Commentaire"
                placeholder="Commentaire"
              />
            </div>
          </div>
          <div className="col-12 col-lg-5 mx-auto">
            <div className="form-group">
              <label htmlFor="note">Note</label>
              <input
                type="text"
                className="form-control"
                id="note"
                placeholder="Note"
              />
            </div>
          </div>

          <div className="col-12 col-lg-10 mx-auto text-center p-2">
            <button type="submit" className="btn btn-dark">
              Envoyer
            </button>
          </div>
        </div>
      </form>
    </>
  );
}
