import Image from 'next/image';
import { cn } from '@/lib/utils';

/** Minimal browser window around a desktop screenshot, shown uncropped. */
export function BrowserFrame({ src, size, alt, label, className, sizes, priority }) {
	return (
		<div
			className={cn(
				'overflow-hidden rounded-[10px] bg-card shadow-[0_1px_0_rgb(0_0_0/0.04),0_30px_60px_-30px_rgb(30_20_10/0.35)] ring-1 ring-ink/10',
				className,
			)}
		>
			<div className='flex items-center gap-3 border-b border-line bg-paper px-3.5 py-2.5'>
				<span className='flex gap-1.5' aria-hidden>
					<span className='size-2.5 rounded-full bg-ink/15' />
					<span className='size-2.5 rounded-full bg-ink/15' />
					<span className='size-2.5 rounded-full bg-ink/15' />
				</span>
				{label && (
					<span className='mx-auto max-w-[60%] truncate rounded-md bg-paper-deep px-3 py-0.5 text-center font-mono text-[0.62rem] tracking-wide text-ink-soft'>
						{label}
					</span>
				)}
				<span className='w-[42px]' aria-hidden />
			</div>
			<Image
				src={src}
				alt={alt}
				width={size[0]}
				height={size[1]}
				sizes={sizes ?? '(max-width: 768px) 100vw, 60vw'}
				priority={priority}
				className='block h-auto w-full'
			/>
		</div>
	);
}

/** Slim phone bezel around a mobile screenshot, shown uncropped. */
export function PhoneFrame({ src, size, alt, className, sizes, priority }) {
	return (
		<div
			className={cn(
				'rounded-[2rem] bg-ink p-[7px] shadow-[0_40px_70px_-30px_rgb(30_20_10/0.45)] ring-1 ring-ink/20',
				className,
			)}
		>
			<div className='relative overflow-hidden rounded-[1.6rem] bg-card'>
				<Image
					src={src}
					alt={alt}
					width={size[0]}
					height={size[1]}
					sizes={sizes ?? '280px'}
					priority={priority}
					className='block h-auto w-full'
				/>
			</div>
		</div>
	);
}

/**
 * A coloured mat that presents a project screenshot in the right frame.
 * Phone shots stay narrow and centred; desktop shots fill the width.
 */
export function ProjectMat({ project, className, priority, sizes }) {
	const { image, size, device, tone, client, title } = project;
	const alt = `${client} — ${title}`;
	const phone = device === 'phone';

	return (
		<div
			className={cn(
				'relative isolate flex items-center justify-center overflow-hidden rounded-2xl',
				phone ? 'px-8 pt-12 md:px-16 md:pt-16' : 'p-6 md:p-12',
				className,
			)}
			style={{ backgroundColor: tone }}
		>
			{/* Soft light from the top-left, so the mat reads as a surface, not a flat fill */}
			<span
				aria-hidden
				className='absolute inset-0 -z-10 bg-[radial-gradient(120%_80%_at_0%_0%,rgb(255_255_255/0.55),transparent_60%)]'
			/>
			<div
				className={cn(
					'transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:-translate-y-1.5',
					phone ? 'w-[58%] max-w-[260px] self-start md:w-[44%]' : 'w-full max-w-[86%]',
				)}
			>
				{phone ? (
					<PhoneFrame src={image} size={size} alt={alt} sizes={sizes} priority={priority} />
				) : (
					<BrowserFrame src={image} size={size} alt={alt} label={client} sizes={sizes} priority={priority} />
				)}
			</div>
		</div>
	);
}
