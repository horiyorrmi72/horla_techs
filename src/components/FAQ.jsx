import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from '@/components/ui/accordion';

export function FAQ() {
	const faqItems = [
		{
			q: 'What services does HorlaTech provide?',
			a: 'We offer custom software development, web development, mobile app development, AI integration, copywriting, social media management, solutions tailored to your business needs.',
		},
		{
			q: 'What types of websites do you create?',
			a: 'We create all types of websites including Corporate, VTU, Real Estate, Fintech, Educational,Delivery system Portal, E-Commerce, Blogs, Investment, and Banking platforms. We tailor each project to your needs.',
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
			a: "We need details about your business, content [text, images], and any design preferences.If you don't have a domain or hosting, we can help you get one.",
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
			a: 'We use modern and scalable technologies such as Angular, Next.js, React, Node.js,Nestjs, Python (Flask,Django) Tailwind CSS, and AI-driven solutions, ensuring your project is future-ready.',
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
		<section className='py-20 bg-gray-50'>
			<div className='container mx-auto px-4 max-w-4xl'>
				<h2 className='text-3xl md:text-4xl font-stretch-semi-condensed text-center mb-12'>
					Frequently Asked Questions
				</h2>

				<Accordion type='single' className='w-full'>
					{faqItems.map((item, index) => (
						<AccordionItem key={index} value={`item-${index}`}>
							<AccordionTrigger>{item.q}</AccordionTrigger>
							<AccordionContent>{item.a}</AccordionContent>
						</AccordionItem>
					))}
				</Accordion>

				<script
					type='application/ld+json'
					dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
				/>
			</div>
		</section>
	);
}
