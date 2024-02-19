import React, { useState, useEffect } from "react";

export function UpdateServices() {
  const id = window.location.pathname.split("/").pop();
  //on utilise un state pour stocker le user

  const [services, setServices] = useState(null);
  //on utilise une fonction pour récupérer le user correspondant à l'id

  const API_URL = "https://marsaudolivier.alwaysdata.net/services/" + id;
  // The separate async function
  const getServices = async () => {
    const response = await fetch(API_URL);
    const servicesData = await response.json();
    setServices(servicesData);
  };
  useEffect(() => {
    getServices();
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
      titre: elements.titre.value,
      description: elements.description.value,
      Id_Utilisateurs: 1,
    };
    // envoi des données au serveur
    console.log(formData);
    fetch("https://marsaudolivier.alwaysdata.net/services/" + id, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
        window.location.href = "/admin/services/show";
      })
      .catch((error) => {
        console.error("Error:", error);
      });
    form.reset();
  };

  if (!services) {
    return <p>Chargement...</p>;
  } else {
    return (
      <>
        <form onSubmit={handleSudmit}>
          <div className="row para">
            <div className="col-12 col-lg-5 mx-auto">
              <div className="form-group">
                <label htmlFor="titre">titre</label>
                <input
                  type="text"
                  className="form-control"
                  id="titre"
                  placeholder="titre"
                  value={services[0].titre}
                  onChange={(e) =>
                    setServices([{ ...services[0], titre: e.target.value }])
                  }
                />
                <label htmlFor="description">description</label>
                <textarea
                  rows="10"
                  className="form-control"
                  id="description"
                  placeholder="description"
                  value={services[0].description}
                  onChange={(e) =>
                    setServices([
                      { ...services[0], description: e.target.value },
                    ])
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
