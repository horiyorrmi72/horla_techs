'use client';
import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { AnimatePresence, MotionConfig, motion } from 'motion/react';
import { ArrowUpRight, MessageCircle, Phone } from 'lucide-react';
import logo from '../../public/horlatechs_logo-rmbg.png';
import { cn } from '@/lib/utils';
import { contact } from '@/lib/site';
import LagosTime from './site/LagosTime';

const links = [
	{ href: '/', label: 'Home', hint: 'Start here' },
	{ href: '/services', label: 'Services', hint: 'What we build' },
	{ href: '/portfolio', label: 'Work', hint: 'Projects we’re proud of' },
	{ href: '/about', label: 'About', hint: 'Who we are' },
	{ href: '/contact', label: 'Contact', hint: 'Say hello' },
];

const ease = [0.22, 1, 0.36, 1];

const NavBar = () => {
	const [menuOpen, setMenuOpen] = useState(false);
	const [scrolled, setScrolled] = useState(false);
	const pathname = usePathname();

	useEffect(() => {
		const onScroll = () => setScrolled(window.scrollY > 12);
		onScroll();
		window.addEventListener('scroll', onScroll, { passive: true });
		return () => window.removeEventListener('scroll', onScroll);
	}, []);

	// Close on route change; close if the window grows to desktop width.
	useEffect(() => setMenuOpen(false), [pathname]);
	useEffect(() => {
		const mq = window.matchMedia('(min-width: 768px)');
		const onChange = (e) => e.matches && setMenuOpen(false);
		mq.addEventListener('change', onChange);
		return () => mq.removeEventListener('change', onChange);
	}, []);

	const isActive = (href) => (href === '/' ? pathname === '/' : pathname?.startsWith(href));

	return (
		<>
			<header
				className={cn(
					'fixed inset-x-0 top-0 z-50 transition-[background-color,border-color,backdrop-filter] duration-500',
					menuOpen
						? 'border-b border-transparent bg-transparent'
						: scrolled
							? 'border-b border-line bg-paper/85 backdrop-blur-xl'
							: 'border-b border-transparent bg-transparent',
				)}
			>
				<a
					href='#main'
					className='sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:rounded-full focus:bg-ink focus:px-4 focus:py-2 focus:text-paper'
				>
					Skip to content
				</a>
				<div
					className={cn(
						'mx-auto flex max-w-7xl items-center justify-between px-6 transition-[height] duration-500 md:px-10',
						scrolled && !menuOpen ? 'h-16' : 'h-20',
					)}
				>
					<Link href='/' className='flex items-center gap-2.5' aria-label='HorlaTechs home'>
						<Image src={logo} width={30} height={36} alt='' className='object-contain' priority />
						<span className='display text-xl font-medium tracking-tight'>HorlaTechs</span>
					</Link>

					<nav className='hidden md:block' aria-label='Primary'>
						<ul className='flex items-center gap-9 text-sm'>
							{links.map((l) => (
								<li key={l.href}>
									<Link
										href={l.href}
										aria-current={isActive(l.href) ? 'page' : undefined}
										className={cn(
											'link-underline pb-0.5 transition-colors',
											isActive(l.href) ? 'text-ink' : 'text-ink-soft hover:text-ink',
										)}
									>
										{l.label}
									</Link>
								</li>
							))}
						</ul>
					</nav>

					<Link
						href='/contact'
						className='group hidden h-10 items-center gap-1.5 rounded-full bg-ink px-5 text-sm font-medium text-paper transition-colors duration-300 hover:bg-signal md:inline-flex'
					>
						Start a project
						<ArrowUpRight className='size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5' />
					</Link>

					{/* Mobile toggle */}
					<button
						onClick={() => setMenuOpen((p) => !p)}
						className={cn(
							'relative flex size-11 items-center justify-center rounded-full border transition-colors duration-300 active:scale-95 md:hidden',
							menuOpen ? 'border-ink bg-ink text-paper' : 'border-line bg-paper/70 backdrop-blur',
						)}
						aria-label={menuOpen ? 'Close menu' : 'Open menu'}
						aria-expanded={menuOpen}
						aria-controls='mobile-menu'
						id='menu-toggle'
					>
						<span className='relative flex size-4 items-center justify-center' aria-hidden>
							<span
								className={cn(
									'absolute h-[1.5px] w-4 rounded-full bg-current transition-transform duration-300',
									menuOpen ? 'rotate-45' : '-translate-y-[3px]',
								)}
							/>
							<span
								className={cn(
									'absolute h-[1.5px] w-4 rounded-full bg-current transition-transform duration-300',
									menuOpen ? '-rotate-45' : 'translate-y-[3px]',
								)}
							/>
						</span>
					</button>
				</div>
			</header>

			{/* Rendered outside <header>: its backdrop-filter would otherwise trap this fixed overlay. */}
			<MobileMenu
				open={menuOpen}
				onClose={() => setMenuOpen(false)}
				isActive={isActive}
			/>
		</>
	);
};

