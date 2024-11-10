/* eslint-disable no-unused-vars */
import React from "react";

const Portafolios = () => {
  return (
    <section
      id="portafolios"
      className="text-white dark:bg-gray-800 py-12 md:py-24 lg:py-32"
    >
      <div className="bg-[#1a0d6e] text-white py-12">
        <div className="container mx-auto text-center">
          <h2 className="gradient-text text-3xl font-bold text-center">
            Páginas realizadas para Clientes
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Sección 1: Para músicos */}
            <div className="bg-[#2c1f8a] p-4 rounded-md">
              <img
                src="/static/img/musicos.png"
                alt="Para músicos"
                className="w-full h-48 object-cover rounded-md mb-4"
                width="300"
                height="200"
                style={{ aspectRatio: "300 / 200", objectFit: "cover" }}
              />
              <h2 className="text-xl font-semibold">Para músicos</h2>
            </div>

            {/* Sección 2: Para Artículos de Limpieza */}
            <div className="bg-[#2c1f8a] p-4 rounded-md">
              <img
                src="/static/img/limpieza.png"
                alt="Para Artículos de Limpieza"
                className="w-full h-48 object-cover rounded-md mb-4"
                width="300"
                height="200"
                style={{ aspectRatio: "300 / 200", objectFit: "cover" }}
              />
              <h2 className="text-xl font-semibold">Para Artículos de Limpieza</h2>
            </div>

            {/* Sección 3: Para Restaurantes */}
            <div className="bg-[#2c1f8a] p-4 rounded-md">
              <img
                src="/static/img/restaurantes.png"
                alt="Para Restaurantes"
                className="w-full h-48 object-cover rounded-md mb-4"
                width="300"
                height="200"
                style={{ aspectRatio: "300 / 200", objectFit: "cover" }}
              />
              <h2 className="text-xl font-semibold">Para Restaurantes</h2>
            </div>

            {/* Sección 4: Para personalizar pedidos */}
            <div className="bg-[#2c1f8a] p-4 rounded-md">
              <img
                src="/static/img/pedidos.png"
                alt="Para personalizar pedidos"
                className="w-full h-48 object-cover rounded-md mb-4"
                width="300"
                height="200"
                style={{ aspectRatio: "300 / 200", objectFit: "cover" }}
              />
              <h2 className="text-xl font-semibold">Para personalizar pedidos</h2>
            </div>

            {/* Sección 5: Para profesionales */}
            <div className="bg-[#2c1f8a] p-4 rounded-md">
              <img
                src="/static/img/profesionales.png"
                alt="Para profesionales"
                className="w-full h-48 object-cover rounded-md mb-4"
                width="300"
                height="200"
                style={{ aspectRatio: "300 / 200", objectFit: "cover" }}
              />
              <h2 className="text-xl font-semibold">Para profesionales</h2>
            </div>

            {/* Sección 6: Ecommerce Compilandocode */}
            <div className="bg-[#2c1f8a] p-4 rounded-md">
              <img
                src="/static/img/personalizados.png"
                alt="Ecommerce Compilandocode"
                className="w-full h-48 object-cover rounded-md mb-4"
                width="300"
                height="200"
                style={{ aspectRatio: "300 / 200", objectFit: "cover" }}
              />
              <h2 className="text-xl font-semibold">Para consumo de APIs</h2>
            </div>

            {/* Sección 7: Para Ecommerce 1 */}
            <div className="bg-[#2c1f8a] p-4 rounded-md">
              <img
                src="/static/img/mercadolibre.png"
                alt="Ecommerce Compilandocode"
                className="w-full h-48 object-cover rounded-md mb-4"
                width="300"
                height="200"
                style={{ aspectRatio: "300 / 200", objectFit: "cover" }}
              />
              <h2 className="text-xl font-semibold">Para Ecommerce</h2>
            </div>

            {/* Sección 8: Para Ecommerce 2 */}
            <div className="bg-[#2c1f8a] p-4 rounded-md">
              <img
                src="/static/img/aliexpres.png"
                alt="Ecommerce Compilandocode"
                className="w-full h-48 object-cover rounded-md mb-4"
                width="300"
                height="200"
                style={{ aspectRatio: "300 / 200", objectFit: "cover" }}
              />
              <h2 className="text-xl font-semibold">Para Ecommerce</h2>
            </div>

            {/* Sección 9: Para SAP */}
            <div className="bg-[#2c1f8a] p-4 rounded-md">
              <img
                src="/static/img/sap.png"
                alt="SAP"
                className="w-full h-48 object-cover rounded-md mb-4"
                width="300"
                height="200"
                style={{ aspectRatio: "300 / 200", objectFit: "cover" }}
              />
              <h2 className="text-xl font-semibold">Para SAP</h2>
            </div>

            {/* Agrega más secciones según sea necesario */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portafolios;
