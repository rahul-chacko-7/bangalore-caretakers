// Pages rebuilt at their original bangalorecaretakers.in URLs because they
// already rank for priority keywords (positions as of 16 Nov 2026 in the
// keyword tracker). Content is ported from the existing WordPress pages and
// limited to facts the business already publishes. Keep titles <= 60 chars
// and descriptions <= 160 chars.

const DISABILITY_RELATED = [
  { to: '/residential-care-physical-disabilities-bangalore', label: 'Home for physically disabled adults' },
  { to: '/residential-care-intellectual-disabilities-bangalore', label: 'Home for mentally challenged adults' },
  { to: '/rehabilitation-centre-bangalore', label: 'Psychiatric rehabilitation centre' }
];
const PROCEDURE_RELATED = [
  { to: '/tracheostomy-care-in-bangalore', label: 'Tracheostomy care' },
  { to: '/catheter-care-bangalore', label: 'Catheter care' },
  { to: '/feeding-tube-care-in-bangalore', label: 'Feeding tube care' },
  { to: '/colostomy-care-in-bangalore', label: 'Colostomy care' },
  { to: '/wound-care-in-bangalore', label: 'Wound care and dressing' },
  { to: '/oxygen-supportive-care-bangalore', label: 'Oxygen supportive care' },
  { to: '/bedridden-patient-care-bangalore', label: 'Bedridden patient care' },
  { to: '/home-nursing-services-bangalore', label: 'Home nursing services' }
];
const withoutSelf = (links, slug) => links.filter(link => link.to !== `/${slug}`);

