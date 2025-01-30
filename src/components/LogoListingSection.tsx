import React, { useContext, useEffect, useState } from 'react'
import Section from './structure/Section'
import Container from './structure/Container'
import Image from 'next/image'
import Button from './common/Button'
import ButtonArrow from './icons/ButtonArrow'
import H2 from './typography/H2'
import Paragraph from './typography/Paragraph'
import { FormModal } from './common/FormModal'
import { useRouter } from 'next/router'
import { BookDemoContext } from '~/providers/BookDemoProvider'
import getTextByReferrer from '~/helpers/getTextByReferrer'

const LogoListingSection = ({ data, refer=null }) => {
  
  const [openForm, setOpenForm] = useState(false);
  
  const [isUk, setIsUk] = useState(false);
  const router = useRouter();

  useEffect(()=>{
    setIsUk(router.locale == "en-GB");
  },[router.locale])
  const { isDemoPopUpShown } = useContext(BookDemoContext);

  console.log({ldata: data});
  

  return (
    <Section className="py-sm md:py-md md:pb-16">
      <Container>
        <div className="flex flex-col items-center w-full">
          <div className={`flex justify-center w-full ${ data?.image?.length > 0 && `mb-12`}`}>
            <div className="flex flex-col w-full max-w-[780px] text-center gap-4">
              <H2>{getTextByReferrer(refer, data?.logoSectionHeaderRef || [])}</H2>
              <Paragraph
                dangerouslySetInnerHTML={{__html: getTextByReferrer(refer, data?.logoSectionHeaderDescRef || [])}}
              ></Paragraph>
            </div>
          </div>
          <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-8 max-w-[1034px]">
            {data?.image &&
              data.image?.length &&
              data?.image?.map((logo: any, i) => {
                return (
                  <Image
                    src={logo.url}
                    alt={logo.altText || 'organization Logo'}
                    title={logo.altText}
                    width={logo?.metadata?.dimensions?.width}
                    height={logo?.metadata?.dimensions?.height}
                    className={`${isUk ? 'h-12' : 'h-10'} w-auto`}
                    key={logo?._id}
                  ></Image>
                )
              })}
          </div>
          <div className="flex gap-4 items-center mt-12 lg:mt-16">
            <Button type="primary" onClick={() => {setOpenForm(true)}}>
              <ButtonArrow></ButtonArrow>
              <span className="text-base font-medium">{`Book free demo`}</span>
            </Button>
          </div>
        </div>
        {openForm && (
            <FormModal
              className={`pt-9  flex items-start`}
              onClose={() => setOpenForm(false)}
              data={isDemoPopUpShown}
            />
          )}
      </Container>
    </Section>
  )
}

export default LogoListingSection
