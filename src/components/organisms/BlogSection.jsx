import Container from '../atoms/Container';
import Heading from '../atoms/Heading';
import Text from '../atoms/Text';
import Button from '../atoms/Button';

const blogPosts = [
  {
    id: 1,
    title: "Encuentra la fuerza en tu autenticidad",
    excerpt: "Descubre cómo conectar con tu verdadero yo puede ser la clave para desbloquear tu potencial y vivir una vida más plena y satisfactoria.",
    date: "15 Dic, 2024",
    readTime: "5 min",
    category: "Desarrollo Personal",
    gradient: "from-pink-400 to-rose-500",
    bgGradient: "from-pink-50 to-rose-50"
  },
  {
    id: 2,
    title: "Camina hacia tu yo auténtico",
    excerpt: "Un viaje de autodescubrimiento que te ayudará a eliminar las máscaras sociales y abrazar quien realmente eres, sin miedos ni limitaciones.",
    date: "12 Dic, 2024",
    readTime: "7 min",
    category: "Autoconocimiento",
    gradient: "from-purple-400 to-indigo-500",
    bgGradient: "from-purple-50 to-indigo-50"
  },
  {
    id: 3,
    title: "Encuentra tu equilibrio con mindfulness",
    excerpt: "Técnicas prácticas de mindfulness y meditación que te ayudarán a mantener el equilibrio mental y emocional en tu día a día.",
    date: "8 Dic, 2024",
    readTime: "6 min",
    category: "Bienestar",
    gradient: "from-green-400 to-teal-500",
    bgGradient: "from-green-50 to-teal-50"
  }
];

export default function BlogSection() {
  return (
    <section className="py-20 lg:py-32 bg-gradient-to-br from-gray-50 to-indigo-50/30 relative overflow-hidden">
      {/* Elementos decorativos */}
      <div className="absolute top-20 right-16 w-20 h-20 border border-purple-200 rounded-full opacity-30"></div>
      <div className="absolute bottom-32 left-20 w-16 h-16 bg-pink-100 rounded-full opacity-40"></div>
      <div className="absolute top-1/3 left-1/4 w-3 h-3 bg-purple-400 rounded-full opacity-60"></div>
      <div className="absolute bottom-1/4 right-1/3 w-2 h-2 bg-pink-400 rounded-full"></div>

      <Container>
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-gradient-to-r from-pink-100 to-purple-100 text-purple-600 rounded-full text-sm font-medium mb-4">
            Recursos y Blog
          </span>
          
          <Heading level={2} className="text-4xl lg:text-5xl font-light mb-6">
            Últimas
            <span className="block font-dancing text-pink-500 text-5xl lg:text-6xl mt-2">
              reflexiones
            </span>
          </Heading>
          
          <Text className="text-lg text-gray-600 max-w-2xl mx-auto">
            Artículos, consejos y herramientas para acompañarte en tu proceso de crecimiento personal y transformación.
          </Text>
        </div>

        {/* Grid de posts */}
        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {blogPosts.map((post, index) => (
            <article key={post.id} className="group cursor-pointer">
              <div className={`bg-gradient-to-br ${post.bgGradient} rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 h-full`}>
                {/* Imagen placeholder */}
                <div className="aspect-[4/3] relative overflow-hidden">
                  <div className={`w-full h-full bg-gradient-to-br ${post.gradient} flex items-center justify-center relative`}>
                    {/* Icono según la categoría */}
                    <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                      {post.category === 'Desarrollo Personal' && (
                        <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                        </svg>
                      )}
                      {post.category === 'Autoconocimiento' && (
                        <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                      )}
                      {post.category === 'Bienestar' && (
                        <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                        </svg>
                      )}
                    </div>
                    
                    {/* Elementos decorativos en la imagen */}
                    <div className="absolute top-4 right-4 w-8 h-8 bg-white/10 rounded-full"></div>
                    <div className="absolute bottom-4 left-4 w-6 h-6 bg-white/15 rounded-full"></div>
                    <div className="absolute top-1/2 left-6 w-4 h-4 bg-white/5 rounded-full"></div>
                  </div>

                  {/* Categoría badge */}
                  <div className="absolute top-4 left-4">
                    <span className="bg-white/90 backdrop-blur-sm text-gray-700 px-3 py-1 rounded-full text-xs font-medium">
                      {post.category}
                    </span>
                  </div>
                </div>

                {/* Contenido */}
                <div className="p-6">
                  {/* Metadata */}
                  <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                    <span className="flex items-center gap-1">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      {post.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      {post.readTime}
                    </span>
                  </div>

                  <Heading level={3} className="text-xl font-semibold text-gray-800 mb-3 group-hover:text-purple-600 transition-colors duration-300">
                    {post.title}
                  </Heading>
                  
                  <Text className="text-gray-600 text-sm leading-relaxed mb-4">
                    {post.excerpt}
                  </Text>

                  <div className="flex items-center justify-between">
                    <button className={`text-sm font-medium bg-gradient-to-r ${post.gradient} bg-clip-text text-transparent hover:opacity-80 transition-opacity duration-300`}>
                      Leer más →
                    </button>
                    
                    {/* Indicador de interacción */}
                    <div className="flex items-center gap-2 text-gray-400">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                      </svg>
                      <span className="text-xs">24</span>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Newsletter Subscription */}
        <div className="bg-gradient-to-br from-purple-600 via-pink-600 to-indigo-700 rounded-3xl p-8 lg:p-12 text-center text-white relative overflow-hidden">
          {/* Elementos decorativos */}
          <div className="absolute top-8 right-8 w-16 h-16 border border-white/20 rounded-full"></div>
          <div className="absolute bottom-8 left-8 w-12 h-12 bg-white/10 rounded-full"></div>
          <div className="absolute top-1/2 left-1/4 w-4 h-4 bg-yellow-300/40 rounded-full"></div>
          <div className="absolute bottom-1/3 right-1/4 w-6 h-6 bg-pink-300/30 rounded-full"></div>

          <div className="relative z-10 max-w-2xl mx-auto">
            <div className="mb-6">
              <div className="w-16 h-16 bg-white/20 rounded-full mx-auto flex items-center justify-center backdrop-blur-sm mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
            </div>

            <Heading level={3} className="text-3xl lg:text-4xl font-light mb-4">
              Suscríbete al
              <span className="block font-dancing text-4xl lg:text-5xl text-yellow-300 mt-2">
                newsletter
              </span>
            </Heading>
            
            <Text className="text-xl text-white/90 mb-8 font-light">
              Recibe contenido exclusivo, consejos prácticos y las últimas novedades 
              directamente en tu correo. ¡Es completamente gratis!
            </Text>

            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Tu correo electrónico"
                className="flex-1 px-6 py-4 rounded-full text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white/50 transition-all duration-300"
              />
              <Button className="bg-white text-purple-600 hover:bg-gray-50 px-8 py-4 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300">
                Suscribirme
              </Button>
            </div>

            <Text className="text-white/70 text-sm mt-4">
              No spam. Puedes cancelar tu suscripción en cualquier momento.
            </Text>
          </div>
        </div>

        {/* Botón para ver más posts */}
        <div className="text-center mt-12">
          <Button 
            variant="outline" 
            className="border-2 border-purple-200 text-purple-600 hover:bg-purple-50 px-8 py-3 rounded-full font-medium transition-all duration-300"
          >
            Ver todos los artículos
          </Button>
        </div>
      </Container>
    </section>
  );
}