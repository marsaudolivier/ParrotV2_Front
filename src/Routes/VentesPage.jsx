import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { CardList } from "../components/CardList";
import { Contact } from "../components/Contact";
import { useEffect, useState } from "react";


export default function VentesPage() {
  
    const [Voitures, setVoitures] = useState([]);
    const [selectedAnnonceTitle, setSelectedAnnonceTitle] = useState("");
    const API_URL = "https://marsaud.onrender.com/annonces";
    // The separate async function
    const getVoitures = async () => {
      const response = await fetch(API_URL);
      const VoituresData = await response.json();
      setVoitures(VoituresData);
    };
    console.log(Voitures)
  
    useEffect(() => {
      getVoitures();
    }, []);

  return (
    <div>
      <Header />
      <article>
        <div className="p-3"></div>
        <CardList voitures={Voitures} setSelectedAnnonceTitle={setSelectedAnnonceTitle} />
        <div className="p-3"></div>
        <Contact selectedAnnonceTitle={selectedAnnonceTitle} />
        <Footer />
      </article>
    </div>
  );
}
