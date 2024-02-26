export function Header() {
  if (document.cookie.includes("token")) {
    const token = document.cookie.split("=")[1];
    const payload = token.split(".")[1];
    const data = JSON.parse(atob(payload));

    if (data.Id_Roles === 1 || data.Id_Roles === 2) {
      return (
        <>
          <div className="px-3 py-2 text-bg-dark">
            <h1 className="ms-2 title">Garage V.Parrot</h1>
            <div className="d-flex align-items-center link-body-emphasis text-decoration-none ">
              <ul className="nav col-12  justify-content-evenly p-3">
                <li className="nav-item">
                  <a
                    href="/"
                    className="nav-link px-2 text-secondary"
                    aria-current="page"
                  >
                    <i class="bi bi-house"> </i>Acceuil
                  </a>
                </li>
                <li className="nav-item">
                  <a href="/ventes" className="nav-link text-secondary">
                  <i class="bi bi-car-front"> </i>Ventes
                  </a>
                </li>
                <li className="nav-item">
                  <a href="/login" className="nav-link text-secondary">
                  <i class="bi bi-dash-circle"></i>Administration du site
                  </a>
                </li>
              </ul>
            </div>
            <div className="d-flex justify-content-end">
              <button
                className="btn btn-secondary btn-sm"
                onClick={() => {
                  document.cookie =
                    "token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
                  window.location.href = "/";
                }}
              >
                Déconnexion
              </button>
            </div>
          </div>
        </>
      );
    }
  } else {
    return (
      <>
        <div className="px-3 py-2 text-bg-dark">
          <h1 className="ms-2 title">Garage V.Parrot</h1>
          <div className="d-flex align-items-center link-body-emphasis text-decoration-none ">
            <ul className="nav col-12  justify-content-evenly p-3">
              <li className="nav-item">
                <a
                  href="/"
                  className="nav-link px-2 text-secondary"
                  aria-current="page"
                >
                  <i class="bi bi-house"> </i>Acceuil
                </a>
              </li>
              <li className="nav-item">
                <a href="/ventes" className="nav-link text-secondary">
                <i class="bi bi-car-front"> </i>Ventes
                </a>
              </li>
              <li className="nav-item">
                <a href="/login" className="nav-link text-secondary">
                <i class="bi bi-dash-circle"></i>Administration du site
                </a>
              </li>
            </ul>
          </div>
        </div>
      </>
    );
  }
}
