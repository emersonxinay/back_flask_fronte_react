/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';

// Componente para mostrar cada tarjeta de curso
const CourseCard = ({ title, description, duration, price, courseUrl, courseItems, icon }) => {
  return (
    <div className="rounded-lg bg-card text-card-foreground shadow-sm border p-6" data-v0-t="card">
      <div className="flex flex-col p-6 space-y-2">
        <h3 className="flex items-center text-xl md:text-xl lg:text-3xl font-semibold">
          {title} <i className={`fas ${icon} text-blue-500`}></i>
        </h3>
        <p className="text-sm text-muted-foreground">{description}</p>
        <div className="text-sm dark-text-white">Duración:</div>
        <div className="text-2xl dark-text-white">{duration}</div>
        <p><span className="text-blue font-light text-xs">2 veces por semana de 2 horas cada clase</span></p>
        <div className="text-sm dark-text-white">Precio:</div>
        <div className="text-3xl font-bold dark-text-white">{price}</div>
        <a
          href={courseUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-green-500 hover:bg-green-600 text-white h-10 px-4 py-2 w-full mt-4"
        >
          Contactar por WhatsApp
        </a>
      </div>
      <div className="p-6 space-y-2 text-sm">
        <ul className="space-y-1">
          {courseItems.map((item, index) => (
            <li key={index}><i className="fas fa-check dark-text-white"></i> {item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

// Componente principal
const CursosSection = () => {
  const courses = [
    {
      title: 'Curso de Frontend',
      description: 'Aprende HTML, CSS, JavaScript y frameworks modernos como React y Bootstrap para crear sitios web interactivos y modernos.',
      duration: '10 semanas',
      price: '$500',
      courseUrl: 'https://wa.me/+51974361728?text=Estoy%20interesado%20en%20el%20Curso%20de%20Frontend.%20Por%20favor%20proporciónenme%20más%20información.',
      courseItems: ['HTML5 y CSS3', 'JavaScript', 'React', 'Bootstrap', 'Proyecto final de integración'],
      icon: 'fa-laptop-code'
    },
    {
      title: 'Curso de Backend',
      description: 'Domina las tecnologías de servidor como Flask, un microframework de Python ideal para crear APIs RESTful y aplicaciones backend escalables.',
      duration: '12 semanas',
      price: '$600',
      courseUrl: 'https://wa.me/+51974361728?text=Estoy%20interesado%20en%20el%20Curso%20de%20Backend.%20Por%20favor%20proporciónenme%20más%20información.',
      courseItems: ['Python y Flask', 'RESTful APIs', 'Manejo avanzado de bases de datos con SQLAlchemy', 'Autenticación y seguridad', 'Despliegue en Heroku', 'Proyecto final de integración'],
      icon: 'fa-server'
    },
    {
      title: 'Curso de Fullstack',
      description: 'Conviértete en un desarrollador fullstack dominando tanto frontend como backend con tecnologías como React, Node.js, Ruby on Rails, Flask, y bases de datos como PostgreSQL.',
      duration: '20 semanas',
      price: '$1000',
      courseUrl: 'https://wa.me/+51974361728?text=Estoy%20interesado%20en%20el%20Curso%20de%20Fullstack.%20Por%20favor%20proporciónenme%20más%20información.',
      courseItems: ['HTML5 y CSS3', 'JavaScript y React', 'Ruby on Rails, Node.js y Flask', 'PostgreSQL', 'Seguridad y autenticación', 'Proyecto final de integración'],
      icon: 'fa-globe'
    }
  ];

  return (
    <section id="cursos" className="text-white dark:bg-gray-800 py-12 md:py-24 lg:py-32">
      <div className="flex flex-col items-center p-6 space-y-8">
        <h2 className="gradient-text text-3xl font-bold text-center">
          Elige el curso más demandado en cada ruta de desarrollo
        </h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {courses.map((course, index) => (
            <CourseCard key={index} {...course} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CursosSection;
