/* eslint-disable no-unused-vars */
import React from 'react';

const Cursos = () => {
  const courses = [
    {
      title: 'Desarrollo de Aplicaciones con Python',
      description: 'Aprende a crear aplicaciones robustas y escalables utilizando el lenguaje de programación Python. Desde conceptos básicos hasta proyectos avanzados, este programa te preparará para ser un desarrollador Python experto.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-8 w-8 text-gray-900 dark:text-gray-50">
          <polyline points="16 18 22 12 16 6"></polyline>
          <polyline points="8 6 2 12 8 18"></polyline>
        </svg>
      )
    },
    {
      title: 'Transformación Digital para Empresas',
      description: 'Descubre cómo las últimas tecnologías y metodologías pueden transformar tu negocio. Este programa te brindará las herramientas y estrategias necesarias para impulsar la innovación y mejorar la eficiencia de tus procesos.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-8 w-8 text-gray-900 dark:text-gray-50">
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
      )
    },
    {
      title: 'Desarrollo Web Moderno',
      description: 'Aprende a crear sitios y aplicaciones web atractivas, responsivas y optimizadas utilizando las últimas tecnologías y mejores prácticas. Este programa te preparará para ser un desarrollador web de alto nivel.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-8 w-8 text-gray-900 dark:text-gray-50">
          <circle cx="12" cy="12" r="10"></circle>
          <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path>
          <path d="M2 12h20"></path>
        </svg>
      )
    }
  ];

  return (
    <section id="cursos" className="text-white dark:bg-gray-800 py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6 space-y-8">
        <div className="text-center space-y-4">
          <div className="inline-block bg-gray-800 dark:bg-gray-700 px-3 py-1 text-sm rounded-lg">
            Cursos y Programas
          </div>
          <h2 className="gradient-text text-3xl font-bold tracking-tight">
            Impulsa tus habilidades tecnológicas
          </h2>
          <p className="dark-text-white max-w-[700px] mx-auto">
            Nuestros programas de capacitación en tecnología están diseñados para
            ayudarte a desarrollar las habilidades que necesitas para tener éxito en
            el mercado laboral. Desde cursos intensivos hasta programas a largo
            plazo, tenemos una amplia gama de opciones para satisfacer tus
            necesidades.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((course, index) => (
            <div key={index} className="rounded-lg border bg-card text-card-foreground shadow-sm" data-v0-t="card">
              <div className="p-6">
                <div className="space-y-4">
                  {course.icon}
                  <h3 className="text-xl font-bold">{course.title}</h3>
                  <p className="dark-text-white">{course.description}</p>
                  <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2">
                    Más Información
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Cursos;
