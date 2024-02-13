import { useEffect, useState } from "react";

export function AddUser() {
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
        mail: elements.mail.value,
        mdp: elements.mdp.value,
        Id_Roles: elements.role.value
    };
    // envoi des données au serveur
    // console.log(formData);
 fetch("https://marsaud.onrender.com/utilisateurs", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
        window.location.href = "/admin/user/show";
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
                  <label htmlFor="mail">Email</label>
                  <input
                    type="text"
                    className="form-control"
                    id="mail"
                    placeholder="Email"
                  />
                </div>
              </div>
              <div className="col-12 col-lg-5 mx-auto">
                <div className="form-group">
                  <label htmlFor="mail">Mot de passe</label>
                  <input
                    type="text"
                    className="form-control"
                    id="mdp"
                    placeholder="Mot de passe"
                  />
                </div>
              </div>
                <div className="col-12 col-lg-5 mx-auto">
                    <div className="form-group">
                        <label htmlFor="role">Role</label>
                        <select className="form-select" id="role">
                            <option value="1">Admin</option>
                            <option value="2">Employé</option>
                        </select>
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
  )
  }