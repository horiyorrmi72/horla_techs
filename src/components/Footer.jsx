import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';
import logo from '../../public/horlatechs_logo-rmbg.png';
import Magnet from './reactbits/Magnet';
import LagosTime from './site/LagosTime';
import { contact, services } from '@/lib/site';

const orgSchema = {
	'@context': 'https://schema.org',
	'@type': 'Organization',
	name: 'HorlaTechs',
	url: 'https://www.horlatechs.com',
	logo: 'https://www.horlatechs.com/horlatechs_logo.png',
	description:
		'HorlaTechs is a Lagos, Nigeria–based software development company specializing in custom web development, mobile applications, CRM systems, and secure backend services. We deliver fast, scalable, and innovative digital solutions that help businesses grow locally and globally.',
	address: {
		'@type': 'PostalAddress',
		streetAddress: 'Itire Road,Mushin',
		addressLocality: 'Lagos',
		addressRegion: 'LA',
		postalCode: '100001',
		addressCountry: 'Nigeria',
	},
	contactPoint: {
		'@type': 'ContactPoint',
		telephone: '+234-909-517-6621',
		contactType: 'Customer Support',
		areaServed: 'NG',
		availableLanguage: ['English'],
	},
	sameAs: contact.socials.map((s) => s.href),
};

const Footer = () => {
	return (
		<footer className='relative overflow-hidden bg-ink text-paper'>
			<script
				type='application/ld+json'
				dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
			/>

			{/* Closing call to action */}
			<div className='mx-auto max-w-7xl px-6 pb-20 pt-24 md:px-10 md:pt-32'>
				<p className='eyebrow text-paper/50'>Have a project in mind?</p>
				<Link
					href='/contact'
					className='group mt-6 flex flex-wrap items-end justify-between gap-6 border-b border-paper/15 pb-10'
				>
					<span className='display text-5xl leading-[0.95] md:text-8xl'>
						Let’s build it <em className='text-signal'>together.</em>
					</span>
					<Magnet padding={120} magnetStrength={3}>
						<span className='flex size-16 items-center justify-center rounded-full border border-paper/25 transition-all duration-500 group-hover:rotate-45 group-hover:border-signal group-hover:bg-signal md:size-24'>
							<ArrowUpRight className='size-6 md:size-9' />
						</span>
					</Magnet>
				</Link>

				<div className='mt-16 grid grid-cols-2 gap-10 md:grid-cols-12'>
					<div className='col-span-2 md:col-span-5'>
						<div className='flex items-center gap-2.5'>
							<Image src={logo} width={26} height={32} alt='' />
							<span className='display text-xl'>HorlaTechs</span>
						</div>
						<p className='mt-5 max-w-sm text-sm leading-relaxed text-paper/60'>
							We’re a software studio in Lagos building custom software, web
							platforms, mobile apps and CRMs for people here and around the
							world. Say hello any time. We read everything.
						</p>
					</div>

					<FooterCol title='Studio'>
						{[
							['/', 'Home'],
							['/services', 'Services'],
							['/portfolio', 'Work'],
							['/about', 'About'],
							['/contact', 'Contact'],
						].map(([href, label]) => (
							<li key={href}>
								<Link href={href} className='link-underline text-paper/70 hover:text-paper'>
									{label}
								</Link>
							</li>
						))}
					</FooterCol>

					<FooterCol title='Services' className='md:col-span-3'>
						{services.slice(0, 4).map((s) => (
							<li key={s.id}>
								<Link
									href={`/services#${s.id}`}
									className='link-underline text-paper/70 hover:text-paper'
								>
									{s.title}
								</Link>
							</li>
						))}
					</FooterCol>

					<FooterCol title='Connect'>
						{contact.socials.map((s) => (
							<li key={s.href}>
								<a
									href={s.href}
									target='_blank'
									rel='noopener noreferrer'
									className='link-underline text-paper/70 hover:text-paper'
								>
									{s.label}
								</a>
							</li>
						))}
						<li>
							<a href={contact.phoneHref} className='link-underline text-paper/70 hover:text-paper'>
								{contact.phone}
							</a>
						</li>
					</FooterCol>
				</div>
			</div>

			<div className='border-t border-paper/10'>
				<div className='mx-auto flex max-w-7xl flex-col justify-between gap-2 px-6 py-6 font-mono text-[0.7rem] uppercase tracking-[0.18em] text-paper/40 md:flex-row md:px-10'>
					<span>© {new Date().getFullYear()} HorlaTechs Digital Innovation</span>
					<span>
						Made with care in Lagos · <LagosTime />
					</span>
				</div>
			</div>
		</footer>
	);
};

function FooterCol({ title, children, className = 'md:col-span-2' }) {
	return (
		<div className={className}>
			<h3 className='eyebrow text-paper/40'>{title}</h3>
			<ul className='mt-5 space-y-3 text-sm'>{children}</ul>
		</div>
	);
}

export default Footer;
