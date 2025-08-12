'use client';
import React from 'react';
import { Button } from './ui/button';
import Image from 'next/image';
import { motion } from 'framer-motion';
import programmingImg from '../../public/programming.svg';
import Link from 'next/link';

export const MiniAboutUs = () => {
	return (
		<section className='py-16 bg-white text-center'>
			<div className='max-w-3xl mx-auto px-4'>
				<h2 className='text-3xl font-stretch-semi-condensed mb-6'>About Us</h2>
				<p className='text-lg text-gray-600'>
					HorlaTech is a trusted leader in <strong>software development</strong>{' '}
					and innovative digital solutions. We help businesses grow through
					<strong> custom software development</strong>, high-performance
					<strong> web applications</strong>, user-friendly
					<strong> mobile apps</strong>, and tailored
					<strong> custom CRM systems</strong>. Our team blends creativity,
					technical expertise, and strategic thinking to deliver scalable,
					secure, and results-driven products that keep you ahead in today’s
					competitive market.
				</p>
			</div>
		</section>
	);
};

const LandingHero = () => {
	return (
		<section id='hero' className='bg-gradient-to-b from-white to-gray-50 py-20'>
			<div className='max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center gap-12'>
				<div className='md:w-3/5 text-center md:text-left'>
					<h1 className='text-3xl md:text-5xl font-stretch-semi-condensed leading-tight mb-6'>
						Custom Software Development, Web Development & Mobile App Solutions
						That Grow Your Business
					</h1>

					<p className='text-lg text-gray-600 mb-8 leading-relaxed'>
						At HorlaTech, we deliver world-class{' '}
						<strong>software development</strong>,<strong> custom CRM</strong>{' '}
						solutions, and <strong>mobile applications</strong> that help
						businesses scale faster. Our expert team blends innovative design,
						modern
						<strong> web development</strong> practices, and data-driven
						strategies to create high-performance digital experiences.
					</p>

					<div className='flex flex-wrap gap-4 justify-center md:justify-start'>
						<Button size='lg'>
							<Link href='/contact'>Get Started</Link>
						</Button>
						<Button variant='outline' size='lg'>
							<Link href='/'>View Portfolio</Link>
						</Button>
					</div>

					<p className='text-sm text-gray-500 mt-6'>
						Let’s build your next big idea; fast, secure, and scalable.
					</p>
					<p className='text-sm text-gray-500'>
						If you can think it, we can build it.
					</p>
				</div>

				<motion.div
					className='md:w-2/5 flex justify-center md:justify-end'
					initial={{ opacity: 0, y: 40 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 1, ease: 'easeOut' }}
				>
					<motion.div
						animate={{ y: [0, -12, 0] }}
						transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
					>
						<Image
							src='/programming.svg'
							alt='Programming Illustration'
							width={550}
							height={550}
							priority
							className='drop-shadow-lg'
						/>
					</motion.div>
				</motion.div>
			</div>
		</section>
	);
};

export default LandingHero;
