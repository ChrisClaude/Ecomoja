import * as React from 'react';
import Carousel from '@/components/layout/Carousel';

type HomeBannerProps = {
	slides: {id: string; image: string}[];
};

const HomeBanner = ({slides}: HomeBannerProps) => (
	<>
		<section className='px-2 py-6 flex-col md:px-32 bg-white lg:px-16 lg:flex'>
			<div className='flex w-11/12 sm:w-full'>
				<div className='md:hidden lg:block lg:w-60' />
				<div className='flex-1 overflow-hidden lg:ml-5 border-0'>
					<div className='w-full overflow-hidden lg:w-3/4'>
						<Carousel slides={slides} />
					</div>
				</div>
			</div>

		</section>
	</>
);
export default HomeBanner;
