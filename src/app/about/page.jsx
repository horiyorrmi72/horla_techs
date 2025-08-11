import About from '@/components/About';
import { FAQ } from '@/components/FAQ';
import React from 'react';

export const metadata = {
	title: 'About Us - HorlaTechs | Digital Solutions & Software Experts',
	description:
		'Learn about HorlaTechs, a leading software development company specializing in custom software, AI integration, and digital transformation solutions that empower businesses worldwide.',
	keywords: [
		'horlatechs',
		'horlatech',
		'web development',
		'software development company',
		'custom software',
		'AI integration',
		'digital transformation',
		'HorlaTechs',
		'technology solutions',
		'about HorlaTechs',
	],
	openGraph: {
		title: 'About Us - HorlaTechs',
		description:
			'Discover HorlaTechs’ mission, vision, and expert team dedicated to delivering innovative software and digital solutions.',
		url: 'https://www.horlatechs.com/about',
		siteName: 'HorlaTechs',
		images: [
			{
				url: '',
				width: 1200,
				height: 630,
			},
		],
		locale: 'en_US',
		type: 'website',
	},
	twitter: {
		card: 'summary_large_image',
		title: 'About Us - HorlaTechs',
		description:
			'Meet the team and learn about HorlaTechs’ commitment to innovative software and digital solutions.',
		images: [''],
		creator: '@horla_techs',
	},
};

const page = () => {
	return (
		<div className=''>
			<About />
			<div>
				<FAQ />
			</div>
		</div>
	);
};

export default page;
