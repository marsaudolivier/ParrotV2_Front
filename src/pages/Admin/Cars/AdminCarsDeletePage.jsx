import { Header } from "../../../components/Header";
import { Footer } from "../../../components/Footer";
import { DeleteCars } from "../../../components/admin/Cars/DeleteCars";


export default function AdminCarsDeletePage() {
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
                      window.location.href = "/admin/cars";
                    }}
                    className="btn btn-outline-danger p-4"
                  >
                    Retour
                  </button>
          <div className="container-fluid p-5 text-center">
            <div className="row p-3 justify-content-center">
              <div className="col-8 text-center ">
                    <DeleteCars />
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
