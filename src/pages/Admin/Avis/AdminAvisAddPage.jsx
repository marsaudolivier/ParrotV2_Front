import { Header } from "../../../components/Header";
import { Footer } from "../../../components/Footer";
import { AddAvis } from "../../../components/admin/Avis/AddAvis";


export default function AdminAvisAddPage() {
  function showUsers() {
    window.location.href = "/admin/user/add";
  }
  
  if (document.cookie.includes("token")) {
    const token = document.cookie.split("=")[1];
    const payload = token.split(".")[1];
    const data = JSON.parse(atob(payload));

    if (data.Id_Roles === 1 || data.Id_Roles === 2) {
      return (
        <>
          <Header />
          <button
                    onClick={() => {
                      window.location.href = "/admin/avis";
                    }}
                    className="btn btn-outline-danger p-4"
                  >
                    Retour
                  </button>
          <div className="container-fluid p-5 text-center">
            <div className="row p-3 justify-content-center">
              <div className="col-6 text-center ">
                <h2>Ajouter un Avis</h2>
            <AddAvis />
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
