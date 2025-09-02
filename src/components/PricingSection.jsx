import { useState } from 'react';
import Container from './atoms/Container';
import SectionTitle from './molecules/SectionTitle';
import PricingCard from './molecules/PricingCard';
import PricingToggle from './atoms/PricingToggle';

const PricingSection = () => {
  const [billPlan, setBillPlan] = useState('monthly');

  const plans = [
    {
      name: 'Starter',
      price: {
        monthly: 29,
        annually: 29 * 12 - 199,
      },
      features: ['400 GB Storage', 'Unlimited Photos & Videos', 'Exclusive Support'],
    },
    {
      name: 'Growth Plan',
      price: {
        monthly: 59,
        annually: 59 * 12 - 100,
      },
      features: ['400 GB Storage', 'Unlimited Photos & Videos', 'Exclusive Support'],
      isPopular: true
    },
    {
      name: 'Business',
      price: {
        monthly: 139,
        annually: 139 * 12 - 100,
      },
      features: ['400 GB Storage', 'Unlimited Photos & Videos', 'Exclusive Support'],
    },
  ];

  return (
    <section className="relative py-20 lg:py-32 bg-gray-50 dark:bg-gray-800/50 overflow-hidden">
      {/* Background Shapes */}
      <div className="absolute inset-0 -z-10">
        <img src="/images/shape-06.svg" alt="Shape" className="absolute top-0 left-0 h-auto opacity-10" />
        <img src="/images/shape-03.svg" alt="Shape" className="absolute top-0 right-0 h-auto opacity-10" />
        <img src="/images/shape-07.svg" alt="Shape" className="absolute bottom-0 right-0 h-auto opacity-10" />
        <img src="/images/shape-12.svg" alt="Shape" className="absolute bottom-0 left-0 h-auto opacity-10" />
        <img src="/images/shape-13.svg" alt="Shape" className="absolute top-1/2 left-1/2 h-auto opacity-10" />
      </div>

      <Container>
        <SectionTitle
          title="We Offer Great Affordable Premium Prices."
          description="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using."
          className="animate-fade-in-up mb-12"
        />

        {/* Pricing Toggle */}
        <div className="flex items-center justify-center space-x-4 mb-16">
          <span className="text-lg font-semibold text-gray-900 dark:text-white">Bill Monthly</span>
          <PricingToggle
            isAnnually={billPlan === 'annually'}
            onChange={() => setBillPlan(billPlan === 'monthly' ? 'annually' : 'monthly')}
          />
          <span className="text-lg font-semibold text-gray-900 dark:text-white">Bill Annually</span>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <PricingCard
              key={index}
              name={plan.name}
              price={billPlan === 'monthly' ? plan.price.monthly : plan.price.annually}
              period={billPlan === 'monthly' ? '/per month' : '/per year'}
              features={plan.features}
              isPopular={plan.isPopular}
              className="animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default PricingSection;