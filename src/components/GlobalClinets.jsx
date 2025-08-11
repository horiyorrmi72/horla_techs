import { Globe2 } from 'lucide-react';

export function GlobalClients() {
	return (
		<section className='py-20 bg-gray-50 text-center'>
			<div className='container mx-auto px-4'>
				<Globe2 className='w-12 h-12 mx-auto mb-4 text-primary' />
				<h2 className='text-3xl font-bold mb-4'>
					We Work with Clients Worldwide
				</h2>
				<p className='text-lg text-gray-600 max-w-2xl mx-auto'>
					No matter where you are, HorlaTech delivers{' '}
					<strong>custom software development</strong>,
					<strong> web solutions</strong>, and{' '}
					<strong>mobile app development</strong> to clients across different
					countries and time zones. Our remote-first approach ensures seamless
					collaboration from idea to launch.
				</p>
			</div>
		</section>
	);
}
