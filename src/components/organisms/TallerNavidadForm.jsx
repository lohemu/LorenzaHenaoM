import { useState } from 'react';

export function TallerNavidadForm() {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    enteraste: '',
    motiva: '',
    vivir: '',
    experiencia: '',
    alergias: '',
    recibir: '',
    regalarte: '',
    confirmo: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // URL del formulario de Google Forms
  const GOOGLE_FORM_URL = "https://docs.google.com/forms/d/e/1FAIpQLScVf9ypVQKYRyiSG9yTyRU3so75YzBaDONyiPEOQPFHGFOhtw/formResponse";

  // IDs de los campos - IMPORTANTE: Debes inspeccionar tu formulario para obtener los IDs reales
  // Para obtenerlos: Vista previa del form > F12 > buscar cada campo input > copiar el "name"
  const FIELD_NAMES = {
    nombre: "entry.867010034",
    email: "entry.1846066041",
    telefono: "entry.433917759",
    enteraste: "entry.1087467061",
    motiva: "entry.142782550",
    vivir: "entry.1089323056",
    experiencia: "entry.815002421",
    alergias: "entry.84510736",
    recibir: "entry.885452266",
    regalarte: "entry.323804631",
    confirmo: "entry.429135733"

  };

  // Definición de los pasos del formulario
  const steps = [
    {
      title: "Información Personal",
      fields: ['nombre', 'email', 'telefono']
    },
    {
      title: "Cuéntanos más sobre ti",
      fields: ['enteraste', 'motiva', 'vivir', 'experiencia']
    },
    {
      title: "Detalles del Taller",
      fields: ['alergias', 'recibir']
    },
    {
      title: "Cierre",
      fields: ['regalarte', 'confirmo']
    }
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const validateCurrentStep = () => {
    const currentFields = steps[currentStep].fields;

    // Validar campos requeridos del paso actual
    if (currentStep === 0) {
      return formData.nombre && formData.email && formData.telefono && formData.ciudad;
    }
    if (currentStep === 1) {
      return formData.conociste && formData.participado;
    }
    return true; // El último paso no tiene campos obligatorios
  };

  const nextStep = () => {
    if (validateCurrentStep() && currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);

    try {
      const submitData = new FormData();
      Object.keys(FIELD_NAMES).forEach(key => {
        if (formData[key]) {
          submitData.append(FIELD_NAMES[key], formData[key]);
        }
      });

      await fetch(GOOGLE_FORM_URL, {
        method: 'POST',
        body: submitData,
        mode: 'no-cors'
      });

      setIsSubmitted(true);
      setFormData({
        nombre: '',
        email: '',
        telefono: '',
        enteraste: '',
        motiva: '',
        vivir: '',
        experiencia: '',
        alergias: '',
        recibir: '',
        regalarte: '',
        confirmo: ''
      });

      setTimeout(() => {
        setIsSubmitted(false);
        setCurrentStep(0);
      }, 5000);

    } catch (error) {
      console.error('Error:', error);
      setIsSubmitted(true);

      setTimeout(() => {
        setIsSubmitted(false);
        setCurrentStep(0);
      }, 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-red-50 via-white to-green-50 flex items-center justify-center p-4">
        <div className="max-w-2xl w-full bg-white rounded-3xl shadow-2xl p-8 md:p-12 text-center animate-scale-in border-2 border-green-200">
          <div className="text-6xl mb-6">🎉</div>
          <h2 className="text-3xl font-bold text-gray-800 mb-4">¡Inscripción recibida!</h2>
          <p className="text-lg text-gray-600 mb-6">
            Gracias por inscribirte al taller. Te enviaré los detalles y las instrucciones
            para confirmar tu participación con el pago.
          </p>
          <div className="flex items-center justify-center gap-3 text-green-800">
            <div className="w-10 h-10 bg-green-200 rounded-full flex items-center justify-center">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <p className="text-xl font-semibold">¡Nos vemos en el taller!</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-red-50 via-white to-green-50 py-8 md:py-12 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Imagen de cabecera */}
        <div className="mb-8 rounded-3xl overflow-hidden shadow-xl">
          <div className="relative h-64 md:h-80 bg-gradient-to-br from-red-400 via-pink-300 to-purple-400 flex items-center justify-center">
            <div className="absolute inset-0 opacity-20" style={{
              backgroundImage: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.4"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")'
            }}></div>
            <div className="relative text-center z-10 p-6">
              <div className="text-6xl mb-4">🎄✨</div>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-3 drop-shadow-lg">
                Navidad para crear y creer en ti
              </h1>
              <p className="text-xl text-white/90 drop-shadow">Taller presencial de manualidades navideñas</p>
            </div>
          </div>
        </div>

        {/* Tarjeta del formulario */}
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border-2 border-red-100">
          {/* Descripción */}
          <div className="p-6 md:p-8 bg-gradient-to-r from-red-50 to-green-50 border-b-2 border-red-100">
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              Regálate una tarde para ti, llena de valor, calma y creatividad.
              En este taller presencial aprenderás a crear hermosos adornos navideños en fieltro
              mientras te reconectas contigo misma y con el poder de creer en ti.
            </p>
            <div className="inline-block bg-red-100 px-4 py-2 rounded-full border border-red-300">
              <p className="text-red-700 font-semibold">
                🌟 Cupos limitados — ¡reserva el tuyo llenando este formulario!
              </p>
            </div>
            <p className="text-sm text-gray-600 mt-4">
              Una vez completes tu inscripción, te enviaré los detalles del taller y las
              instrucciones para confirmar tu participación con el pago.
            </p>
          </div>

          {/* Indicador de progreso */}
          <div className="px-6 md:px-8 pt-6">
            <div className="flex items-center justify-between mb-2">
              {steps.map((step, index) => (
                <div key={index} className="flex items-center flex-1">
                  <div className={`flex items-center justify-center w-8 h-8 rounded-full font-bold transition-all ${index <= currentStep
                      ? 'bg-red-500 text-white'
                      : 'bg-gray-200 text-gray-500'
                    }`}>
                    {index < currentStep ? '✓' : index + 1}
                  </div>
                  {index < steps.length - 1 && (
                    <div className={`flex-1 h-1 mx-2 transition-all ${index < currentStep ? 'bg-red-500' : 'bg-gray-200'
                      }`}></div>
                  )}
                </div>
              ))}
            </div>
            <p className="text-sm text-gray-600 text-center mb-4">
              Paso {currentStep + 1} de {steps.length}: {steps[currentStep].title}
            </p>
          </div>

          {/* Contenido del formulario */}
          <div className="p-6 md:p-8">
            <div className="min-h-[400px]">
              {/* Paso 1: Información Personal */}
              {currentStep === 0 && (
                <div className="space-y-6 animate-fade-in">
                  <div>
                    <label className="block mb-2 text-sm font-semibold text-gray-700">
                      Nombre completo <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="nombre"
                      value={formData.nombre}
                      onChange={handleChange}
                      placeholder="Tu nombre completo"
                      className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 focus:border-red-400 focus:outline-none transition-all"
                    />
                  </div>

                  <div>
                    <label className="block mb-2 text-sm font-semibold text-gray-700">
                      Correo electrónico <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="tu@email.com"
                      className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 focus:border-red-400 focus:outline-none transition-all"
                    />
                  </div>

                  <div>
                    <label className="block mb-2 text-sm font-semibold text-gray-700">
                      Teléfono de contacto <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      name="telefono"
                      value={formData.telefono}
                      onChange={handleChange}
                      placeholder="Tu número de teléfono"
                      className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 focus:border-red-400 focus:outline-none transition-all"
                    />
                  </div>

                  <div>
                    <label className="block mb-2 text-sm font-semibold text-gray-700">
                      Enteraste <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="enteraste"
                      value={formData.enteraste}
                      onChange={handleChange}
                      placeholder="Whatsapp"
                      className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 focus:border-red-400 focus:outline-none transition-all"
                    />
                  </div>
                </div>
              )}

              {/* Paso 2: Cuéntanos más sobre ti */}
              {currentStep === 1 && (
                <div className="space-y-6 animate-fade-in">
                  <div>
                    <label className="block mb-2 text-sm font-semibold text-gray-700">
                      ¿Vivir? <span className="text-red-500">*</span>
                    </label>
                    <select
                      name="motiva"
                      value={formData.motiva}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 focus:border-red-400 focus:outline-none transition-all"
                    >
                      <option value="">Selecciona una opción</option>
                      <option value="redes-sociales">Redes sociales</option>
                      <option value="amigos-familiares">Amigos o familiares</option>
                      <option value="buscador-internet">Buscador de internet</option>
                      <option value="publicidad">Publicidad</option>
                      <option value="otro">Otro</option>
                    </select>
                  </div>

                  <div>
                    <label className="block mb-2 text-sm font-semibold text-gray-700">
                      ¿Experiencia? <span className="text-red-500">*</span>
                    </label>
                    <div className="space-y-2">
                      <label className="flex items-center p-3 rounded-lg border-2 border-gray-300 cursor-pointer hover:border-red-300 transition-all">
                        <input
                          type="radio"
                          name="participado"
                          value="si"
                          checked={formData.participado === 'si'}
                          onChange={handleChange}
                          className="mr-3 w-4 h-4 text-red-500"
                        />
                        <span>Sí, he participado antes</span>
                      </label>
                      <label className="flex items-center p-3 rounded-lg border-2 border-gray-300 cursor-pointer hover:border-red-300 transition-all">
                        <input
                          type="radio"
                          name="participado"
                          value="no"
                          checked={formData.participado === 'no'}
                          onChange={handleChange}
                          className="mr-3 w-4 h-4 text-red-500"
                        />
                        <span>No, es mi primera vez</span>
                      </label>
                    </div>
                  </div>
                </div>
              )}

              {/* Paso 3: Detalles del Taller */}
              {currentStep === 2 && (
                <div className="space-y-6 animate-fade-in">
                  <div>
                    <label className="block mb-2 text-sm font-semibold text-gray-700">
                      ¿Qué esperas de este taller?
                    </label>
                    <textarea
                      name="expectativas"
                      value={formData.expectativas}
                      onChange={handleChange}
                      placeholder="Comparte tus expectativas..."
                      rows={4}
                      className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 focus:border-red-400 focus:outline-none transition-all resize-none"
                    />
                  </div>

                  <div>
                    <label className="block mb-2 text-sm font-semibold text-gray-700">
                      ¿Tienes alguna alergia o condición que debamos conocer?
                    </label>
                    <textarea
                      name="alergias"
                      value={formData.alergias}
                      onChange={handleChange}
                      placeholder="Déjanos saber si hay algo importante..."
                      rows={3}
                      className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 focus:border-red-400 focus:outline-none transition-all resize-none"
                    />
                  </div>

                  <div>
                    <label className="block mb-2 text-sm font-semibold text-gray-700">
                      Comentarios adicionales
                    </label>
                    <textarea
                      name="comentarios"
                      value={formData.comentarios}
                      onChange={handleChange}
                      placeholder="¿Algo más que quieras compartir?"
                      rows={3}
                      className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 focus:border-red-400 focus:outline-none transition-all resize-none"
                    />
                  </div>
                </div>
              )}
            </div>

            {/* Botones de navegación */}
            <div className="flex justify-between items-center mt-8 pt-6 border-t-2 border-gray-100">
              <button
                onClick={prevStep}
                disabled={currentStep === 0}
                className={`px-6 py-3 rounded-lg font-semibold transition-all ${currentStep === 0
                    ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                  }`}
              >
                ← Anterior
              </button>

              {currentStep < steps.length - 1 ? (
                <button
                  onClick={nextStep}
                  disabled={!validateCurrentStep()}
                  className={`px-6 py-3 rounded-lg font-semibold transition-all ${validateCurrentStep()
                      ? 'bg-gradient-to-r from-red-500 to-green-500 text-white hover:from-red-600 hover:to-green-600 shadow-lg'
                      : 'bg-gray-200 text-gray-400 cursor-not-allowed'
                    }`}
                >
                  Siguiente →
                </button>
              ) : (
                <button
                  onClick={handleSubmit}
                  disabled={isSubmitting}
                  className="px-8 py-3 rounded-lg font-semibold bg-gradient-to-r from-red-500 to-green-500 text-white hover:from-red-600 hover:to-green-600 shadow-lg transition-all disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <span className="flex items-center gap-2">
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      Enviando...
                    </span>
                  ) : (
                    '¡Inscribirme! 🎄'
                  )}
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Información adicional */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-xl p-6 shadow-lg text-center border-2 border-red-100">
            <div className="text-4xl mb-3">🔒</div>
            <h3 className="font-bold text-gray-800 mb-2">Datos seguros</h3>
            <p className="text-sm text-gray-600">Tu información está protegida</p>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-lg text-center border-2 border-red-100">
            <div className="text-4xl mb-3">📧</div>
            <h3 className="font-bold text-gray-800 mb-2">Confirmación rápida</h3>
            <p className="text-sm text-gray-600">Recibirás los detalles por email</p>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-lg text-center border-2 border-red-100">
            <div className="text-4xl mb-3">🎨</div>
            <h3 className="font-bold text-gray-800 mb-2">Experiencia única</h3>
            <p className="text-sm text-gray-600">Una tarde para reconectarte</p>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateX(20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes scale-in {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        
        .animate-fade-in {
          animation: fade-in 0.4s ease-out;
        }
        
        .animate-scale-in {
          animation: scale-in 0.4s ease-out;
        }
      `}</style>
    </div>
  );
}