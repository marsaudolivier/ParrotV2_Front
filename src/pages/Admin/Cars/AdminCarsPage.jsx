import { Header } from "../../../components/Header";
import { Footer } from "../../../components/Footer";

export default function AdminCarsPage() {
  function showUsers() {
    window.location.href = "/admin/user";
  }
  function showAvis() {
    window.location.href = "/admin/avis";
  }
  function showHoraires() {
    window.location.href = "/admin/horaires";
  }
  function showServices() {
    window.location.href = "/admin/services";
  }
  function showCars() {
    window.location.href = "/admin/cars";
  }
  function showContact() {
    window.location.href = "/admin/contact";
  }


  if (document.cookie.includes("token")) {
    const token = document.cookie.split("=")[1];
    const payload = token.split(".")[1];
    const data = JSON.parse(atob(payload));

    if (data.Id_Roles === 1) {
      return (
        <>
          <Header />
          <div className="container-fluid p-5">
            <div className="row p-3">
              <div className="col-2 text-center">
                <h3>Gestion admin</h3>
                <button
                  onClick={showUsers}
                  className="btn btn-outline-danger mt-3 p-4"
                >
                  Gestion des Utilisateurs
                </button>
                <br />
                <br />
                <button
                  onClick={showAvis}
                  className="btn btn-outline-danger p-4"
                >
                  Gestion des Avis
                </button>
                <br />
                <br />
                <button
                   onClick={showCars}
                  className="btn btn-outline-danger p-4"
                >
                  Gestion des Véhicules
                </button>
                <br />
                <br />
                <button
                  onClick={showHoraires}
                  className="btn btn-outline-danger p-4"
                >
                  Gestion des Horaires
                </button>
                <br />
                <br />
                <button
                  onClick={showServices}
                  className="btn btn-outline-danger p-4"
                >
                  Gestion des Services
                </button>
                <br />
                <br />
                <button
                  onClick={showContact}
                  className="btn btn-outline-danger p-4"
                >
                  Gestion des Contact
                </button>
                <br />
                <br />
              </div>
              <div className="col-10 ">
                <h2>Gestion des annonces</h2>
                <div className="d-flex p-5 justify-content-center">
                  <div className="p-2">
                    <button
                      onClick={() => {
                        window.location.href = "/admin/cars/add";
                      }}
                      className="btn btn-outline-danger p-4"
                    >
                      Ajouter une annonces
                    </button>
                  </div>
                  <div className="p-2">
                    <button
                      onClick={() => {
                        window.location.href = "/admin/cars/show";
                      }}
                      className="btn btn-outline-danger p-4"
                    >
                      Voir la liste des Annonces
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Footer />
        </>
      );
    } else {
      window.location.href = "/";
    }
  }
}
