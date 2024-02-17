import { useEffect, useState } from "react";

export function AddCars() {
  const [marques, setMarques] = useState([]);
  const [models, setModels] = useState([]);
  const [options, setOptions] = useState([]);
  const [energie, setEnergie] = useState([]);

  useEffect(() => {
    fetch("https://marsaud.onrender.com/options", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => setOptions(data))
      .catch((error) => {
        console.error("Error:", error);
      });
    fetch("https://marsaud.onrender.com/energies", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => setEnergie(data))
      .catch((error) => {
        console.error("Error:", error);
      });
    fetch("https://marsaud.onrender.com/marque", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => setMarques(data))
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);


  //Quand marques selectionné alors models de cette marque s'affiche grace a Id_Marques
  const handleChange = (e) => {
    console.log(e.target.value);
    fetch("https://marsaud.onrender.com/modele/" + e.target.value, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => setModels(data))
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  const [file, setFile] = useState(null);
  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
    console.log(event.target.files[0]);
  };

  // récupération du formulaire
  const handleSudmit = (e) => {
    e.preventDefault();
    // console.log(e.target);
    const form = e.target;
    const elements = form.elements;
    // console.log(elements);
    // création d'un objet formData

    let formData = new FormData();
    formData.append("kilometrage", elements.kilometrage.value);
    formData.append("annee", elements.annee.value);
    formData.append("prix", elements.prix.value);
    formData.append("photo_principal", file);
    formData.append("Id_Marques", elements.marque.value);
    formData.append("Id_Modeles", elements.modele.value);
    formData.append("titre", elements.titre.value);
    let options = [];
    for (let i = 0; i < elements.options.length; i++) {
      if (elements.options[i].checked) {
        options.push(elements.options[i].value);
      }
    }
    energie.push(elements.energie.value);
    //formData options en array
    formData.append("options[]", options);
   
    formData.append("energie", elements.energie.value);

    // envoi des données au serveur
    // fetch("http://localhost:3000/annonces/voitures", {
      fetch("https://marsaud.onrender.com/annonces/voitures", {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
        // window.location.href = "/admin/cars/show";
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
          <div className="col-12 col-lg-4 mx-auto">
            <div className="form-group">
              <label htmlFor="titre">titre</label>
              <input
                type="text"
                className="form-control"
                id="titre"
                placeholder="titre"
              />
            </div>
          </div>
          <div className="col-12 col-lg-4 mx-auto">
            <div className="form-group">
              <label htmlFor="kilometrage">kilometrage</label>
              <input
                type="text"
                className="form-control"
                id="kilometrage"
                placeholder="kilometrage"
              />
            </div>
          </div>
          <div className="col-12 col-lg-4 mx-auto">
            <div className="form-group">
              <label htmlFor="annee">annee</label>
              <input
                type="text"
                className="form-control"
                id="annee"
                placeholder="annee"
              />
            </div>
          </div>
          <div className="col-12 col-lg-4 mx-auto">
            <div className="form-group">
              <label htmlFor="prix">prix</label>
              <input
                type="text"
                className="form-control"
                id="prix"
                placeholder="prix"
              />
            </div>
          </div>
          {/* récupération de tout les marques dans la bdd et input style  select ecoute de marque pour choisir modele selon la marque */}
          <div className="col-12 col-lg-4 mx-auto">
            <div className="form-group">
              <label htmlFor="marque">marque</label>
              <select
                className="form-control"
                id="marque"
                onChange={handleChange}
              >
                <option value="500">Choisir une marque</option>
                {marques.map((marque) => (
                  <option key={marque.Id_Marques} value={marque.Id_Marques}>
                    {marque.marque}
                  </option>
                ))}
              </select>
            </div>
          </div>
          {/* récupération de tout les models dans la bdd et input style  select par rapport a Id_Marques selecté au dessus */}
          <div className="col-12 col-lg-4 mx-auto">
            <div className="form-group">
              <label htmlFor="modele">modele</label>
              <select className="form-control" id="modele" placeholder="modele">
                <option value="500">Choisir un modele</option>
                {models ? (
                  models.map((model) => (
                    <option key={model.Id_Modeles} value={model.Id_Modeles}>
                      {model.modele}
                    </option>
                  ))
                ) : (
                  <option value="500">Choisir un modèle</option>
                )}
              </select>
            </div>
          </div>
          {/* //ajout de la photo_principal	 dans un input file  */}
          <div className="col-12 col-lg-5 mx-auto">
            <div className="form-group">
              <label htmlFor="photo_principal">photo_principal</label>
              <input
                type="file"
                accept="image/*"
                onChange={handleFileChange}
                className="form-control"
              />
            </div>
          </div>
          {/* ajout check option style radio pour pouvoir selectionné plusieurs optionn */}
          <div className="col-12 col-lg-10 mx-auto card_detail mt-3">
            <div className="form-group">
              <label htmlFor="options">Options</label>
              <div className="row">
                {options.map((option) => (
                  <div key={option.Id_Options} className="col-12 col-lg-4">
                    <input
                      type="checkbox"
                      id={option.Id_Options}
                      name="options"
                      value={option.Id_Options}
                    />
                    <label htmlFor={option.Id_Options}>{option.optionn}</label>
                  </div>
                ))}
              </div>
            </div>
          </div>
          {/* ajout check option style radio pour pouvoir selectionné plusieurs energie */}
          <div className="col-12 col-lg-10 mx-auto card_detail mt-3">
            <div className="form-group">
              <label htmlFor="energie">Energies</label>
              <div className="row">
                {energie.map((ener) => (
                  <div key={ener.Id_Energies} className="col-12 col-lg-4">
                    <input
                      type="radio"
                      id={ener.Id_Energies}
                      name="energie"
                      value={ener.Id_Energies}
                    />
                    <label htmlFor={ener.Id_Energies}>{ener.energie}</label>
                  </div>
                ))}
              </div>
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
