/* eslint-disable no-unused-vars */
import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="container py-3 my-4">
      <p className="text-center text-white">
        © {currentYear} Compilandocode
      </p>
      {/* Redes sociales */}
      <div className="row">
        <div className="col">
          <h5>Síguenos en nuestras redes sociales</h5>
          <a
            href="https://facebook.com/compilandocode"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white mx-2"
          >
            <i className="fab fa-facebook-f fa-2x"></i>
          </a>
          <a
            href="https://tiktok.com/@compilandocode"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white mx-2"
          >
            <i className="fab fa-tiktok fa-2x"></i>
          </a>
          <a
            href="https://instagram.com/compilandocode"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white mx-2"
          >
            <i className="fab fa-instagram fa-2x"></i>
          </a>
          <a
            href="https://www.linkedin.com/company/compilandocode/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white mx-2"
          >
            <i className="fab fa-linkedin-in fa-2x"></i>
          </a>
          <a
            href="https://www.youtube.com/@compilandocode"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white mx-2"
          >
            <i className="fab fa-youtube fa-2x"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
