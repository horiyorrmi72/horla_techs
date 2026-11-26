'use client';
import React from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { CtaLink, Container, Reveal } from './site/primitives';
import BlurText from './reactbits/BlurText';
import ScrollVelocity from './reactbits/ScrollVelocity';
import ScrollReveal from './reactbits/ScrollReveal';
import Magnet from './reactbits/Magnet';
import LagosTime from './site/LagosTime';
import { BrowserFrame, PhoneFrame } from './work/Device';
import { projects } from '@/lib/projects';

const ease = [0.22, 1, 0.36, 1];

const capabilities = [
	'Custom Software',
	'Web Platforms',
	'iOS & Android Apps',
	'CRM Systems',
	'AI Integration',
	'Backend Engineering',
	'Deployment & Hosting',
	'Copywriting & SEO',
];

export const MiniAboutUs = () => {
	return (
		<section className='py-24 md:py-36'>
			<Container className='grid gap-12 md:grid-cols-12'>
				<Reveal className='md:col-span-3'>
					<p className='eyebrow flex items-center gap-3'>
						<span className='h-px w-8 bg-signal' />
						The studio
					</p>
				</Reveal>
				<div className='md:col-span-9'>
					<ScrollReveal
						as='p'
						baseOpacity={0.12}
						baseRotation={0}
						blurStrength={3}
						containerClassName='my-0'
						textClassName='display text-3xl font-normal leading-[1.2] md:text-[2.75rem]'
						rotationEnd='center center'
						wordAnimationEnd='center center'
					>
						We’re a team of engineers and designers in Lagos. We build the software, websites and apps that businesses run on,  and we’re still picking up the phone long after launch.
					</ScrollReveal>
					<Reveal delay={0.1}>
						<p className='mt-10 max-w-2xl text-lg leading-relaxed text-ink-soft'>
							HorlaTechs is a brand under HorlaTechs Digital Innovation. We
							work with founders, NGOs and growing businesses at home and
							abroad, from first idea to the day-to-day running of the thing.
						</p>
					</Reveal>
					<Reveal delay={0.15} className='mt-10'>
						<CtaLink href='/about' variant='outline'>
							More about us
						</CtaLink>
					</Reveal>
				</div>
			</Container>
		</section>
	);
};

const bySlug = (slug) => projects.find((p) => p.slug === slug);
const crm = bySlug('acres-crm');
const ngo = bySlug('women-safe-house');

const LandingHero = () => {
	const reduce = useReducedMotion();
	const rise = (delay) => ({
		initial: reduce ? false : { opacity: 0, y: 40 },
		animate: { opacity: 1, y: 0 },
		transition: { duration: 1, delay, ease },
	});

	const headlineFx = {
		trigger: 'load',
		direction: 'bottom',
		blur: 12,
		distance: 30,
		stepDuration: 0.5,
		className: '',
	};

	return (
		<section id='hero' className='relative overflow-hidden pt-32 md:pt-40'>
			<div
				aria-hidden
				className='hairline-grid pointer-events-none absolute inset-0 [mask-image:radial-gradient(ellipse_at_70%_20%,black_10%,transparent_65%)]'
			/>

			<Container className='relative'>
				<motion.p {...rise(0)} className='eyebrow flex items-center gap-3'>
					<span className='relative flex size-2'>
						<span className='absolute inline-flex size-full animate-ping rounded-full bg-signal opacity-60' />
						<span className='relative inline-flex size-2 rounded-full bg-signal' />
					</span>
					Software studio · <LagosTime />
				</motion.p>

				<h1 className='display mt-8 text-[2.9rem] leading-[0.98] sm:text-6xl md:text-7xl lg:text-[6.25rem]'>
					<BlurText as='span' text='Software, web & mobile' delay={90} startDelay={100} {...headlineFx} />
					<span className='flex flex-wrap'>
						<BlurText as='span' text='products that ' delay={90} startDelay={420} {...headlineFx} />
						<BlurText
							as='em'
							text='grow'
							startDelay={640}
							{...headlineFx}
							className='font-light text-signal'
						/>
					</span>
					<BlurText as='span' text='your business.' delay={90} startDelay={820} {...headlineFx} />
				</h1>

				<div className='mt-12 grid gap-10 md:grid-cols-12 md:items-end'>
					<motion.p
						{...rise(0.36)}
						className='max-w-xl text-lg leading-relaxed text-ink-soft md:col-span-6'
					>
						Tell us what you’re trying to do. We’ll help you shape it, then
						design and build it properly: custom software, CRMs, websites and
						mobile apps. If you can think it, we can build it.
					</motion.p>
					<motion.div
						{...rise(0.44)}
						className='flex flex-wrap gap-3 md:col-span-6 md:justify-end'
					>
						<Magnet padding={60} magnetStrength={4}>
							<CtaLink href='/contact'>Start a project</CtaLink>
						</Magnet>
						<Magnet padding={60} magnetStrength={4}>
							<CtaLink href='/portfolio' variant='outline'>
								View our work
							</CtaLink>
						</Magnet>
					</motion.div>
				</div>

				{/* Work collage: real projects, framed and uncropped */}
				<motion.div
					initial={reduce ? false : { opacity: 0, y: 60 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 1.2, delay: 0.5, ease }}
					className='relative mt-20 overflow-hidden rounded-3xl bg-paper-deep px-5 pb-0 pt-8 md:px-14 md:pt-14'
				>
					<span
						aria-hidden
						className='absolute inset-0 bg-[radial-gradient(90%_70%_at_15%_0%,rgb(255_255_255/0.7),transparent_60%)]'
					/>
					<div className='relative'>
						<BrowserFrame
							src={crm.image}
							size={crm.size}
							alt={`${crm.client} - ${crm.title}`}
							label={crm.client}
							priority
							className='-mb-6 w-[82%] md:-mb-10 md:w-[78%]'
							sizes='(max-width: 768px) 82vw, 60vw'
						/>
						<div className='absolute right-0 top-[18%] w-[30%] md:right-[2%] md:top-[14%] md:w-[24%]'>
							<PhoneFrame
								src={ngo.image}
								size={ngo.size}
								alt={`${ngo.client} - ${ngo.title}`}
								priority
								sizes='(max-width: 768px) 30vw, 20vw'
							/>
						</div>
					</div>
				</motion.div>
			</Container>

			{/* Capabilities ticker - speeds up and skews with scroll velocity */}
			<div className='mt-20 border-y border-line py-6'>
				<ScrollVelocity
					texts={[capabilities.join('   ✦   ')]}
					separator='✦'
					velocity={40}
					numCopies={4}
					fadeEdges
					skewWithVelocity={6}
					gap={48}
					fontSize='clamp(1.5rem, 3vw, 2rem)'
					fontWeight={400}
					className='text-ink/80'
					scrollerStyle={{ fontFamily: 'var(--font-fraunces), serif', filter: 'none', letterSpacing: '-0.02em', fontVariationSettings: '"opsz" 144, "SOFT" 30' }}
				/>
			</div>
		</section>
	);
};

export default LandingHero;
