// Real career/education timeline, pulled from Cindy's resume.
// Ordered most-recent-first (reverse chronological, like a resume).
// `type` is 'work' (roles: intern, researcher, TA, full-time) or
// 'education' (degrees/certificates) — Timeline.jsx uses it to give
// education entries a visually distinct marker/icon/label.
export const timelineData = [
  {
    date: 'Aug 2025 — Present',
    title: 'Software Engineer, Marketing Technology Engineering',
    org: 'LinkedIn, New York, NY',
    type: 'work',
    description:
      'Launched an AI-driven search-optimization algorithm lifting citation rate 20% (186% growth on key pages) and built production AI agents across 2 product lines.',
  },
  {
    date: 'May 2025',
    title: 'B.S. Computer Science and Engineering',
    org: 'Massachusetts Institute of Technology',
    type: 'education',
    description:
      'Graduated with a 4.8/5.0 GPA; coursework spanned algorithms, machine learning, and systems engineering.',
  },
  {
    date: 'Aug 2024 — Dec 2024',
    title: 'Undergraduate Teaching Assistant',
    org: 'MIT EECS, Cambridge, MA',
    type: 'work',
    description:
      'Led weekly sections for 30+ students in "AI, Decision Making, and Society," plus office hours on training and evaluating AI models.',
  },
  {
    date: 'May 2024 — Aug 2024',
    title: 'Software Engineer Intern — Internal Ads',
    org: 'LinkedIn, Sunnyvale, CA',
    type: 'work',
    description:
      'Shipped a ranking/recommendation algorithm that lifted click-through prediction accuracy 25% and an ad-serving feature that grew bookings up to 15% ($3.4M).',
  },
  {
    date: 'Jan 2024 — May 2024',
    title: 'Undergraduate Researcher — Data-Driven Democracy',
    org: 'MIT Digital Humanities Lab, Cambridge, MA',
    type: 'work',
    description:
      "Built statistical models and engineered 7 API endpoints analyzing campaign-finance and survey data for India's national election.",
  },
  {
    date: 'May 2023 — Aug 2023',
    title: 'Software Engineer Intern — Notifications Expansion',
    org: 'LinkedIn, Sunnyvale, CA',
    type: 'work',
    description:
      'Architected a dynamic backend system that scaled a data pipeline to 1.1M annual users, a 4x increase over the prior static solution.',
  },
  {
    date: 'Jun 2022 — Dec 2022',
    title: 'Undergraduate Researcher — This Was Paris in 1970',
    org: 'MIT Digital Humanities Lab, Cambridge, MA',
    type: 'work',
    description:
      'Optimized an ImageMagick image-processing pipeline by 99.8% and took a prototype to production quality, architected for 10,000+ concurrent users.',
  },
  {
    date: 'Jun 2022 — Aug 2022',
    title: 'Advanced Software Engineering Certificate',
    org: 'Codepath, New York, NY',
    type: 'education',
    description:
      'Completed an intensive data structures & algorithms program, earning a Certificate of Achievement.',
  },
]
