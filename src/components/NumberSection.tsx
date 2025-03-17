import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import Section from './structure/Section'
import Container from './structure/Container'

const AnimatedNumber = ({ value, suffix = "" }) => {
  const [count, setCount] = useState(0)

  useEffect(() => {
    const controls = setInterval(() => {
      setCount((prev) => {
        const next = prev + value / 50 // Smooth increment
        return next >= value ? value : next
      })
    }, 30) // Speed of animation

    return () => clearInterval(controls)
  }, [value])

  // Formatting logic: Convert large numbers to B / M format
  const formatNumber = (num) => {
    if (num >= 1_000_000_000) return `${Math.round(num / 1_000_000_000)}B` // No decimal for B
    if (num >= 1_000_000) return `${Math.round(num / 1_000_000)}M` // Whole number for M
    return `${Math.round(num)}${suffix}`
  }

  return (
    <motion.span
      className="text-white font-bold text-4xl md:text-6xl"
      animate={{ opacity: [0, 1], y: [20, 0] }}
      transition={{ duration: 1, ease: 'easeOut' }}
    >
      {formatNumber(count)}
    </motion.span>
  )
}

const NumberSection = ({data}) => {
  return (
    <Section
      id="about-us-section"
      className="py-12 md:py-24 bg-[#8639f8] bg-grid-pattern bg-contain bg-no-repeat bg-right"
    >
      <Container className="flex flex-col items-center gap-10 w-full">
        <div className="flex gap-8 md:gap-16 text-center">
          <AnimatedNumber value={9000000000} /> {/* 9B */}
          <AnimatedNumber value={363000000} /> {/* 363M */}
          <AnimatedNumber value={342000000} /> {/* 342M */}
          <AnimatedNumber value={60} suffix="%" /> {/* 60% */}
        </div>
      </Container>
    </Section>
  )
}

export default NumberSection
