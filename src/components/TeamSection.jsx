import Container from './atoms/Container';
import SectionTitle from './molecules/SectionTitle';
import TeamCard from './molecules/TeamCard';

const TeamSection = () => {
  const teamMembers = [
    {
      image: '/images/team-01.png',
      name: 'Olivia Andrium',
      position: 'Product Manager',
      socialLinks: {
        facebook: '#',
        twitter: '#',
        linkedin: '#'
      }
    },
    {
      image: '/images/team-02.png',
      name: 'Jemse Kemorun',
      position: 'Product Designer',
      socialLinks: {
        facebook: '#',
        twitter: '#',
        linkedin: '#'
      }
    },
    {
      image: '/images/team-03.png',
      name: 'Avi Pestarica',
      position: 'Web Designer',
      socialLinks: {
        facebook: '#',
        twitter: '#',
        linkedin: '#'
      }
    }
  ];

  return (
    <section className="relative py-20 lg:py-32 bg-gray-50 dark:bg-gray-800/50 overflow-hidden">
      {/* Background Shapes */}
      <div className="absolute inset-0 -z-10">
        <span className="absolute top-0 left-0 w-1/5 h-full bg-gradient-to-r from-blue-100 to-transparent dark:from-blue-900/20"></span>
        <img src="/images/shape-08.svg" alt="Shape Bg" className="absolute inset-0 w-full h-full object-cover opacity-5" />
        <img src="/images/shape-09.svg" alt="Shape" className="absolute top-0 left-1/2 h-auto opacity-10" />
        <img src="/images/shape-10.svg" alt="Shape" className="absolute bottom-0 left-0 h-auto opacity-10" />
        <img src="/images/shape-11.svg" alt="Shape" className="absolute top-1/2 right-0 h-auto opacity-10" />
      </div>

      <Container>
        <SectionTitle
          title="Meet With Our Creative Dedicated Team"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In convallis tortor eros. Donec vitae tortor lacus. Phasellus aliquam ante in maximus."
          className="animate-fade-in-up mb-16"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <TeamCard
              key={index}
              image={member.image}
              name={member.name}
              position={member.position}
              socialLinks={member.socialLinks}
              className="animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default TeamSection;