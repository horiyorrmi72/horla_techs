import Services from '@/components/Services';
import React from 'react';

export const metadata = {
	title: 'Our Services - HorlaTechs | Custom Software, AI, Web & Mobile',
	description:
		'Discover HorlaTechs full range of services including custom software development, AI integration, web and mobile app development, copywriting, and social media management. Tailored solutions that drive business growth.',
	keywords: [
		'software development',
		'custom software',
		'AI integration',
		'web development',
		'mobile app development',
		'copywriting',
		'SEO',
		'social media management',
		'digital solutions',
		'HorlaTechs',
	],
	openGraph: {
		title: 'Our Services - HorlaTechs',
		description:
			'Custom software, AI, web & mobile app development services designed to elevate your business.',
		url: 'https://www.horlatechs.com/services',
		siteName: 'HorlaTechs',
		images: [
			{
				url: 'https://www.horlatechs.com/og-image.jpg',
				width: 1200,
				height: 630,
			},
		],
		locale: 'en_US',
		type: 'website',
	},
	twitter: {
		card: 'summary_large_image',
		title: 'Our Services - HorlaTechs',
		description:
			'Explore HorlaTechs’ services: custom software, AI integration, web & mobile app development, and more.',
		images: ['https://www.horlatechs.com/og-image.jpg'],
		creator: '@horla_techs',
	},
};
const page = () => {
	return (
		<div className='my-4 pt-20'>
			<Services />
		</div>
	);
};

export default page;
