import React from "react";
import Section from "./structure/Section";
import Container from "./structure/Container";
import AnimatedNumber from "./AnimatedNumber";
import { motion } from "framer-motion";
import { convertData } from "./utils/common";

const NumberSection = ({data}) => {
  if(!data) return null
  const {listingItem} = data
  
  return (
    <Section
      id="about-us-section"
      className="py-16 md:py-28  relative overflow-hidden"
    >
      
      <Container>
        <motion.div 
          className="flex flex-col items-center w-full"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="mb-6">
            <motion.h2 
              className=" text-center text-3xl md:text-4xl font-bold mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              { data?.heroSubFeatureHeading ||`VoiceStack by the Numbers` }
            </motion.h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 lg:gap-16 w-full ">
          {
            listingItem && listingItem?.map((item, index) => {
              const { value, suffix } = convertData(item?.number);
              return (
                <div className="flex flex-col items-center" key={index}>
                  <AnimatedNumber value={value} suffix={suffix}  />
                  <p className=" mt-2 text-center text-sm md:text-base">{item.description || 'Minutes of AI enabled calls'}</p>
                </div>
              )
            })
          }
          </div>
        </motion.div>
      </Container>
    </Section>
  );
};

export default NumberSection;