import React from 'react'
import Section from '../structure/Section'
import Container from '../structure/Container'
import H2 from '../typography/H2'
import Paragraph from '../typography/Paragraph'
import PeopleCard from '../common/PeopleCard'
import FeatureAtom from './FeatureAtom'

const FeatureBenefitSection = ({ data }) => {
	return (
		<Section
			id="about-us-section"
			className="py-12 md:py-24 bg-white  bg-contain bg-no-repeat bg-right"
		>
			<Container className="flex flex-col items-center gap-10 w-full ">
				<div className="flex flex-col gap-4 md:gap-6">
					<div className="flex justify-center w-full">
						<H2 className="md:!text-4xl">{'Advanced Features'}</H2>
					</div>
					<Paragraph className="text-center">{`Interactive Voice Response (IVR) systems enhance the efficiency of call routing. They allow callers to navigate menus using their voice or keypad.
          `}</Paragraph>
				</div>

				{
					data && data?.map((item, index) => {
						return (
							<FeatureAtom data={item} index={index} key={index} />
						)
					})
				}
			</Container>
		</Section>
	)
}

export default FeatureBenefitSection
