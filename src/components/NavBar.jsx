'use client';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ArrowUpRight } from 'lucide-react';
import logo from '../../public/horlatechs_logo-rmbg.png';
import { cn } from '@/lib/utils';

const links = [
	{ href: '/', label: 'Home' },
	{ href: '/services', label: 'Services' },
	{ href: '/portfolio', label: 'Work' },
	{ href: '/about', label: 'About' },
	{ href: '/contact', label: 'Contact' },
];

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

	// Close the menu on route change and lock scroll while it is open.
	useEffect(() => setMenuOpen(false), [pathname]);
	useEffect(() => {
		document.body.style.overflow = menuOpen ? 'hidden' : '';
		const onKey = (e) => e.key === 'Escape' && setMenuOpen(false);
		window.addEventListener('keydown', onKey);
		return () => window.removeEventListener('keydown', onKey);
	}, [menuOpen]);

	const isActive = (href) => (href === '/' ? pathname === '/' : pathname?.startsWith(href));

	return (
		<header
			className={cn(
				'fixed inset-x-0 top-0 z-50 transition-all duration-500',
				scrolled || menuOpen
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
					'mx-auto flex max-w-7xl items-center justify-between px-6 transition-all duration-500 md:px-10',
					scrolled ? 'h-16' : 'h-20',
				)}
			>
				<Link href='/' className='flex items-center gap-2.5' aria-label='HorlaTechs home'>
					<Image src={logo} width={30} height={36} alt='' className='object-contain' priority />
					<span className='display text-xl font-medium tracking-tight'>
						HorlaTechs
					</span>
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
					className='relative flex size-10 items-center justify-center rounded-full border border-line md:hidden'
					aria-label={menuOpen ? 'Close menu' : 'Open menu'}
					aria-expanded={menuOpen}
					aria-controls='mobile-nav'
				>
					<span
						className={cn(
							'absolute h-px w-4 bg-ink transition-transform duration-300',
							menuOpen ? 'rotate-45' : '-translate-y-[3px]',
						)}
					/>
					<span
						className={cn(
							'absolute h-px w-4 bg-ink transition-transform duration-300',
							menuOpen ? '-rotate-45' : 'translate-y-[3px]',
						)}
					/>
				</button>
			</div>

			{/* Mobile sheet */}
			<nav
				id='mobile-nav'
				aria-label='Mobile'
				className={cn(
					'fixed inset-x-0 bottom-0 top-16 bg-paper px-6 pt-10 transition-all duration-500 md:hidden',
					menuOpen ? 'visible opacity-100' : 'invisible opacity-0',
				)}
			>
				<ul className='flex flex-col'>
					{links.map((l, i) => (
						<li
							key={l.href}
							className='border-b border-line transition-all duration-500'
							style={{
								transitionDelay: menuOpen ? `${80 + i * 50}ms` : '0ms',
								transform: menuOpen ? 'none' : 'translateY(12px)',
								opacity: menuOpen ? 1 : 0,
							}}
						>
							<Link
								href={l.href}
								onClick={() => setMenuOpen(false)}
								className='flex items-baseline justify-between py-5'
							>
								<span className='display text-4xl'>{l.label}</span>
								<span className='font-mono text-xs text-ink-soft'>0{i + 1}</span>
							</Link>
						</li>
					))}
				</ul>
				<Link
					href='/contact'
					onClick={() => setMenuOpen(false)}
					className='mt-10 inline-flex h-12 w-full items-center justify-center gap-2 rounded-full bg-ink text-paper'
				>
					Start a project <ArrowUpRight className='size-4' />
				</Link>
			</nav>
		</header>
	);
};

export default NavBar;
