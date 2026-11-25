import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { ProjectMat } from '@/components/work/Device';
import { cn } from '@/lib/utils';

/** Compact project card used for the home page "Selected work" teaser. */
export default function ProjectCard({ project, large = false }) {
	const { slug, client, title, year, outcome } = project;
	return (
		<Link
			href={`/portfolio#${slug}`}
			className='group block rounded-2xl transition-transform active:scale-[0.99]'
		>
			<ProjectMat
				project={project}
				className={large ? 'aspect-[4/3] md:aspect-[2/1]' : 'aspect-[4/3]'}
				sizes={large ? '(max-width: 768px) 100vw, 80vw' : '(max-width: 768px) 100vw, 45vw'}
			/>
			<div className='mt-6 flex items-start justify-between gap-6'>
				<div>
					<p className='eyebrow'>
						{client} · {year}
					</p>
					<h3 className={cn('display mt-3 leading-tight', large ? 'text-3xl md:text-4xl' : 'text-2xl md:text-3xl')}>
						{title}
					</h3>
					{outcome && (
						<p className='mt-3 text-sm text-ink-soft'>
							<span className='font-medium text-signal'>{outcome.value}</span> {outcome.label}
						</p>
					)}
				</div>
				<span className='mt-1 flex size-11 shrink-0 items-center justify-center rounded-full border border-line transition-colors duration-300 group-hover:border-ink group-hover:bg-ink group-hover:text-paper'>
					<ArrowUpRight className='size-4' />
				</span>
			</div>
		</Link>
	);
}
