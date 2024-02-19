import { useEffect, useState } from "react";

export function AddModele() {
  const [marques, setMarques] = useState([]);

  useEffect(() => {
    fetch("https://marsaudolivier.alwaysdata.net/marque", {
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
      Id_Marques: elements.marque.value,
      modele: elements.modele.value,
    };
    // envoi des données au serveur
    console.log(formData);
    fetch("https://marsaudolivier.alwaysdata.net/modele/add", {
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
        <div className="mb-3">
          {/* récupération de totue les marque avec fetch */}
          <div className="col-12 col-lg-4 mx-auto">
            <div className="form-group">
              <label htmlFor="marque">marque</label>
              <select className="form-control" id="marque">
                <option value="500">Choisir une marque</option>
                {marques.map((marque) => (
                  <option key={marque.Id_Marques} value={marque.Id_Marques}>
                    {marque.marque}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-6 col-lg-5 mx-auto">
            <div className="form-group">
              <label htmlFor="modele">Nouvelle modele</label>
              <input
                type="text"
                className="form-control"
                id="modele"
                placeholder="Nouvelle modele"
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
