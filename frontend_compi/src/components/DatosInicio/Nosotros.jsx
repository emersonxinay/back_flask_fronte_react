/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';

// Componente para mostrar la información de cada sección (Sobre Nosotros, Misión, Visión)
const SectionCard = ({ title, subtitle, description, imgSrc, imgAlt }) => {
  return (
    <div className="container px-4 md:px-6 grid md:grid-cols-2 gap-8">
      <div>
        <img
          src={imgSrc}
          width="500"
          height="400"
          alt={imgAlt}
          className="rounded-lg"
          style={{ aspectRatio: '500 / 400', objectFit: 'cover' }}
        />
      </div>
      <div className="space-y-4">
        <div className="inline-block bg-gray-800 px-3 py-1 text-sm rounded-lg dark:bg-gray-800">
          {subtitle}
        </div>
        <h2 className="gradient-text text-3xl font-bold tracking-tight">
          {title}
        </h2>
        <p className="text-white">{description}</p>
      </div>
    </div>
  );
};

// Componente para los tres servicios dentro de la sección "Sobre Nosotros"
const ServiceCard = ({ icon, title, description }) => {
  return (
    <div className="dark:bg-gray-800 rounded-lg p-4">
      {icon}
      <h3 className="text-lg font-bold">{title}</h3>
      <p className="text-white">{description}</p>
    </div>
  );
};

// Componente principal
const NosotrosSection = () => {
  return (
    <section id="nosotros" className="text-white py-12 md:py-24 lg:py-32">
      {/* Sección de Sobre Nosotros */}
      <SectionCard
        title="Expertos en Transformación Digital y Desarrollo de Software"
        subtitle="Sobre Nosotros"
        description="En Compilandocode, nos enorgullecemos de ser líderes en consultoría tecnológica y capacitación. Nuestro equipo de expertos trabaja de cerca con empresas de todos los tamaños para diseñar e implementar soluciones a la medida que impulsen su crecimiento y éxito. Desde el desarrollo de software personalizado hasta la implementación de estrategias de transformación digital, nos enfocamos en brindar resultados tangibles que generen un impacto duradero."
        imgSrc="../static/img/consultora_compilando.jpeg"
        imgAlt="Sobre Compilandocode"
      />

      {/* Servicios de Sobre Nosotros */}
      <div className="grid grid-cols-1 gap-4 mt-8">
        <ServiceCard
          icon={
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
          }
          title="Capacitación de Cursos"
          description="Ofrecemos formación en diversas tecnologías para mejorar habilidades técnicas y mantener actualizado al personal en el entorno digital."
        />
        <ServiceCard
          icon={
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
          }
          title="Desarrollo de Aplicaciones"
          description="Desarrollamos aplicaciones móviles y web personalizadas para optimizar procesos y mejorar la experiencia del usuario final."
        />
        <ServiceCard
          icon={
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
          }
          title="Consultoria de Datos"
          description="Brindamos consultoría en análisis de datos para ayudar a las empresas a tomar decisiones informadas basadas en información detallada."
        />
      </div>
    </section>
  );
};

// Componente Misión
const MisionSection = () => {
  return (
    <section id="mision-vision" className="text-white py-12 md:py-24 lg:py-32">
      <SectionCard
        title="Transformar ideas en soluciones tecnológicas innovadoras"
        subtitle="Misión"
        description="Nuestra misión en Compilandocode es ser un motor de cambio, convirtiendo ideas en soluciones tecnológicas que impulsen la productividad y competitividad de nuestros clientes. Nos comprometemos a ofrecer resultados de calidad superior y a superar las expectativas en cada proyecto."
        imgSrc="../static/img/consultora_compilando.avif"
        imgAlt="Misión de Compilandocode"
      />
    </section>
  );
};

// Componente Visión
const VisionSection = () => {
  return (
    <section id="vision" className="text-white py-12 md:py-24 lg:py-32">
      <SectionCard
        title="Ser líderes en innovación tecnológica y desarrollo sostenible"
        subtitle="Visión"
        description="Nuestra visión en Compilandocode es liderar el camino en la innovación tecnológica y el desarrollo sostenible. Nos esforzamos por ser reconocidos como un socio estratégico confiable que impulsa el progreso digital y social a través de soluciones tecnológicas responsables y sostenibles."
        imgSrc="../static/img/software_compilando.jpeg"
        imgAlt="Visión de Compilandocode"
      />
    </section>
  );
};

// Componente principal que junta todo
const Nosotros = () => {
  return (
    <div>
      <NosotrosSection />
      <MisionSection />
      <VisionSection />
    </div>
  );
};

export default Nosotros;
