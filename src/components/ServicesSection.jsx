import Container from './atoms/Container';
import SectionTitle from './molecules/SectionTitle';
import ServiceCard from './molecules/ServiceCard';

const ServicesSection = () => {
  const services = [
    {
      icon: '/images/icon-04.svg',
      title: 'Crafted for Startups',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In convallis tortor.'
    },
    {
      icon: '/images/icon-05.svg',
      title: 'High-quality Design',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In convallis tortor.'
    },
    {
      icon: '/images/icon-06.svg',
      title: 'All Essential Sections',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In convallis tortor.'
    },
    {
      icon: '/images/icon-07.svg',
      title: 'Speed Optimized',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In convallis tortor.'
    },
    {
      icon: '/images/icon-05.svg',
      title: 'Fully Customizable',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In convallis tortor.'
    },
    {
      icon: '/images/icon-06.svg',
      title: 'Regular Updates',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In convallis tortor.'
    }
  ];

  return (
    <section className="py-20 lg:py-32">
      <Container>
        <SectionTitle
          title="We Offer The Best Quality Service for You"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In convallis tortor eros. Donec vitae tortor lacus. Phasellus aliquam ante in maximus."
          className="animate-fade-in-up mb-16"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              className="animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default ServicesSection;