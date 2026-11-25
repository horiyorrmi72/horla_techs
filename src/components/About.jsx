import { Container, CtaLink, Reveal, SectionHeading } from './site/primitives';
import { Process } from './Services';

const pillars = [
	{
		title: 'Our Mission',
		body: 'To deliver secure, scalable and innovative digital solutions that help businesses succeed in a rapidly evolving technology landscape.',
	},
	{
		title: 'Our Vision',
		body: 'To be a trusted technology partner for businesses worldwide, driving digital transformation with passion and excellence.',
	},
	{
		title: 'Our Team',
		body: 'Developers, designers and strategists who like hard problems, plain language and finishing what we start.',
	},
];

const stack = ['Next.js', 'React', 'Angular', 'Node.js', 'NestJS', 'Python', 'Django', 'Flask', 'Tailwind CSS', 'AI / LLMs'];

export default function About() {
	return (
		<>
			<section className='relative overflow-hidden pb-24 pt-36 md:pb-32 md:pt-48'>
				<div
					aria-hidden
					className='hairline-grid pointer-events-none absolute inset-0 [mask-image:radial-gradient(ellipse_at_80%_10%,black_10%,transparent_60%)]'
				/>
				<Container className='relative'>
					<Reveal>
						<p className='eyebrow'>About HorlaTechs</p>
					</Reveal>
					<Reveal delay={0.08}>
						<h1 className='display mt-6 max-w-5xl text-5xl leading-[1] md:text-[5.5rem]'>
							A small studio with a <em className='text-signal'>big</em> standard for craft.
						</h1>
					</Reveal>

					<div className='mt-16 grid gap-10 md:grid-cols-12'>
						<Reveal delay={0.12} className='md:col-span-5 md:col-start-6'>
							<p className='text-lg leading-relaxed'>
								HorlaTechs is a software studio in Lagos, Nigeria. We build
								custom software, websites and mobile apps for businesses and
								organisations that want something made properly, by people
								who care how it turns out.
							</p>
						</Reveal>
						<Reveal delay={0.18} className='md:col-span-2 md:col-start-11'>
							<p className='leading-relaxed text-ink-soft'>
								We also help with AI, copywriting and social media, so the
								product and the story around it fit together.
							</p>
						</Reveal>
					</div>
				</Container>
			</section>

			<section className='border-t border-line'>
				<Container className='grid md:grid-cols-3'>
					{pillars.map((p, i) => (
						<Reveal
							key={p.title}
							delay={i * 0.08}
							className='border-b border-line py-12 md:border-b-0 md:border-r md:px-10 md:py-16 md:first:pl-0 md:last:border-r-0'
						>
							<span className='font-mono text-xs text-signal'>0{i + 1}</span>
							<h2 className='display mt-6 text-3xl'>{p.title}</h2>
							<p className='mt-4 leading-relaxed text-ink-soft'>{p.body}</p>
						</Reveal>
					))}
				</Container>
			</section>

			<section className='bg-paper-deep/60 py-24 md:py-32'>
				<Container className='grid gap-12 md:grid-cols-12 md:items-end'>
					<div className='md:col-span-5'>
						<SectionHeading eyebrow='Our toolkit' title='Modern, proven technology.' />
					</div>
					<Reveal delay={0.1} className='md:col-span-7'>
						<ul className='flex flex-wrap gap-2.5'>
							{stack.map((t) => (
								<li
									key={t}
									className='rounded-full border border-ink/15 bg-paper px-4 py-2 text-sm'
								>
									{t}
								</li>
							))}
						</ul>
					</Reveal>
				</Container>
			</section>

			<Process index='—' />

			<section className='pb-24 md:pb-32'>
				<Container>
					<Reveal className='flex flex-col items-start justify-between gap-8 rounded-2xl bg-signal p-10 text-paper md:flex-row md:items-center md:p-16'>
						<div>
							<h2 className='display text-4xl leading-tight md:text-5xl'>
								Ready to elevate your business?
							</h2>
							<p className='mt-4 text-paper/80'>
								Tell us about your project and get a free consultation.
							</p>
						</div>
						<CtaLink href='/contact' variant='solid' className='bg-paper text-ink hover:bg-ink hover:text-paper'>
							Get in touch
						</CtaLink>
					</Reveal>
				</Container>
			</section>
		</>
	);
}
