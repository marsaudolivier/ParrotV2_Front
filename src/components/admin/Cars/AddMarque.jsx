import { useEffect, useState } from "react";

export function AddMarque() {
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

      marque: elements.marque.value,
    
    };
    // envoi des données au serveur
    console.log(formData);
    fetch("https://marsaudolivier.alwaysdata.net/marque/add", {
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
          <div className="col-6 col-lg-5 mx-auto">
            <div className="form-group">
              <label htmlFor="marque">Nouvelle marques</label>
              <input
                type="text"
                className="form-control"
                id="marque"
                placeholder="Nouvelle marques"
              />
            </div>
          </div>
          <div className="col-2 col-lg-10 mx-auto text-center p-2">
            <button type="submit" className="btn btn-dark">
              Envoyer
            </button>
          </div>
        </div>
      </form>
    </>
  );
}
