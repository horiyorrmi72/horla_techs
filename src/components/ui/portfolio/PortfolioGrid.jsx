'use client';
import React, { useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import FilterTabs from './FilterTabs';
import { ProjectMat } from '@/components/work/Device';
import { projects } from '@/lib/projects';
import { cn } from '@/lib/utils';

const ease = [0.22, 1, 0.36, 1];
const pad = (n) => String(n).padStart(2, '0');

export default function PortfolioGrid() {
	const categories = useMemo(() => Array.from(new Set(projects.map((p) => p.category))), []);
	const [active, setActive] = useState('All');

	const filtered = useMemo(
		() => (active === 'All' ? projects : projects.filter((p) => p.category === active)),
		[active],
	);

	return (
		<>
			{/* Index of all work */}
			<div className='sticky top-16 z-20 -mx-6 border-b border-line bg-paper/85 px-6 py-4 backdrop-blur-xl md:-mx-10 md:px-10'>
				<div className='flex flex-wrap items-center justify-between gap-4'>
					<p className='font-mono text-xs uppercase tracking-[0.18em] text-ink-soft'>
						Showing {pad(filtered.length)} of {pad(projects.length)}
					</p>
					<FilterTabs categories={categories} active={active} onChange={setActive} />
				</div>
			</div>

			<ol className='mt-6'>
				<AnimatePresence mode='popLayout' initial={false}>
					{filtered.map((p, i) => (
						<motion.li
							key={p.id}
							layout
							initial={{ opacity: 0, y: 30 }}
							animate={{ opacity: 1, y: 0 }}
							exit={{ opacity: 0 }}
							transition={{ duration: 0.6, ease }}
						>
							<CaseStudy project={p} index={i} total={filtered.length} />
						</motion.li>
					))}
				</AnimatePresence>
			</ol>
		</>
	);
}

function CaseStudy({ project, index, total }) {
	const { slug, client, title, year, category, services, description, outcome } = project;
	const flip = index % 2 === 1;

	return (
		<motion.article
			id={slug}
			initial={{ opacity: 0, y: 40 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true, margin: '-100px' }}
			transition={{ duration: 0.9, ease }}
			className='group grid scroll-mt-36 gap-10 border-b border-line py-16 md:grid-cols-12 md:gap-12 md:py-24'
		>
			<div className={cn('md:col-span-7', flip && 'md:order-2')}>
				<ProjectMat
					project={project}
					className='aspect-[4/3] md:aspect-[5/4]'
					sizes='(max-width: 768px) 100vw, 55vw'
					priority={index === 0}
				/>
			</div>

			<div className={cn('flex flex-col md:col-span-5', flip && 'md:order-1')}>
				<p className='flex items-baseline justify-between font-mono text-xs text-ink-soft'>
					<span>
						<span className='text-signal'>{pad(index + 1)}</span> / {pad(total)}
					</span>
					<span className='uppercase tracking-[0.18em]'>{category}</span>
				</p>

				<p className='eyebrow mt-10'>{client}</p>
				<h2 className='display mt-4 text-3xl leading-[1.08] md:text-[2.6rem]'>{title}</h2>
				<p className='mt-6 text-lg leading-relaxed text-ink-soft'>{description}</p>

				{outcome && (
					<div className='mt-10 flex items-baseline gap-4 border-l-2 border-signal pl-5'>
						<span className='display text-5xl text-signal md:text-6xl'>{outcome.value}</span>
						<span className='max-w-[12rem] text-sm leading-snug text-ink-soft'>{outcome.label}</span>
					</div>
				)}

				<dl className='mt-auto grid grid-cols-2 gap-6 border-t border-line pt-6 text-sm max-md:mt-10 md:mt-12'>
					<div>
						<dt className='eyebrow'>Year</dt>
						<dd className='mt-2'>{year}</dd>
					</div>
					<div>
						<dt className='eyebrow'>What we did</dt>
						<dd className='mt-2 leading-relaxed'>{services.join(', ')}</dd>
					</div>
				</dl>
			</div>
		</motion.article>
	);
}
