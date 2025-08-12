'use client';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Send } from 'lucide-react';

export default function Contact() {
	const [form, setForm] = useState({ name: '', email: '', message: '' });
	const [submitted, setSubmitted] = useState(false);

	const handleChange = (e) => {
		setForm({ ...form, [e.target.name]: e.target.value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		setSubmitted(false);
	};

	return (
		<main className='mt-10 max-w-3xl mx-auto px-6 py-16'>
			<h2 className='text-4xl font-stretch-semi-condensed mb-8 text-center'>
				Contact Us
			</h2>

			{!submitted ? (
				<form onSubmit={handleSubmit} className='space-y-6'>
					<div>
						<Label htmlFor='name' className='mb-2 block font-semibold'>
							Name
						</Label>
						<Input
							type='text'
							id='name'
							name='name'
							value={form.name}
							onChange={handleChange}
							placeholder='Your full name'
							required
						/>
					</div>

					<div>
						<Label htmlFor='email' className='mb-2 block font-semibold'>
							Email
						</Label>
						<Input
							type='email'
							id='email'
							name='email'
							value={form.email}
							onChange={handleChange}
							placeholder='you@example.com'
							required
						/>
					</div>

					<div>
						<Label htmlFor='message' className='mb-2 block font-semibold'>
							Message
						</Label>
						<Textarea
							id='message'
							name='message'
							value={form.message}
							onChange={handleChange}
							placeholder='Write your message here'
							rows={5}
							required
						/>
					</div>

					<Button type='submit' className='w-full'>
						Send Message
						<Send />
					</Button>
				</form>
			) : (
				<div className='text-center text-green-600'>
					<h2 className='text-2xl font-semibold mb-4'>
						Thank you for reaching out!
					</h2>
					<p>We have received your message and will get back to you shortly.</p>
				</div>
			)}
		</main>
	);
}
