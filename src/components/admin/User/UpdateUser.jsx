import React, { useState, useEffect } from "react";

export function UpdateUser() {
  //récupération de l'id dans url et passage en paramètre de la fonction fetch
  const id = window.location.pathname.split("/").pop();
  //on utilise un state pour stocker le user

  const [user, setUser] = useState(null);
  //on utilise une fonction pour récupérer le user correspondant à l'id

  const API_URL = "https://marsaudolivier.alwaysdata.net/utilisateurs/" + id;
  // The separate async function
  const getUser = async () => {
    const response = await fetch(API_URL);
    const userData = await response.json();
    setUser(userData);
  };
  useEffect(() => {
    getUser();
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
      mail: elements.mail.value,
      mdp: elements.mdp.value,
      Id_Roles: elements.role.value,
    };
    // envoi des données au serveur
    console.log(formData);
    fetch("https://marsaudolivier.alwaysdata.net/utilisateurs/" + id, {
      method: "PUT",
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

  if (!user) {
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
                  value={user[0].nom}
                  onChange={(e) =>
                    setUser([{ ...user[0], nom: e.target.value }])
                  }
                />
                <label htmlFor="prenom">Prénom</label>
                <input
                  type="text"
                  className="form-control"
                  id="prenom"
                  placeholder="Prénom"
                  value={user[0].prenom}
                  onChange={(e) =>
                    setUser([{ ...user[0], prenom: e.target.value }])
                  }
                />
                <label htmlFor="mail">Mail</label>
                <input
                  type="text"
                  className="form-control"
                  id="mail"
                  placeholder="Mail"
                  value={user[0].mail}
                  onChange={(e) =>
                    setUser([{ ...user[0], mail: e.target.value }])
                  }
                />
                <label htmlFor="mdp">Mot de passe</label>
                <input
                  type="text"
                  className="form-control"
                  id="mdp"
                  placeholder="Mot de passe"
                  value={user[0].mdp}
                  onChange={(e) =>
                    setUser([{ ...user[0], mdp: e.target.value }])
                  }
                />
                <label htmlFor="role">Role</label>
                <select
                  className="form-select"
                  id="role"
                  value={user[0].Id_Roles}
                  onChange={(e) =>
                    setUser([{ ...user[0], Id_Roles: e.target.value }])
                  }
                >
                  <option value="1">Admin</option>
                  <option value="2">Employé</option>
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
