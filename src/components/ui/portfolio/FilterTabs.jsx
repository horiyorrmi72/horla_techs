'use client';
import React from 'react';

export default function FilterTabs({ categories, active, onChange }) {
	return (
		<div className='flex flex-wrap gap-3 items-center '>
			<button
				onClick={() => onChange('All')}
				className={`px-3 py-1.5 rounded-full text-sm font-medium  ${
					active === 'All'
						? 'bg-black text-white'
						: 'bg-gray-100 dark:bg-black text-gray-700 dark:text-gray-200'
				}`}
				aria-pressed={active === 'All'}
			>
				All
			</button>

			{categories.map((c) => (
				<button
					key={c}
					onClick={() => onChange(c)}
					className={`px-3 py-1.5 rounded-full text-sm font-medium ${
						active === c
							? 'bg-black text-white'
							: 'bg-gray-100 dark:bg-black text-gray-700 dark:text-gray-200'
					}`}
					aria-pressed={active === c}
				>
					{c}
				</button>
			))}
		</div>
	);
}