export const LANDING_PAGES = {
  'best-old-age-home-services-in-bangalore': {
    title: 'Best Old Age Homes in Bangalore: How to Compare',
    description: 'How to compare the best old age homes in Bangalore on nursing, medical support, safety, dementia care and cost, and what our Kothanur home offers.',
    eyebrow: 'Comparison guide',
    h1: 'Best Old Age Homes in Bangalore: How to Compare',
    intro: [
      'Choosing the best old age home in Bangalore for a parent is easier when you compare safety, nursing support, medical supervision, dementia care, location and monthly cost side by side.',
      'Bangalore Care Takers runs a residential old age home in Kothanur with trained caregivers and nursing support. Families can visit, inspect rooms and hygiene, and review the care plan before admission.'
    ],
    sections: [
      { h: 'What to look for in a good old age home in Bangalore', p: 'A good old age home is more than a place to stay. Compare these points at every home you visit:', list: ['Nurses and caregivers on every shift, and who covers nights', 'Doctor coordination and the emergency escalation process', 'Room hygiene, toilets, ramps, rails and non-slip floors', 'Meals, special diets and how medicines are given', 'Dementia and bedridden care experience', 'Visiting rules and how families are updated', 'What the monthly fee includes, and what is charged extra'] },
      { h: 'Old age home care services at our Kothanur home', p: 'Residents receive daily support while keeping as much independence as possible:', list: ['24/7 caregiver and nursing support', 'Medicine reminders and health monitoring', 'Bathing, grooming, mobility and feeding support', 'Dementia and Alzheimer’s care', 'Bedridden and post-surgery recovery care', 'Clean rooms, hygienic food and a peaceful setting', 'Companionship, activities and family updates'] },
      { h: 'Old age home with medical care and nursing support', p: 'Many families need more than a basic stay. Our home supports seniors who need nursing care, medication management, dementia care, post-hospital recovery or long-term care, with doctor coordination when needed. Complex or unstable conditions may need a hospital setting, and we say so at the assessment.' },
      { h: 'Who our old age home suits', list: ['Seniors who live alone and need daily support', 'Parents whose children live abroad or outside Bangalore', 'Elders who need help with mobility and personal care', 'Seniors who need companionship and continuous supervision'] },
      { h: 'Families we support across Bangalore', p: 'Families from Whitefield, Hebbal, Hennur, Yelahanka, Kothanur, Thanisandra, KR Puram, Banaswadi, Indiranagar, Koramangala and Electronic City choose our Kothanur home for residential elderly care.' }
    ],
    faqs: [
      { q: 'How do I choose the best old age home in Bangalore?', a: 'Visit at least two or three homes. Compare nursing cover, doctor coordination, hygiene, meals, dementia experience, family updates and a written list of what the fee includes.' },
      { q: 'Is there a list of old age homes in Bangalore?', a: 'The Karnataka Department for the Welfare of Disabled and Senior Citizens publishes a list of registered homes. Use it alongside facility visits; our own home is in Kothanur.' },
      { q: 'Do you provide old age home care with medical facilities?', a: 'Yes. We provide nursing support, medicine management, health monitoring and doctor coordination for residents who need medical care.' },
      { q: 'Can we visit before admission?', a: 'Yes. Call +91 77605 06666 to arrange a facility visit and a care discussion.' }
    ],
    related: [{ to: '/old-age-homes-bangalore', label: 'Old age home in Kothanur' }, { to: '/blog/cost-of-old-age-homes-in-bangalore-2026-price-guide', label: 'Old age home cost guide' }, { to: '/blog/old-age-home-facility-visit-checklist-bangalore', label: 'Facility visit checklist' }, { to: '/dementia-alzheimers-care-bangalore', label: 'Dementia care home' }],
    service: 'Old age home care'
  },

  'residential-care-physical-disabilities-bangalore': {
    title: 'Home for Disabled & Physically Challenged in Bangalore',
    description: 'Long-term residential care home for disabled and physically challenged adults in Bangalore: daily help, safe mobility, nursing and rehabilitation support.',
    eyebrow: 'Residential disability care',
    h1: 'Home for Disabled & Physically Challenged in Bangalore',
    intro: [
      'Bangalore Care Takers runs a home for disabled and physically challenged adults in Kothanur, Bangalore, offering long-term residential care in a safe, structured and caring environment.',
      'Our disabled care home supports adults who need daily help, supervision, and medical or rehabilitation support because of physical disability, age-related limitations or long-term illness.'
    ],
    sections: [
      { h: 'Trusted disabled care home in Bangalore', p: 'Our disabled care home supports people who cannot live independently, with dignity, safety, emotional stability and structured daily routines. Families choose our home for disabled persons because it combines residential living, trained caregivers, medical coordination and rehabilitation support under one roof.' },
      { h: 'Home for the aged and disabled in Bangalore', p: 'Our facility works as a home for the aged and disabled, for adults who need long-term care because of physical challenges or age-related dependency. It suits people with:', list: ['Physical disabilities affecting mobility', 'Long-term illness or injury', 'Age-related physical limitations', 'Conditions that need assisted daily living'] },
      { h: 'Care home for physically challenged persons', p: 'As a care home for physically disabled residents, we provide:', list: ['Help with bathing, dressing, feeding and hygiene', 'Safe mobility and transfer support', 'Wheelchair-friendly movement within the premises', 'Continuous supervision by trained caregivers'] },
      { h: 'Care home for physically disabled adults: accessibility and safety', list: ['Barrier-free access and safe walking paths', 'Non-slip flooring and safety rails', 'Calm, predictable daily routines', 'Patient, respectful caregiving'] },
      { h: 'Medical, nursing and rehabilitation support', list: ['Medicine management and health monitoring', 'Coordination with doctors and healthcare providers', 'Physiotherapy and mobility support', 'Emergency response procedures'] },
      { h: 'Handicapped ashram in Bangalore, professionally managed', p: 'Many families search for a handicapped ashram in Bangalore that offers compassion along with proper care. Our home combines a calm, community-style setting with trained caregivers, nursing support and structured routines, so it feels like home rather than an institution.' }
    ],
    faqs: [
      { q: 'Do you provide long-term or lifetime care for disabled adults?', a: 'Yes. We offer long-term residential care for disabled adults, depending on each person’s needs and the family’s wishes.' },
      { q: 'Is this a home for disabled persons who need lifelong care?', a: 'Yes. Disabled persons who cannot live independently can stay long term, with care adjusted as their needs change.' },
      { q: 'Is the home wheelchair-friendly?', a: 'Yes. Residents have barrier-free access, safety rails and help with safe transfers within the premises.' },
      { q: 'Is physiotherapy available?', a: 'We coordinate physiotherapy and mobility support as part of the resident’s care plan.' },
      { q: 'Where is the home for disabled located?', a: 'In Kothanur, Bangalore East, serving families from Whitefield, Hebbal, Yelahanka, KR Puram, Hennur, Banaswadi and Indiranagar.' }
    ],
    related: withoutSelf(DISABILITY_RELATED, 'residential-care-physical-disabilities-bangalore').concat([{ to: '/bedridden-patient-care-bangalore', label: 'Bedridden patient care' }]),
    service: 'Residential care for adults with physical disabilities'
  },

  'residential-care-intellectual-disabilities-bangalore': {
    title: 'Home for Mentally Challenged Adults in Bangalore',
    description: 'Safe residential home for mentally challenged adults and adults with intellectual disabilities in Bangalore, with 24/7 supervision and daily routines.',
    eyebrow: 'Residential disability care',
    h1: 'Home for Mentally Challenged Adults in Bangalore',
    intro: [
      'Bangalore Care Takers provides a safe, peaceful home in Kothanur, Bangalore for adults with intellectual or developmental disabilities who need daily support and supervision.',
      'Families sometimes search for a “home for mentally retarded” or “home for mentally disabled”; the respectful term today is intellectual disability. Our focus is safety, routine and respectful care.'
    ],
    sections: [
      { h: 'Who this home is for', list: ['Adults with intellectual or developmental disabilities', 'People who need help with daily activities', 'Individuals who cannot live alone safely', 'Long-term or lifetime care needs'] },
      { h: 'Residential care with 24/7 supervision', list: ['24/7 supervision', 'Clean and hygienic rooms', 'A structured daily routine', 'Friendly, trained caregivers'] },
      { h: 'Rehabilitation support for mentally challenged adults', p: 'We provide basic rehabilitation support to improve daily life, matched to each person’s ability:', list: ['Daily routine and activity support', 'Help with simple life skills', 'Emotional stability support', 'Social interaction guidance'] },
      { h: 'Daily care and personal support', list: ['Bathing and dressing', 'Feeding and nutrition', 'Personal hygiene', 'Walking and safe movement'] },
      { h: 'Medical and nursing support', list: ['Medicine management', 'Health monitoring', 'Doctor coordination', 'Emergency support'] },
      { h: 'Family support', p: 'We keep families informed and involved with regular updates, open communication and support for long-term care decisions.' }
    ],
    faqs: [
      { q: 'What is a home for mentally challenged adults?', a: 'A residential care facility that provides daily living support, supervision and rehabilitation for adults with intellectual or cognitive disabilities.' },
      { q: 'Do you provide long-term or lifetime care?', a: 'Yes. We offer long-term residential care depending on individual and family needs.' },
      { q: 'Is the environment safe and supervised?', a: 'Yes. Residents have continuous supervision in a secure, structured setting.' },
      { q: 'Can families visit residents?', a: 'Yes. Family visits are encouraged and coordinated with the care team.' }
    ],
    related: withoutSelf(DISABILITY_RELATED, 'residential-care-intellectual-disabilities-bangalore'),
    service: 'Residential care for adults with intellectual disabilities'
  },

  'rehabilitation-centre-bangalore': {
    title: 'Rehabilitation Centre in Bangalore | Psychiatric Care',
    description: 'Psychiatric rehabilitation and schizophrenia care centre in Bangalore with supervised residential living, nursing support and family coordination.',
    eyebrow: 'Psychiatric rehabilitation',
    h1: 'Rehabilitation Centre in Bangalore for Psychiatric & Schizophrenia Care',
    intro: [
      'Bangalore Care Takers provides residential rehabilitation care in Bangalore for adults and elderly people who need structured support, daily supervision, nursing care and a peaceful environment.',
      'Our centre supports people living with psychiatric conditions, schizophrenia, cognitive difficulties, disability and long-term care needs, alongside their treating psychiatrist’s plan.'
    ],
    sections: [
      { h: 'Rehabilitation care centre for schizophrenia', list: ['A calm, structured daily routine', 'Help with food, hygiene, rest and safe engagement', 'Medicine reminders and observation', 'Doctor coordination when needed', 'A secure, hygienic setting with continuous supervision'] },
      { h: 'Rehabilitation centre for mentally challenged adults', p: 'Families looking for a rehabilitation centre for mentally challenged adults often need long-term support, not only short-term treatment. We provide:', list: ['Supervised living for adults with intellectual, cognitive or psychiatric care needs', 'Daily help with bathing, dressing, meals and hygiene', 'Nursing care, medication reminders and family updates', 'A safe environment for elderly, disabled and dependent residents'] },
      { h: 'Psychiatric rehabilitation care centre: who it suits', list: ['Schizophrenia care support', 'Psychiatric rehabilitation and long-term supervised care', 'Behavioural and emotional support', 'Elderly residents with dementia, disability or bedridden care needs'] },
      { h: 'Working with the treating doctor', p: 'Treatment decisions stay with the treating psychiatrist. We follow their plan for medicines and appointments, report changes in behaviour or health, and escalate urgently when needed.' }
    ],
    faqs: [
      { q: 'Do you provide psychiatric rehabilitation care in Bangalore?', a: 'Yes. We provide supervised living, nursing support, medication reminders and daily assistance in line with the treating doctor’s plan.' },
      { q: 'Do you provide rehabilitation care for schizophrenia?', a: 'Yes. We support residents with schizophrenia through structured routines, safe supervision, nursing care and family coordination.' },
      { q: 'Do you care for mentally challenged adults?', a: 'Yes. We provide residential support for mentally challenged adults who need daily care, supervision and medical support.' },
      { q: 'Can families stay involved?', a: 'Yes. Families receive regular updates on routines, health changes and comfort, and visits are coordinated with the team.' }
    ],
    related: withoutSelf(DISABILITY_RELATED, 'rehabilitation-centre-bangalore').concat([{ to: '/dementia-alzheimers-care-bangalore', label: 'Dementia care' }]),
    service: 'Psychiatric rehabilitation care'
  },

  'oxygen-supportive-care-bangalore': {
    title: 'Oxygen Supportive Care in Bangalore | Home & Facility',
    description: 'Oxygen supportive care in Bangalore for COPD, post-pneumonia, stroke and bedridden patients: oxygen monitoring, nursing supervision and doctor coordination.',
    eyebrow: 'Specialised nursing',
    h1: 'Oxygen Supportive Care in Bangalore',
    intro: [
      'When a loved one needs oxygen to breathe comfortably, timely nursing support matters. Bangalore Care Takers provides oxygen supportive care in Bangalore at home or at our Kothanur facility, following the treating doctor’s oxygen prescription.',
      'Our aim is to help patients breathe easier, recover safely and live with dignity.'
    ],
    sections: [
      { h: 'Oxygen supportive care services', list: ['Monitoring oxygen therapy and oxygen saturation as prescribed', 'Support for COPD, pneumonia and post-COVID recovery', 'Oxygen support during stroke and neuro-rehabilitation', 'Oxygen management for bedridden and palliative patients', 'Nursing supervision and emergency escalation'] },
      { h: 'Conditions that may need oxygen support', list: ['Chronic respiratory disease', 'Recovery after stroke or neurological damage', 'Severe infection or trauma recovery', 'Slow healing after surgery', 'Advanced illness in palliative care'] },
      { h: 'Oxygen safety at home', p: 'We check that concentrators or cylinders are used as prescribed, tubing and masks are clean, there is no open flame or smoking nearby, and the family knows the warning signs that need an immediate doctor call.' },
      { h: 'About hyperbaric oxygen therapy (HBOT)', p: 'HBOT, where patients breathe pure oxygen under pressure, is given in specialised hospital centres on a doctor’s referral. We can coordinate daily nursing care around a patient’s HBOT sessions; the therapy itself is provided by the treating centre.' }
    ],
    faqs: [
      { q: 'Can oxygen supportive care be provided at home?', a: 'Yes, when the treating doctor has prescribed oxygen and the patient is stable enough for home care. A nurse monitors oxygen use and vital signs.' },
      { q: 'Do you provide the oxygen equipment?', a: 'Families usually arrange the prescribed concentrator or cylinders. Our nurse explains what is needed before care starts.' },
      { q: 'Can patients on oxygen stay at your facility?', a: 'Yes. Patients who need continuous monitoring can stay at our Kothanur facility with 24/7 nursing support.' },
      { q: 'Do you provide HBOT?', a: 'No. HBOT is provided in specialised hospital centres; we can coordinate nursing care around it.' }
    ],
    related: withoutSelf(PROCEDURE_RELATED, 'oxygen-supportive-care-bangalore'),
    service: 'Oxygen supportive care'
  },

  'tracheostomy-care-in-bangalore': {
    title: 'Tracheostomy Care in Bangalore | Home Nursing Support',
    description: 'Tracheostomy care in Bangalore at home or at our facility: tube cleaning, suctioning, dressing changes and breathing checks by a qualified nurse.',
    eyebrow: 'Specialised nursing',
    h1: 'Tracheostomy Care in Bangalore',
    intro: [
      'A tracheostomy creates an opening in the neck so a tube can support breathing. Patients need diligent care to prevent infection, keep the tube working and handle complications quickly.',
      'Bangalore Care Takers provides tracheostomy care in Bangalore at home or at our Kothanur facility, assigning a nurse only after reviewing the doctor’s instructions and the nurse’s competence for the procedure.'
    ],
    sections: [
      { h: 'What tracheostomy care includes', list: ['Cleaning the tube and inner cannula as instructed', 'Suctioning to keep the airway clear', 'Dressing changes and stoma site hygiene', 'Monitoring breathing, oxygen levels and signs of infection', 'Humidification and positioning', 'Emergency steps if the tube blocks or comes out'] },
      { h: 'Who needs tracheostomy care at home', list: ['Patients discharged from ICU or hospital with a tracheostomy', 'Long-term ventilation or neurological patients', 'Bedridden or palliative patients with airway support'] },
      { h: 'Before care starts', p: 'Share the discharge summary, tube type and size, suction settings, oxygen prescription and the hospital’s emergency instructions. Families usually arrange prescribed supplies; the nurse will list what is needed.' }
    ],
    faqs: [
      { q: 'Can tracheostomy suctioning be done at home?', a: 'Yes, by a nurse competent in tracheostomy care, following the doctor’s instructions. Unstable patients may need hospital care.' },
      { q: 'Is tracheostomy care available 24 hours?', a: 'Yes. 12-hour or 24-hour nursing can be arranged at home, or the patient can stay at our facility.' },
      { q: 'Can family members learn routine care?', a: 'Our nurse can show family members routine tasks such as site hygiene, while suctioning and tube care stay with the nurse.' }
    ],
    related: withoutSelf(PROCEDURE_RELATED, 'tracheostomy-care-in-bangalore'),
    service: 'Tracheostomy care'
  },

  'catheter-care-bangalore': {
    title: 'Catheter Care in Bangalore | Home Nursing Support',
    description: 'Catheter care in Bangalore at home: urinary catheter hygiene, drainage bag care, infection checks and catheter changes by a nurse when prescribed.',
    eyebrow: 'Specialised nursing',
    h1: 'Catheter Care in Bangalore',
    intro: [
      'A urinary catheter drains urine from the bladder. It helps manage urinary problems, but careful hygiene is needed to prevent infection and keep the patient comfortable.',
      'Bangalore Care Takers provides catheter care at home in Bangalore and at our Kothanur facility, with nurses who follow the treating doctor’s instructions.'
    ],
    sections: [
      { h: 'Catheter care services', list: ['Daily cleaning around the catheter site', 'Drainage bag emptying, changing and positioning', 'Checking urine output and colour', 'Watching for fever, pain, leakage or blockage', 'Catheter changes by a qualified nurse when prescribed', 'Help with hygiene and daily living'] },
      { h: 'Types of catheters we support', list: ['Indwelling (Foley) catheters for long-term use', 'Catheters after surgery or hospital discharge', 'Catheters for bedridden or elderly patients'] },
      { h: 'Tips for catheter comfort in Bangalore', p: 'Keep the bag below bladder level, drink fluids as the doctor advises, and change bags more often in warm weather. Call the doctor quickly for fever, blood in urine or no drainage.' }
    ],
    faqs: [
      { q: 'Can a nurse visit just for a catheter change?', a: 'Yes. Visit-based support can be arranged for a prescribed catheter change, subject to staff availability.' },
      { q: 'Who provides the catheter supplies?', a: 'Families usually provide prescribed catheters and bags; the nurse lists what is needed before the visit.' },
      { q: 'Can catheter care be combined with other nursing?', a: 'Yes. It is often combined with bedridden care, wound care or post-surgery nursing.' }
    ],
    related: withoutSelf(PROCEDURE_RELATED, 'catheter-care-bangalore'),
    service: 'Catheter care'
  },

  'feeding-tube-care-in-bangalore': {
    title: 'Feeding Tube Care in Bangalore | Ryle’s Tube & PEG',
    description: 'Feeding tube care in Bangalore for Ryle’s tube and PEG: feeds as prescribed, tube flushing, site hygiene and positioning, at home or at our facility.',
    eyebrow: 'Specialised nursing',
    h1: 'Feeding Tube Care in Bangalore',
    intro: [
      'Feeding tube care may be needed for elderly patients, stroke recovery, bedridden patients and people who cannot eat safely by mouth. Good care reduces infection risk, supports nutrition and keeps the patient comfortable.',
      'Bangalore Care Takers arranges feeding tube care at home or at our Kothanur facility, always following the treating doctor’s feeding schedule and tube instructions.'
    ],
    sections: [
      { h: 'Feeding tube care includes', list: ['Feeds given as the doctor or dietitian advises', 'Flushing the tube to prevent blockage', 'Hygiene around the tube site', 'Watching for redness, leakage, discomfort or blockage', 'Positioning during and after feeds', 'Coordination with family and doctors'] },
      { h: 'Tubes we support', list: ['Ryle’s tube (nasogastric tube)', 'PEG tube (gastrostomy)'] },
      { h: 'Who may need feeding tube care', list: ['Stroke patients with swallowing difficulty', 'Bedridden and palliative patients', 'Elderly patients with poor intake', 'Patients recovering after surgery'] }
    ],
    faqs: [
      { q: 'Can feeding tube care be provided at home?', a: 'Yes, when the family has the doctor’s instructions and the patient needs daily help.' },
      { q: 'Who reinserts a Ryle’s tube if it comes out?', a: 'Reinsertion should be done only by a qualified nurse or doctor as prescribed; the nurse will advise on the hospital’s instructions.' },
      { q: 'Can feeding tube care be combined with nursing care?', a: 'Yes. It is often combined with bedridden care, tracheostomy care or stroke rehabilitation.' }
    ],
    related: withoutSelf(PROCEDURE_RELATED, 'feeding-tube-care-in-bangalore'),
    service: 'Feeding tube care'
  },

  'colostomy-care-in-bangalore': {
    title: 'Colostomy Care in Bangalore | Stoma Care at Home',
    description: 'Colostomy and stoma care in Bangalore: pouch changes, skin protection, hygiene and monitoring for leaks or irritation, at home or at our facility.',
    eyebrow: 'Specialised nursing',
    h1: 'Colostomy Care in Bangalore',
    intro: [
      'After colostomy surgery, good stoma care helps recovery and long-term wellbeing. Patients need regular pouch management, skin protection and monitoring for irritation or leaks.',
      'Bangalore Care Takers coordinates colostomy care as part of home nursing, post-surgery care and long-term elderly care in Bangalore, and can connect families with qualified doctors.'
    ],
    sections: [
      { h: 'Colostomy care services', list: ['Pouch emptying and changing', 'Cleaning and protecting the skin around the stoma', 'Watching for leakage, irritation, bleeding or swelling', 'Help with diet and fluids as the doctor advises', 'Hygiene and daily living support'] },
      { h: 'Living well with a colostomy', p: 'With the right routine, most people return to normal activities. We help patients and families learn pouch care and know when to contact the surgeon.' }
    ],
    faqs: [
      { q: 'Can colostomy care be provided at home?', a: 'Yes. A nurse or trained caretaker can help with pouch changes and skin care at home, following the surgeon’s instructions.' },
      { q: 'Who provides the stoma supplies?', a: 'Families usually provide the prescribed pouches and accessories; the nurse lists what is needed.' },
      { q: 'Can it be combined with post-surgery care?', a: 'Yes. Colostomy care is often part of post-surgery nursing at home or at our facility.' }
    ],
    related: withoutSelf(PROCEDURE_RELATED, 'colostomy-care-in-bangalore').concat([{ to: '/post-surgery-rehabilitation-care', label: 'Post-surgery care' }]),
    service: 'Colostomy care'
  },

  'wound-care-in-bangalore': {
    title: 'Wound Care & Wound Dressing in Bangalore | At Home',
    description: 'Wound care and wound dressing in Bangalore for post-surgery wounds, bedsores and diabetic wounds, by nurses following the doctor’s instructions.',
    eyebrow: 'Specialised nursing',
    h1: 'Wound Care and Wound Dressing in Bangalore',
    intro: [
      'Wound care is often needed for elderly patients, bedridden patients, diabetic patients and those recovering from surgery. Proper care reduces infection risk, supports healing and keeps the patient comfortable.',
      'Bangalore Care Takers arranges wound dressing, bedsore prevention and daily monitoring at home or at our Kothanur facility, along with home nursing or post-operative care.'
    ],
    sections: [
      { h: 'When wound care may be needed', list: ['Post-surgery wounds that need regular dressing', 'Bedsores or pressure sores in bedridden patients', 'Diabetic wounds that need careful hygiene', 'Slow-healing wounds in elderly patients'] },
      { h: 'Wound dressing at home', list: ['Dressing changes at the frequency the doctor prescribes', 'Cleaning and protecting the wound', 'Repositioning and pressure relief to prevent bedsores', 'Watching for redness, swelling, discharge, fever or pain'] },
      { h: 'Before booking wound care', list: ['Share the doctor’s or hospital’s wound-care instructions', 'Explain the wound type, location and dressing frequency', 'Tell us about diabetes, mobility limits or bedridden care', 'Confirm whether a nurse is needed rather than a caretaker'] }
    ],
    faqs: [
      { q: 'Can wound dressing be done at home in Bangalore?', a: 'Yes. A nurse can visit for dressing changes or provide them as part of a longer shift.' },
      { q: 'Do you care for bedsores?', a: 'Yes. We help prevent and care for bedsores through repositioning, hygiene and prescribed dressings.' },
      { q: 'Can wound care be combined with other nursing?', a: 'Yes. It is often combined with catheter care, post-surgery care or long-term elderly care.' }
    ],
    related: withoutSelf(PROCEDURE_RELATED, 'wound-care-in-bangalore'),
    service: 'Wound care'
  },

  'home-for-24-hour-nursing-care-in-bangalore': {
    title: '24-Hour Nursing Home in Bangalore | Skilled Nursing',
    description: '24-hour nursing home and skilled nursing facility in Bangalore: continuous nursing supervision, medicines, rehabilitation and bedridden care.',
    eyebrow: '24/7 nursing',
    h1: '24-Hour Nursing Home in Bangalore – Skilled Nursing Care',
    intro: [
      'When a loved one needs constant medical attention, choosing the right 24-hour nursing home in Bangalore is one of the most important decisions a family makes.',
      'Our Kothanur facility combines a home-like setting with the safety of a 24-hour skilled nursing facility: continuous monitoring, timely medicines and dignified care, every day.'
    ],
    sections: [
      { h: 'What is a 24-hour skilled nursing facility?', p: 'A skilled nursing facility is a care centre where patients receive supervision from trained nurses, usually after hospitalisation or when long-term medical care is needed. Unlike basic residential homes, it provides:', list: ['Continuous nursing observation and medicine management', 'Wound care, injections, catheter and feeding-tube support', 'Physiotherapy and mobility support', 'Monitoring of vital signs and chronic conditions'] },
      { h: 'Nursing home or skilled nursing facility?', p: 'Both provide long-term residential care. A nursing home focuses on daily living support and basic care; a skilled nursing facility adds closer medical supervision, rehabilitation and continuous nursing monitoring. Our 24-hour elderly care nursing service combines both.' },
      { h: 'Who needs 24-hour skilled nursing care', list: ['Patients recovering after surgery or hospitalisation', 'Patients needing wound care, injections or tube feeding', 'Stroke, paralysis or neurological conditions', 'Advanced age-related illness or dementia', 'Patients who need rehabilitation and close observation'] },
      { h: 'Skilled nursing facility vs hospital', p: 'Hospitals are for acute treatment and emergencies. A skilled nursing facility suits patients who are medically stable but still need professional care, such as recovery after discharge and long-term monitoring.' },
      { h: 'Nursing care home services: 24/7 care at our nursing home', list: ['Round-the-clock nursing supervision', 'Medicines and health monitoring', 'Post-operative and rehabilitation care', 'Bedridden care and pressure-sore prevention', 'Dementia, stroke and paralysis care', 'Nutrition and daily living assistance'] }
    ],
    faqs: [
      { q: 'Is a nursing home the same as a skilled nursing facility?', a: 'Not quite. A skilled nursing facility offers more medical supervision and rehabilitation than a basic nursing home. Our facility provides both.' },
      { q: 'Is rehabilitation part of skilled nursing care?', a: 'Yes. Physiotherapy and mobility training after stroke or surgery are part of skilled nursing care.' },
      { q: 'Do you offer a 24-hour elderly care nursing service?', a: 'Yes. Residents receive round-the-clock nursing supervision, medicines, monitoring and help with daily living at our Kothanur nursing home.' },
      { q: 'Do you provide 24/7 home care services too?', a: 'Yes. 24-hour nursing can also be arranged at home, subject to staff availability.' },
      { q: 'How do we arrange admission?', a: 'Call +91 77605 06666 to discuss the patient’s condition, visit the facility and agree the care plan.' }
    ],
    related: [{ to: '/bedridden-patient-care-bangalore', label: 'Bedridden patient care' }, { to: '/home-nursing-services-bangalore', label: '24/7 home nursing' }, { to: '/old-age-homes-bangalore', label: 'Old age home with nursing care' }, { to: '/post-surgery-rehabilitation-care', label: 'Post-surgery care' }],
    service: '24-hour skilled nursing care'
  },

  'elderly-care-in-bangalore': {
    title: 'Elder Care Services in Bangalore | 24/7 Elderly Care',
    description: 'Elder care services in Bangalore: caregivers, nursing support, companionship and 24/7 elderly care at home or at our Kothanur facility.',
    eyebrow: 'Elder care',
    h1: 'Elder Care Services in Bangalore',
    intro: [
      'Bangalore Care Takers provides elder care in Bangalore for families who need support for ageing parents, bedridden seniors or senior citizens who need daily help at home.',
      'Whether your loved one needs a caregiver for a few hours, overnight support, 24/7 elderly care, nursing assistance or long-term care, we help you choose the right plan.'
    ],
    sections: [
      { h: '24/7 elderly care services', list: ['Help with bathing, dressing, grooming, feeding, walking and toileting', 'Medicine reminders and basic health observation', 'Companionship, conversation and emotional support', 'Coordination with family members and doctors'] },
      { h: 'Elderly care at home in Bangalore', p: 'Many seniors feel more comfortable in familiar surroundings. Our elderly care at home supports seniors who need personal care, nursing, mobility help, dementia care, post-hospital recovery or continuous supervision.', list: ['Care taker at home for elderly parents', 'Day, night and 24-hour elder care', 'Support for bedridden and dependent senior citizens', 'Dementia, Alzheimer’s and Parkinson’s care', 'Help with meals, hygiene, mobility and routines'] },
      { h: 'Who needs elder care services?', list: ['Seniors living alone', 'Elders who need help with daily activities', 'Parents who need companionship and supervision', 'Bedridden elders and those with dementia', 'Seniors recovering after a hospital stay'] },
      { h: 'Home for aged in Bangalore with care support', p: 'If home care is no longer enough, our Kothanur facility offers residential elder care with caregivers and nursing support, so families can move between home care and residential care as needs change.' }
    ],
    faqs: [
      { q: 'What elder care services do you provide in Bangalore?', a: 'Caregivers, home nursing, 24/7 elderly care at home, dementia care, bedridden care and residential care at our Kothanur facility.' },
      { q: 'Can I get elder care services near me?', a: 'Home elder care is arranged across Bangalore, subject to staff availability near your address.' },
      { q: 'Do you provide 24-hour elderly care?', a: 'Yes. 12-hour and 24-hour care can be arranged at home, and residents at our facility have 24/7 support.' },
      { q: 'How do we start?', a: 'Call +91 77605 06666 with your parent’s needs. We assess, share a written care plan and fee, then start care.' }
    ],
    related: [{ to: '/home-nursing-services-bangalore', label: 'Home nursing services' }, { to: '/old-age-homes-bangalore', label: 'Old age home in Kothanur' }, { to: '/dementia-alzheimers-care-bangalore', label: 'Dementia care' }, { to: '/assisted-living-senior-care-bangalore', label: 'Assisted living' }],
    service: 'Elder care services'
  },

  'bedridden-patient-care-bangalore': {
    title: 'Bedridden Patient Care in Bangalore | Home & Facility',
    description: 'Bedridden patient care in Bangalore: 24/7 nursing, bedsore prevention, feeding, hygiene and physiotherapy, at home or at our Kothanur facility.',
    eyebrow: 'Bedridden care',
    h1: 'Bedridden Patient Care in Bangalore',
    intro: [
      'When a loved one becomes bedridden through stroke, dementia, paralysis, Parkinson’s, surgery or age, daily routines become hard and the risks rise. Bedridden patients need trained nursing, not just basic help.',
      'Bangalore Care Takers provides bedridden patient care at home in Bangalore and at our Kothanur facility, with personalised care plans for each patient.'
    ],
    sections: [
      { h: 'Why bedridden patients need specialised care', list: ['Risk of bedsores and infections', 'Dependence for feeding, toileting and hygiene', 'Difficulty swallowing', 'Need for frequent repositioning', 'Loneliness and low mood'] },
      { h: 'Bedridden care services', list: ['24/7 nursing for bedridden patients', 'Doctor coordination, vitals and medicine support', 'Bedsore prevention: repositioning every 2–3 hours, pressure mattress, dressings', 'Tube feeding or feeding assistance as required', 'Physiotherapy and mobility exercises', 'Sponge bath, diaper care, oral care and grooming', 'Companionship and emotional support', 'Respite care so family caregivers can rest'] },
      { h: 'Old age home for bedridden patients', p: 'When home care becomes too hard, bedridden seniors can stay at our Kothanur facility with round-the-clock nursing, so families know care continues day and night.' },
      { h: 'Who benefits', list: ['Fully bedridden seniors', 'Stroke and paralysis patients', 'People with advanced dementia or Parkinson’s', 'Elderly patients after ICU discharge', 'Cancer and palliative patients'] }
    ],
    faqs: [
      { q: 'Do you provide bedridden patient care at home?', a: 'Yes. Caretakers or nurses can be arranged for 12-hour or 24-hour shifts at home, depending on the care needed.' },
      { q: 'How do you prevent bedsores?', a: 'Through regular repositioning, skin checks, hygiene, pressure-relief mattresses and prescribed dressings.' },
      { q: 'Can a bedridden patient stay at your facility?', a: 'Yes. Our Kothanur facility cares for bedridden residents with 24/7 nursing support.' }
    ],
    related: withoutSelf(PROCEDURE_RELATED, 'bedridden-patient-care-bangalore').concat([{ to: '/home-for-24-hour-nursing-care-in-bangalore', label: '24-hour nursing home' }]),
    service: 'Bedridden patient care'
  }
};

export const LANDING_SLUGS = Object.keys(LANDING_PAGES);
