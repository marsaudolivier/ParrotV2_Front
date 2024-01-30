export function Header() {
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
                Home
              </a>
            </li>
            <li className="nav-item">
              <a href="/ventes" className="nav-link text-secondary">
                Ventes
              </a>
            </li>
            <li className="nav-item">
              <a href="/admin" className="nav-link text-secondary">
                Administration du site
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}