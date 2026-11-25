import Hero from '@/components/ui/portfolio/Hero';
import PortfolioGrid from '@/components/ui/portfolio/PortfolioGrid';
import { Container, CtaLink, Reveal } from '@/components/site/primitives';
import { projects } from '@/lib/projects';

export const metadata = {
	title: 'Portfolio — HorlaTechs | Selected Software, Web & Mobile Work',
	description:
		'Selected HorlaTechs projects across custom software, CRM, web platforms and mobile apps — with the challenge, approach and measurable outcomes.',
	openGraph: {
		title: 'Portfolio — HorlaTechs',
		description: 'Selected case studies in product, web and engineering.',
		url: 'https://www.horlatechs.com/portfolio',
		siteName: 'HorlaTechs',
		locale: 'en_US',
		type: 'website',
	},
};

const itemList = {
	'@context': 'https://schema.org',
	'@type': 'ItemList',
	name: 'HorlaTechs Portfolio',
	url: 'https://www.horlatechs.com/portfolio',
	itemListElement: projects.map((p, i) => ({
		'@type': 'ListItem',
		position: i + 1,
		url: `https://www.horlatechs.com/portfolio#${p.slug}`,
		name: `${p.client} — ${p.title}`,
	})),
};

export default function PortfolioPage() {
	return (
		<>
			<script type='application/ld+json' dangerouslySetInnerHTML={{ __html: JSON.stringify(itemList) }} />
			<Hero
				eyebrow='Selected work, 2022 — today'
				title={
					<>
						Real products, for real people, <em className='text-signal'>doing real work.</em>
					</>
				}
				subtitle='Every project here started as a conversation about a problem. Here’s what we built, who it was for, and what changed afterwards.'
			/>
			<section className='pb-24 md:pb-32'>
				<Container>
					<PortfolioGrid />
				</Container>
			</section>
			<section className='pb-24 md:pb-36'>
				<Container>
					<Reveal className='mx-auto max-w-3xl text-center'>
						<p className='eyebrow'>Your project here?</p>
						<p className='display mt-6 text-4xl leading-tight md:text-6xl'>
							We’d love to hear what you’re <em className='text-signal'>working on.</em>
						</p>
						<div className='mt-10 flex justify-center'>
							<CtaLink href='/contact'>Tell us about it</CtaLink>
						</div>
					</Reveal>
				</Container>
			</section>
		</>
	);
}
