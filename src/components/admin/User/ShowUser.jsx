import React, { useState, useEffect } from "react";
export function ShowUser() {
  const [user, setUser] = useState([]);
  const API_URL = "https://marsaudolivier.alwaysdata.net/utilisateurs";

  // The separate async function
  const getUser = async () => {
    const response = await fetch(API_URL);
    const userData = await response.json();
    setUser(userData);
  };

  useEffect(() => {
    getUser();
  }, []);
  
  return (
    <>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Nom</th>
            <th scope="col">Prénom</th>
            <th scope="col">Mail</th>
            <th scope="col">Role</th>
            {/* bouton pour modifier en récupérant l'id */}
            <th scope="col">Modifier</th>
            <th scope="col">Suprimer</th>
          </tr>
        </thead>
        <tbody>
          {user.map((user) => (
            <tr scope="row" key={user.Id_Utilisateurs}>
              <td>{user.nom}</td>
              <td>{user.prenom}</td>
              <td>{user.mail}</td>
              <td>{user.Id_Roles}</td>
              <td>
                <button
                  onClick={() => {
                    window.location.href =
                      "/admin/user/show/" + user.Id_Utilisateurs;
                  }}
                  className="btn btn-outline-danger p-4"
                >
                  Modifier
                </button>
              </td>
              <td>
                <button
                  onClick={() => {
                    window.location.href =
                      "/admin/user/delete/" + user.Id_Utilisateurs;
                  }}
                  className="btn btn-outline-danger p-4"
                >
                  Suprimer
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
