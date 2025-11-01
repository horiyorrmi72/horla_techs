'use client';
import React, { useMemo, useState } from 'react';
import Hero from '@/components/ui/portfolio/Hero';
import FilterTabs from '@/components/ui/portfolio/FilterTabs';
import ProjectCard from '@/components/ui/portfolio/ProjectCard';
import Contact from '@/components/Contact';
import { projects as _projects } from '@/lib/projects';

export default function PortfolioPage() {
	const categories = useMemo(() => {
		const cats = Array.from(new Set(_projects.map((p) => p.category)));
		return cats;
	}, []);

	const [active, setActive] = useState('All');

	const filtered = useMemo(() => {
		if (active === 'All') return _projects;
		return _projects.filter((p) => p.category === active);
	}, [active]);

	return (
		<main>
			<Hero
				eyebrow='Selected Work'
				title='We design & build products that scale'
				subtitle='A curated selection of work across product,engineering. Each case includes the challenge, process, and tangible outcomes.'
			/>

			<section className='max-w-6xl mx-auto px-6 pb-12'>
				<div className='flex items-center justify-between mb-6'>
					<h2 className='text-xl md:text-2xl font-semibold text-gray-900 dark:text-gray-100'>
						Featured projects
					</h2>
					<FilterTabs
						categories={categories}
						active={active}
						onChange={setActive}
					/>
				</div>

				<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
					{filtered.map((p) => (
						<ProjectCard
							key={p.id}
							id={p.id}
							title={p.title}
							description={p.description}
							image={p.image}
							highlight={p.highlight}
							category={p.category}
							year={p.year}
							// href={`/work/${p.slug}`}
						/>
					))}
				</div>

				{/* <div className='mt-8 text-center'>
					<a
						href='/work'
						className='inline-flex items-center px-4 py-2 rounded-md border border-gray-200 dark:border-gray-700 text-sm font-medium'
					>
						View all case studies
					</a>
				</div> */}
			</section>
		</main>
	);
}
