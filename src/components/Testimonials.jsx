import { Container, Reveal, SectionHeading, Spotlight } from './site/primitives';

const testimonials = [
	{
		name: 'Azeez Ariyo',
		quote:
			'Working with HorlaTechs has been a fantastic experience. Their team truly understands both the technical and business side of software development. From planning to delivery, they were reliable, responsive, and incredibly professional. They don’t just build solutions, they help you bring your vision to life with innovation and precision.',
	},
	{
		name: 'Ibrahim Agbesinga',
		quote:
			'HorlaTechs completely transformed our online presence. The website is fast, modern, and user-friendly. Our conversions have doubled since launch!',
	},
	{
		name: 'Odulate Joseph',
		quote:
			'HorlaTechs is an outstanding tech company that consistently delivers excellence. For anyone looking for a dependable and forward-thinking tech partner, HorlaTechs is definitely a company you can trust.',
	},
	{
		name: 'Yusbyte Technologies',
		quote:
			'The team delivered exactly what we envisioned and more! Their attention to detail and post-launch support is top-notch.',
	},
	{
		name: 'George Onunkwor',
		quote:
			'From design to deployment, HorlaTechs exceeded expectations. Communication was smooth, and deadlines were met without issues.',
	},
];

const initials = (name) =>
	name
		.split(' ')
		.map((n) => n.charAt(0).toUpperCase())
		.slice(0, 2)
		.join('');

function Author({ name }) {
	return (
		<figcaption className='mt-8 flex items-center gap-3'>
			<span className='flex size-10 items-center justify-center rounded-full bg-ink font-mono text-xs text-paper'>
				{initials(name)}
			</span>
			<span className='text-sm font-medium'>{name}</span>
		</figcaption>
	);
}

export function Testimonials() {
	const [lead, ...rest] = testimonials;
	return (
		<section className='py-24 md:py-36'>
			<Container>
				<SectionHeading
					index='05'
					eyebrow='Client voices'
					title={
						<>
							Kind words from the people <em className='text-signal'>we build for.</em>
						</>
					}
				/>

				<Reveal className='mt-16'>
					<figure className='relative rounded-2xl bg-paper-deep/70 p-8 md:p-16'>
						<span aria-hidden className='display absolute -top-4 left-6 text-[9rem] leading-none text-signal md:left-12'>
							“
						</span>
						<blockquote className='display relative text-2xl leading-snug md:text-4xl'>
							{lead.quote}
						</blockquote>
						<Author name={lead.name} />
					</figure>
				</Reveal>

				<div className='mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-4'>
					{rest.map((t, i) => (
						<Reveal key={t.name} delay={i * 0.06} className='h-full'>
							<Spotlight className='h-full p-7'>
								<figure className='flex h-full flex-col justify-between'>
									<blockquote className='leading-relaxed text-ink/85'>“{t.quote}”</blockquote>
									<Author name={t.name} />
								</figure>
							</Spotlight>
						</Reveal>
					))}
				</div>
			</Container>
		</section>
	);
}
