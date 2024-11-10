/* eslint-disable no-unused-vars */
import React from "react";

const Expertos = () => {
  return (
    <section id="expertos" className="text-white py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6 grid md:grid-cols-2 gap-8">
        <div>
          <img
            src="../static/img/consultora_compilando.jpeg"
            width="500"
            height="400"
            alt="Sobre Compilandocode"
            className="rounded-lg"
            style={{ aspectRatio: "500 / 400", objectFit: "cover" }}
          />
        </div>
        <div className="space-y-4">
          <div className="inline-block bg-gray-800 px-3 py-1 text-sm rounded-lg dark:bg-gray-800">
            Sobre Expertos
          </div>
          <h2 className="gradient-text text-3xl font-bold tracking-tight">
            Expertos en Transformación Digital y Desarrollo de Software
          </h2>
          <p className="text-white">
            En Compilandocode, nos enorgullecemos de ser líderes en consultoría
            tecnológica y capacitación. Nuestro equipo de expertos trabaja de
            cerca con empresas de todos los tamaños para diseñar e implementar
            soluciones a la medida que impulsen su crecimiento y éxito. Desde el
            desarrollo de software personalizado hasta la implementación de
            estrategias de transformación digital, nos enfocamos en brindar
            resultados tangibles que generen un impacto duradero.
          </p>
          <div className="grid grid-cols-1 gap-4">
            <div className="dark:bg-gray-800 rounded-lg p-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-8 w-8 text-gray-900 dark:text-gray-50"
              >
                <rect width="16" height="16" x="4" y="4" rx="2"></rect>
                <rect width="6" height="6" x="9" y="9" rx="1"></rect>
                <path d="M15 2v2"></path>
                <path d="M15 20v2"></path>
                <path d="M2 15h2"></path>
                <path d="M2 9h2"></path>
                <path d="M20 15h2"></path>
                <path d="M20 9h2"></path>
                <path d="M9 2v2"></path>
                <path d="M9 20v2"></path>
              </svg>
              <h3 className="text-lg font-bold">Capacitación de Cursos</h3>
              <p className="text-white">
                Ofrecemos formación en diversas tecnologías para mejorar
                habilidades técnicas y mantener actualizado al personal en el
                entorno digital.
              </p>
            </div>
            <div className="dark:bg-gray-800 rounded-lg p-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-8 w-8 text-gray-900 dark:text-gray-50"
              >
                <circle cx="12" cy="12" r="10"></circle>
                <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path>
                <path d="M2 12h20"></path>
              </svg>
              <h3 className="text-lg font-bold">Desarrollo de Aplicaciones</h3>
              <p className="text-white">
                Desarrollamos aplicaciones móviles y web personalizadas para
                optimizar procesos y mejorar la experiencia del usuario final.
              </p>
            </div>
            <div className="dark:bg-gray-800 rounded-lg p-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-8 w-8 text-gray-900 dark:text-gray-50"
              >
                <polyline points="16 18 22 12 16 6"></polyline>
                <polyline points="8 6 2 12 8 18"></polyline>
              </svg>
              <h3 className="text-lg font-bold">Consultoria de Datos</h3>
              <p className="text-white">
                Brindamos consultoría en análisis de datos para ayudar a las
                empresas a tomar decisiones informadas basadas en información
                detallada.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Expertos;
