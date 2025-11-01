export function Testimonials() {
	const testimonials = [
		{
			name: 'Ibrahim Agbesinga',
			role: '',
			quote:
				'HorlaTech completely transformed our online presence. The website is fast, modern, and user-friendly. Our conversions have doubled since launch!',
			image: '/images/testimonials/john.jpg',
		},
		{
			name: 'ODULATE JOSEPH',
			role: '',
			quote:
				'Horlatechs is an outstanding tech company that consistently delivers excellence.For anyone looking for a dependable and forward-thinking tech partner, Horlatechs is definitely a company you can trust.',
			image: '/images/testimonials/okafor.jpg',
		},
		{
			name: 'Yusbyte Technologies',
			role: '',
			quote:
				'The team delivered exactly what we envisioned — and more! Their attention to detail and post-launch support is top-notch.',
			image: '/images/testimonials/okafor.jpg',
		},
		{
			name: 'George Onunkwor',
			role: '',
			quote:
				'From design to deployment, HorlaTech exceeded expectations. Communication was smooth, and deadlines were met without issues.',
			image: '/images/testimonials/david.jpg',
		},
		{
			name: 'Azeez Ariyo',
			role: '',
			quote:
				'Working with horlatechs has been a fantastic experience. Their team truly understands both the technical and business side of software development. From planning to delivery, they were reliable, responsive, and incredibly professional. They don’t just build solutions, they help you bring your vision to life with innovation and precision. I highly recommend them to anyone looking for a trustworthy and talented tech partner.',
			image: '',
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
							<div className='flex items-center mb-4 rounded-full font-bold text-black bg-gradient-to-r from-white/50 to-black/30 w-15 h-15 text-center justify-center'>
								{t.name
									? t.name
											.split(' ')
											.map((n) => n.charAt(0).toUpperCase())
											.join('')
									: 'Client'}
								{/* <img
									src={t.image}
									alt={t.name}
									className='w-12 h-12 rounded-full object-cover mr-4'
								/> */}
								<div>
									{/* <h4 className='font-semibold'>{t.name}</h4> */}
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
