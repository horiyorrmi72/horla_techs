import { Container, Reveal } from './site/primitives';

const facts = [
	{ value: 'iOS + Android', label: 'One app, built for the phones your customers actually use' },
	{ value: '1–4 wks', label: 'Usual time to launch a standard website' },
	{ value: '30 days', label: 'Of free support after launch, because things come up' },
	{ value: 'GMT+1', label: 'Our working day overlaps with the UK, Europe and the US' },
];

export function GlobalClients() {
	return (
		<section className='relative overflow-hidden bg-ink py-24 text-paper md:py-36'>
			{/* Concentric rings, a quiet nod to "worldwide" */}
			<div aria-hidden className='pointer-events-none absolute -right-40 top-1/2 -translate-y-1/2 md:-right-20'>
				{[640, 500, 360, 220].map((s) => (
					<span
						key={s}
						className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-paper/10'
						style={{ width: s, height: s }}
					/>
				))}
				<span className='absolute left-1/2 top-1/2 size-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-signal shadow-[0_0_40px_10px] shadow-signal/40' />
			</div>

			<Container className='relative'>
				<Reveal>
					<p className='eyebrow text-paper/50'>Remote-first, worldwide</p>
				</Reveal>
				<Reveal delay={0.08}>
					<h2 className='display mt-6 max-w-4xl text-4xl leading-[1.05] md:text-7xl'>
						Built in Lagos. <em className='text-signal'>Trusted</em> across
						time zones.
					</h2>
				</Reveal>
				<Reveal delay={0.16}>
					<p className='mt-8 max-w-2xl text-lg leading-relaxed text-paper/65'>
						Wherever you are, we’ll find a time to talk. We work remotely
						with clients in different countries and time zones, with regular
						calls, shared boards and honest progress updates from idea to
						launch.
					</p>
				</Reveal>

				<dl className='mt-20 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-paper/10 bg-paper/10 md:grid-cols-4'>
					{facts.map((f, i) => (
						<Reveal key={f.value} delay={i * 0.06} className='bg-ink p-6 md:p-8'>
							<dt className='display text-3xl md:text-4xl'>{f.value}</dt>
							<dd className='mt-3 text-sm leading-relaxed text-paper/55'>{f.label}</dd>
						</Reveal>
					))}
				</dl>
			</Container>
		</section>
	);
}
