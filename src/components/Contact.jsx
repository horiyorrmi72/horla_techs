'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { ArrowUpRight, Check, Loader2, Paperclip } from 'lucide-react';
import { contact } from '@/lib/site';
import { Container, Reveal } from './site/primitives';
import { cn } from '@/lib/utils';
import LagosTime from './site/LagosTime';

// Web3Forms access keys are designed to be public, so NEXT_PUBLIC_ is fine here.
// NEXT_PUBLIC_ values are baked in at build time: restart `dev` / rebuild after changing it.
const ACCESS_KEY = process.env.NEXT_PUBLIC_ACCESS_KEY_ID;

/** Accepts "drive.google.com/…" as well as full URLs. Returns '' for empty, null if invalid. */
function normaliseLink(value) {
	const v = value.trim();
	if (!v) return '';
	const withScheme = /^https?:\/\//i.test(v) ? v : `https://${v}`;
	try {
		const url = new URL(withScheme);
		return url.hostname.includes('.') ? url.href : null;
	} catch {
		return null;
	}
}

const projectTypes = ['Website', 'Mobile app', 'Custom software', 'AI integration', 'Other'];

const fieldClass =
	'peer w-full border-0 border-b border-ink/20 bg-transparent px-0 pb-3 pt-7 text-lg outline-none transition-colors placeholder:text-transparent focus:border-ink focus:ring-0';
const labelClass =
	'pointer-events-none absolute left-0 top-7 text-lg text-ink-soft transition-all duration-200 peer-focus:top-0 peer-focus:font-mono peer-focus:text-[0.7rem] peer-focus:uppercase peer-focus:tracking-[0.18em] peer-[:not(:placeholder-shown)]:top-0 peer-[:not(:placeholder-shown)]:font-mono peer-[:not(:placeholder-shown)]:text-[0.7rem] peer-[:not(:placeholder-shown)]:uppercase peer-[:not(:placeholder-shown)]:tracking-[0.18em]';

