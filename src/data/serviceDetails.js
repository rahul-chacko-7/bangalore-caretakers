// Service-page detail content. Facts are limited to what Bangalore Care Takers
// already publishes (bangalorecaretakers.in): GNM/ANM/BSc nursing staff,
// trained caregivers, the Kothanur residential facility, operating since 2016,
// assessment-first care planning. Prices are not stated here; pages link to
// the cost guide instead. Keep any new copy to facts the business confirms.

export const COST_GUIDE = '/blog/cost-of-old-age-homes-in-bangalore-2026-price-guide';

export const AREA_LINKS = [
  { to: '/elderly-care-yelahanka', name: 'Yelahanka & Hebbal' },
  { to: '/elderly-care-whitefield', name: 'Whitefield' },
  { to: '/elderly-care-indiranagar', name: 'Indiranagar' },
  { to: '/elderly-care-jayanagar', name: 'Jayanagar & JP Nagar' },
  { to: '/elderly-care-electronic-city', name: 'Electronic City' }
];

export const TEAM_POINTS = [
  'GNM, ANM and BSc Nursing professionals, supported by trained caregivers and attendants.',
  'The professional is matched to the assessed need: a caretaker for personal care, a qualified nurse for doctor-prescribed procedures.',
  'Qualifications and experience for the specific assignment are shared with the family before care starts.',
  'Supporting Bangalore families since 2016 from our residential facility in Kothanur.'
];

export const START_STEPS = [
  { title: 'Tell us the care need', text: 'Call or WhatsApp with the diagnosis, mobility, current medicines, any prescribed procedures and the hours of support you need.' },
  { title: 'Care assessment', text: 'The care team reviews doctor instructions and discharge notes and recommends a caretaker, nurse or residential stay.' },
  { title: 'Written care plan', text: 'You receive the scope of care, the type of professional, shift timings and the fee before anything is confirmed.' },
  { title: 'Start and review', text: 'Care begins at home or at the Kothanur facility, with family updates and a reassessment if needs change.' }
];

