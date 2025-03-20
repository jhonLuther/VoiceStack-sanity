import React from "react";
import Section from "./structure/Section";
import Container from "./structure/Container";
import { motion } from "framer-motion";
import CategoryAtom from "./nestable/CategoryAtom";

const CategoryFeatureSection = ({data}) => {
  const {listingItem} = data
  console.log(data, 'data');
  
  
  return (
    <Section
      id="about-us-section"
      className="py-sm md:py-md relative overflow-hidden bg-gray-200"
    >
      <Container>
        <motion.div 
          className="flex flex-col items-center w-full"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex flex-col w-full gap-16">
          {
            data && data?.map((item, index) => {
              return (
                <div className="flex flex-col items-center" key={index}>
                  <CategoryAtom data={item}   />
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

export default CategoryFeatureSection;