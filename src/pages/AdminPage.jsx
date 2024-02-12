import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { useEffect, useState } from "react";
import { UserList } from "../components/UserList";
import { AvisList } from "../components/AvisList";
import { CarsList } from "../components/CarsList";
import { HorairesList } from "../components/HorairesList";
import { ServicesList } from "../components/ServicesList";
import { ContactsList } from "../components/ContactsList";

export default function AdminPage() {
  const [showUserList, setShowUserList] = useState(false);
  const [ShowAvisList, setShowAvisList] = useState(false);
  const [showCarsList, setShowCarList] = useState(false);
  const [showHorairesList, setshowHorairesList] = useState(false);
  const [showServicesList, setShowServicesList] = useState(false);
  const [showContacts, setShowContacts] = useState(false);


  function showUsers() {
    setShowUserList(true);
    setShowAvisList(false)
    setShowCarList(false);
    setshowHorairesList(false);
    setShowServicesList(false);
    setShowContacts(false);
  }
    function showAvis() {
    setShowAvisList(true);
    setShowUserList(false);
    setShowCarList(false);
    setshowHorairesList(false);
    setShowServicesList(false);
    setShowContacts(false);
  }
  function showCars() {
    setShowCarList(true);
    setShowUserList(false);
    setShowAvisList(false);
    setshowHorairesList(false);
    setShowServicesList(false);
    setShowContacts(false);
  }
  function showHoraires() {
    setshowHorairesList(true);
    setShowUserList(false);
    setShowAvisList(false);
    setShowCarList(false);
    setShowServicesList(false);
    setShowContacts(false);
  }
  function showServices() {
    setShowServicesList(true);
    setShowUserList(false);
    setShowAvisList(false);
    setShowCarList(false);
    setshowHorairesList(false);
    setShowContacts(false);
  }
  function showContact() {
    setShowContacts(true);
    setShowUserList(false);
    setShowAvisList(false);
    setShowCarList(false);
    setshowHorairesList(false);
    setShowServicesList(false);
  }

  if (document.cookie.includes("token")) {
    const token = document.cookie.split("=")[1];
    const payload = token.split(".")[1];
    const data = JSON.parse(atob(payload));

    if (data.Id_Roles === 1) {
      return (
        <>
          <Header />
          <div className="container-fluid">
            <div className="row">
              <div className="col-2 text-center">
                <h3>Gestion admin</h3>
                <button
                  onClick={showUsers}
                  className="btn btn-outline-danger mt-3"
                >
                  Gestion des Utilisateurs
                </button>
                <br />
                <br />
                <button 
                onClick={showAvis}
                    className="btn btn-outline-danger">
                  Gestion des Avis
                </button>
                <br />
                <br />
                <button 
                 onClick={showCars}
                 className="btn btn-outline-danger">
                  Gestion des Véhicules
                </button>
                <br />
                <br />
                <button 
                onClick={showHoraires}
                className="btn btn-outline-danger">
                  Gestion des Horaires
                </button>
                <br />
                <br />
                <button 
                onClick={showServices}
                className="btn btn-outline-danger">
                  Gestion des Services
                </button>
                <br />
                <br />
                <button 
                onClick={showContact}
                className="btn btn-outline-danger">
                  Gestion des Contact
                </button>
                <br />
                <br />
              </div>
              <div className="col-10">
                {showUserList && <UserList />}
                {ShowAvisList && <AvisList />}
                {showCarsList && <CarsList />}
                {showHorairesList && <HorairesList />}
                {showServicesList && <ServicesList />}
                {showContacts && <ContactsList />}
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
