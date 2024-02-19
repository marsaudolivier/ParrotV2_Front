import { Header } from "../../../components/Header";
import { Footer } from "../../../components/Footer";
import { AddCars } from "../../../components/admin/Cars/AddCars";
import { AddOption } from "../../../components/admin/Cars/AddOption";



export default function AdminCarsAddPage() {
  if (document.cookie.includes("token")) {
    const token = document.cookie.split("=")[1];
    const payload = token.split(".")[1];
    const data = JSON.parse(atob(payload));

    if (data.Id_Roles === 1) {
      return (
        <>
          <Header />
          <button
                    onClick={() => {
                      window.location.href = "/admin/user";
                    }}
                    className="btn btn-outline-danger p-4"
                  >
                    Retour
                  </button>
          <div className="container-fluid p-5 text-center">
            <div className="row p-3 justify-content-evenly">
              <div className="col-2 text-center">
                <h2>nouvelle option</h2>
                <AddOption />
              </div>

              <div className="col-6 text-center ">
                <h2>Ajouter une Annonces</h2>
                <AddCars />
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
