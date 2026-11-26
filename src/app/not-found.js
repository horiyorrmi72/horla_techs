import { Container, CtaLink } from '@/components/site/primitives';

export default function NotFound() {
	return (
		<section className='relative flex min-h-[85vh] items-center overflow-hidden pb-20 pt-36'>
			<div
				aria-hidden
				className='hairline-grid pointer-events-none absolute inset-0 [mask-image:radial-gradient(ellipse_at_center,black_10%,transparent_65%)]'
			/>
			<Container className='relative'>
				<p className='eyebrow'>Error 404</p>
				<h1 className='display mt-6 text-[7rem] leading-none md:text-[14rem]'>
					4<em className='text-signal'>0</em>4
				</h1>
				<p className='display mt-4 text-3xl md:text-4xl'>This page has wandered off.</p>
				<p className='mt-4 max-w-md text-ink-soft'>
					The page you’re looking for may have been moved, renamed or is
					temporarily unavailable.
				</p>
				<div className='mt-10 flex flex-wrap gap-3'>
					<CtaLink href='/'>Back to home</CtaLink>
					<CtaLink href='/contact' variant='outline'>
						Contact us
					</CtaLink>
				</div>
			</Container>
		</section>
	);
}
