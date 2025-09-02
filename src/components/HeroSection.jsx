import Button from './atoms/Button';
import Container from './atoms/Container';

const HeroSection = () => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden">
      {/* Background Images */}
      <div className="absolute inset-0 -z-10">
        <img 
          src="/images/shape-01.svg" 
          alt="shape" 
          className="absolute hidden 2xl:block h-auto top-0 -left-[10%] opacity-30" 
        />
        <img 
          src="/images/shape-02.svg" 
          alt="shape" 
          className="absolute hidden 2xl:block h-auto top-0 right-0 opacity-30" 
        />
        <img 
          src="/images/shape-03.svg" 
          alt="shape" 
          className="absolute hidden 2xl:block h-auto bottom-0 right-0 opacity-30" 
        />
        <img 
          src="/images/shape-04.svg" 
          alt="shape" 
          className="absolute inset-0 w-full h-full object-cover opacity-10" 
        />
        <img 
          src="/images/hero.png" 
          alt="Woman" 
          className="absolute inset-0 w-full h-full object-cover opacity-20" 
        />
      </div>

      <Container>
        <div className="text-center max-w-4xl mx-auto">
          <div className="animate-fade-in-up">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
              We specialize in UI/UX, Web Development, Digital Marketing.
            </h1>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque fringilla magna mauris. 
              Nulla fermentum viverra sem eu rhoncus consequat varius nisi quis, posuere magna.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Button 
                variant="primary" 
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
              >
                Get Started Now
              </Button>

              <div className="text-center sm:text-left">
                <a 
                  href="#" 
                  className="inline-block text-lg font-semibold text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  Call us (0123) 456 – 789
                </a>
                <span className="block text-gray-600 dark:text-gray-300">
                  For any question or concern
                </span>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default HeroSection;