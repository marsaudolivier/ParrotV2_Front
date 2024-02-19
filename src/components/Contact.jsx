import { useEffect, useState } from "react";
const location = window.location;
export function Contact({ selectedAnnonceTitle }) {
  const [Motifs, setMotifs] = useState([]);
  const [selectedMotif, setSelectedMotif] = useState(1); // 1 = "Autre"
  const API_URL = "https://marsaud.onrender.com/Motifs";
  const getMotifs = async () => {
    const response = await fetch(API_URL);
    const MotifsData = await response.json();
    setMotifs(MotifsData);
  };
  useEffect(() => {
    getMotifs();
  }, []);
  useEffect(() => {
    // Check if the current location is "http://localhost:5173/ventes"
    if (window.location.pathname === "/ventes") {
      setSelectedMotif(4); // Set the default selectedMotif to 4
 
    }
  }, [location.pathname]);
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
      Id_Motifs: elements.Id_Motifs.value,
      nom: elements.nom.value,
      prenom: elements.prenom.value,
      mail: elements.mail.value,
      telephone: elements.telephone.value,
      message: elements.message.value,
      annonce: selectedAnnonceTitle,  
      Id_FormulairesOk: 1,     
    };
    // envoi des données au serveur
    // console.log(formData);
 fetch("https://marsaudolivier.alwaysdata.net/Formulaires", {
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
  };
  return (
    <>
      <div className="fluid row ">
        <div className="p-5 para col-12 col-lg-3 mx-auto">
          <div className=" justify-content-center text-center">
            <h2 className="mx-auto ">Nous contacter</h2>
            <div>
              <div className="">
                <p className="mt-5">Par téléphone : 01 23 45 67 89</p>
                <p className="mt-5">Par fax : 01 23 45 67 89</p>
                <p className="mt-5">Par mail : contact@monsite.fr</p>
              </div>
            </div>
          </div>
        </div>
        <div className="p-2  d-lg-none"></div>
        <div className="p-5 para col-12 col-lg-8">
          <h2 className="  ">Formulaire</h2>
          <form onSubmit={handleSudmit}>
            <div className="row">
            <div className="col-12 col-lg-10 mx-auto">
                <div className="form-group">
                  <label htmlFor="motif">Motif</label>
                  <select
        className="form-control"
        id="Id_Motifs"
        disabled={location.pathname === "/ventes"} 
        value={selectedMotif} 
        onChange={(e) => setSelectedMotif(e.target.value)} 
      >
        {Motifs.map((Motif) => (
          <option key={Motif.Id_Motifs} value={Motif.Id_Motifs}>
            {Motif.motif}
          </option>
        ))}
      </select>
                </div>
              </div>
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
                  <label htmlFor="telephone">Téléphone</label>
                  <input
                    type="text"
                    className="form-control"
                    id="telephone"
                    placeholder="Téléphone"
                  />
                </div>
              </div>
              <div className="col-12 col-lg-10 mx-auto">
                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea
                    className="form-control"
                    id="message"
                    rows="3"
                    placeholder="Message"
                  ></textarea>
                </div>
              </div>
              <div className="col-12 col-lg-10 mx-auto text-center p-2">
                <button type="submit" className="btn btn-dark">
                  Envoyer
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
      <div className="p-3">  </div>
    </>
  )
  }