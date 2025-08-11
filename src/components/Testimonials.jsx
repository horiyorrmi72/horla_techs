export function Testimonials() {
	const testimonials = [
		{
			name: '',
			role: '',
			quote:
				'HorlaTech completely transformed our online presence. The website is fast, modern, and user-friendly. Our conversions have doubled since launch!',
			image: '/images/testimonials/john.jpg',
		},
		{
			name: '',
			role: '',
			quote:
				'The team delivered exactly what we envisioned — and more! Their attention to detail and post-launch support is top-notch.',
			image: '/images/testimonials/okafor.jpg',
		},
		{
			name: '',
			role: '',
			quote:
				'From design to deployment, HorlaTech exceeded expectations. Communication was smooth, and deadlines were met without issues.',
			image: '/images/testimonials/david.jpg',
		},
	];

	return (
		<section className='py-20 bg-white'>
			<div className='container mx-auto px-4 max-w-5xl'>
				<h2 className='text-3xl md:text-4xl font-stretch-semi-condensed text-center mb-12'>
					What Our Clients Say
				</h2>

				<div className='grid md:grid-cols-3 gap-8'>
					{testimonials.map((t, index) => (
						<div
							key={index}
							className='bg-gray-50 p-6 rounded-lg shadow hover:shadow-lg transition-shadow'
						>
							<div className='flex items-center mb-4'>
								<img
									src={t.image}
									alt={t.name}
									className='w-12 h-12 rounded-full object-cover mr-4'
								/>
								<div>
									<h4 className='font-semibold'>{t.name}</h4>
									<p className='text-sm text-gray-500'>{t.role}</p>
								</div>
							</div>
							<p className='text-gray-700 italic'>"{t.quote}"</p>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
