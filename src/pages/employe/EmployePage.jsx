
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";


export default function AdminPage() {
      function showAvis() {
    window.location.href = "/admin/avis";
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

    if (data.Id_Roles === 2) {
      return (
        <>
        <Header />
        <div className="container-fluid p-5">
          <div className="row p-3">
            <div className="col-2 text-center">
              <h3>Gestion employé</h3>
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
                onClick={showContact}
                className="btn btn-outline-danger p-4"
              >
                Gestion des Contact
              </button>
              <br />
              <br />
            </div>
          </div>
        </div>
        <Footer />
      </>
      );
    } else {
      window.location.href = "/";
    }
  } else {
    window.location.href = "/";
  }
}

