import { useState } from 'react';
import Container from '../atoms/Container';
import Heading from '../atoms/Heading';
import Text from '../atoms/Text';
import Button from '../atoms/Button';

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
    console.log('Form submitted:', formData);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <section className="bg-gradient-to-b from-gray-50 to-white py-24">
      <Container>
        <div className="max-w-3xl mx-auto text-center">
          <Heading level={2}>
            ¿Tienes alguna pregunta?
          </Heading>
          <Text className="mt-4 mb-8">
            Estoy aquí para ayudarte. Envíame un mensaje y me pondré en contacto contigo pronto.
          </Text>
        </div>

        <form 
          onSubmit={handleSubmit}
          className="max-w-2xl mx-auto space-y-6"
        >
          <div>
            <label 
              htmlFor="name"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Nombre completo
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              required
            />
          </div>

          <div>
            <label 
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Correo electrónico
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              required
            />
          </div>

          <div>
            <label 
              htmlFor="message"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Mensaje
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="5"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              required
            ></textarea>
          </div>

          <div className="text-center">
            <Button type="submit">
              Enviar mensaje
            </Button>
          </div>
        </form>
      </Container>
    </section>
  );
}