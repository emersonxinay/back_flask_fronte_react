/* eslint-disable no-unused-vars */
import React from 'react';

const Planes = () => {
  return (
    <section id="planes" className="text-white dark:bg-gray-800 py-12 md:py-24 lg:py-32">
      <div className="flex flex-col items-center p-6 space-y-8">
        <h2 className="gradient-text text-3xl font-bold text-center">
          Elige el mejor plan de desarrollo web
        </h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {/* Plan Básico */}
          <div className="rounded-lg bg-card text-card-foreground shadow-sm border p-6">
            <div className="flex flex-col p-6 space-y-2">
              <h3 className="whitespace-nowrap tracking-tight text-xl font-semibold">
                Plan Básico <i className="fas fa-star text-yellow-500"></i><i className="fas fa-star text-yellow-500"></i>
              </h3>
              <p className="text-sm text-muted-foreground">
                Ideal para freelancers, emprendedores y pequeñas empresas que
                necesitan una presencia en línea simple pero efectiva. Incluye
                hosting y dominio .com.
              </p>
              <div className="text-sm text-gray-500">Precio real:</div>
              <div className="text-2xl text-gray-500 line-through">$1250</div>
              <div className="text-sm text-green-500">Precio con descuento:</div>
              <div className="text-3xl font-bold text-green-500">$500 (60% off)</div>
              <a
                href="https://wa.me/+51974361728?text=Estoy%20interesado%20en%20el%20Plan%20Básico.%20Por%20favor%20proporciónenme%20más%20información."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-green-500 hover:bg-green-600 text-white h-10 px-4 py-2 w-full mt-4"
              >
                Contactar por WhatsApp
              </a>
            </div>
            <div className="p-6 space-y-2 text-sm">
              <ul className="space-y-1">
                <li><i className="fas fa-check text-green-500"></i> Diseño de página única</li>
                <li><i className="fas fa-check text-green-500"></i> Diseño responsivo</li>
                <li><i className="fas fa-check text-green-500"></i> SEO básico</li>
                <li><i className="fas fa-check text-green-500"></i> Formulario de contacto</li>
                <li><i className="fas fa-check text-green-500"></i> Integración de redes sociales</li>
                <li><i className="fas fa-check text-green-500"></i> Tiempo de entrega: 1-2 semanas</li>
                <li><i className="fas fa-check text-green-500"></i> Soporte básico (1 mes)</li>
              </ul>
            </div>
          </div>

          {/* Plan Estándar */}
          <div className="rounded-lg bg-card text-card-foreground shadow-sm border p-6">
            <div className="flex flex-col p-6 space-y-2">
              <h3 className="whitespace-nowrap tracking-tight text-xl font-semibold">
                Plan Estándar <i className="fas fa-star text-yellow-500"></i><i className="fas fa-star text-yellow-500"></i><i className="fas fa-star text-yellow-500"></i>
              </h3>
              <p className="text-sm text-muted-foreground">
                Perfecto para pequeñas y medianas empresas que desean ampliar su
                presencia en línea con más páginas y funcionalidades mejoradas.
                Incluye hosting y dominio .com.
              </p>
              <div className="text-sm text-gray-500">Precio real:</div>
              <div className="text-2xl text-gray-500 line-through">$3750</div>
              <div className="text-sm text-green-500">Precio con descuento:</div>
              <div className="text-3xl font-bold text-green-500">$1500 (60% off)</div>
              <a
                href="https://wa.me/+51974361728?text=Estoy%20interesado%20en%20el%20Plan%20Estándar.%20Por%20favor%20proporciónenme%20más%20información."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-green-500 hover:bg-green-600 text-white h-10 px-4 py-2 w-full mt-4"
              >
                Contactar por WhatsApp
              </a>
            </div>
            <div className="p-6 space-y-2 text-sm">
              <ul className="space-y-1">
                <li><i className="fas fa-check text-green-500"></i> Diseño de hasta 5 páginas</li>
                <li><i className="fas fa-check text-green-500"></i> Diseño responsivo</li>
                <li><i className="fas fa-check text-green-500"></i> SEO avanzado</li>
                <li><i className="fas fa-check text-green-500"></i> Formulario de contacto avanzado</li>
                <li><i className="fas fa-check text-green-500"></i> Galería de imágenes</li>
                <li><i className="fas fa-check text-green-500"></i> Blog configurado</li>
                <li><i className="fas fa-check text-green-500"></i> Integración de redes sociales</li>
                <li><i className="fas fa-check text-green-500"></i> Tiempo de entrega: 2-4 semanas</li>
                <li><i className="fas fa-check text-green-500"></i> Soporte estándar (3 meses)</li>
              </ul>
            </div>
          </div>

          {/* Plan Premium */}
          <div className="rounded-lg bg-card text-card-foreground shadow-sm border p-6">
            <div className="flex flex-col p-6 space-y-2">
              <h3 className="whitespace-nowrap tracking-tight text-xl font-semibold">
                Plan Premium <i className="fas fa-star text-yellow-500"></i><i className="fas fa-star text-yellow-500"></i><i className="fas fa-star text-yellow-500"></i><i className="fas fa-star text-yellow-500"></i><i className="fas fa-star text-yellow-500"></i>
              </h3>
              <p className="text-sm text-muted-foreground">
                La solución completa para grandes empresas y tiendas en línea que
                requieren un rendimiento optimizado y recursos potentes. Incluye
                hosting y dominio .com.
              </p>
              <div className="text-sm text-gray-500">Precio real:</div>
              <div className="text-2xl text-gray-500 line-through">$7500</div>
              <div className="text-sm text-green-500">Precio con descuento:</div>
              <div className="text-3xl font-bold text-green-500">$3000 (60% off)</div>
              <a
                href="https://wa.me/+51974361728?text=Estoy%20interesado%20en%20el%20Plan%20Premium.%20Por%20favor%20proporciónenme%20más%20información."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-green-500 hover:bg-green-600 text-white h-10 px-4 py-2 w-full mt-4"
              >
                Contactar por WhatsApp
              </a>
            </div>
            <div className="p-6 space-y-2 text-sm">
              <ul className="space-y-1">
                <li><i className="fas fa-check text-green-500"></i> Diseño de hasta 10 páginas</li>
                <li><i className="fas fa-check text-green-500"></i> Diseño responsivo</li>
                <li><i className="fas fa-check text-green-500"></i> SEO profesional</li>
                <li><i className="fas fa-check text-green-500"></i> Formulario de contacto personalizado</li>
                <li><i className="fas fa-check text-green-500"></i> Galería de imágenes</li>
                <li><i className="fas fa-check text-green-500"></i> Tienda online</li>
                <li><i className="fas fa-check text-green-500"></i> Integración de redes sociales</li>
                <li><i className="fas fa-check text-green-500"></i> Tiempo de entrega: 4-6 semanas</li>
                <li><i className="fas fa-check text-green-500"></i> Soporte Premium (6 meses)</li>
                <li><i className="fas fa-check text-green-500"></i> Optimización de rendimiento</li>
                <li><i className="fas fa-check text-green-500"></i> Soporte 24/7</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Planes;
