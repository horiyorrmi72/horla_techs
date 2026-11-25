import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from '@/components/ui/accordion';
import Link from 'next/link';
import { Container, Reveal, SectionHeading } from './site/primitives';

export function FAQ({ index = '06' }) {
	const faqItems = [
		{
			q: 'What services does HorlaTechs provide?',
			a: 'We offer custom software development, web development, mobile app development, AI integration, deployment & hosting, copywriting, and social media management, all tailored to your business needs.',
		},
		{
			q: 'What types of websites do you create?',
			a: 'We create all types of websites including Corporate, VTU, Real Estate, Fintech, Educational, Delivery Portals, E-Commerce, Blogs, Investment, and Banking platforms. We tailor each project to your needs.',
		},
		{
			q: 'What type of apps do you develop?',
			a: 'We develop mobile apps for both Android and iOS.',
		},
		{
			q: 'What is the pricing for your web development services?',
			a: 'Our pricing is project-based for all our services and depends on factors such as the complexity of the project, number of pages, and required features. We offer affordable packages and discounts all year long. Contact us for a customized quote.',
		},
		{
			q: 'Do you provide post-launch maintenance?',
			a: 'Yes. We provide one month of free technical support and maintenance after launch. After that, you can choose a plan to keep your site secure, updated, and optimized.',
		},
		{
			q: 'What do you need from me to get started?',
			a: "We need details about your business, content [text, images], and any design preferences. If you don't have a domain or hosting, we can help you get one.",
		},
		{
			q: 'Do you work with clients outside Nigeria?',
			a: 'Yes! We work with clients globally. No matter your location, we can collaborate through virtual meetings, project management tools, and secure communication channels.',
		},
		{
			q: 'How long does it take to build a website or app?',
			a: 'Timelines vary depending on the complexity of your project. Simple standard websites may take 1–4 weeks, while complex applications can take several weeks. We provide a detailed timeline during the discovery phase.',
		},
		{
			q: 'Can you build a custom solution from my idea?',
			a: "Absolutely! Share your vision with us, and we’ll transform it into a fully functional product from design (if you don't have one, we can create it for you) to development, testing, and deployment.",
		},
		{
			q: 'What technologies do you use?',
			a: 'We use modern and scalable technologies such as Angular, Next.js, React, Node.js, NestJS, Python (Flask, Django), Tailwind CSS, and AI-driven solutions, ensuring your project is future-ready.',
		},
	];
	const faqSchema = {
		'@context': 'https://schema.org',
		'@type': 'FAQPage',
		mainEntity: faqItems.map((item) => ({
			'@type': 'Question',
			name: item.q,
			acceptedAnswer: {
				'@type': 'Answer',
				text: item.a,
			},
		})),
	};

	return (
		<section className='border-t border-line py-24 md:py-36'>
			<Container className='grid gap-14 md:grid-cols-12'>
				<div className='md:col-span-4'>
					<div className='md:sticky md:top-32'>
						<SectionHeading index={index} eyebrow='FAQ' title='Questions, answered.' />
						<Reveal delay={0.2}>
							<p className='mt-6 text-ink-soft'>
								Can’t find what you need?{' '}
								<Link href='/contact' className='text-ink underline decoration-signal underline-offset-4'>
									Ask us directly
								</Link>
								.
							</p>
						</Reveal>
					</div>
				</div>

				<Accordion type='single' collapsible className='border-t border-line md:col-span-8'>
					{faqItems.map((item, i) => (
						<AccordionItem key={i} value={`item-${i}`} className='border-line'>
							<AccordionTrigger className='group items-baseline gap-6 py-7 text-left text-lg font-medium hover:no-underline md:text-xl'>
								<span className='flex items-baseline gap-5'>
									<span className='font-mono text-xs text-ink-soft group-data-[state=open]:text-signal'>
										{String(i + 1).padStart(2, '0')}
									</span>
									{item.q}
								</span>
							</AccordionTrigger>
							<AccordionContent className='pb-8 pl-10 text-base leading-relaxed text-ink-soft'>
								{item.a}
							</AccordionContent>
						</AccordionItem>
					))}
				</Accordion>

				<script
					type='application/ld+json'
					dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
				/>
			</Container>
		</section>
	);
}
