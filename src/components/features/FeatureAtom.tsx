import React, { useEffect, useState } from 'react';
import Section from '../structure/Section';
import Container from '../structure/Container';
import dynamic from 'next/dynamic';
import ImageLoader from '../common/imageLoader/imageLoader';
import SanityPortableText from '../blockEditor/sanityBlockEditor';
import H2 from '../typography/H2';
import CheckMark from '../icons/CheckMark';
import H3 from '../typography/H3';


const FeatureAtom = ({ data, index }) => {
	if(!data) return null

	return (
		<Section id="about-us-section" className={`py-12 ${index % 2 === 0 ? 'md:pb-0' : 'md:py-24' } last:pb-0  `}>
			<Container className="flex flex-col items-center gap-10 w-full ">
				<div
					className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row-reverse' : 'md:flex-row'} items-center justify-between md:gap-20 gap-3  p-6`}
				>
					<div
						className="  rounded-3xl "

					>
						<div className="bg-white  rounded-xl shadow-md ">
							<div className="flex flex-col items-center text-center">
								{data?.mainImage && <ImageLoader image={data?.mainImage} alt={data?.name} className="!w-[520px] !h-[455px] !rounded-2xl" />}
							</div>
						</div>

					</div>

					<div className="max-w-lg" >
						<div className='flex flex-col gap-3'>

							{data?.featureTitle &&
								<H3 className='md:text-2xl'>{data.featureTitle}
								</H3>}
							{data?.subHeading && <SanityPortableText
								content={data?.subHeading}
							/>}
						</div>

						{
							data.listingItem && data?.listingItem.map((item, index) => (
								<ul key={index} className="flex items-center gap-4 mt-4">
									{item?.itemHeading &&
										<div className='flex items-center gap-3'>
											<CheckMark />
											<li className="text-gray-800 text-base leading-6 font-normal">{item.itemHeading}</li>
										</div>
									}
									{item?.itemSubHeading && <li className="">{item.itemSubHeading}</li>}
								</ul>
							))
						}
					</div>
				</div>

			</Container>
		</Section>
	);
};

export default FeatureAtom;
