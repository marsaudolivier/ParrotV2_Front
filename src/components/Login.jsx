import React from "react";
export function Login() {


  // Gestion de la soumission du formulaire
  const handleSubmit = async (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    if (email === "" || password === "") {
      alert("Veuillez remplir tous les champs");
    } else {
      const response = await fetch(
        "https://marsaudolivier.alwaysdata.net/utilisateurs/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ mail: email, mdp: password }),
        }
      );
      const data = await response.json();
      if (data.token) {
        //récupération du cooki envoyé 
        document.cookie = `token=${data.token}`;
        console.log(data)
        // si token présent et test de Id_Roles pour envoie sur page admin sinon page employé
        if (data.Id_Roles === 1) { window.location.href = "/admin" ;}
        else { window.location.href = "/employe" ;}
      } else {
        alert("Erreur lors de la connexion");
      }
    }
  };

//si cookie token présent alors redirection vers la page admin vérrification du role et voie si role=1 sur admin si role = 2 employé
  if (document.cookie.includes("token")) {
    const token = document.cookie.split("=")[1];
    console.log(token);
    const payload = token.split(".")[1];
    console.log(payload);
    const data = JSON.parse(atob(payload));
    console.log(data);
    if (data.Id_Roles === 1) {
      window.location.href = "/admin";
    } else {
      window.location.href = "/employe";
    }

  }else{

  
  return (
    <div className="container p-5">
      <div className="row para p-5">
        <div className="col-6  mx-auto  text-center p-4">
          <h1>Connexion</h1>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                className="form-control"
                id="email"
                name="email"
                placeholder="Email"
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Mot de passe</label>
              <input
                type="password"
                className="form-control"
                id="password"
                name="password"
                placeholder="Mot de passe"
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Se connecter
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
}
export default Login;
