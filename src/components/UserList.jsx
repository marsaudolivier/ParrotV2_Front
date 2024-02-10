import { useEffect, useState } from "react";

export function UserList() {
  const [users, setUsers] = useState([]);
  const API_URL = "https://marsaud.onrender.com/utilisateurs";

  // The separate async function
  const getUsers = async () => {
    const response = await fetch(API_URL);
    const usersData = await response.json();
    setUsers(usersData);
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div>
      <h2>Gestion des utilisateurs</h2>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Nom</th>
            <th scope="col">Prénom</th>
            <th scope="col">Email</th>
            <th scope="col">Role</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr scope="row" key={user.Id_Utilisateurs}>
              <td >{user.nom}</td>
              <td>{user.prenom}</td>
              <td>{user.mail}</td>
              <td>{user.Id_Roles === 1 ? "Admin" : "Employé"}</td>  
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default UserList;
