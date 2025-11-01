import React from 'react';

export default function Head() {
	const title = 'Portfolio — HorlaTechs';
	const description =
		'HorlaTechs portfolio — selective case studies in web, product design, and growth engineering. See results, process, and impact.';

	const siteUrl = 'https://horlatechs.com/portfolio';
	const image = 'https://horlatechs.com/projects/project-hero-social.jpg';

	const jsonLd = {
		'@context': 'https://schema.org',
		'@type': 'ItemList',
		name: 'HorlaTechs Portfolio',
		url: siteUrl,
		description: description,
		itemListElement: [
			{
				'@type': 'ListItem',
				position: 1,
				url: `${siteUrl}#acres-crm`,
				name: 'Acres Custom CRM',
			},
			{
				'@type': 'ListItem',
				position: 2,
				url: `${siteUrl}#digital-flex`,
				name: 'Digital Flex',
			},
		],
	};

	return (
		<>
			<title>{title}</title>
			<meta name='description' content={description} />
			<link rel='canonical' href={siteUrl} />

			{/* Open Graph */}
			<meta property='og:type' content='website' />
			<meta property='og:site_name' content='HorlaTechs' />
			<meta property='og:title' content={title} />
			<meta property='og:description' content={description} />
			<meta property='og:url' content={siteUrl} />
			<meta property='og:image' content={image} />

			{/* Twitter */}
			<meta name='twitter:card' content='summary_large_image' />
			<meta name='twitter:title' content={title} />
			<meta name='twitter:description' content={description} />
			<meta name='twitter:image' content={image} />

			{/* Structured data */}
			<script
				type='application/ld+json'
				// eslint-disable-next-line react/no-danger
				dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
			/>
		</>
	);
}
