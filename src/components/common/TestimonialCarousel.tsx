import React from 'react'
import Slider from 'react-slick'
import TestimonialCard from './TestimonialCard'

const TestimonialCarousel = ({ testimonials }) => {
  const testimonialLength = testimonials.length

  if (testimonialLength == 1) {
    return (
      <div className="max-w-full">
        <div className="w-full flex flex-col">
          <div
            className="w-full flex justify-center !rounded-xl"
          >
            <TestimonialCard props={testimonials[0]} />
            
          </div>
        </div>
      </div>
    )
  }
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  }

  return (
    <div className=" ">
      {/* <Slider {...settings}> */}
        {testimonials?.map((testimonial, index) => {
          return (
            <div key={index} className="w-full h-[350px] flex flex-col">
              <div
                className="w-full flex justify-center !rounded-xl"
                style={{
                  background:
                    'linear-gradient(37deg, #4B11A2 -7.71%, #742ACE 28.85%, #A947EB 68.49%, #D359DD 102.22%, #F768D1 124.54%), #FFF;',
                }}
              >
                <TestimonialCard props={testimonial} />
              </div>
            </div>
          )
        })}
      {/* </Slider> */}
    </div>
  )
}

export default TestimonialCarousel
