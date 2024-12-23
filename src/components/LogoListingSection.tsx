import React, { useState } from 'react'
import Section from './structure/Section'
import Container from './structure/Container'
import atlanta from 'public/assets/logos/atlanta-dental-spa.png'
import charleston from 'public/assets/logos/charleston.png'
import dag from 'public/assets/logos/dag.png'
import dentalDepot from 'public/assets/logos/dental-depot.png'
import dionHealth from 'public/assets/logos/dion-health.png'
import espireDental from 'public/assets/logos/espire-dental.png'
import fortBendDental from 'public/assets/logos/fort-bend-dental.png'
import miSmiles from 'public/assets/logos/mi-smiles-dental-group.png'
import northwest from 'public/assets/logos/northwest-dental-group.png'
import roligoDental from 'public/assets/logos/roligo-dental.png'
import schoolSmiles from 'public/assets/logos/school-smiles.png'
import smileDetect from 'public/assets/logos/smile-select.png'
import westwind from 'public/assets/logos/westwind.png'
import Image from 'next/image'
import Button from './common/Button'
import ButtonArrow from './icons/ButtonArrow'
import H2 from './typography/H2'
import Paragraph from './typography/Paragraph'
import { FormModal } from './common/FormModal'

const LogoListingSection = ({ data }) => {
  
  const [openForm, setOpenForm] = useState(false)

  return (
    <Section className="py-sm md:py-md pb-8">
      <Container>
        <div className="flex flex-col items-center w-full">
          <div className="flex justify-center w-full mb-12">
            <div className="flex flex-col w-full max-w-[780px] text-center gap-4">
              <H2>{data?.logoSectionHeader}</H2>
              <Paragraph>{data?.logoSectionHeaderDescptn}</Paragraph>
            </div>
          </div>
          <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-8 max-w-[1034px]">
            {data.image &&
              data.image?.length &&
              data?.image?.map((logo: any, i) => {
                return (
                  <Image
                    src={logo.url}
                    alt={logo.altText || 'organization Logo'}
                    title={logo.altText}
                    width={logo?.metadata?.dimensions?.width}
                    height={logo?.metadata?.dimensions?.height}
                    className="max-h-10 w-auto"
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
            />
          )}
      </Container>
    </Section>
  )
}

export default LogoListingSection
