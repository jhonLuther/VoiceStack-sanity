import React from 'react';
import Section from '../structure/Section';
import Container from '../structure/Container';
import H2 from '../typography/H2';
import Star from '../icons/Star';

const FeatureImageSection = ({ data }) => {
	if (!data) return null
 
	return (
		<Section className={`py-12 'md:py-24'`}>
			<Container className="flex relative overflow-hidden  md:flex-row flex-col justify-around items-center gap-10 w-full md:!p-16  md:bg-gray-100 rounded-3xl ">
				<div className=" md:visible invisible absolute left-0 bottom-0 w-300 h-full bg-cover bg-no-repeat" style={{ backgroundImage: `url(${data.mainImage?.url})`, width: '25rem' }}></div>
				<div className=" md:visible invisible absolute top-0 right-0 w-300 h-full bg-cover bg-no-repeat" style={{ backgroundImage: `url(${data.secondaryImage?.url})`, width: '29rem' }}></div>
				<div className='z-10 flex flex-col align-top h-full'>
					<H2 className='text-gray-400 md:!text-4xl !text-2xl'>{'Benefits of '}</H2>
					<H2 className='md:!text-4xl whitespace-nowrap !text-2xl'>{'VoiceStack’s IVR System'}</H2>
				</div>
				<div className='z-10 flex flex-col'>
					{
						data?.listingItem && data?.listingItem.map((item, index) => (
							<ul key={index} className={`flex items-center gap-4 pt-4 pb-4 border-b border-gray-200 ${index === data.listingItem.length - 1 ? 'border-b-0' : ''}`}>
								{item?.itemHeading &&
									<div className='flex items-center gap-3'>
										<Star />
										<li className="text-gray-800 text-base leading-6 font-normal">{item.itemHeading}</li>
									</div>
								}
								{item?.itemSubHeading && <li className="">{item.itemSubHeading}</li>}
							</ul>
						))
					}
				</div>
			</Container>
		</Section>
	);
};

export default FeatureImageSection;