function MobileMenu({ open, onClose, isActive }) {
	const panelRef = useRef(null);

	// Lock page scroll, close on Escape, and keep keyboard focus inside the menu.
	useEffect(() => {
		if (!open) return;
		const prev = document.body.style.overflow;
		document.body.style.overflow = 'hidden';
		const first = panelRef.current?.querySelector('a');
		first?.focus({ preventScroll: true });

		const onKey = (e) => {
			if (e.key === 'Escape') onClose();
			if (e.key !== 'Tab' || !panelRef.current) return;
			const toggle = document.getElementById('menu-toggle');
			const items = [toggle, ...panelRef.current.querySelectorAll('a, button')].filter(Boolean);
			const firstEl = items[0];
			const lastEl = items[items.length - 1];
			if (e.shiftKey && document.activeElement === firstEl) {
				e.preventDefault();
				lastEl.focus();
			} else if (!e.shiftKey && document.activeElement === lastEl) {
				e.preventDefault();
				firstEl.focus();
			}
		};
		window.addEventListener('keydown', onKey);
		return () => {
			document.body.style.overflow = prev;
			window.removeEventListener('keydown', onKey);
		};
	}, [open, onClose]);

	return (
		<MotionConfig reducedMotion='user'>
			<AnimatePresence>
				{open && (
					<motion.div
						id='mobile-menu'
						role='dialog'
						aria-modal='true'
						aria-label='Site menu'
						ref={panelRef}
						className='fixed inset-0 z-40 flex h-dvh flex-col overflow-y-auto bg-paper md:hidden'
						initial={{ clipPath: 'circle(0% at calc(100% - 3.5rem) 2.5rem)' }}
						animate={{ clipPath: 'circle(150% at calc(100% - 3.5rem) 2.5rem)' }}
						exit={{ clipPath: 'circle(0% at calc(100% - 3.5rem) 2.5rem)' }}
						transition={{ duration: 0.7, ease }}
					>
						<div
							aria-hidden
							className='hairline-grid pointer-events-none absolute inset-0 [mask-image:radial-gradient(ellipse_at_100%_0%,black_10%,transparent_60%)]'
						/>

						<div className='relative flex flex-1 flex-col px-6 pb-8 pt-24'>
							<motion.p
								className='eyebrow flex items-center gap-2.5'
								initial={{ opacity: 0 }}
								animate={{ opacity: 1, transition: { delay: 0.25 } }}
							>
								<span className='size-1.5 rounded-full bg-signal' aria-hidden />
								<LagosTime withStatus />
							</motion.p>

							<nav aria-label='Mobile' className='mt-6'>
								<ul className='border-t border-line'>
									{links.map((l, i) => {
										const active = isActive(l.href);
										return (
											<motion.li
												key={l.href}
												className='overflow-hidden border-b border-line'
												initial={{ opacity: 0, y: 28 }}
												animate={{ opacity: 1, y: 0, transition: { delay: 0.18 + i * 0.06, duration: 0.6, ease } }}
												exit={{ opacity: 0, transition: { duration: 0.15 } }}
											>
												<Link
													href={l.href}
													onClick={onClose}
													aria-current={active ? 'page' : undefined}
													className='group flex items-center justify-between gap-4 py-4 active:bg-paper-deep/70'
												>
													<span>
														<span>
															<span
																className={cn(
																	'display block text-[2.6rem] leading-none',
																	active && 'italic text-signal',
																)}
															>
																{l.label}
															</span>
															<span className='mt-1.5 block text-xs text-ink-soft'>{l.hint}</span>
														</span>
													</span>
													<span
														className={cn(
															'flex size-10 shrink-0 items-center justify-center rounded-full border transition-colors',
															active ? 'border-signal bg-signal text-paper' : 'border-line text-ink',
														)}
													>
														<ArrowUpRight className='size-4' />
													</span>
												</Link>
											</motion.li>
										);
									})}
								</ul>
							</nav>

							{/* Contact card */}
							<motion.div
								className='mt-auto pt-10'
								initial={{ opacity: 0, y: 24 }}
								animate={{ opacity: 1, y: 0, transition: { delay: 0.5, duration: 0.6, ease } }}
								exit={{ opacity: 0, transition: { duration: 0.15 } }}
							>
								<div className='rounded-2xl bg-ink p-6 text-paper'>
									<p className='display text-2xl leading-snug'>
										Got an idea? <em className='text-signal'>Let’s talk.</em>
									</p>
									<p className='mt-2 text-sm text-paper/60'>
										A real person reads every message, usually within a day.
									</p>
									<Link
										href='/contact'
										onClick={onClose}
										className='mt-5 flex h-12 items-center justify-center gap-2 rounded-full bg-signal text-sm font-medium text-paper transition-transform active:scale-[0.98]'
									>
										Start a project <ArrowUpRight className='size-4' />
									</Link>
									<div className='mt-3 grid grid-cols-2 gap-3'>
										<a
											href={contact.phoneHref}
											className='flex h-11 items-center justify-center gap-2 rounded-full border border-paper/20 text-sm transition-transform active:scale-[0.98]'
										>
											<Phone className='size-4' /> Call us
										</a>
										<a
											href={contact.whatsapp}
											target='_blank'
											rel='noopener noreferrer'
											className='flex h-11 items-center justify-center gap-2 rounded-full border border-paper/20 text-sm transition-transform active:scale-[0.98]'
										>
											<MessageCircle className='size-4' /> WhatsApp
										</a>
									</div>
								</div>

								<ul className='mt-6 flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-ink-soft'>
									{contact.socials.map((s) => (
										<li key={s.href}>
											<a href={s.href} target='_blank' rel='noopener noreferrer' className='link-underline'>
												{s.label}
											</a>
										</li>
									))}
								</ul>
							</motion.div>
						</div>
					</motion.div>
				)}
			</AnimatePresence>
		</MotionConfig>
	);
}

export default NavBar;
