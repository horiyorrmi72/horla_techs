import Image from 'next/image';
import React from 'react';
import Link from 'next/link';

export default function ProjectCard({
	id,
	title,
	description,
	image,
	highlight,
	category,
	year,
	href = '#',
}) {
	return (
		<article
			id={id}
			className='group bg-white dark:bg-gray-900 rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow'
		>
			<Link
				href={href}
				className='block focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500'
			>
				<div className='relative h-44 md:h-56 w-full'>
					<Image
						src={image}
						alt={`${title} cover`}
						fill
						sizes='(max-width: 768px) 100vw, 33vw'
						className='object-cover group-hover:scale-105 transition-transform'
						priority={false}
					/>
					{/* {console.log('Image data:', image)} */}
				</div>

				<div className='p-4 md:p-5'>
					<div className='flex items-center justify-between'>
						<h3 className='text-lg font-semibold text-gray-900 dark:text-gray-100'>
							{title}
						</h3>
						{/* <span className='text-sm text-gray-500 dark:text-gray-400'>
							{year}
						</span> */}
					</div>

					<p className='mt-2 text-sm text-gray-600 dark:text-gray-300 line-clamp-7'>
						{description}
					</p>

					<div className='mt-3 flex items-center justify-between'>
						<span className='text-xs text-black font-medium'>{category}</span>
						{highlight && (
							<span className='text-xs text-gray-400'>{highlight}</span>
						)}
					</div>
				</div>
			</Link>
		</article>
	);
}
