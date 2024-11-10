/* eslint-disable no-unused-vars */
import React, { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    apellido: '',
    email: '',
    telefono: '',
    mensaje: '',
  });
  const [messages, setMessages] = useState([]); // Para manejar mensajes de éxito/error

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Aquí se puede implementar la lógica para enviar el formulario.
    // Ejemplo de uso de fetch o axios para enviar los datos a una API.
    try {
      const response = await fetch('/api/handle_formulario', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      const result = await response.json();

      if (response.ok) {
        setMessages([{ category: 'success', message: 'Formulario enviado correctamente.' }]);
        setFormData({ nombre: '', apellido: '', email: '', telefono: '', mensaje: '' });
      } else {
        setMessages([{ category: 'error', message: result.error || 'Ocurrió un error al enviar el formulario.' }]);
      }
    } catch (error) {
      setMessages([{ category: 'error', message: 'Error de red.' }]);
    }
  };

  return (
    <section id="contacto" className="text-white py-12 md:py-24 lg:py-32 dark:bg-gray-800">
      <div className="container px-4 md:px-6">
        <div className="max-w-xl mx-auto space-y-4">
          <div className="inline-block bg-gray-800 dark:bg-gray-700 px-3 py-1 text-sm rounded-lg">
            Formulario de Contacto
          </div>
          <h2 className="text-3xl font-bold tracking-tight">
            Déjanos tus datos y nos pondremos en contacto
          </h2>

          {/* Mensajes de éxito o error */}
          {messages.length > 0 && (
            <div>
              {messages.map((msg, index) => (
                <div key={index} className={`alert alert-${msg.category}`}>
                  {msg.message}
                </div>
              ))}
            </div>
          )}

          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <div>
                <label
                  htmlFor="nombre"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                >
                  Nombre
                </label>
                <input
                  placeholder="nombre"
                  type="text"
                  id="nombre"
                  name="nombre"
                  value={formData.nombre}
                  onChange={handleInputChange}
                  className="h-10 p-4 mt-1 block w-full rounded-md border-gray-300 bg-white text-gray-900 placeholder-gray-500 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="apellido"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                >
                  Apellido
                </label>
                <input
                  placeholder="apellido"
                  type="text"
                  id="apellido"
                  name="apellido"
                  value={formData.apellido}
                  onChange={handleInputChange}
                  className="h-10 p-4 mt-1 block w-full rounded-md border-gray-300 bg-white text-gray-900 placeholder-gray-500 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                >
                  Correo Electrónico
                </label>
                <input
                  placeholder="correo"
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="h-10 p-4 mt-1 block w-full rounded-md border-gray-300 bg-white text-gray-900 placeholder-gray-500 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="telefono"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                >
                  Teléfono
                </label>
                <input
                  placeholder="telefono"
                  type="text"
                  id="telefono"
                  name="telefono"
                  value={formData.telefono}
                  onChange={handleInputChange}
                  className="h-10 p-4 mt-1 block w-full rounded-md border-gray-300 bg-white text-gray-900 placeholder-gray-500 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  required
                />
              </div>
            </div>
            <div className="mt-4">
              <label
                htmlFor="mensaje"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300"
              >
                Mensaje
              </label>
              <textarea
                placeholder="mensaje"
                id="mensaje"
                name="mensaje"
                value={formData.mensaje}
                onChange={handleInputChange}
                rows="6"
                className="mt-1 p-4 block w-full rounded-md border-gray-300 bg-white text-gray-900 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                required
              ></textarea>
            </div>
            <div className="mt-6">
              <button
                type="submit"
                className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2"
              >
                Enviar
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