export default function Contact() {
	const [form, setForm] = useState({ name: '', email: '', message: '', link: '' });
	const [type, setType] = useState('');
	const [submitted, setSubmitted] = useState(false);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState('');
	const router = useRouter();

	const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

	const handleSubmit = async (e) => {
		e.preventDefault();
		setError('');
		setSubmitted(false);

		const link = normaliseLink(form.link);
		if (link === null) {
			setError('That link doesn’t look quite right. Please check it, or leave it empty.');
			return;
		}

		if (!ACCESS_KEY) {
			console.error('Contact form: NEXT_PUBLIC_ACCESS_KEY_ID is not set, so messages cannot be sent.');
			setError('Our contact form is taking a short break. Please reach us on WhatsApp or call us instead.');
			return;
		}
		setLoading(true);

		const formData = new FormData();
		formData.append('access_key', ACCESS_KEY);
		formData.append('name', form.name);
		formData.append('email', form.email);
		formData.append('project_type', type || 'Not specified');
		formData.append('message', form.message);
		if (link) formData.append('brief_link', link);
		formData.append('botcheck', '');

		try {
			const res = await fetch('https://api.web3forms.com/submit', {
				method: 'POST',
				body: formData,
			});
			const data = await res.json();

			if (data.success) {
				setSubmitted(true);
				setForm({ name: '', email: '', message: '', link: '' });
				setType('');
				setTimeout(() => router.push('/'), 6000);
			} else {
				console.error('Contact form rejected by Web3Forms:', data.message);
				setError('Sorry, that didn’t go through. Please try again, or reach us on WhatsApp.');
			}
		} catch {
			setError('We couldn’t reach the server. Check your connection, or reach us on WhatsApp.');
		} finally {
			setLoading(false);
		}
	};

	return (
		<section className='relative overflow-hidden pb-24 pt-36 md:pb-32 md:pt-48'>
			<div
				aria-hidden
				className='hairline-grid pointer-events-none absolute inset-0 [mask-image:radial-gradient(ellipse_at_10%_0%,black_10%,transparent_55%)]'
			/>
			<Container className='relative grid gap-16 md:grid-cols-12'>
				{/* Intro + details */}
				<div className='md:col-span-5'>
					<Reveal>
						<p className='eyebrow'>Contact</p>
					</Reveal>
					<Reveal delay={0.08}>
						<h1 className='display mt-6 text-5xl leading-[1] md:text-7xl'>
							Let’s talk about your <em className='text-signal'>project.</em>
						</h1>
					</Reveal>
					<Reveal delay={0.14}>
						<p className='mt-8 max-w-md text-lg leading-relaxed text-ink-soft'>
							No brief? No problem. Tell us what’s on your mind in your own
							words. A real person on our team reads every message and
							usually replies within one business day.
						</p>
					</Reveal>

					<Reveal delay={0.18}>
						<p className='mt-8 inline-flex items-center gap-2.5 rounded-full border border-line bg-card px-4 py-2 text-sm'>
							<span className='size-2 rounded-full bg-emerald-500' aria-hidden />
							<LagosTime withStatus />
						</p>
					</Reveal>

					<Reveal delay={0.2}>
						<dl className='mt-12 space-y-8 border-t border-line pt-10'>
							<div>
								<dt className='eyebrow'>Call or WhatsApp</dt>
								<dd className='mt-2 flex flex-wrap gap-x-5 gap-y-1 text-lg'>
									<a href={contact.phoneHref} className='link-underline'>
										{contact.phone}
									</a>
									<a
										href={contact.whatsapp}
										target='_blank'
										rel='noopener noreferrer'
										className='link-underline text-ink-soft hover:text-ink'
									>
										WhatsApp ↗
									</a>
								</dd>
							</div>
							<div>
								<dt className='eyebrow'>Studio</dt>
								<dd className='mt-2 text-lg'>{contact.address}</dd>
							</div>
							<div>
								<dt className='eyebrow'>Elsewhere</dt>
								<dd className='mt-2 flex flex-wrap gap-x-5 gap-y-1'>
									{contact.socials.map((s) => (
										<a
											key={s.href}
											href={s.href}
											target='_blank'
											rel='noopener noreferrer'
											className='link-underline'
										>
											{s.label}
										</a>
									))}
								</dd>
							</div>
						</dl>
					</Reveal>
				</div>

				{/* Form */}
				<Reveal delay={0.12} className='md:col-span-6 md:col-start-7'>
					<div className='rounded-2xl border border-line bg-card p-8 shadow-[0_30px_80px_-40px_rgb(0_0_0/0.25)] md:p-12'>
						{!submitted ? (
							<form onSubmit={handleSubmit} className='space-y-10'>
								<fieldset>
									<legend className='eyebrow'>I’m interested in</legend>
									<div className='mt-4 flex flex-wrap gap-2'>
										{projectTypes.map((t) => (
											<button
												type='button'
												key={t}
												onClick={() => setType(type === t ? '' : t)}
												aria-pressed={type === t}
												className={cn(
													'rounded-full border px-4 py-2 text-sm transition-colors',
													type === t
														? 'border-ink bg-ink text-paper'
														: 'border-ink/15 hover:border-ink/50',
												)}
											>
												{t}
											</button>
										))}
									</div>
								</fieldset>

								<div className='grid gap-10 sm:grid-cols-2'>
									<div className='relative'>
										<input
											id='name'
											name='name'
											value={form.name}
											onChange={handleChange}
											placeholder='Your name'
											autoComplete='name'
											required
											className={fieldClass}
										/>
										<label htmlFor='name' className={labelClass}>
											Your name
										</label>
									</div>
									<div className='relative'>
										<input
											type='email'
											id='email'
											name='email'
											value={form.email}
											onChange={handleChange}
											placeholder='Email address'
											autoComplete='email'
											required
											className={fieldClass}
										/>
										<label htmlFor='email' className={labelClass}>
											Email address
										</label>
									</div>
								</div>

								<div className='relative'>
									<textarea
										id='message'
										name='message'
										value={form.message}
										onChange={handleChange}
										placeholder='What would you like to build?'
										rows={5}
										required
										className={cn(fieldClass, 'resize-none')}
									/>
									<label htmlFor='message' className={labelClass}>
										What would you like to build?
									</label>
								</div>

								<div>
									<div className='relative'>
										<input
											id='link'
											name='link'
											type='text'
											inputMode='url'
											autoComplete='url'
											value={form.link}
											onChange={handleChange}
											placeholder='Link to a brief or document (optional)'
											aria-describedby='link-hint'
											className={cn(fieldClass, 'pr-8')}
										/>
										<label htmlFor='link' className={labelClass}>
											Link to a brief or document (optional)
										</label>
										<Paperclip className='pointer-events-none absolute bottom-4 right-0 size-4 text-ink-soft' aria-hidden />
									</div>
									<p id='link-hint' className='mt-3 text-sm leading-relaxed text-ink-soft'>
										Got a brief, PDF or Word doc? Paste a Google Drive, Dropbox or
										OneDrive link, and set it so anyone with the link can view.
									</p>
								</div>

								<input type='checkbox' name='botcheck' className='hidden' tabIndex={-1} aria-hidden />

								{error && (
									<p role='alert' className='text-sm text-destructive'>
										{error}
									</p>
								)}

								<button
									type='submit'
									disabled={loading}
									className='group inline-flex h-14 w-full items-center justify-center gap-2 rounded-full bg-ink text-paper transition-colors duration-300 hover:bg-signal disabled:opacity-60'
								>
									{loading ? (
										<>
											<Loader2 className='size-4 animate-spin' /> Sending…
										</>
									) : (
										<>
											Send message
											<ArrowUpRight className='size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5' />
										</>
									)}
								</button>
							</form>
						) : (
							<div className='py-16 text-center' role='status'>
								<span className='mx-auto flex size-16 items-center justify-center rounded-full bg-signal text-paper'>
									<Check className='size-7' />
								</span>
								<h2 className='display mt-8 text-4xl'>Thanks for saying hello.</h2>
								<p className='mx-auto mt-4 max-w-sm text-ink-soft'>
									Your message is with us. One of the team will read it
									and get back to you soon, usually within a day.
								</p>
							</div>
						)}
					</div>
				</Reveal>
			</Container>
		</section>
	);
}
