import React from 'react';

export default function Hero({
	eyebrow = 'Portfolio',
	title = 'Work that moves metrics and users',
	subtitle = 'Selected case studies combining product thinking, clean design and robust engineering.',
}) {
	return (
		<section className='pt-12 pb-8 md:pt-20 md:pb-12'>
			<div className='max-w-6xl mx-auto px-6'>
				<div className='flex flex-col md:flex-row md:items-center md:justify-between gap-8'>
					<div>
						<p className='text-sm font-medium text-black text-400'>{eyebrow}</p>
						<h1 className='mt-3 text-3xl md:text-4xl font-extrabold leading-tight tracking-tight text-gray-900 dark:text-gray-100'>
							{title}
						</h1>
						<p className='mt-4 text-gray-600 dark:text-gray-300 max-w-2xl'>
							{subtitle}
						</p>
					</div>

					<div className='flex gap-3'>
						<a
							href='/contact'
							className='inline-flex items-center justify-center rounded-md px-4 py-2 bg-black text-white font-medium shadow hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500'
						>
							Work with us today
						</a>
						<a
							href='/about'
							className='inline-flex items-center justify-center rounded-md px-4 py-2 border border-gray-200'
						>
							About HorlaTechs
						</a>
					</div>
				</div>
			</div>
		</section>
	);
}
