'use client';
import React from 'react';
import { cn } from '@/lib/utils';

export default function FilterTabs({ categories, active, onChange }) {
	return (
		<div role='group' aria-label='Filter projects' className='flex flex-wrap items-center gap-2'>
			{['All', ...categories].map((c) => (
				<button
					key={c}
					onClick={() => onChange(c)}
					aria-pressed={active === c}
					className={cn(
						'rounded-full border px-4 py-2 text-sm transition-colors duration-300',
						active === c
							? 'border-ink bg-ink text-paper'
							: 'border-ink/15 text-ink-soft hover:border-ink/50 hover:text-ink',
					)}
				>
					{c}
				</button>
			))}
		</div>
	);
}
