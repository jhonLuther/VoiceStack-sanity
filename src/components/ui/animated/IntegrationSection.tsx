import React, { useRef, useMemo, forwardRef } from "react";
import { AnimatedBeam } from "./animated-beam";
import { cn } from "~/lib/utils";
import ImageLoader from "~/components/common/imageLoader/imageLoader";
import H3 from "~/components/typography/H3";
import LinesIcon from "~/components/icons/LinesIcon";
import VideoPlayer from "~/components/common/VideoPlayer";

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
      className="relative flex w-full h-full flex-col items-center rounded-lg overflow-hidden"
      ref={containerRef}
    >
      {/* Analytics Section */}
      <div className="md:max-w-[1050px] w-full">
        <div className="flex p-2 items-center justify-center rounded-t-[20px] bg-gray-300 text-base font-semibold">
          <H3 className="text-gray-600">PMS</H3>
        </div>
        <div className="flex  flex-wrap relative  justify-center z-10 rounded-b-[20px] border border-gray-100 bg-white shadow-lg">
          {data.analytics?.map((analytic, index) => (
            <div
              key={index}
              ref={analyticsRefs[index]}
              className="md:max-w-[172px] flex z-10"
            >
              <ImageLoader
                className="flex justify-center rounded-[20px]"
                imageClassName="!w-auto"
                image={analytic.image}
                fixed={false}
              />
            </div>
          ))}
        </div>
      </div>

      {/* CRM and PMS Sections */}
      <div className="flex justify-between w-full items-center mt-14 relative">
        <div className="flex flex-col relative gap-5 z-10 rounded-[20px] border border-gray-100 bg-white shadow-lg">
          <div className="flex p-2 items-center justify-center rounded-t-[20px] bg-gray-300 text-base font-semibold">
            <H3 className="text-gray-600">Analytics</H3>
          </div>
          {data.crm?.map((crms, index) => (
            <div
              key={index}
              ref={crmRefs[index]}
              className="md:max-w-[172px] flex z-10"
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

        <div className="absolute md:top-[-107px] lg:top-[-145px] left-1/2 transform -translate-x-1/2 w-full md:w-[980px] lg:w-[1106px]">
          {/* <LinesIcon /> */}
        <VideoPlayer/>
        </div>
        <div className="flex flex-col items-center justify-start">
          <div className="flex gap-16">
            {topPointRefs.map((ref, index) => (
              <div
                key={`top-point-${index}`}
                ref={ref}
                className="flex flex-wrap justify-center rounded-[20px] z-10 w-1 h-1"
              />
            ))}
          </div>

          <div
            id="center-image"
            ref={centerRef}
            className="md:max-w-[250px] md:max-h-[250px] flex items-center justify-center z-10"
          >
            <ImageLoader
              className="flex justify-center rounded-[20px]"
              imageClassName="!w-auto"
              image={data.integrationImage}
              fixed={false}
            />
          </div>
        </div>

        <div className="flex flex-col gap-5 z-10 rounded-[20px] border border-gray-100 bg-white shadow-lg">
          <div className="flex p-2 items-center justify-center rounded-t-[20px] bg-gray-300 text-base font-semibold">
            <H3 className="text-gray-600">CRM</H3>
          </div>
          {data.pms?.map((pmss, index) => (
            <div
              key={index}
              ref={pmsRefs[index]}
              className="md:max-w-[172px] flex  "
            >
              <ImageLoader
                className="flex justify-center h-20 w-full "
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
