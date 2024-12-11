"use client";

import React, { forwardRef, useRef } from "react";
import { AnimatedBeam } from "./animated-beam";
import { cn } from "~/lib/utils";
import ImageLoader from "~/components/common/imageLoader/imageLoader";

const Circle = forwardRef<
  HTMLDivElement,
  { className?: string; children?: React.ReactNode }
>(({ className, children }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        "z-10 flex size-12 items-center justify-center rounded-full bg-white p-3",
        className
      )}
    >
      {children}
    </div>
  );
});

Circle.displayName = "Circle";

export function AnimatedBeamDemo({ data }: any) {
  const containerRef = useRef<HTMLDivElement>(null);
  const centerRef = useRef<HTMLDivElement>(null);

  // Using arrays to store refs
  const analyticsRefs = [];
  const crmRefs = [];
  const pmsRefs = [];

  return (
    <div
      className="relative flex w-full flex-col items-center overflow-hidden rounded-lg"
      ref={containerRef}
    >
      {/* Analytics Section */}
      <div className="flex flex-wrap justify-center bg-gray-50 rounded-lg z-20">
        {data.analytics?.map((analytic, index) => {
          const randomRef = useRef<HTMLDivElement>(null);
          analyticsRefs.push(randomRef);
          return (
            <div
              key={index}
              ref={randomRef}
              className="md:max-w-[172px] flex z-20"
            >
              <ImageLoader
                className="flex justify-center rounded-lg"
                imageClassName="!w-auto"
                image={analytic.image}
                fixed={false}
              />
            </div>
          );
        })}
      </div>

      {/* CRM and PMS Sections */}
      <div className="flex justify-between w-full mt-10">
        <div className="flex flex-col gap-5 bg-gray-50 rounded-lg z-20">
          {data.crm?.map((crms, index) => {
            const randomRef = useRef<HTMLDivElement>(null);
            crmRefs.push(randomRef);
            return (
              <div key={index} ref={randomRef} className="md:max-w-[172px] flex z-20">
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
        <div
          id="center-image"
          ref={centerRef}
          className="md:max-w-[166px] md:max-h-[166px] flex items-center justify-center z-20"
        >
          <ImageLoader
            className="flex justify-center rounded-lg"
            imageClassName="!w-auto"
            image={data.integrationImage}
            fixed={false}
          />
        </div>

        <div className="flex flex-col gap-5 bg-gray-50 rounded-lg z-20">
          {data.pms?.map((pmss, index) => {
            const randomRef = useRef<HTMLDivElement>(null);
            pmsRefs.push(randomRef);
            return (
              <div key={index} ref={randomRef} className="md:max-w-[172px] flex">
                <ImageLoader
                  className="flex justify-center h-20 w-full"
                  imageClassName="!object-contain h-20 w-auto"
                  image={pmss.image}
                  fixed={false}
                />
              </div>
            );
          })}
        </div>
      </div>

      {/* Animated Beams */}
      {analyticsRefs.map((ref, index) => (
        <AnimatedBeam
          key={`analytics-beam-${index}`}
          containerRef={containerRef}
          fromRef={ref}
          toRef={centerRef}
          curvature={-75}
          endYOffset={-10}
          duration={5} 
          delay={index * 10} 
        />
      ))}
      {crmRefs.map((ref, index) => (
        <AnimatedBeam
          key={`crm-beam-${index}`}
          containerRef={containerRef}
          fromRef={ref}
          toRef={centerRef}
          curvature={-75}
          endYOffset={-10}
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
