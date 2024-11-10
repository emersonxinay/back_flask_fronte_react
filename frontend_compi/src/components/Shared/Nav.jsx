/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = ({ isAuthenticated, currentUser }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleMode = () => {
    setIsDarkMode(!isDarkMode);
    document.body.classList.toggle("dark-mode", isDarkMode);
  };

  return (
    <nav className={`navbar navbar-expand-md navbar-${isDarkMode ? "dark" : "light"} bg-${isDarkMode ? "dark" : "light"} fixed-top`}>
      <div className="container">
        <Link className="navbar-brand d-flex align-items-center" to="/">
          <img
            src="../../static/img/compilando-oficial-transparente.svg"
            className="nav-img"
            alt="logo compilandocode"
          />
          <span className="ms-2 d-none d-sm-inline">Compilando Code</span>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarCollapse"
          aria-controls="navbarCollapse"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarCollapse">
          <ul className="navbar-nav me-auto mb-2 mb-md-0">
            <li className="nav-item">
              <Link className="nav-link" to="/servicios">Servicios</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/nosotros">Nosotros</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/cursos">Cursos</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/portafolios">Portafolios</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/planes">Planes</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contacto">Contacto</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/blog">Blog</Link>
            </li>
            {isAuthenticated && (
              <>
                <li className="nav-item">
                  <Link className="nav-link btn btn-info text-white ms-md-2" to="/upload_video">
                    Cargar Nuevo Video
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link btn btn-primary text-white ms-md-2" to="/mis_videos">
                    Mis Videos
                  </Link>
                </li>
              </>
            )}
          </ul>
          <form className="d-flex ms-auto" role="search" action="/search" method="GET">
            <input
              className="form-control me-2"
              type="search"
              name="query"
              placeholder="Buscar..."
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">Buscar</button>
          </form>
          {isAuthenticated ? (
            <div className="dropdown ms-3">
              <a
                href="#"
                className="d-block link-body-emphasis text-decoration-none dropdown-toggle"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <img
                  src={currentUser.avatar || "https://avatars.githubusercontent.com/u/51926375?v=4"}
                  alt="user-avatar"
                  width="32"
                  height="32"
                  className="rounded-circle"
                />
              </a>
              <ul className="dropdown-menu dropdown-menu-end bg-dark">
                <li>
                  <a className="dropdown-item text-white" href="#">
                    Hola, {currentUser.username}
                  </a>
                </li>
                <li>
                  <Link className="dropdown-item text-white" to="/upload_video">
                    Cargar Nuevo Video
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item text-white" to="/mis_videos">
                    Mis Videos
                  </Link>
                </li>
                <li><hr className="dropdown-divider text-white" /></li>
                <li>
                  <Link className="dropdown-item text-danger" to="/logout">
                    Cerrar Sesión
                  </Link>
                </li>
              </ul>
            </div>
          ) : (
            <div className="d-flex ms-3">
              <Link to="/login" className="btn btn-link text-white me-2 my-2" title="Iniciar Sesión">
                <i className="fas fa-sign-in-alt"></i>
              </Link>
              <Link to="/registro" className="btn btn-link text-white my-2" title="Registrarse">
                <i className="fas fa-user-plus"></i>
              </Link>
            </div>
          )}
        </div>
        <button id="toggle-mode" className="btn btn-light ms-3" onClick={toggleMode}>
          <i className={`fas ${isDarkMode ? "fa-moon" : "fa-sun"}`}></i>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
