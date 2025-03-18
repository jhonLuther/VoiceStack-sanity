import React from "react";
import Section from "./structure/Section";
import Container from "./structure/Container";
import AnimatedNumber from "./AnimatedNumber";
import { motion } from "framer-motion";

const NumberSection = () => {
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
              VoiceStack by the Numbers
            </motion.h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 lg:gap-16 w-full ">
            <div className="flex flex-col items-start  ">
              <AnimatedNumber value={9000000000} />
              <p className=" mt-2 text-center text-sm md:text-base">Minutes of AI enabled calls</p>
            </div>
            <div className="flex flex-col items-start ">
              <AnimatedNumber value={363000000} />
              <p className=" mt-2 text-center text-sm md:text-base">Minutes of AI enabled calls</p>
            </div>
            <div className="flex flex-col items-start ">
              <AnimatedNumber value={342000000} />
              <p className=" mt-2 text-center text-sm md:text-base">Minutes of AI enabled calls</p>
            </div>
            <div className="flex flex-col items-start ">
              <AnimatedNumber value={60} suffix="%" />
              <p className=" mt-2 text-center text-sm md:text-base">Minutes of AI enabled calls</p>
            </div>
          </div>
        </motion.div>
      </Container>
    </Section>
  );
};

export default NumberSection;