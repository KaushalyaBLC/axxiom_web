export default function StructuredData() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Axxiom Technologies',
    url: 'https://axxiom.tech',
    logo: 'https://axxiom.tech/white-3.png',
    description: 'Axxiom Technologies delivers cutting-edge digital transformation solutions including web development, mobile apps, AI solutions, cloud services, and chatbot development in Sri Lanka.',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Colombo',
      addressCountry: 'LK',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+94713017267',
      contactType: 'customer service',
      email: 'hello@axxiom.tech',
    },
    sameAs: [
      'https://www.linkedin.com/company/axxiom-technologies',
      'https://twitter.com/axxiomtech',
      'https://github.com/axxiom',
      'https://facebook.com/axxiomtech',
    ],
    founder: [
      {
        '@type': 'Person',
        name: 'Chanupa Athsara',
        jobTitle: 'Co-Founder & CEO',
        url: 'https://www.linkedin.com/in/chanupa-athsara/',
      },
      {
        '@type': 'Person',
        name: 'Chamika Dilshan',
        jobTitle: 'Co-Founder & CTO',
        url: 'https://www.linkedin.com/in/chamika-dilshan/',
      },
      {
        '@type': 'Person',
        name: 'Ashan Chalinda',
        jobTitle: 'Co-Founder & Frontend Engineer',
        url: 'https://www.linkedin.com/in/ashan-chalinda/',
      },
      {
        '@type': 'Person',
        name: 'Kaveesha Yomal',
        jobTitle: 'Co-Founder & Project Manager',
        url: 'https://www.linkedin.com/in/kaveesha-yomal/',
      },
      {
        '@type': 'Person',
        name: 'Arman Shalik',
        jobTitle: 'Co-Founder & Business Analyst',
        url: 'https://www.linkedin.com/in/arman-shalik/',
      },
    ],
    offers: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Web Development',
          description: 'Custom web application development services',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Mobile App Development',
          description: 'Native and cross-platform mobile application development',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'AI Solutions',
          description: 'Artificial intelligence and machine learning solutions',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Cloud Services',
          description: 'Cloud infrastructure and migration services',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Chatbot Development',
          description: 'AI-powered chatbot development and integration',
        },
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
