import React from 'react';
import { Container, Reveal } from '@/components/site/primitives';

export default function Hero({
	eyebrow = 'Portfolio',
	title = 'Work that moves metrics and users',
	subtitle = 'Selected case studies combining product thinking, clean design and robust engineering.',
}) {
	return (
		<section className='relative overflow-hidden pb-12 pt-36 md:pb-16 md:pt-48'>
			<div
				aria-hidden
				className='hairline-grid pointer-events-none absolute inset-0 [mask-image:radial-gradient(ellipse_at_80%_10%,black_10%,transparent_60%)]'
			/>
			<Container className='relative grid gap-10 md:grid-cols-12 md:items-end'>
				<div className='md:col-span-8'>
					<Reveal>
						<p className='eyebrow'>{eyebrow}</p>
					</Reveal>
					<Reveal delay={0.08}>
						<h1 className='display mt-6 text-5xl leading-[1] md:text-[5.25rem]'>{title}</h1>
					</Reveal>
				</div>
				<Reveal delay={0.16} className='md:col-span-4'>
					<p className='text-lg leading-relaxed text-ink-soft'>{subtitle}</p>
				</Reveal>
			</Container>
		</section>
	);
}
