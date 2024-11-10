/* eslint-disable no-unused-vars */
import React from "react";

const Servicios = () => {
  const handleScrollToNosotros = () => {
    document.getElementById("nosotros").scrollIntoView({ behavior: "smooth" });
  };

  const handleContactNow = () => {
    window.open(
      "https://wa.me/+51974361728?text=Estoy%20interesado%20en%20el%20Plan%20Básico.%20Por%20favor%20proporciónenme%20más%20información.",
      "_blank"
    );
  };

  return (
    <section id="servicios" className="text-white py-12 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 md:px-6 grid md:grid-cols-2 gap-8 items-center">
        <div className="space-y-4">
          <h1 className="gradient-text text-2xl md:text-4xl font-bold tracking-tight">
            Servicios de Consultoría y Capacitación Tecnológica
          </h1>
          <p className="text-base md:text-lg text-white">
            Consultoría y capacitación diseñados para satisfacer las necesidades de
            profesionales, emprendedores y empresas. Transforme su negocio con
            nuestras soluciones a la medida. Desde el desarrollo de software hasta
            la implementación de estrategias digitales, nuestro equipo de expertos
            lo guiará hacia el éxito.
          </p>
          <div className="flex flex-col md:flex-row gap-4">
            <button
              onClick={handleScrollToNosotros}
              className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2"
            >
              Explorar Servicios
            </button>
            <button
              onClick={handleContactNow}
              className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-secondary text-secondary-foreground hover:bg-secondary/80 h-10 px-4 py-2"
            >
              Contactar Ahora
            </button>
          </div>
        </div>
        <div className="flex justify-center md:block mt-8 md:mt-0">
          <img
            src="/static/img/software_compilando.jpeg"
            width="300"
            height="240"
            alt="Servicios de Compilandocode"
            className="rounded-lg md:w-[500px] md:h-[400px]"
            style={{ objectFit: "cover" }}
          />
        </div>
      </div>
    </section>
  );
};

export default Servicios;