export const SERVICE_DETAILS = {
  'old-age-homes': {
    heading: 'What residential care at our Kothanur facility includes',
    intro: 'Residents live at our facility in Kothanur, North-East Bangalore, with caregivers on every shift and nursing support for those who need it. Families can visit before admission to see rooms, meals and daily routines.',
    included: [
      'Safe, clean rooms with help moving around the facility',
      'Freshly prepared meals with diet adjustments advised by the doctor',
      'Bathing, grooming, toileting and hygiene support',
      'Medicine reminders, BP and sugar monitoring',
      'Doctor coordination and emergency escalation',
      'Catheter, feeding tube and wound-care coordination for residents who need it',
      'Structured routines and supervision for residents with dementia',
      'Regular updates for families, including those living abroad'
    ],
    suitsFor: [
      'Seniors who live alone or can no longer manage safely at home',
      'Bedridden seniors who need repositioning, feeding and hygiene care',
      'Seniors with dementia, Alzheimer’s or Parkinson’s who need supervision',
      'Patients recovering after a hospital stay who need nursing for a period',
      'Families whose children work long hours or live outside Bangalore'
    ],
    costNote: 'Monthly fees depend on room type, the level of nursing needed, medical condition, diet, personal-care support and length of stay.'
  },
  'home-nursing': {
    heading: 'Home nursing support we can arrange',
    intro: 'Home nursing is planned around the patient’s diagnosis, mobility, prescribed procedures and the number of hours support is needed. We recommend a caretaker, ANM, GNM or BSc Nursing professional only after discussing these details.',
    included: [
      'Post-hospital and post-surgery support: medicines, observations, wound care as prescribed',
      'Elderly nursing at home with vitals monitoring and medicine routines',
      'Bedridden care: repositioning, hygiene, feeding assistance and skin checks',
      'Injections, catheter care and feeding-tube care when prescribed by a doctor',
      'Dementia routines, safety supervision and family updates',
      'Male or female nurses and caretakers, subject to availability'
    ],
    shifts: ['Visit-based support for a procedure or injection', '12-hour day or night shifts', '24-hour or live-in care with rostered staff'],
    suitsFor: [
      'Patients discharged from hospital who still need nursing',
      'Elderly parents who want to stay at home with daily support',
      'Families who need cover while they work or travel'
    ],
    costNote: 'Charges depend on shift length, whether a caretaker or a qualified nurse is needed, the clinical tasks involved and how long care continues.',
    caution: 'Complex or unstable conditions may need a hospital or doctor-led clinical setup rather than routine home nursing. We will say so during the assessment.'
  },
  dementia: {
    heading: 'How we support people living with dementia',
    intro: 'People with dementia, Alzheimer’s or Parkinson’s do best with a calm routine, safe surroundings and staff who know how to handle confusion and wandering. We provide this at our Kothanur facility or at home.',
    included: [
      'Structured daily routine for meals, hygiene, activity and sleep',
      '24-hour supervision for wandering, confusion or night-time restlessness',
      'Medicine reminders and coordination with the treating doctor',
      'Help with eating, bathing, dressing and toileting',
      'Mobility and fall-risk supervision, especially for Parkinson’s',
      'Memory and logic games and simple activities to keep residents engaged',
      'Regular family updates and visits'
    ],
    suitsFor: [
      'Seniors whose memory loss makes living alone unsafe',
      'Families finding night-time care or wandering hard to manage',
      'People with Parkinson’s who need help with movement and falls'
    ],
    costNote: 'Dementia care usually costs more than standard residential care because of closer supervision; the fee depends on the stage and support needed.'
  },
  palliative: {
    heading: 'What palliative care with us includes',
    intro: 'Palliative care focuses on comfort and quality of life for people with serious, life-limiting illness. It can be provided at home or at our Kothanur facility, alongside the treating doctor’s plan.',
    included: [
      'Comfort care and symptom observation, with medicines given as prescribed',
      'Coordination with the treating oncologist or palliative doctor',
      'Nursing for catheters, feeding tubes, wounds and pressure-sore prevention',
      'Help with hygiene, feeding, repositioning and mobility',
      'Emotional support and time with family',
      'Round-the-clock nursing when the patient needs it'
    ],
    suitsFor: [
      'Advanced cancer',
      'Progressive neurological conditions',
      'End-stage heart, kidney or liver disease',
      'Chronic lung disease such as COPD',
      'Frailty with several chronic conditions'
    ],
    costNote: 'Costs depend on the nursing hours, procedures, equipment and whether care is at home or at the facility. See the palliative cost guide for typical ranges.',
    costLink: '/blog/palliative-care-bangalore-home-cost-cancer-guide'
  },
  'assisted-living': {
    heading: 'What assisted living at our facility includes',
    intro: 'Assisted living suits seniors who are fairly independent but need help with some daily tasks and want company and safety. Residents live at our Kothanur facility, with more nursing added if health needs change.',
    included: [
      'Help with bathing, dressing, grooming, walking, meals and toileting',
      'Medicine reminders and health monitoring',
      'Nursing care and doctor coordination when needed',
      'Emergency support, day and night',
      'Companionship, peaceful surroundings and regular family coordination',
      'Clean rooms, hygiene support and nutritious meals'
    ],
    suitsFor: [
      'Seniors who live alone and want company and a safe routine',
      'Retired people who need some daily help but not full nursing',
      'Elders recovering after a hospital stay',
      'Couples or individuals planning long-term senior living'
    ],
    costNote: 'Fees depend on room type, the amount of daily help, any nursing needs and length of stay.'
  },
  'post-surgery': {
    heading: 'Post-surgery recovery: at home or at our facility',
    intro: 'After discharge, patients need wound care, pain control, safe movement and someone watching for warning signs. We provide this at home, or as a short stay at our Kothanur facility when continuous monitoring is needed or family support is not available.',
    included: [
      'Wound dressing and infection care as prescribed',
      'Giving medicines and managing pain to the doctor’s plan',
      'Checking BP, pulse and other vitals',
      'Catheter and tube care',
      'Help with walking, bathing, feeding and hygiene',
      'Simple exercises and physiotherapy coordination',
      'Short stay option with 24/7 nursing, doctor coordination and emergency support'
    ],
    suitsFor: [
      'Knee, hip or spine surgery',
      'Stomach or abdominal surgery',
      'Heart procedures',
      'Brain or nerve-related surgery',
      'General surgery where the patient is weak or lives alone'
    ],
    team: ['Registered nurses handle medicines, injections and wound care', 'Associate nurses help with basic care and monitoring', 'Caretakers assist with daily activities'],
    costNote: 'Costs depend on whether care is at home or a facility stay, shift length, the nurse’s qualification and how many weeks recovery takes.'
  },
  'specialized-nursing': {
    heading: 'Clinical nursing procedures we can arrange',
    intro: 'Some patients need a nurse for specific procedures rather than general care. We assign a qualified nurse only after reviewing the doctor’s instructions, the supplies needed and the nurse’s competence for that procedure.',
    included: [
      'Tracheostomy care: cleaning, dressing changes, suctioning and monitoring breathing',
      'Urinary catheter care: hygiene, drainage-bag management and watching for infection',
      'Feeding tube care (Ryle’s tube or PEG): feeds, flushing and site hygiene',
      'Colostomy and stoma care',
      'Wound dressing, including diabetic and pressure-sore wounds',
      'Injections and medicines as prescribed',
      'Oxygen support and BP/sugar monitoring'
    ],
    suitsFor: [
      'Patients sent home from hospital with a tube, catheter or tracheostomy',
      'Bedridden or paralysed patients with pressure sores',
      'Diabetic patients with wounds that need regular dressing'
    ],
    costNote: 'Charges depend on the procedure, how often it is needed (a visit or a full shift) and the nurse’s qualification.',
    caution: 'Procedures are only taken on with a doctor’s prescription. Unstable patients may need hospital care instead.'
  },
  disabled: {
    heading: 'Residential care for adults with disabilities',
    intro: 'Our Kothanur facility provides long-term residential care for adults with physical or intellectual disabilities who cannot live safely on their own, with a calm routine, supervision and respect for each person’s ability.',
    included: [
      '24/7 supervision in a secure, structured setting',
      'Help with bathing, dressing, feeding and personal hygiene',
      'Safe transfers and wheelchair-friendly movement within the premises',
      'Daily routine and activity support, simple life skills and social interaction',
      'Medicine management, health monitoring and doctor coordination',
      'Regular family updates and coordinated visits'
    ],
    suitsFor: [
      'Adults with intellectual or developmental disabilities',
      'Adults with physical disabilities affecting mobility',
      'People needing long-term or lifetime care',
      'Families who can no longer provide full-time care at home'
    ],
    costNote: 'Fees depend on the level of daily support, nursing needs and length of stay.'
  }
};

