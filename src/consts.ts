import { CONTACT_FORM_ENDPOINT, DISSERTATION_SLIDES_URL, GOOGLE_SCHOLAR_URL, SITE_DATA } from './constants';

export const SITE_TITLE = SITE_DATA.name;
export const SITE_TAGLINE = SITE_DATA.tagline;
export const SITE_DESCRIPTION = SITE_DATA.description;
export const SITE_URL = SITE_DATA.siteUrl;

export const CV_FILE_URL = '/files/cv.pdf';
export const CONTACT_FORM_URL = CONTACT_FORM_ENDPOINT;
export const DISSERTATION_SLIDES_LINK = DISSERTATION_SLIDES_URL;
export const SCHOLAR_URL = GOOGLE_SCHOLAR_URL;

export const NAV_LINKS = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/cv', label: 'CV' },
  { href: '/projects', label: 'Projects' },
  { href: '/dissertation', label: 'Dissertation' },
  { href: '/publications', label: 'Publications' },
  { href: '/contact', label: 'Contact' },
] as const;

export const SOCIAL_LINKS = [
  { label: 'ORCID', href: `https://orcid.org/${SITE_DATA.orcid}` },
  { label: 'Google Scholar', href: SCHOLAR_URL },
  { label: 'LinkedIn', href: SITE_DATA.linkedin },
  { label: 'GitHub', href: `https://github.com/${SITE_DATA.github}` },
  { label: 'Bluesky', href: `https://bsky.app/profile/${SITE_DATA.bluesky}` },
] as const;

export const FOOTER_CONTACT = {
  label: 'Use the contact form for research, teaching, collaboration, and consulting enquiries.',
  href: '/contact',
};

export const UMAMI_SRC = import.meta.env.PUBLIC_UMAMI_SRC ?? 'https://cloud.umami.is/script.js';
export const UMAMI_WEBSITE_ID = import.meta.env.PUBLIC_UMAMI_WEBSITE_ID ?? '';
