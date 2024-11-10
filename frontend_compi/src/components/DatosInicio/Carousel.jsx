/* eslint-disable no-unused-vars */
// src/components/DatosInicio/Carousel.jsx
import React from 'react';

const Carousel = () => {
  return (
    <div
      id="carouselExampleCaptions"
      className="carousel slide container-fluid"
      data-bs-ride="carousel"
    >
      <div className="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="0"
          className="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
      </div>

      <div className="carousel-inner">
        <div className="carousel-item active">
          <img
            src="../static/img/programadores1.png"
            className="d-block w-100"
            alt="Capacitación de cursos sobre tecnologías"
          />
          <div className="carousel-caption">
            <h2>Capacitación de cursos sobre tecnologías</h2>
            <h5>
              Ofrecemos formación en diversas tecnologías para mejorar habilidades
              técnicas y mantener actualizado al personal en el entorno digital.
            </h5>
          </div>
        </div>

        <div className="carousel-item">
          <img
            src="../static/img/programadores2.png"
            className="d-block w-100"
            alt="Servicio de desarrollo de software de aplicaciones móviles y web"
          />
          <div className="carousel-caption">
            <h2>Servicio de desarrollo de software de aplicaciones móviles y web</h2>
            <h5>
              Desarrollamos aplicaciones móviles y web personalizadas para optimizar
              procesos y mejorar la experiencia del usuario final.
            </h5>
          </div>
        </div>

        <div className="carousel-item">
          <img
            src="../static/img/programadores4.png"
            className="d-block w-100"
            alt="Servicio de consultoría de análisis de datos a empresas"
          />
          <div className="carousel-caption">
            <h2>Servicio de consultoría de análisis de datos a empresas</h2>
            <h5>
              Brindamos consultoría en análisis de datos para ayudar a las empresas
              a tomar decisiones informadas basadas en información detallada.
            </h5>
          </div>
        </div>
      </div>

      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default Carousel;
