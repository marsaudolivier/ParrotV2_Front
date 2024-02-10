import { useEffect, useState } from "react";

export function ContactsList() {
  const [contact, setContact] = useState([]);
  const API_URL = "https://marsaud.onrender.com/formulaires";

  // The separate async function
  const getContact = async () => {
    const response = await fetch(API_URL);
    const contactData = await response.json();
    setContact(contactData);
  };

  useEffect(() => {
    getContact();
  }, []);

  return (
    <div>
      <h2>Gestion des contacts</h2>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">annonce</th>
            <th scope="col">Nom</th>
            <th scope="col">Prénom</th>
            <th scope="col">Message</th>
            <th scope="col">traité</th>
          </tr>
        </thead>
        <tbody>
          {contact.map((contact) => (
            <tr scope="row" key={contact.Id_Formulaires}>
              <td >{contact.annonce}</td>
              <td >{contact.nom}</td>
              <td>{contact.prenom}</td>
              <td>{contact.message}</td>
              <td>{contact.Id_FormulairesOk === 1 ? "Non traité" : "traité"}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );

}

export default ContactsList;
