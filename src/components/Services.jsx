import { useEffect, useState } from "react";

export function Services() {
  const [Serv, setServ] = useState([]);
  const [services, setServices] = useState([]);
  const API_URL = "https://marsaudolivier.alwaysdata.net/Services";

  // The separate async function
  const getServices = async () => {
    const response = await fetch(API_URL);
    const servicesData = await response.json();
    setServices(servicesData);
  };

  useEffect(() => {
    getServices();
  }, []);

  const handleServiceClick = async (id) => {
    console.log("clicked on service with id: " + id);
    const API_URLServ = `https://marsaudolivier.alwaysdata.net/Services/${id}`;

    // The separate async function
    const getServ = async () => {
      const response = await fetch(API_URLServ);
      const ServData = await response.json();
      setServ(ServData);
    };

    getServ();
  };

  const handleBackClick = () => {
    setServ([]); // Réinitialiser l'état Serv
  };

  if (Serv.length === 0) {
    return (
      <>
        <div className="fluid p-5 ">
          <div className="p-5 para col-12 col-lg-5 mx-auto">
            <div className="d-flex  justify-content-center">
              <h2 className="mx-auto m-auto">Services</h2>
              <div>
                {services.map((service) => (
                  <div key={service.Id_Services}>
                    <div className="p-2">
                      <button
                        className="btn btn-dark text-center col-12 col-md-11"
                        onClick={() => handleServiceClick(service.Id_Services)}
                      >
                        {service.titre}
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </>
    );
  } else {
    return (
      <>
        <div className="fluid p-5">
          <div className="p-5 para text-center">
            {Serv.map((se) => (
              <div key={se.Id_Services}>
                <div className="p-2">
                  <h2>{se.titre}</h2>
                  <p>{se.description}</p>
                </div>
              </div>
            ))}
            <button className="btn btn-dark" onClick={handleBackClick}>
              Retour
            </button>
          </div>
        </div>
      </>
    );
  }
}