export const SERVICE_FAQS = {
  'specialized-nursing': [
    { q: 'Can a nurse come only for a procedure, like a catheter change or dressing?', a: 'Yes. Visit-based support can be arranged for a specific procedure, subject to a doctor’s prescription and staff availability in your area.' },
    { q: 'Who brings the medical supplies?', a: 'Families usually provide prescribed supplies such as catheters, tubes and dressings. The nurse will tell you what is needed before the first visit.' },
    { q: 'Can you manage tracheostomy suctioning at home?', a: 'Tracheostomy care is assigned only to a nurse who is competent in it, after reviewing the doctor’s instructions. Patients who are unstable may need hospital care.' },
    { q: 'Do you provide this care at your facility too?', a: 'Yes. Residents at our Kothanur facility can receive catheter, feeding tube and wound care as part of their care plan.' },
    { q: "Which areas do you cover for procedure visits?", a: "Visits are arranged across Bangalore, subject to staff availability near your address." },
    { q: "Can the family be taught to help between visits?", a: "Our nurses can show family members routine tasks such as drainage-bag emptying and site hygiene, while clinical procedures stay with the nurse." }
  ],
  'assisted-living': [
    { q: 'What is the difference between assisted living and an old age home?', a: 'Assisted living is for seniors who are mostly independent but need help with some daily tasks. If nursing needs grow, the same resident can move to a higher level of care at our facility.' },
    { q: 'Can we visit before deciding?', a: 'Yes. Families are encouraged to visit the Kothanur facility, see the rooms and meet the team before admission.' },
    { q: 'Are meals included?', a: 'Yes. Freshly prepared meals are provided, with changes for diabetic, low-salt or soft diets when advised by a doctor.' },
    { q: 'Can family members visit residents?', a: 'Yes. Family visits are welcome and coordinated with the care team, and families receive regular updates.' },
    { q: "What if my parent’s health needs increase?", a: "Nursing support can be added, or the resident can move to a higher level of care at the same facility, after a reassessment." },
    { q: "How much does assisted living cost?", a: "Fees depend on room type, the daily help needed and any nursing. You receive the fee in writing; see our cost guide for typical ranges." }
  ],
  'post-surgery': [
    { q: 'How soon after discharge should care start?', a: 'Ideally on the day of discharge. Call before the patient leaves hospital so we can plan the right support.' },
    { q: 'How long is post-surgery care needed?', a: 'It depends on the surgery and the patient’s condition, from a few days to several weeks. We review the plan as recovery progresses.' },
    { q: 'Do I need a nurse or a caretaker?', a: 'A nurse is needed for wound care, injections and prescribed medicines. A caretaker can help with walking, bathing and meals. Many patients need a nurse first, then a caretaker.' },
    { q: 'Is 24/7 care available?', a: 'Yes. Round-the-clock care is available at home or through a short stay at our Kothanur facility.' },
    { q: "Do you coordinate physiotherapy?", a: "Yes. We help with walking support and simple exercises, and coordinate physiotherapy when the surgeon advises it." },
    { q: "Which areas do you cover?", a: "Home care is arranged across Bangalore, subject to staff availability; the short-stay option is at our Kothanur facility." }
  ],
  disabled: [
    { q: 'Do you provide long-term or lifetime care?', a: 'Yes. We offer long-term residential care depending on the individual’s and family’s needs.' },
    { q: 'Is the environment safe and supervised?', a: 'Yes. Residents have continuous supervision in a secure, structured setting with a calm daily routine.' },
    { q: 'Can families visit residents?', a: 'Yes. Family visits are encouraged and coordinated with the care team.' },
    { q: 'Where is the facility?', a: 'Our home is in Kothanur, Bangalore, serving families from Hennur, Hebbal, Yelahanka, KR Puram, Whitefield, Banaswadi, Indiranagar and nearby areas.' },
    { q: "What daily activities do residents do?", a: "Residents follow a structured routine with simple life-skills practice, activities and social interaction suited to their ability." },
    { q: "Is medical support available?", a: "Yes. We manage medicines, monitor health, coordinate with doctors and provide emergency support." }
  ]
};
