// Contact-page quick links, framed as the pickup options on an "order
// slip". Kept as data (not hardcoded in Contact.jsx) per the site's
// convention of keeping anything likely to change — copy, handles,
// URLs — out of JSX. `icon` is a key into the iconMap in Contact.jsx
// rather than a component reference, so this file stays plain data.
export const contactLinks = [
  {
    id: 'email',
    icon: 'mail',
    label: 'Email',
    value: 'cindyzheng95@gmail.com',
    href: 'mailto:cindyzheng95@gmail.com',
    note: 'Best way to reach me',
  },
  {
    id: 'linkedin',
    icon: 'linkedin',
    label: 'LinkedIn',
    value: '@cindynzheng',
    href: 'https://www.linkedin.com/in/cindynzheng/',
    note: 'Best way to reach me professionally',
  },
  {
    id: 'instagram',
    icon: 'instagram',
    label: 'Instagram',
    value: '@cindynzheng',
    href: 'https://www.instagram.com/cindynzheng/',
    note: "Want to see what else I'm up to?",
  },
  {
    id: 'github',
    icon: 'github',
    label: 'GitHub',
    value: 'czheng10',
    href: 'https://github.com/czheng10',
    note: 'Where the code for this site lives',
  },
]
