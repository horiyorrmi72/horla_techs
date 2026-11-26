import Link from 'next/link';
import { ArrowUpRight, Check } from 'lucide-react';
import { services, process } from '@/lib/site';
import { Container, CtaLink, Reveal, SectionHeading, Spotlight } from './site/primitives';

/** Compact, numbered service index used on the home page. */
export function MiniServices() {
	return (
		<section className='bg-paper-deep/60 py-24 md:py-36'>
			<Container>
				<div className='flex flex-wrap items-end justify-between gap-8'>
					<SectionHeading
						index='02'
						eyebrow='What we do'
						title={
							<>
								End-to-end digital products, <em className='text-signal'>built properly.</em>
							</>
						}
					/>
					<Reveal>
						<CtaLink href='/services' variant='outline'>
							All services
						</CtaLink>
					</Reveal>
				</div>

				<ul className='mt-16 border-t border-line'>
					{services.map((s, i) => (
						<Reveal as='li' key={s.id} delay={i * 0.04} className='border-b border-line'>
							<Link
								href={`/services#${s.id}`}
								className='group grid grid-cols-12 items-baseline gap-4 py-8 transition-colors md:py-10'
							>
								<h3 className='display col-span-12 text-2xl transition-transform duration-500 group-hover:translate-x-2 md:col-span-6 md:text-4xl'>
									{s.title}
								</h3>
								<p className='col-span-12 text-ink-soft md:col-span-5'>
									{s.short}
								</p>
								<span className='hidden justify-end md:col-span-1 md:flex'>
									<span className='flex size-11 items-center justify-center rounded-full border border-line transition-all duration-300 group-hover:border-signal group-hover:bg-signal group-hover:text-paper'>
										<ArrowUpRight className='size-4' />
									</span>
								</span>
							</Link>
						</Reveal>
					))}
				</ul>
			</Container>
		</section>
	);
}

/** Shared "how we work" timeline. */
export function Process({ index = '04' }) {
	return (
		<section className='py-24 md:py-36'>
			<Container>
				<SectionHeading
					index={index}
					eyebrow='How we work'
					title={
						<>
							Where creativity meets strategy &amp; <em className='text-signal'>engineering.</em>
						</>
					}
					intro='A clear, collaborative process that keeps you in the loop from the first call to long after launch, so solutions are strategically sound, secure and future-ready.'
				/>
				<ol className='mt-20 grid gap-px overflow-hidden rounded-2xl border border-line bg-line md:grid-cols-4'>
					{process.map((step, i) => (
						<Reveal as='li' key={step.title} delay={i * 0.08} className='bg-paper'>
							<Spotlight
								className='h-full rounded-none p-8 md:p-10'
								style={{ '--spotlight-card-border': 'transparent' }}
							>
								<span className='block h-px w-10 bg-signal' aria-hidden />
								<h3 className='display mt-8 text-3xl'>{step.title}</h3>
								<p className='mt-3 leading-relaxed text-ink-soft'>{step.desc}</p>
							</Spotlight>
						</Reveal>
					))}
				</ol>
			</Container>
		</section>
	);
}

const Services = () => {
	return (
		<>
			<section className='relative overflow-hidden pb-20 pt-36 md:pb-28 md:pt-48'>
				<div
					aria-hidden
					className='hairline-grid pointer-events-none absolute inset-0 [mask-image:radial-gradient(ellipse_at_80%_10%,black_10%,transparent_60%)]'
				/>
				<Container className='relative grid gap-12 md:grid-cols-12 md:items-end'>
					<div className='md:col-span-8'>
						<Reveal>
							<p className='eyebrow'>Services</p>
						</Reveal>
						<Reveal delay={0.08}>
							<h1 className='display mt-6 text-5xl leading-[1] md:text-[5.5rem]'>
								Everything you need to <em className='text-signal'>ship</em> and grow.
							</h1>
						</Reveal>
					</div>
					<Reveal delay={0.16} className='md:col-span-4'>
						<p className='text-lg leading-relaxed text-ink-soft'>
							From custom software development to AI integration, we craft
							tools that streamline operations, enhance customer engagement
							and drive growth.
						</p>
					</Reveal>
				</Container>
			</section>

			<section className='pb-24'>
				<Container>
					{services.map((s, i) => (
						<article
							key={s.id}
							id={s.id}
							className='grid scroll-mt-28 gap-8 border-t border-line py-14 md:grid-cols-12 md:py-20'
						>
							<Reveal className='md:col-span-6'>
								<h2 className='display text-4xl leading-tight md:text-5xl'>{s.title}</h2>
								<p className='mt-3 text-ink-soft'>{s.short}</p>
							</Reveal>
							<Reveal delay={0.1} className='md:col-span-6'>
								<p className='text-lg leading-relaxed'>{s.desc}</p>
								<ul className='mt-8 grid gap-3 sm:grid-cols-2'>
									{s.points.map((p) => (
										<li key={p} className='flex items-start gap-3 text-sm text-ink-soft'>
											<Check className='mt-0.5 size-4 shrink-0 text-signal' />
											{p}
										</li>
									))}
								</ul>
							</Reveal>
						</article>
					))}
				</Container>
			</section>

			<div className='bg-paper-deep/60'>
				<Process index='—' />
			</div>

			<section className='py-24 md:py-32'>
				<Container className='text-center'>
					<Reveal>
						<p className='display mx-auto max-w-3xl text-3xl leading-snug md:text-5xl'>
							Whether you need a robust web platform, a sleek mobile app or a
							complete digital strategy, we’re ready when you are.
						</p>
					</Reveal>
					<Reveal delay={0.1} className='mt-10 flex justify-center gap-3'>
						<CtaLink href='/contact'>Get a quote</CtaLink>
						<CtaLink href='/portfolio' variant='outline'>
							See our work
						</CtaLink>
					</Reveal>
				</Container>
			</section>
		</>
	);
};

export default Services;
