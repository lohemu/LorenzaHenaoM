import { useState } from 'react';
import { X, Mail, Download } from 'lucide-react';

export function DownloadModal({ isOpen, onClose, resourceTitle, downloadUrl }) {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);

  // ⚠️ REEMPLAZA ESTA URL CON LA DE TU GOOGLE FORM PARA DESCARGAS
  const GOOGLE_FORM_URL = "https://docs.google.com/forms/d/e/TU_FORM_ID_AQUI/formResponse";
  
  // ⚠️ REEMPLAZA CON EL NAME DEL CAMPO EMAIL DE TU FORMULARIO
  const EMAIL_FIELD_NAME = "entry.1234567890";
  
  // ⚠️ OPCIONAL: Si tienes un campo para el nombre del recurso
  const RESOURCE_FIELD_NAME = "entry.0987654321";

  const validateEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleDownload = async (e) => {
    if (e && e.preventDefault) {
      e.preventDefault();
    }
    
    if (!validateEmail(email)) {
      setError('Por favor ingresa un correo válido');
      return;
    }

    setIsLoading(true);
    setError('');

    try {
      // Crear FormData para enviar a Google Forms
      const formData = new FormData();
      formData.append(EMAIL_FIELD_NAME, email);
      
      // Si tienes campo para el recurso, añádelo
      if (RESOURCE_FIELD_NAME && resourceTitle) {
        formData.append(RESOURCE_FIELD_NAME, resourceTitle);
      }
      
      // Enviar usando fetch con mode 'no-cors' para evitar CORS
      await fetch(GOOGLE_FORM_URL, {
        method: 'POST',
        body: formData,
        mode: 'no-cors' // Importante para Google Forms
      });

      // Marcar como exitoso
      setIsSuccess(true);
      
      // Iniciar descarga después de un momento
      setTimeout(() => {
        window.open(downloadUrl, '_blank');
      }, 500);
      
      // Cerrar modal y resetear después de 2 segundos
      setTimeout(() => {
        onClose();
        setEmail('');
        setIsSuccess(false);
      }, 2000);
      
    } catch (err) {
      console.error('Error:', err);
      // Mostrar como exitoso porque Google Forms con no-cors no devuelve errores útiles
      setIsSuccess(true);
      
      setTimeout(() => {
        window.open(downloadUrl, '_blank');
      }, 500);
      
      setTimeout(() => {
        onClose();
        setEmail('');
        setIsSuccess(false);
      }, 2000);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleDownload();
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
      <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-8 relative animate-scale-in">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
        >
          <X className="w-6 h-6" />
        </button>

        {!isSuccess ? (
          <>
            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-4">
                <Download className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-2">
                ¡Descarga Gratuita!
              </h3>
              <p className="text-gray-600 text-sm">
                {resourceTitle}
              </p>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Tu correo electrónico
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      setError('');
                    }}
                    onKeyPress={handleKeyPress}
                    placeholder="tu@email.com"
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-800 focus:border-transparent outline-none transition-all"
                    required
                    disabled={isLoading}
                  />
                </div>
                {error && (
                  <p className="text-red-500 text-sm mt-2">
                    {error}
                  </p>
                )}
              </div>

              <button
                onClick={handleDownload}
                className="w-full bg-gray-800 text-white py-3 px-6 rounded-lg font-semibold hover:bg-gray-900 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                disabled={isLoading}
              >
                {isLoading ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    Procesando...
                  </>
                ) : (
                  <>
                    <Download className="w-5 h-5" />
                    Descargar Ahora
                  </>
                )}
              </button>

              <p className="text-gray-500 text-sm text-center">
                Sin spam. Solo recursos útiles. 🔒
              </p>
            </div>
          </>
        ) : (
          <div className="text-center py-8">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-2">
              ¡Listo!
            </h3>
            <p className="text-gray-600">
              Tu descarga comenzará en un momento...
            </p>
          </div>
        )}
      </div>

      <style jsx>{`
        @keyframes scale-in {
          0% {
            opacity: 0;
            transform: scale(0.9);
          }
          100% {
            opacity: 1;
            transform: scale(1);
          }
        }

        .animate-scale-in {
          animation: scale-in 0.3s ease-out;
        }
      `}</style>
    </div>
  );
}