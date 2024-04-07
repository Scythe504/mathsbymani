import { Metadata } from 'next';

const TITLE = 'MathsByMani - Class 11 | 12-Boards | IIT-JEE'
const DESCRIPTION =
  'This is an initiative by Mani to personally teach students of Class 11 and 12 as well as folks preparing for IIT-JEE exams of Mathematics.';

const PREVIEW_IMAGE_URL = '/favicon';
const ALT_TITLE = 'Class 11 | 12 | IIT-JEE Maths Tuitions From MathsByMani';

const BASE_URL = 'https://www.mathsbymani.com';

export const siteConfig: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  icons: {
    icon: '/favicon',
  },
  applicationName: 'MathsByMani',
  creator: 'Mani',
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    siteName: 'mathsbymani',
    url: BASE_URL,
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: PREVIEW_IMAGE_URL,
        width: 1200,
        height: 630,
        alt: ALT_TITLE,
      },
    ],
  },
  category: 'Academics',
  alternates: {
    canonical: BASE_URL,
  },
  keywords: [
    'Mathematics for Class 11th and 12th students',
    'IIT-JEE Mathematics',
    'Learn from the expert',
    'High School Mathematics',
    'mathsbymani',
    'Mani Surya',
    'Courses',
    'Advanced Mathematics',
    'India',
    'IIT-JEE',
    'Tuitions',
    'Academy',
    'Tutor',
    'Jharkhand',
    'Ranchi',
  ],
  metadataBase: new URL(BASE_URL),
};
