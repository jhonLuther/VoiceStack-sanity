import React, { useRef } from "react";
import { AnimatedBeam } from "./animated-beam";
import { cn } from "~/lib/utils";
import ImageLoader from "~/components/common/imageLoader/imageLoader";

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
      <div className="flex flex-wrap justify-center bg-gray-50 rounded-lg z-20">
        {data.analytics?.map((analytic, index) => (
          <div
            key={index}
            ref={analyticsRefs[index]} // Use refs set up outside the map
            className="md:max-w-[172px] flex z-20"
          >
            <ImageLoader
              className="flex justify-center rounded-lg"
              imageClassName="!w-auto"
              image={analytic.image}
              fixed={false}
            />
          </div>
        ))}
      </div>

      {/* CRM Section */}
      <div className="flex justify-between w-full items-center mt-10">
        <div className="flex flex-col gap-5 bg-gray-50 rounded-lg z-20">
          {data.crm?.map((crms, index) => (
            <div
              key={index}
              ref={crmRefs[index]} // Use refs set up outside the map
              className="md:max-w-[172px] flex z-20"
            >
              <ImageLoader
                className="flex justify-center h-20 w-full"
                imageClassName="!object-contain h-20 w-auto"
                image={crms.image}
                fixed={false}
              />
            </div>
          ))}
        </div>

        {/* Center Image */}
        <div className="flex flex-col items-center justify-start">
          <div className="flex gap-16">
            <div ref={topPoint1} className="flex flex-wrap justify-center bg-red-500 rounded-lg z-20 w-1 h-1" />
            <div ref={topPoint2} className="flex flex-wrap justify-center bg-red-500 rounded-lg z-20 w-1 h-1" />
            <div className="mt-6">
              <div ref={topPoint3} className="flex flex-wrap justify-center bg-red-500 rounded-lg z-20 w-1 h-1" />
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

        {/* PMS Section */}
        <div className="flex flex-col gap-5 bg-gray-50 rounded-lg z-20">
          {data.pms?.map((pmss, index) => (
            <div key={index} ref={pmsRefs[index]} className="md:max-w-[172px] flex">
              <ImageLoader
                className="flex justify-center h-20 w-full"
                imageClassName="!object-contain h-20 w-auto"
                image={pmss.image}
                fixed={false}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Animated Beams */}
      {analyticsRefs.slice(0, 7).map((ref, index) => (
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
      ))}
    </div>
  );
}
