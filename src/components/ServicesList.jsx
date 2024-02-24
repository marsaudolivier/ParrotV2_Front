import { useEffect, useState } from "react";

export function ServicesList() {
  const [services, setServices] = useState([]);
  const API_URL = "https://marsaudolivier.alwaysdata.net/services";

  // The separate async function
  const getServices = async () => {
    const response = await fetch(API_URL);
    const servicesData = await response.json();
    setServices(servicesData);
  };
  useEffect(() => {
    getServices();
  }, []);
  return (
    <div>
      <h2>Gestion des services</h2>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">titre</th>
            <th scope="col">Description</th>
          </tr>
        </thead>
        <tbody>
          {services.map((service) => (
            <tr scope="row" key={service.Id_Services}>
              <td>{service.titre}</td>
              <td>{service.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ServicesList;
