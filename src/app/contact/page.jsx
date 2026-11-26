import Contact from '@/components/Contact';

export const metadata = {
	title: 'Contact HorlaTechs | Start Your Software, Web or Mobile Project',
	description:
		'Get in touch with HorlaTechs in Lagos, Nigeria for custom software, web development, mobile apps, CRM and AI integration. Request a free consultation today.',
	openGraph: {
		title: 'Contact HorlaTechs',
		description: 'Tell us about your project and get a free consultation.',
		url: 'https://www.horlatechs.com/contact',
		siteName: 'HorlaTechs',
		locale: 'en_US',
		type: 'website',
	},
};

export default function ContactPage() {
	return <Contact />;
}
