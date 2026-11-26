import { projects } from '@/lib/projects';
import ProjectCard from './ui/portfolio/ProjectCard';
import { Container, CtaLink, Reveal, SectionHeading } from './site/primitives';

const featuredSlugs = ['acres-crm', 'bqueue', 'women-safe-house'];

/** Home-page teaser of selected portfolio work. */
export function CreativitySection() {
	const featured = featuredSlugs
		.map((slug) => projects.find((p) => p.slug === slug))
		.filter(Boolean);

	return (
		<section className='py-24 md:py-36'>
			<Container>
				<div className='flex flex-wrap items-end justify-between gap-8'>
					<SectionHeading
						index='03'
						eyebrow='Selected work'
						title={
							<>
								A few things we’re <em className='text-signal'>proud of.</em>
							</>
						}
					/>
					<Reveal>
						<CtaLink href='/portfolio' variant='outline'>
							View all work
						</CtaLink>
					</Reveal>
				</div>

				<div className='mt-16 grid gap-x-6 gap-y-14 md:grid-cols-2'>
					{featured.map((p, i) => (
						<Reveal
							key={p.id}
							delay={i * 0.08}
							className={i === 0 ? 'md:col-span-2' : ''}
						>
							<ProjectCard project={p} large={i === 0} />
						</Reveal>
					))}
				</div>
			</Container>
		</section>
	);
}
