import React, { useEffect, useState } from 'react';
import Section from '../structure/Section';
import Container from '../structure/Container';
import SanityPortableText from '../blockEditor/sanityBlockEditor';
import CheckMark from '../icons/CheckMark';
import H3 from '../typography/H3';
import Image from 'next/image';


const FeatureAtom = ({ data, index }) => {
	if(!data) return null

	return (
		<Section id="about-us-section" className={`py-12 ${index % 2 === 0 ? 'md:pb-0' : 'md:py-24' } last:pb-0  `}>
			<Container className="flex flex-col items-center gap-10 w-full px-0">
				<div
					className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row-reverse' : 'md:flex-row'} items-center justify-between md:gap-20 gap-3  md:p-6`}
				>
					<div
						className="  rounded-3xl "

					>
						<div className="bg-white  rounded-xl shadow-md ">
							<div className="flex flex-col items-center text-center w-full ">
								{data?.mainImage && <Image   
                  src={data?.mainImage?.url} alt={data?.name}
									quality={100}
									width={data?.mainImage?.metadata?.dimensions?.width }
									height={data?.mainImage?.metadata?.dimensions?.height }
									title=''
									sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
									/>}
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
