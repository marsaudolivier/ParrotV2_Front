import { useEffect, useState } from "react";

export function Avis() {
  const [Avis, setAvis] = useState([]);
  const API_URL = "https://marsaudolivier.alwaysdata.net/Avis/last";
  const getAvis = async () => {
    const response = await fetch(API_URL);
    const MotifsData = await response.json();
    setAvis(MotifsData);
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
    // console.log(elements);
    // création d'un objet formData
    let formData = {
      nom: elements.nom.value,
      prenom: elements.prenom.value,
      commentaire: elements.commentaire.value,
      note: elements.note.value,
      Id_Validations: 1
    };
    // envoi des données au serveur
    console.log(formData);
    fetch("https://marsaudolivier.alwaysdata.net/avis", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
      form.reset();
  }
  return (
    <>
      <div className="fluid p-5 ">
        <div className="p-5 para col-12 col-lg-5 mx-auto">
          <div className="justify-content-center">
            <h2 className="mx-auto m-auto">Avis</h2>
            </div>
          </div>
        </div>
        <div className="row justify-content-evenly text-center">
              {Avis.map((Avi) => (
              <div className="col-4 para">
                <div key={Avi.Id_Avis}>
                  <div className="p-2">
                    <p>
                       Nom: {Avi.nom}
                    </p>
                    <p>
                       Prénom :{Avi.prenom}
                    </p>
                    <p>
                        Commentaire: {Avi.commentaire}
                    </p>
                    Note:  {Avi.note}/5<br />
                  </div>
                </div>
                </div>
              ))}
            </div>
{/*  /ajout un bouton pour mettre avis  */}

            <div className="fluid p-5 ">
        <div className="p-5 para col-12 col-lg-5 mx-auto">
          <div className="justify-content-center">
            <h2 className="mx-auto m-auto">Votre avis</h2>
            <form onSubmit={handleSudmit}>
              <div className="form-group">
                <label htmlFor="nom">Nom</label>
                <input
                  type="text"
                  className="form-control"
                  id="nom"
                  name="nom"
                  placeholder="Nom"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="prenom">Prénom</label>
                <input
                  type="text"
                  className="form-control"
                  id="prenom"
                  name="prenom"
                  placeholder="Prénom"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="commentaire">Commentaire</label>
                <textarea
                  className="form-control"
                  id="commentaire"
                  name="commentaire"
                  rows="3"
                  required
                ></textarea>
              </div>
              <div className="form-group">
                <label htmlFor="note">Note</label>
                <input
                  type="number"
                  className="form-control"
                  id="note"
                  name="note"
                  placeholder="Note"
                  min="0"
                  max="5"
                  required
                />
              </div>
              <div className="col-12 col-lg-10 mx-auto text-center p-2">
              <button type="submit" className="btn btn-dark">
                Envoyer
              </button>
              </div>
            </form>
            </div>
          </div>
        </div>
    </>
  );
}
