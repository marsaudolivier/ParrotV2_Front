
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

export default function MentionsPage() {

  return (
    <div>
      <Header />
      <article >
        <div className="p-3"></div>
        <div className="para p-5">
          <h2 className="p-2">Politiques de cookies:</h2>
          <h3 className="p-2">UTILISATION:</h3>
          <p>
            Ce site utilise des cookies pour améliorer votre expérience en tant
            qu'employé. Ces cookies sont essentiels pour la gestion de vos
            droits et privilèges au sein de notre système.
          </p>
          <h3 className="p-2">QU'EST-CE QU'UN COOKIE ?</h3>
          <p>
            Un cookie est un petit fichier texte stocké sur votre ordinateur ou
            appareil mobile par le navigateur web que vous utilisez. Ces
            fichiers nous aident à vous identifier en tant qu'employé et à
            personnaliser votre expérience en fonction de vos préférences.
          </p>
          <h3 className="p-2">COMMENT UTILISONS-NOUS LES COOKIES ?</h3>
          <p>
            Les cookies que nous utilisons sont strictement nécessaires à votre
            navigation et à la gestion de vos droits en tant qu'employé. Ils ne
            collectent pas d'informations personnelles et ne sont pas utilisés à
            des fins de marketing ou de suivi.
          </p>
          <h3 className="p-2">VOTRE CONSENTEMENT IMPLICITE</h3>
          <p>
            En continuant à utiliser ce site, vous consentez à l'utilisation de
            ces cookies essentiels pour la gestion de votre expérience en tant
            qu'employé. Si vous souhaitez en savoir plus sur notre utilisation
            des cookies, veuillez consulter notre Politique des Cookies.
          </p>
          <p>Merci de votre compréhension et de votre collaboration.</p>
        </div>
        <div className="p-3"></div>
        <Footer />
      </article>
    </div>
  );
}
