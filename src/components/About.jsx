import { Card } from '@/components/ui/card';
import { Users, Flag, Lightbulb } from 'lucide-react';

export default function About() {
	return (
		<main className='mt-10 max-w-5xl mx-auto px-6 py-16'>
			<h1 className='text-4xl font-stretch-semi-condensed mb-8 text-center'>
				About Us
			</h1>

			<section className='mb-14 text-center max-w-3xl mx-auto text-gray-700'>
				<p className='mb-4'>
					HorlaTechs is a leading software development company based in Lagos,
					Nigeria, dedicated to delivering innovative digital solutions tailored
					to your business needs. Our mission is to empower businesses by
					combining cutting-edge technology with creative expertise.
				</p>
				<p>
					We specialize in custom software, mobile and web development, AI
					integration, and digital marketing services designed to accelerate
					growth and drive operational efficiency.
				</p>
			</section>

			<div className='grid gap-8 grid-cols-1 sm:grid-cols-3 mb-14'>
				<Card className='p-6 text-center'>
					<Flag className='mx-auto mb-4 w-10 h-10 text-primary' />
					<h2 className='text-xl font-semibold mb-2'>Our Mission</h2>
					<p className='text-muted-foreground'>
						To deliver secure, scalable, and innovative digital solutions that
						help businesses succeed in a rapidly evolving technology landscape.
					</p>
				</Card>

				<Card className='p-6 text-center'>
					<Lightbulb className='mx-auto mb-4 w-10 h-10 text-primary' />
					<h2 className='text-xl font-semibold mb-2'>Our Vision</h2>
					<p className='text-muted-foreground'>
						To be a trusted technology partner for businesses worldwide, driving
						digital transformation with passion and excellence.
					</p>
				</Card>

				<Card className='p-6 text-center'>
					<Users className='mx-auto mb-4 w-10 h-10 text-primary' />
					<h2 className='text-xl font-semibold mb-2'>Our Team</h2>
					<p className='text-muted-foreground'>
						A diverse group of skilled developers, and strategists committed to
						delivering top-quality services and innovative solutions.
					</p>
				</Card>
			</div>

			<section className='text-center bg-primary/10 rounded-lg py-10 px-6 max-w-xxl mx-auto'>
				<h2 className='text-3xl font-bold mb-4 text-primary'>
					Ready to elevate your business with us?
				</h2>
				<p className='mb-6 text-gray-700'>
					Contact us today to discuss your project or request a free
					consultation.
				</p>
				<a
					href='/contact'
					className='inline-block bg-primary text-white px-6 py-3 rounded-md font-semibold hover:bg-primary-dark transition'
				>
					Get in Touch
				</a>
			</section>
		</main>
	);
}
