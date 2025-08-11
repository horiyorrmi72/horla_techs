import { Button } from './ui/button';

export function CreativitySection() {
	return (
		<section className='py-20 bg-gradient-to-b from-white to-gray-50 text-center '>
			<div className='container mx-auto px-4 max-w-4xl'>
				<h2 className='text-3xl md:text-4xl font-bold mb-4'>
					Where Creativity Meets Strategy & Innovation
				</h2>
				<p className='text-lg text-gray-600 mb-12'>
					We've cultivated a dynamic space where creativity seamlessly
					intertwines with strategy and innovation enabling us to develop
					solutions that are visually stunning, strategically impactful, secure
					and future-ready.
				</p>

				<div className='grid md:grid-cols-2 gap-8 mb-12'>
					{/* <div>
						<span className='text-4xl'>🎨</span>
						<h3 className='mt-4 font-semibold text-lg'>Creative Vision</h3>
						<p className='text-gray-600 text-sm'>
							Unique designs tailored to reflect your brand’s personality.
						</p>
					</div> */}
					<div>
						<span className='text-4xl'>📈</span>
						<h3 className='mt-4 font-semibold text-lg'>Strategic Thinking</h3>
						<p className='text-gray-600 text-sm'>
							Solutions aligned with your business objectives for measurable
							results.
						</p>
					</div>
					<div>
						<span className='text-4xl'>⚡</span>
						<h3 className='mt-4 font-semibold text-lg'>
							Innovative Technology
						</h3>
						<p className='text-gray-600 text-sm'>
							Leveraging modern tech for scalable and future-proof applications.
						</p>
					</div>
				</div>

				<Button className='px-6 py-3 bg-primary text-white rounded-full shadow-md hover:shadow-lg transition'>
					Let’s Build Something Great
				</Button>
			</div>
		</section>
	);
}
