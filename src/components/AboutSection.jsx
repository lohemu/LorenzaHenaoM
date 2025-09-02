import Container from './atoms/Container';
import Button from './atoms/Button';
import PlayButton from './atoms/PlayButton';

const AboutSection = () => {
  return (
    <section className="py-20 lg:py-32 bg-gray-50 dark:bg-gray-800/50">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* About Images */}
          <div className="animate-fade-in-left relative">
            <div className="relative">
              <img 
                src="/images/shape-05.svg" 
                alt="Shape" 
                className="absolute -left-5 top-0 h-auto opacity-30" 
              />
              <img 
                src="/images/about-01.png" 
                alt="About" 
                className="rounded-lg shadow-lg relative z-10 mb-4" 
              />
              <img 
                src="/images/about-02.png" 
                alt="About" 
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="mt-8">
              <img 
                src="/images/shape-06.svg" 
                alt="Shape" 
                className="mb-4 opacity-30"
              />
              <img 
                src="/images/about-03.png" 
                alt="About" 
                className="rounded-lg shadow-lg relative z-10" 
              />
              <img 
                src="/images/shape-07.svg" 
                alt="Shape" 
                className="absolute bottom-0 right-0 opacity-30" 
              />
            </div>
          </div>

          {/* About Content */}
          <div className="animate-fade-in-right">
            <h4 className="text-lg font-semibold text-blue-600 dark:text-blue-400 mb-4">
              Why Choose Us
            </h4>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
              We Make Our customers happy by giving Best services.
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
              It is a long established fact that a reader will be distracted by the readable content 
              of a page when looking at its layout. The point of using Lorem Ipsum.
            </p>

            <PlayButton 
              href="https://www.youtube.com/watch?v=xcJtL7QggTI"
              text="SEE HOW WE WORK"
            />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default AboutSection;