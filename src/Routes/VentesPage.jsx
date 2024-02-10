import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { CardList } from "../components/CardList";
import { Contact } from "../components/Contact";
import { useEffect, useState } from "react";
import { RangeSliderKm } from "../components/RangeSliderKm";
import { RangeSliderYears } from "../components/RangeSliderYears";
import { RangeSliderPrice } from "../components/RangeSliderPrice";

export default function VentesPage() {
  const [rangeKm, setRangeKm] = useState([0, 350000]);
  const [rangeYears, setRangeYears] = useState([1950, 2024]);
  const [rangePrice, setRangePrice] = useState([0, 100000]);
  const [Voitures, setVoitures] = useState([]);
  const [selectedAnnonceTitle, setSelectedAnnonceTitle] = useState("");
  const API_URL = "https://marsaud.onrender.com/annonces/filter";
  // The separate async function
  const getVoitures = async () => {
    try {
      const params = new URLSearchParams();
      params.append("kmmin", rangeKm[0]);
      params.append("kmmax", rangeKm[1]);
      params.append("annemin", rangeYears[0]);
      params.append("annemax", rangeYears[1]);
      params.append("pricemin", rangePrice[0]);
      params.append("pricemax", rangePrice[1]);
      const response = await fetch(API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: params,
      });
      const VoituresData = await response.json();

      setVoitures(VoituresData);
    } catch (error) {
      console.error("Erreur lors de la récupération des données", error);
    }
  };
  console.log(Voitures);
  useEffect(() => {
    getVoitures();
  }, []);
  const handleRangeKmChange = (values) => {
    setRangeKm(values); // Met à jour les valeurs de rangeKm
    getVoitures(); // Récupère les annonces filtrées
  };

  const handleRangeYearsChange = (values) => {
    setRangeYears(values); // Met à jour les valeurs de rangeYears
    getVoitures(); // Récupère les annonces filtrées
  };

  const handleRangePriceChange = (values) => {
    setRangePrice(values); // Met à jour les valeurs de rangePrice
    getVoitures(); // Récupère les annonces filtrées
  };

  return (
    <div>
      <Header />
      <article className="p-2">
        <div className="container card_vente ">
          <div className="row p-4">
            <RangeSliderKm onChange={handleRangeKmChange} />
            <div className="col-12 col-md-1 p-3"></div>
            <RangeSliderYears onChange={handleRangeYearsChange} />
            <div className="col-12 col-md-1 p-3"></div>
            <RangeSliderPrice onChange={handleRangePriceChange} />
          </div>
        </div>
        <div className="p-3"></div>
        <CardList
          voitures={Voitures}
          setSelectedAnnonceTitle={setSelectedAnnonceTitle}
        />
        <div className="p-3"></div>
        <Contact selectedAnnonceTitle={selectedAnnonceTitle} />
        <Footer />
      </article>
    </div>
  );
}
