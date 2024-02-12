import { useRouteError } from "react-router-dom";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

export default function ErrorPage() {
  const error = useRouteError();

  console.log(error);

  return (
    <div>
      <Header />
      <article>
        <div className="fluid p-5  text-center text-danger">
          <div>
            <img
              src="src/assets/images/error404.jpg"
              alt="404"
              className="img-fluid photo_404 p-5"
            />
          </div>
          <div className="para_error col-10 col-md-5 mx-auto">
            <h2 className=" font-bold">Oops!</h2>
            <h2>Page introuvable</h2>
            <p>La page que vous essayez d'accéder n'existe pas.</p>
            <a href="/">Retourner à l'accueil</a>
          </div>
        </div>
      </article>
      <Footer />
    </div>
  );
}
