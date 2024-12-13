import React, { useRef, useMemo, forwardRef } from "react";
import { AnimatedBeam } from "./animated-beam";
import { cn } from "~/lib/utils";
import ImageLoader from "~/components/common/imageLoader/imageLoader";
import H3 from "~/components/typography/H3";
import LinesIcon from "~/components/icons/LinesIcon";

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
  const topPointRefs = useMemo(
    () => Array.from({ length: 6 }, () => React.createRef<HTMLDivElement>()),
    []
  );

  const analyticsRefs = useMemo(
    () => data.analytics?.map(() => React.createRef<HTMLDivElement>()) || [],
    [data.analytics]
  );
  const crmRefs = useMemo(
    () => data.crm?.map(() => React.createRef<HTMLDivElement>()) || [],
    [data.crm]
  );
  const pmsRefs = useMemo(
    () => data.pms?.map(() => React.createRef<HTMLDivElement>()) || [],
    [data.pms]
  );

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
        <div className="flex flex-wrap justify-center z-20 rounded-lg border border-gray-100 bg-white shadow-lg">
          {data.analytics?.map((analytic, index) => (
            <div
              key={index}
              ref={analyticsRefs[index]}
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
      </div>

      {/* CRM and PMS Sections */}
      <div className="flex justify-between w-full items-center mt-14">
        <div className="flex flex-col gap-5 z-10 rounded-lg border border-gray-100 bg-white shadow-lg">
          <div className="flex p-2 items-center justify-center rounded-t-lg bg-gray-300 text-base font-semibold">
            <H3 className="text-gray-600">Analytics</H3>
          </div>
          {data.crm?.map((crms, index) => (
            <div
              key={index}
              ref={crmRefs[index]}
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
        <div className="relative">
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/3">
            <LinesIcon />
          </div>
          <div className="flex flex-col items-center justify-start">
            <div className="flex gap-16">
              {topPointRefs.map((ref, index) => (
                <div
                  key={`top-point-${index}`}
                  ref={ref}
                  className="flex flex-wrap justify-center rounded-lg z-20 w-1 h-1"
                />
              ))}
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
          {data.pms?.map((pmss, index) => (
            <div
              key={index}
              ref={pmsRefs[index]}
              className="md:max-w-[172px] flex"
            >
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
    </div>
  );
}
