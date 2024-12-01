import { Link } from "react-router-dom";
import { mapRoutes } from "../../shared/routes.jsx";
import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext.jsx";

function NavBar() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <nav className={`navbar navbar-expand-sm navbar-${theme} bg-${theme}`}>
      <div className="container">
        <a className="navbar-brand" href="#">
          News App
        </a>
        <button
          className="navbar-toggler d-lg-none"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapsibleNavId"
          aria-controls="collapsibleNavId"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="collapsibleNavId">
          <ul className="navbar-nav me-auto mt-2 mt-lg-0">
            {mapRoutes(([path, { name }]) => {
              return (
                <li key={path} className="nav-item">
                  <Link className="nav-link" to={path}>
                    {name}
                    {/* <span className="visually-hidden">(current)</span> */}
                  </Link>
                </li>
              );
            })}
            <li className="nav-item">
              <button className="nav-link" onClick={toggleTheme}>
                Toggle Theme
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
