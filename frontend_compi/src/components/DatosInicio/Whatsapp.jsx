/* eslint-disable no-unused-vars */
import React, { useState } from "react";

const WhatsAppForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    plan: "",
    message: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const { name, email, plan, message } = formData;
    const phoneNumber = "+51974361728"; // Reemplaza con tu número de WhatsApp
    const text = `Nombre: ${name}%0AEmail: ${email}%0APlan: ${plan}%0AMensaje: ${message}`;

    const url = `https://wa.me/${phoneNumber}?text=${text}`;
    window.open(url, "_blank");
  };

  return (
    <section id="contacto" className="text-white dark:bg-gray-800 py-12 md:py-24 lg:py-32">
      <div className="flex flex-col items-center p-6 space-y-8">
        <h2 className="gradient-text text-3xl font-bold text-center">
          Formulario de Contacto
        </h2>
        <form
          id="whatsappForm"
          className="w-full max-w-lg space-y-6"
          onSubmit={handleSubmit}
        >
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="name">
                Nombre
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="name"
                name="name"
                type="text"
                placeholder="Tu nombre"
                value={formData.name}
                onChange={handleInputChange}
                required
              />
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="email">
                Email
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="email"
                name="email"
                type="email"
                placeholder="Tu email"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="plan">
                Plan
              </label>
              <div className="relative">
                <select
                  className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="plan"
                  name="plan"
                  value={formData.plan}
                  onChange={handleInputChange}
                  required
                >
                  <option value="" disabled selected>
                    Selecciona un plan
                  </option>
                  <option value="Básico">Plan Básico</option>
                  <option value="Estándar">Plan Estándar</option>
                  <option value="Premium">Plan Premium</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                  <svg
                    className="fill-current h-4 w-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M5.5 9.5l-3 3 1 1 2-2 2 2 1-1-3-3zm-3 7h2v-6h-2v6zm10 0h2v-6h-2v6zm5-6h-2v6h2v-6zm-3 6h2v-6h-2v6z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="message">
                Mensaje
              </label>
              <textarea
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="message"
                name="message"
                rows="5"
                placeholder="Tu mensaje"
                value={formData.message}
                onChange={handleInputChange}
                required
              ></textarea>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <button
              className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2"
              type="submit"
            >
              Enviar a WhatsApp
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default WhatsAppForm;
