import React, { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Section from '../structure/Section'
import Container from '../structure/Container'
import H2 from '../typography/H2'
import Paragraph from '../typography/Paragraph'
import TickIcon from './micro/icons/TickIcon'
import PillItem from './micro/PillItem'
import PreText from './micro/PreText'
import PhoneIcon from './micro/icons/PhoneIcon'
import AppearFeature from './AppearFeature'

export default function FeatureSection({ props }) {
  const [activeImage, setActiveImage] = useState(props[0].testimonialImage.url)
  const featureRefs = useRef([]) // To store refs for each feature

  console.log(featureRefs, 'features')

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5,
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const index = entry.target.getAttribute('data-index')
          setActiveImage(props[index].testimonialImage.url) // Update active image
        }
      })
    }, observerOptions)

    featureRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref)
    })

    return () => {
      if (observer) observer.disconnect()
    }
  }, [])

  const sampleImages = [
    'https://a.storyblok.com/f/144863/1216x960/df291daa9a/permissions-based-reporting-access.png',
    'https://a.storyblok.com/f/144863/1216x960/ce2eab0766/easy-to-use-goal-setting.png',
    'https://a.storyblok.com/f/144863/1217x960/050dc7ba8d/enhance-care-coordination.png',
    'https://a.storyblok.com/f/144863/1216x960/86fd7e19ea/powerful-analytics-dashboard.png',
  ]

  const switchIndex = (percentage) => {
    if (percentage < 0 && -50) setActiveImage(props[0].testimonialImage)
    else if (percentage <= 25) setActiveImage(props[0]?.testimonialImage)
    else if (percentage > 25 && percentage <= 50)
      setActiveImage(sampleImages[1])
    else if (percentage > 50 && percentage <= 75)
      setActiveImage(sampleImages[2])
    else if (percentage > 75 && percentage <= 100)
      setActiveImage(sampleImages[3])
  }

  return (
    <Section className="relative">
      {/* <div className="absolute top-0 left-0 flex w-full h-full">
        <div className="w-5/12 h-full bg-[#f9f9f9]" />
        <div className="w-7/12 h-full bg-vs-lemon-green" />
      </div> */}

      <Container className="relative flex gap-16">
        <div className="flex flex-col flex-1 gap-32 py-16">
          {props.map((feature, index) =>
            index === 1 ? (
              <AppearFeature
                key={feature?._id}
                getIndex={(percentage) => switchIndex(percentage)}
                ref={featureRefs.current[1]}
                index={index}
                data-index={1}
              />
            ) : (
              <motion.div
                key={index}
                ref={(el) => (featureRefs.current[index] = el)}
                data-index={index}
                className="cursor-pointer gap-4 flex flex-col"
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                <PreText>
                  <span className="text-vs-blue">
                    <PhoneIcon />
                  </span>{' '}
                  {feature.testimonialSubheading}
                </PreText>
                <H2>{feature.testimonialheading}</H2>
                <Paragraph>{feature.testimonialDescription}</Paragraph>
                <ul className="flex flex-wrap gap-2 mt-4">
                  {feature.testimonialChip.map((item, i) => (
                    <PillItem key={i}>
                      <span className="text-green-500">
                        <TickIcon />
                      </span>{' '}
                      {item}
                    </PillItem>
                  ))}
                </ul>
              </motion.div>
            ),
          )}
        </div>

        {/* Sticky Image Section */}
        <div
          className={`flex-1 px-12 bg-vs-lemon-green relative feature-after`}
        >
          <div className="sticky top-0 py-24 h-[100vh] flex flex-col justify-center">
            <AnimatePresence mode="wait">
              <motion.img
                key={activeImage}
                src={activeImage?.url}
                alt="Active Feature"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="w-full h-auto rounded-lg shadow-lg md:max-h-[538px] "
              />
            </AnimatePresence>
          </div>
        </div>
      </Container>
    </Section>
  )
}
