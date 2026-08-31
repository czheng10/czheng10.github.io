// Real career/education timeline, pulled directly from Cindy's resume.
// Ordered most-recent-first (reverse chronological, like a resume).
// `type` is 'work' (roles: intern, researcher, TA, full-time) or
// 'education' (degrees/certificates) — Timeline.jsx renders the two
// kinds with different card layouts, not just a different color.
//
// Work entries: `header` is "Company - Title", `subheader` is the
// team/project plus location, and `bullets` are the resume's own
// bullet points verbatim (not reworded/summarized) so the specifics
// stay accurate.
//
// Education entries: `header` is the degree/certificate name,
// `subheader` is "Institution, Location", `credential` ('Degree' or
// 'Certificate') drives the pill label so it's clear at a glance
// which kind of credential it is -- a Codepath certificate shouldn't
// read the same as an MIT degree -- and `status` ('Started' /
// 'Graduated') is shown as a single plain line instead of a bullet
// list, since a one-word "bullet" looked silly.
export const timelineData = [
  {
    date: 'Aug 2025 — Present',
    header: 'LinkedIn - Software Engineer',
    subheader: 'Marketing Technology Engineering, New York, NY',
    type: 'work',
    bullets: [
      'Designed and launched an AI-driven search-optimization algorithm from concept to production, lifting citation rate 20% within 60 days — individual key-product pages saw 186% growth',
      'Built and hardened production AI agents for 2 product lines; engineered an automated evaluation and reporting pipeline that increased system observability at zero added infrastructure cost',
    ],
  },
  {
    date: 'May 2025',
    header: 'B.S. Computer Science and Engineering',
    subheader: 'Massachusetts Institute of Technology, Cambridge, MA',
    type: 'education',
    credential: 'Degree',
    status: 'Graduated',
  },
  {
    date: 'Aug 2024 — Dec 2024',
    header: 'MIT EECS - Undergraduate Teaching Assistant',
    subheader: 'Cambridge, MA',
    type: 'work',
    bullets: [
      'Supported "AI, Decision Making, and Society" course delivery, leading weekly sections for 30+ students on AI, algorithmic decision-making, and societal impact',
      'Hosted office hours assisting undergraduate and graduate students with training and evaluating AI models',
    ],
  },
  {
    date: 'May 2024 — Aug 2024',
    header: 'LinkedIn - Software Engineer Intern',
    subheader: 'Internal Ads, Sunnyvale, CA',
    type: 'work',
    bullets: [
      'Built and tuned a ranking/recommendation algorithm that improved click-through prediction accuracy by 25%',
      'Designed and shipped a new ad-serving feature that lifted platform bookings up to 15% ($3.4M)',
    ],
  },
  {
    date: 'Jan 2024 — May 2024',
    header: 'MIT Digital Humanities Lab - Undergraduate Researcher',
    subheader: 'Data-Driven Democracy, Cambridge, MA',
    type: 'work',
    bullets: [
      "Built 2 statistical models analyzing campaign-finance and survey-response data for India's national election",
      'Engineered 7 API endpoints to support large-scale data retrieval and analysis',
    ],
  },
  {
    date: 'May 2023 — Aug 2023',
    header: 'LinkedIn - Software Engineer Intern',
    subheader: 'Notifications Expansion, Sunnyvale, CA',
    type: 'work',
    bullets: [
      'Architected a dynamic backend system that scaled a data pipeline to 1.1M annual users — a 4x increase over the prior static solution',
      'Authored 3+ technical design docs formalizing and automating a previously manual discovery process',
    ],
  },
  {
    date: 'Jun 2022 — Dec 2022',
    header: 'MIT Digital Humanities Lab - Undergraduate Researcher',
    subheader: 'This Was Paris in 1970, Cambridge, MA',
    type: 'work',
    bullets: [
      'Optimized an image-processing pipeline with ImageMagick, improving conversion efficiency by 99.8%',
      'Took a prototype application to production quality, architected to support 10,000+ concurrent users',
    ],
  },
  {
    date: 'Jun 2022 — Aug 2022',
    header: 'Advanced Software Engineering Certificate',
    subheader: 'Codepath, New York, NY',
    type: 'education',
    credential: 'Certificate',
    status: 'Graduated',
  },
  {
    date: 'Aug 2021',
    header: 'B.S. Computer Science and Engineering',
    subheader: 'Massachusetts Institute of Technology, Cambridge, MA',
    type: 'education',
    credential: 'Degree',
    status: 'Started',
  },
]
