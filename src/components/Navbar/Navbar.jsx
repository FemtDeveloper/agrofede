import React from "react";
import "./Navbar.css";
import logo from "../../assets/imgs/logo-new.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar-container">
      <Link className="navbar-brand" to="/">
        <img src={logo} alt="Logo-federación" />
      </Link>

      <div className="mobile-navbar">
        <ul className="navbar-item-container">
          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Nosotros
            </a>
            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
              <Link className="dropdown-item" to="/nosotros">
                Misión
              </Link>
              <a className="dropdown-item" href="#">
                Visión
              </a>
              <a className="dropdown-item" href="#">
                Objetivos
              </a>
            </div>
          </li>
          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Servicios
            </a>
            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
              <a className="dropdown-item" href="#">
                Consultas
              </a>
              <a className="dropdown-item" href="#">
                Información
              </a>
              <div className="dropdown-divider"></div>
              <a className="dropdown-item" href="#">
                Something else here
              </a>
            </div>
          </li>
          <li className="nav-item">
            <Link to="/registro" className="nav-link ">
              Iniciar sesión
            </Link>
          </li>
          <li className="nav-item">
            <a className="nav-link sign-in" href="#">
              AFILIACIONES
            </a>
          </li>
        </ul>
        {/* <form className="form-inline my-2 my-lg-0">
          <input
            className="form-control mr-sm-2"
            type="search"
            placeholder="Buscar..."
            aria-label="Search"
          />
          <button
            className="btn btn-outline-success my-2 my-sm-0"
            type="submit"
          >
            Buscar
          </button>
        </form> */}
      </div>
    </nav>
  );
};

export default Navbar;
