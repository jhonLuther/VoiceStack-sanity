import CTAButton from './common/CTAbutton'
import Section from './structure/Section'
import H1 from './typography/H1'
import AnimatedShinyText from './ui/animated-shiny-text'
import { cn } from '~/lib/utils'
import WordRotate from './ui/word-rotate'
import Image from 'next/image'
import useWindowSize from '~/hooks/useWindowSize'
import { PortableText } from '@portabletext/react'
import Container from './structure/Container'

const AnimatedShinyTextDemo = (props) => {
  return (
    <div
      className={cn(
        'group rounded-full backdrop-blur-sm border-[1px] border-white/15 bg-white/10 text-base ',
        props.className,
      )}
    >
      <AnimatedShinyText className="inline-flex items-center justify-center px-5 py-2 text-white transition ease-out  ">
        <span className="items-center text-ellipsis line-clamp-1">
          {props.content}
        </span>
        {/* <ArrowRightIcon className="ml-1 size-3 md:size-4 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" /> */}
      </AnimatedShinyText>
    </div>
  )
}
const components: any = {
  block: {
    normal: ({ children }: { children: React.ReactNode }) => (
      <p className="text-white/80 !leading-6 text-[16px] font-light md:max-w-5xl 2xl:px-20 text-center">
        {children}
      </p>
    ),
  },
  marks: {
    strong: ({ children }: { children: React.ReactNode }) => (
      <strong className="font-bold">{children}</strong>
    ),
  },
}

const HeroContent = ({ className = null, content }) => {
  return (
    <div className={cn(className)}>
      <div className="flex flex-col items-center gap-3">
        {/* Title and Subtitle */}
        <AnimatedShinyTextDemo
          className="text-sm font-light"
          content={content?.strip}
        />
        <div className="flex flex-col items-center">
          <H1 className="text-center text-white font-medium ">
            {content?.header.static}
            <span className="md:text-5xl text-4xl text-ellipsis font-semibold text-[#f768d1] text-center max-w-96 md:max-w-none">
              {' '}
              {content?.header.dynamic[0]}
            </span>
          </H1>
        </div>

        {/* Description */}
        <PortableText value={content?.description} components={components} />

        {/* Buttons */}
        <div
          className="flex justify-center md:justify-start items-center gap-3 mt-12"
          data-aos="fade-up"
          data-aos-delay="200"
          data-aos-duration="1000"
        >
          <CTAButton
            url={content.cta.url}
            className="px-6 py-3"
            name={content.cta.name}
          />
        </div>
      </div>
    </div>
  )
}
const HeroSection = ({ data }) => {
  const { width: windowWidth } = useWindowSize()
  return (
    <Section
      id="hero-section"
      className="hero-section bg-[#02024a] bg-hero-pattern bg-cover"
    >
      <Container className="relative h-[768px] lg:h-[1024px]">
        {data && (
          <HeroContent
            className="absolute lg:top-56 left-0 w-full h-full lg:h-auto bg-transparent flex justify-center items-center  z-20 px-4"
            content={data}
          />
        )}
        {windowWidth > 1280 && (
          <div className={`absolute bottom-0 left-[-50px]  z-15`}>
            <Image
              width={550}
              height={579.939}
              src={'/hero-left.svg'}
              alt="hero-left"
            />
          </div>
        )}
        {windowWidth > 1280 && (
          <div className={`absolute bottom-5 right-[-50px] z-15`}>
            <Image
              width={500}
              height={579.939}
              src={'/hero-right.svg'}
              alt="hero-left"
            />
          </div>
        )}
      </Container>
    </Section>
  )
}

export default HeroSection
