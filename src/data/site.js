export const SITE_URL = 'https://bangalorecaretakers.in';
export const SITE_TITLE = 'Old Age Home in Bangalore | Bangalore Care Takers';
export const SITE_DESCRIPTION = 'Explore elderly care, nursing support and assisted living at Bangalore Care Takers in Kothanur. Call to discuss care needs or arrange a facility visit.';
export const SOCIAL_IMAGE = `${SITE_URL}/assets/social-preview.jpg`;
export const BUSINESS_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': ['LocalBusiness', 'MedicalBusiness'],
  '@id': `${SITE_URL}/#business`,
  name: 'Bangalore Care Takers', url: `${SITE_URL}/`,
  telephone: '+917760506666', email: 'info@bangalorecaretakers.in',
  description: SITE_DESCRIPTION,
  priceRange: '$$',
  currenciesAccepted: 'INR',
  serviceType: ['Residential senior care', 'Home nursing', 'Dementia care', 'Palliative care', 'Assisted living', 'Rehabilitation'],
  knowsAbout: ['elderly care', 'home nursing', 'dementia care', "Alzheimer's care", 'palliative care', 'post-surgery rehabilitation'],
  image: SOCIAL_IMAGE, logo: `${SITE_URL}/assets/site-logo.png`,
  address: { '@type': 'PostalAddress', streetAddress: '206, BCT Nagar, Athmavidyanagar Layout, Kothanur Post, Doddagubbi Road', addressLocality: 'Bengaluru', addressRegion: 'Karnataka', postalCode: '560077', addressCountry: 'IN' },
  areaServed: [{ '@type': 'City', name: 'Bengaluru' }, { '@type': 'AdministrativeArea', name: 'Karnataka' }],
  openingHoursSpecification: [{ '@type': 'OpeningHoursSpecification', dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'], opens: '00:00', closes: '23:59' }]
};
