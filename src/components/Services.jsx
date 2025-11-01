import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Monitor, Smartphone, Cpu, Pen, Share2, Code } from 'lucide-react';

const services = [
	{
		icon: Monitor,
		title: 'Web Development',
		desc: 'We build fast, responsive, and high-performance websites using modern web technologies to deliver seamless, user-focused experiences.',
	},
	{
		icon: Smartphone,
		title: 'Mobile App Development',
		desc: 'From concept to launch, we create powerful, user-friendly mobile applications for iOS and Android that engage and retain users.',
	},
	{
		icon: Cpu,
		title: 'AI Integration',
		desc: 'Enhance your business with cutting-edge AI features, from process automation to predictive analytics seamlessly built into your systems.',
	},
	{
		icon: Pen,
		title: 'Copywriting',
		desc: 'Our creative team delivers compelling, SEO-optimized copy that connects with your audience and drives action across digital platforms.',
	},
	{
		icon: Share2,
		title: 'Social Media Management',
		desc: 'We manage your social presence with engaging content, targeted campaigns, and analytics-driven growth strategies.',
	},
	{
		icon: Code,
		title: 'Custom Software Development',
		desc: 'Have a great idea? Share your vision with us and we’ll design, develop, and deliver a tailored software solution that meets your exact needs.',
	},
];

export function MiniServices() {
	return (
		<section className='py-16 bg-white'>
			<div className='container mx-auto text-center px-4'>
				<h2 className='text-3xl font-stretch-semi-condensed mb-12'>
					Our Services
				</h2>
				<div className='grid md:grid-cols-3 gap-8'>
					{services.map((service, i) => (
						<Card
							key={i}
							className='p-6 hover:shadow-lg transition-shadow duration-300'
						>
							<CardHeader>
								<service.icon className='w-10 h-10 mb-4 text-primary mx-auto' />
								<CardTitle>{service.title}</CardTitle>
							</CardHeader>
							<CardContent>
								<p className='text-gray-600'>{service.desc}</p>
							</CardContent>
						</Card>
					))}
				</div>
			</div>
		</section>
	);
}

const Services = () => {
	return (
		<div className=''>
			<p className='mb-4 text-center max-w-3xl mx-auto text-gray-700'>
				At HorlaTechs, we specialize in delivering cutting-edge digital
				solutions tailored to help your business thrive in today’s competitive
				market. From custom software development to AI integration, our expert
				team crafts innovative tools that streamline operations, enhance
				customer engagement, and drive growth.
			</p>
			<MiniServices />

			<p className='mt-6 text-center max-w-3xl mx-auto text-gray-700'>
				Whether you need a robust web platform, a sleek mobile app, or a
				comprehensive digital marketing strategy, HorlaTechs offers scalable and
				secure solutions designed to elevate your brand. Partner with us to
				harness the power of technology and take your business to the next
				level.
			</p>
		</div>
	);
};

export default Services;
