import React, { useContext, useEffect, useState } from 'react';
import Section from '../structure/Section';
import Container from '../structure/Container';
import SanityPortableText from '../blockEditor/sanityBlockEditor';
import CheckMark from '../icons/CheckMark';
import H3 from '../typography/H3';
import Image from 'next/image';
import Button from '../common/Button';
import ButtonArrow from '../icons/ButtonArrow';
import { FormModal } from '../common/FormModal';
import { BookDemoContext } from '~/providers/BookDemoProvider';



const FeatureAtom = ({ data, index }) => {

  const { isDemoPopUpShown } = useContext(BookDemoContext);
  const [openForm, setOpenForm] = useState(false)
  if (!data) return null
  return (
    <div className={`flex justify-center border-b last:border-none  md:py-12 py-6 ${'md:py-24'} last:pb-0  `}>
        <div
          className={`flex max-w-[1040px] flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center justify-between md:gap-20 gap-10`}
        >
          <div className=" md:max-w-[520px] w-full">
              <div className="flex flex-col items-center text-center w-full ">
                {data?.mainImage && <Image
                  className='max-w-[520px] w-full h-auto rounded-t-xl'
                  src={data?.mainImage?.url} alt={data?.name}
                  quality={100}
                  width={data?.mainImage?.metadata?.dimensions?.width}
                  height={data?.mainImage?.metadata?.dimensions?.height}
                  title=''
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />}
              </div>
          </div>
          <div className="flex flex-col gap-8">
            <div className='flex flex-col gap-3'>
              {data?.featureTitle &&
                <H3 className='md:text-2xl font-semibold'>{data.featureTitle}
                </H3>}
              {data?.subHeading && <span className='text-gray-500'><SanityPortableText
                content={data?.subHeading}
              /></span>}
							<ul>
								{data.listingItem && data?.listingItem.map((item, index) => (
									<li key={index} className="flex items-center gap-4 py-2">
										<div className='flex items-center gap-3'>
											<CheckMark className='text-vs-blue' />
											<span className="text-gray-800 text-base leading-relaxed font-normal block">{item.itemHeading}</span>
										</div>
									</li>
								))}
							</ul>
            </div>

            <div>
              <Button type='primary' onClick={() => { setOpenForm(true) }}>
                <ButtonArrow></ButtonArrow>
                <span className="text-base font-medium">{`Book free demo`}</span>
              </Button>
            </div>

          </div>
        </div>
        {openForm && (
          <FormModal
            className={`pt-9  flex items-start`}
            onClose={() => setOpenForm(false)}
            data={isDemoPopUpShown}
          />
        )}
      
    </div>
  );
};

export default FeatureAtom;
