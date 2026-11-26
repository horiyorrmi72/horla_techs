'use client';
import Link from 'next/link';
import { motion, useReducedMotion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import SpotlightCard from '@/components/reactbits/SpotlightCard';

/** React Bits SpotlightCard tuned to the paper/ink palette with a warm signal glow. */
export function Spotlight({ className, style, children, ...props }) {
	return (
		<SpotlightCard
			theme='light'
			spotlightColor='oklch(0.58 0.215 27)'
			intensity={0.12}
			spotlightSize={320}
			borderGlow={0.8}
			className={cn('rounded-2xl', className)}
			style={{
				'--spotlight-card-surface': 'var(--paper)',
				'--spotlight-card-border': 'var(--line)',
				'--spotlight-card-shadow': 'none',
				...style,
			}}
			{...props}
		>
			{children}
		</SpotlightCard>
	);
}

/** Fades and lifts its children into view once, when scrolled to. */
export function Reveal({ children, delay = 0, className, as = 'div', y = 24 }) {
	const reduce = useReducedMotion();
	const Comp = motion[as] ?? motion.div;
	return (
		<Comp
			className={className}
			initial={reduce ? false : { opacity: 0, y }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true, margin: '-80px' }}
			transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }}
		>
			{children}
		</Comp>
	);
}

/** Numbered eyebrow + serif heading used to open each section. */
export function SectionHeading({
	index,
	eyebrow,
	title,
	intro,
	className,
	align = 'left',
	tone = 'light',
}) {
	const dark = tone === 'dark';
	return (
		<div
			className={cn(
				'max-w-3xl',
				align === 'center' && 'mx-auto text-center',
				className,
			)}
		>
			<Reveal>
				<p className={cn('eyebrow flex items-center gap-3', align === 'center' && 'justify-center', dark && 'text-paper/60')}>
					<span className='h-px w-8 bg-signal' />
					{eyebrow}
				</p>
			</Reveal>
			<Reveal delay={0.08}>
				<h2 className='display mt-5 text-4xl leading-[1.05] md:text-[3.4rem]'>
					{title}
				</h2>
			</Reveal>
			{intro && (
				<Reveal delay={0.16}>
					<p className={cn('mt-6 text-lg leading-relaxed', dark ? 'text-paper/70' : 'text-ink-soft')}>
						{intro}
					</p>
				</Reveal>
			)}
		</div>
	);
}

/** Pill-shaped call-to-action link. */
export function CtaLink({ href, children, variant = 'solid', className, arrow = true, ...props }) {
	const styles = {
		solid: 'bg-ink text-paper hover:bg-signal',
		signal: 'bg-signal text-paper hover:bg-paper hover:text-ink',
		outline: 'border border-ink/20 text-ink hover:border-ink hover:bg-ink hover:text-paper',
		ghostLight: 'border border-paper/25 text-paper hover:bg-paper hover:text-ink',
	};
	return (
		<Link
			href={href}
			className={cn(
				'group inline-flex h-12 items-center gap-2 rounded-full px-6 text-sm font-medium tracking-wide transition-[color,background-color,border-color,transform] duration-300 active:scale-[0.97] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-signal',
				styles[variant],
				className,
			)}
			{...props}
		>
			{children}
			{arrow && (
				<ArrowUpRight className='size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5' />
			)}
		</Link>
	);
}

export function Container({ className, children }) {
	return <div className={cn('mx-auto w-full max-w-7xl px-6 md:px-10', className)}>{children}</div>;
}
