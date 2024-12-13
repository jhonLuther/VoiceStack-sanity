import React, { useRef } from "react";
import { AnimatedBeam } from "./animated-beam";
import { cn } from "~/lib/utils";
import ImageLoader from "~/components/common/imageLoader/imageLoader";
import H3 from "~/components/typography/H3";
import LinesIcon from "~/components/icons/LinesIcon";

export function AnimatedBeamDemo({ data }: any) {
  const containerRef = useRef<HTMLDivElement>(null);
  const centerRef = useRef<HTMLDivElement>(null);
  const topPoint1 = useRef<HTMLDivElement>(null);
  const topPoint2 = useRef<HTMLDivElement>(null);
  const topPoint3 = useRef<HTMLDivElement>(null);
  const topPoint4 = useRef<HTMLDivElement>(null);
  const topPoint5 = useRef<HTMLDivElement>(null);
  const topPoint6 = useRef<HTMLDivElement>(null);

  // Initialize refs for dynamic elements
  const analyticsRefs = data.analytics?.map(() => useRef<HTMLDivElement>(null)) || [];
  const crmRefs = data.crm?.map(() => useRef<HTMLDivElement>(null)) || [];
  const pmsRefs = data.pms?.map(() => useRef<HTMLDivElement>(null)) || [];

  return (
    <div
      className="relative flex w-full flex-col items-center overflow-hidden rounded-lg"
      ref={containerRef}
    >
      {/* Analytics Section */}
      <div className="max-w-4xl">
      <div className="flex p-2 items-center justify-center rounded-t-lg bg-gray-300 text-base font-semibold">
         <H3 className="text-gray-600">PMS</H3>
      </div>  
      <div className="flex flex-wrap justify-center z-20  rounded-lg border border-gray-100 bg-white shadow-lg">
       <div className="flex items-center bg-gray-600 text-base font-semibold">
        </div> 
        {data.analytics?.map((analytic, index) => {
          const randomRef = useRef<HTMLDivElement>(null);
          return (
            <div
              key={index}
              ref={crmRefs[index]} // Use refs set up outside the map
              className="md:max-w-[172px] flex z-20"
            >
              <ImageLoader
                className="flex justify-center h-20 w-full"
                imageClassName="!object-contain h-20 w-auto"
                image={analytic.image}
                fixed={false}
              />
            </div>
          );
        })}
      </div>
      </div>

      {/* CRM and PMS Sections */}
      <div className="flex justify-between w-full items-center  mt-14">
        <div className="flex flex-col gap-5 z-10  rounded-lg border border-gray-100 bg-white shadow-lg">
        <div className="flex p-2 items-center justify-center rounded-t-lg bg-gray-300 text-base font-semibold">
         <H3 className="text-gray-600">Analytics</H3>
        </div>  
          {data.crm?.map((crms, index) => {
            const randomRef = useRef<HTMLDivElement>(null);
            crmRefs.push(randomRef);
            return (
              <div key={index}
              ref={crmRefs[index]}
              className="md:max-w-[172px] flex z-20">
                <ImageLoader
                  className="flex justify-center h-20 w-full"
                  imageClassName="!object-contain h-20 w-auto"
                  image={crms.image}
                  fixed={false}
                />
              </div>
            );
          })}
        </div>

        {/* Center Image */}
        <div className="relative ">
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/3">
          <LinesIcon/>
        </div>
        <div className="flex flex-col items-center justify-start">
          <div className="flex gap-16">
            <div ref={topPoint1} className="flex flex-wrap justify-center  rounded-lg z-20 w-1 h-1">

            </div>
            <div ref={topPoint2} className="flex flex-wrap justify-center  rounded-lg z-20 w-1 h-1">

            </div>


            <div className="mt-6">
              <div ref={topPoint3} className="flex flex-wrap justify-center  rounded-lg z-20 w-1 h-1">

              </div>
            </div>

            <div ref={topPoint4} className="flex flex-wrap justify-center  rounded-lg z-20 w-1 h-1">

            </div>
            <div ref={topPoint5} className="flex flex-wrap justify-center  rounded-lg z-20 w-1 h-1">

            </div>
            <div ref={topPoint4} className="flex flex-wrap justify-center bg-red-500 rounded-lg z-20 w-1 h-1" />
            <div ref={topPoint5} className="flex flex-wrap justify-center bg-red-500 rounded-lg z-20 w-1 h-1" />
          </div>

          <div
            id="center-image"
            ref={centerRef}
            className="md:max-w-[250px] md:max-h-[250px] flex items-center justify-center z-20"
          >
            <ImageLoader
              className="flex justify-center rounded-lg"
              imageClassName="!w-auto"
              image={data.integrationImage}
              fixed={false}
            />
          </div>
        </div>
        </div>
       
        <div className="flex flex-col gap-5 z-10 rounded-lg border border-gray-100 bg-white shadow-lg">
        <div className="flex p-2 items-center justify-center rounded-t-lg bg-gray-300 text-base font-semibold">
         <H3 className="text-gray-600">CRM</H3>
        </div> 
          {/* {data.pms?.map((pmss, index) => {
            const randomRef = useRef<HTMLDivElement>(null);
            pmsRefs.push(randomRef);
            return (
              <div key={index} 
              ref={pmsRefs[index]}
              className="md:max-w-[172px] flex">
                <ImageLoader
                  className="flex justify-center h-20 w-full"
                  imageClassName="!object-contain h-20 w-auto"
                  image={pmss.image}
                  fixed={false}
                />
              </div>
            );
          })} */}
        </div>
      </div>

      {/* Animated Beams */}
      {/* {analyticsRefs.slice(0, 7).map((ref, index) => (
        <AnimatedBeam
          key={`analytics-beam-${index}`}
          containerRef={containerRef}
          fromRef={ref}
          toRef={topPoint3}
          curvature={-180}
          endYOffset={0}
          duration={5}
          delay={index * 10}
        />
      ))}
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={centerRef}
        toRef={topPoint3}
        curvature={0}
        endYOffset={0}
        useCurves={false}
        duration={5}
        delay={10}
      />
      {crmRefs.map((ref, index) => (
        <AnimatedBeam
          key={`crm-beam-${index}`}
          containerRef={containerRef}
          fromRef={ref}
          toRef={centerRef}
          curvature={-180}
          endYOffset={0}
          duration={5}
          delay={index * 10}
        />
      ))}
      {pmsRefs.map((ref, index) => (
        <AnimatedBeam
          key={`pms-beam-${index}`}
          containerRef={containerRef}
          fromRef={ref}
          toRef={centerRef}
          curvature={-75}
          endYOffset={-10}
          duration={5}
          delay={index * 10}
        />
      ))} */}
    </div>
  );
}
