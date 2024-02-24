import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { Services } from "../components/Services";
import { Contact } from "../components/Contact";
import { Avis } from "../components/Avis";
import { Carte } from "../components/Carte";
import { WhoAreWe } from "../components/WhoAreWe";

export default function IndexPage() {
  return (
    <>
      <Header />
      <article>
        <WhoAreWe />
        <Services />
        <Contact />
        <Avis />
        <Carte />
        <Footer />
      </article>
    </>
  );
}
