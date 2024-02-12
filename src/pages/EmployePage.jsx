
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";


export default function AdminPage() {
  if (document.cookie.includes("token")) {
    const token = document.cookie.split("=")[1];
    const payload = token.split(".")[1];
    const data = JSON.parse(atob(payload));

    if (data.Id_Roles === 2) {
      return (
        <>
          <Header />
            <div>
              ceci est un employé
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

