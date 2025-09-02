import Container from './atoms/Container';
import FeatureCard from './molecules/FeatureCard';

const FeaturesSection = () => {
  const features = [
    {
      icon: '/images/icon-01.svg',
      title: '24/7 Support',
      description: 'Lorem ipsum dolor sit amet conse adipiscing elit.',
      color: 'bg-blue-100 dark:bg-blue-900/20'
    },
    {
      icon: '/images/icon-02.svg',
      title: 'Take Ownership',
      description: 'Lorem ipsum dolor sit amet conse adipiscing elit.',
      color: 'bg-green-100 dark:bg-green-900/20'
    },
    {
      icon: '/images/icon-03.svg',
      title: 'Team Work',
      description: 'Lorem ipsum dolor sit amet conse adipiscing elit.',
      color: 'bg-purple-100 dark:bg-purple-900/20'
    }
  ];

  return (
    <section id="features" className="py-20">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              color={feature.color}
              className="animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default FeaturesSection;