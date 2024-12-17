import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Section from "../structure/Section";
import Container from "../structure/Container";
import H2 from "../typography/H2";
import Paragraph from "../typography/Paragraph";
import TickIcon from "./micro/icons/TickIcon";
import PillItem from "./micro/PillItem";
import PreText from "./micro/PreText";
import PhoneIcon from "./micro/icons/PhoneIcon";
import AppearFeature from "./AppearFeature";

// Features Data
const features = [
  {
    title: "Comprehensive VoIP Solutions",
    pretext: "Enterprise VoIP",
    description:
      "Enhance patient experience with AI call scoring, analytics, and automation to improve communication and processes.",
    items: [
      "IVR & Call Routing",
      "Visual Voicemail",
      "Missed Call Response Tracking",
      "Call Flow Analytics",
      "Two-way Texting & Cloud Fax",
    ],
    image: "https://a.storyblok.com/f/144863/960x774/53a3094d57/clinical.png",
  },
  {
    title: "Tracking Customer Interactions",
    pretext: "Attribution and Analytics",
    description:
      "Connect calls to your marketing team for engagement. Use analytics to assess performance and identify metrics to improve strategies.",
    items: [
      "Call Source Tracking",
      "Ad Keywords Tracking",
      "Campaigns Tracking",
      "Google Analytics Integration",
    ],
    image: "https://a.storyblok.com/f/144863/960x774/13007053fc/patient-services.png",
  },
  {
    title: "AI-Driven Call Summaries",
    pretext: "Conversation Analytics",
    description:
      "Leverage AI to get call transcripts, detect patient needs, and automate call outcomes, improving efficiency and decision-making.",
    items: [
      "Call Transcripts & Summary",
      "Staff Performance Insights",
      "Outcome Analytics",
      "Post Call Task Automation",
    ],
    image: "https://a.storyblok.com/f/144863/960x774/0e935e6ba8/revenue-cycle-management.png",
  },
];

export default function FeatureSection() {
  const [activeImage, setActiveImage] = useState(features[0].image);
  const featureRefs = useRef([]); // To store refs for each feature

  console.log(featureRefs,'features');
  

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5, 
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const index = entry.target.getAttribute("data-index");
          setActiveImage(features[index].image); // Update active image
        }
      });
    }, observerOptions);

    featureRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      if (observer) observer.disconnect();
    };
  }, []);

  const sampleImages = [
    "https://a.storyblok.com/f/144863/1216x960/df291daa9a/permissions-based-reporting-access.png",
    "https://a.storyblok.com/f/144863/1216x960/ce2eab0766/easy-to-use-goal-setting.png",
    "https://a.storyblok.com/f/144863/1217x960/050dc7ba8d/enhance-care-coordination.png",
    "https://a.storyblok.com/f/144863/1216x960/86fd7e19ea/powerful-analytics-dashboard.png",
  ];

  const switchIndex = (percentage) => {
    if(percentage < 0 && -50)
      setActiveImage(features[0].image)
    else if (percentage <= 25) setActiveImage(sampleImages[0]);
    else if (percentage > 25 && percentage <= 50) setActiveImage(sampleImages[1]);
    else if (percentage > 50 && percentage <= 75) setActiveImage(sampleImages[2]);
    else if (percentage > 75 && percentage <= 100) setActiveImage(sampleImages[3]);
  };

  return (
    <Section className="relative">
      {/* <div className="absolute top-0 left-0 flex w-full h-full">
        <div className="w-5/12 h-full bg-[#f9f9f9]" />
        <div className="w-7/12 h-full bg-vs-lemon-green" />
      </div> */}

      <Container className="relative flex gap-16">
        <div className="flex flex-col flex-1 gap-32 py-16">
          {features.map((feature, index) => (
            index === 1 ? (
              <AppearFeature 
                key={index}
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
                className="cursor-pointer"
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                <PreText>
                  <span className="text-vs-blue">
                    <PhoneIcon />
                  </span>{" "}
                  {feature.pretext}
                </PreText>
                <H2>{feature.title}</H2>
                <Paragraph>{feature.description}</Paragraph>
                <ul className="flex flex-wrap gap-2 mt-4">
                  {feature.items.map((item, i) => (
                    <PillItem key={i}>
                      <span className="text-green-500">
                        <TickIcon />
                      </span>{" "}
                      {item}
                    </PillItem>
                  ))}
                </ul>
              </motion.div>
            )
          ))}
        </div>

        {/* Sticky Image Section */}
        <div className="flex-1 px-12 bg-vs-lemon-green">
          <div className="sticky top-0 py-24 h-[100vh] flex flex-col justify-center">
            <AnimatePresence mode="wait">
              <motion.img
                key={activeImage}
                src={activeImage}
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
  );
}