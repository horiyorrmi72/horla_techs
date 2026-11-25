import { Container, Reveal } from './site/primitives';

/**
 * A short, signed letter from the studio. Plain words, no jargon.
 * Edit the signature below to the real name(s) you want to sign with.
 */
export function StudioNote() {
	return (
		<section className='py-24 md:py-36'>
			<Container>
				<Reveal className='relative mx-auto max-w-3xl'>
					<div className='relative rounded-[1.25rem] border border-line bg-card px-8 py-14 shadow-[0_40px_80px_-50px_rgb(30_20_10/0.35)] md:-rotate-[0.6deg] md:px-16 md:py-20'>
						{/* paper tape */}
						<span
							aria-hidden
							className='absolute -top-3 left-1/2 h-7 w-28 -translate-x-1/2 rotate-2 bg-signal-soft/80'
						/>
						<p className='eyebrow'>A note from us</p>

						<div className='display mt-8 space-y-6 text-2xl leading-[1.45] md:text-[1.7rem]'>
							<p>Hi there,</p>
							<p>
								We’re a team of engineers, designers and strategists in Lagos,
								and we love building things people actually use.
							</p>
							<p>
								When you work with us, you talk to the people building your
								product. We’ll explain things in plain language, give you honest
								timelines and prices, and tell you when there’s a simpler way.
							</p>
							<p>
								And when it goes live, we don’t disappear. Every launch comes with
								a month of support, and we’re one message away after that.
							</p>
						</div>

						<div className='mt-12 flex items-end justify-between gap-6'>
							<div>
								<p className='font-hand text-5xl leading-none text-signal md:text-6xl'>Horla &amp; team</p>
								<p className='mt-3 text-sm text-ink-soft'>HorlaTechs, Lagos</p>
							</div>
						</div>
					</div>
				</Reveal>
			</Container>
		</section>
	);
}
