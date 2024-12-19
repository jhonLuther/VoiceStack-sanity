import React, { useRef, useMemo, forwardRef } from "react";
import { AnimatedBeam } from "./animated-beam";
import { cn } from "~/lib/utils";
import ImageLoader from "~/components/common/imageLoader/imageLoader";
import H3 from "~/components/typography/H3";
import LinesIcon from "~/components/icons/LinesIcon";
import VideoPlayer from "~/components/common/VideoPlayer";
import useMediaQuery from "~/utils/mediaQuery";

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
  const isMobile = useMediaQuery(767);
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


  let pmsData = data?.pms || [];

  const chunkItems = (array, size) => {
    const result = [];
    for (let i = 0; i < array.length; i += size) {
      result.push(array.slice(i, i + size));
    }
    return result;
  };

  const gridNumber = isMobile ? 3 : 7;
  const groupedItems = chunkItems(pmsData, gridNumber);


  return (
    <div
      className="relative flex w-full h-full flex-col items-center rounded-lg overflow-hidden"
      ref={containerRef}
    >
      {/* Pms Section */}
      <div className={`${isMobile ? 'w-full' : 'md:max-w-[991px]'} w-full`}>
        <div className="flex p-2 items-center justify-center rounded-t-[20px] bg-gradient-to-b from-purple-50 to-purple-50 text-base font-semibold">
          <H3 className="text-[#4A3CE1] font-semibold">PMS</H3>
        </div>
        {/* <div className={`grid pr-6  pl-6 pt-3 pb-3  ${isMobile ? 'grid-cols-3' : 'grid-cols-7 '} */}
        {/* <div className={`grid pr-6  pl-6 pt-3 pb-3  ${isMobile ? 'grid-cols-3' : 'grid-cols-7 '}
         [&>*:nth-child(n-8)]:pb-4 [&>*:nth-child(n+8)]:pt-4  [&>*:nth-child(n+8)]:!pb-0 
         [&>*:nth-child(n)]:border-r  [&>*:nth-child(7)]:!border-r-0 [&>*:nth-child(14)]:!border-r-0
         
         [&>*:nth-child(n+8)]:border-t  border-gray-100  relative z-10 rounded-b-[20px]  bg-white shadow-lg`}> */}
        <div className="flex flex-col  px-3 border-gray-100  relative z-10 rounded-b-[20px]  bg-white shadow-lg ">
          {groupedItems.map((pmss, outerIndex) => {
            return (
              isMobile && outerIndex >= 3 ? null :
                <div key={outerIndex} className="flex border-t py-2 border-gray-100  first:border-none">
                  {pmss && pmss.map((pmsItem, innerIndex) => {
                    return (
                      <div
                        key={innerIndex}
                        ref={pmsRefs[innerIndex]}
                        className="md:max-w-[172px] border-r border-gray-100  last:border-none flex flex-1  "
                      >
                        <ImageLoader
                          className="flex justify-center h-20 w-full "
                          imageClassName={`!object-contain ${isMobile ? 'h-10' : 'h-20'} w-auto`}
                          image={pmsItem.image}
                          fixed={false}
                        />
                      </div>
                    );
                  })}
                </div>
            );
          })}
        </div>
      </div>

      <div className="flex flex-col items-center justify-start md:hidden">
        <div
          id="center-image"
          ref={centerRef}
          className="max-w-[200px] max-h-[200px] flex items-center justify-center z-10"
        >
          <ImageLoader
            className="flex justify-center rounded-[20px]"
            imageClassName="!w-auto max-w-full"
            image={data.integrationImage}
            fixed={false}
          />
        </div>
      </div>

      {/* CRM and PMS Sections */}
      <div className="flex gap-8 md:gap-0 justify-center md:justify-between w-full items-center md:mt-14 relative pb-4">
        {/*  */}
        <div className={`flex flex-col relative gap-5 ${isMobile && 'flex-1 max-w-[148px]'} z-10 rounded-[20px] border border-gray-100 bg-white shadow-lg`}>
          <div className="flex p-2 items-center justify-center rounded-t-[20px] bg-gradient-to-b from-purple-50 to-purple-50 text-base font-semibold">
            <H3 className="text-[#4A3CE1] font-semibold">Analytics</H3>
          </div>
          <div className="flex flex-col px-3">
          {data.analytics?.map((analytic, index) => (
            <div
              key={index}
              ref={analyticsRefs[index]}
              className="md:max-w-[172px]  border-b  border-gray-100 last:border-none  flex z-10"
            >
              <ImageLoader
                className="flex justify-center h-20 w-full"
                imageClassName={`!object-contain ${isMobile ? 'h-10' : 'h-20'} w-auto`}
                image={analytic.image}
                fixed={false}
              />
            </div>
          ))}
          </div>


        </div>

        {/* Center Image */}


        {/* {!isMobile && */}
        {/* <> */}
        <div className={`absolute top-[-190px] md:top-[-132px] lg:top-[-163px] left-1/2 transform -translate-x-1/2 ${isMobile ? 'md:w-[300px]' : 'md:w-[980px]'} lg:w-[1106px]`}>
          {/* <LinesIcon /> */}
          <VideoPlayer />
        </div>
        <div className="md:flex hidden flex-col items-center justify-start">
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
        {/* </>} */}

        <div className={`flex flex-col gap-5 z-10  ${isMobile && 'flex-1 max-w-[148px]'} rounded-[20px] border border-gray-100 bg-white shadow-lg`}>
          <div className="flex p-2 items-center justify-center rounded-t-[20px] bg-gradient-to-b from-purple-50 to-purple-50 text-base font-semibold">
            <H3 className="text-[#4A3CE1] font-semibold">CRM</H3>
          </div>
          <div className="flex flex-col px-3">
            {data.crm?.map((crms, index) => (
              <div
                key={index}
                ref={crmRefs[index]}
                className="md:max-w-[172px]  border-b  border-gray-100 last:border-none flex z-10"
              >
                <ImageLoader
                  className="flex justify-center h-20 w-full"
                  imageClassName={`!object-contain ${isMobile ? 'h-10' : 'h-20'} w-auto`}
                  image={crms.image}
                  fixed={false}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
