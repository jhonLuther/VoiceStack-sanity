import Image from "next/image";
import React, { forwardRef, useState } from "react";
import { VideoItem, VideoModal } from "./VideoModal";
import TickIcon from "../icons/TickIcon";
import VideoPlayIcon from "../icons/VideoPlayIcon";
import useMediaQuery from "~/utils/mediaQuery";

type TestimonialCardProps = {
  data: any;
  index?: number; 
  onOpenVideo?: (video: VideoItem) => void;
  activeIndex?: number | null;
  scale?:any;
  isSticky?: boolean;
};

const TestimonialCard = forwardRef<HTMLDivElement, TestimonialCardProps>(
  ({ data, index, activeIndex, isSticky, scale, onOpenVideo }, ref) => {
    
    const isMobile = useMediaQuery(767);

    const topValue = isMobile ? 80 + (index * 20) : 160 + (index * 20);

  
  const video  = data.video
  // console.log({testimonial: data})
  return (
    // <div className="top-40 sticky h-[100vh]" ref={ref} id={`${index}`}>
    <div className={`md:sticky testimonial-card`} ref={ref} id={`${index}`}  data-index={index}
      style={{
        top:topValue,
        transform: (isSticky && !isMobile) ? `scale(${scale})` : "scale(1)",
        // opacity: isSticky ? 1 : 0.8,
        transition: "transform 0.3s ease, opacity 0.3s ease",
      }}
    >

      <div className={`rounded-[20px] shadow-md max-w-[1032px] mx-auto ${index % 2 === 0 ? 'bg-white': 'bg-white'}`}>

        <div className="flex flex-col md:flex-row">
          {/* Image */}
          {data?.image?.url && (
            <div className="flex-1 md:max-w-[250px] lg:max-w-[343px] overflow-hidden relative self-end">
              <Image
                width={293}
                height={407}
                src={data.image.url}
                alt={`${data?.name || "Testimonial"}`}
                className="w-full h-full object-cover"
              />
              {/* {data?.video[0] && data.video[0].videoId && (
                <div className="cursor-pointer absolute bottom-3 right-3 flex gap-2 font-medium text-base
                  items-center rounded-full py-2 pr-4 pl-2 bg-white text-gray-900 shadow-[0px_4px_20px_0px_rgba(0,0,0,0.20)]" onClick={() => onOpenVideo(data.video[0])}>
                  <span><VideoPlayIcon/></span>Watch
                </div>
              )} */}
              {data?.video[0] && data.video[0].videoId && (
                <div className="cursor-pointer absolute bottom-3 right-3 flex gap-2 font-medium text-base
                  items-center rounded-full py-2 pr-4 pl-2 bg-white text-gray-900 shadow-[0px_4px_20px_0px_rgba(0,0,0,0.20)]" onClick={() => onOpenVideo(data.video[0])}>
                  <span><VideoPlayIcon/></span>Watch
                </div>
              )}
            </div>
          )}
          
          {/* before and after data */}
          {/* {data.before && data.before.length > 0 ?(
            <div className="flex-1 flex flex-row gap-6 justify-between">
              <div className="flex gap-6 flex-col flex-1 p-8">
                <span className="inline-flex self-start justify-center items-center text-gray-50 text-base 
                leading-[1.1] px-4 py-2 rounded-[30px] bg-gray-500">Before</span>
                <ul className="flex flex-col gap-4">
                  {data.before.map((item:any, index:number) => {
                    return(
                      <li className="flex gap-2 text-sm text-gray-700 leading-[1.3]" key={index+item}>
                        <span className="flex-shrink-0 mt-[2px] text-gray-400"><TickIcon /></span>{item}
                      </li>
                    )
                  })}
                </ul>
              </div>

              {data.after && data.after.length > 0 && (
                <div className="flex gap-6 flex-col flex-1 p-8 bg-vs-blue bg-opacity-10">
                  <span className="inline-flex self-start justify-center items-center text-gray-50 text-base 
                  leading-[1.1] px-4 py-2 rounded-[30px] bg-vs-blue">After</span>
                  <ul className="flex flex-col gap-4">
                    {data.after.map((item:any, index:number) => {
                      return(
                        <li className="flex gap-2 text-sm text-gray-700 leading-[1.3]" key={index+item}>
                          <span className="flex-shrink-0 mt-[2px] text-vs-blue"><TickIcon /></span>{item}
                        </li>
                      )
                    })}
                  </ul>
                </div>
              )}
            </div>
          ):( */}
          {/* message and key features */}
            {/* <div className="flex-1 flex flex-row gap-6 justify-between">
              <div className="flex gap-3 flex-col flex-1 p-8">
                <h3 className="text-gray-500 font-inter text-base font-medium leading-[110%]">{data?.heading || ""}</h3>
                <p
                  className="text-gray-900 font-manrope text-3xl font-bold leading-[120%] [&_span]:text-vs-blue"
                  dangerouslySetInnerHTML={{ __html: data?.description || "" }}
                ></p>
              </div>

              {data.keyFeatures && data.keyFeatures.length > 0 && (
                <div className="flex-1 flex flex-col p-8 gap-8 border-l border-gray-200">
                    <h3 className="text-gray-500 font-inter text-base font-medium leading-[110%]">Key Features</h3>
                    <ul className="flex flex-wrap gap-3">
                      {data.keyFeatures.map((item:any, index:number) => {
                        return(
                          <li key={index+item} className="flex items-center justify-center px-2 py-[6px] border border-gray-200 text-gray-700 text-sm leading-[1.3] rounded-full">
                            {item}
                          </li>
                        )
                      })}
                      
                    </ul>
                </div>
              )}
            </div>
          )} */}
          <div className="flex-1 flex flex-col md:flex-row justify-between">
            {/*  */}
              <div className="flex flex-col flex-1 p-8">
                {/* <h3 className="text-gray-500 font-inter text-base font-medium leading-[110%]">{data?.heading || ""}</h3> */}
                {data.listItems && data.listItems.length > 0 && (
                  data.listItems.map((item:any, index:number) => {
                    return (
                      <div className="py-3 border-b border-gray-200 last:border-none gap-1 flex flex-col" key={index}>
                        <span className="text-gray-900 text-base font-normal leading-[160%]">{item.listHeading}</span>

                        {item.after && (
                          <div className="flex gap-2">
                            {item.before && (
                              <div className="flex gap-2 items-center">
                                <span className="text-gray-900 font-manrope text-[24px] lg:text-[30px] font-bold leading-[1.2]">{item.before}</span>
                                <span className="text-gray-900 font-manrope text-[24px] lg:text-[30px] font-bold leading-[1.2]">{`->`}</span>
                              </div>
                            )}
                            {item.after && (
                              <div className="flex gap-2 items-center">
                                <span className="text-vs-blue font-manrope text-[24px] lg:text-[30px] font-bold leading-[1.2]">{item.after}</span>
                              </div>
                            )}
                          </div>
                        )}
                        {item.description && (
                          <div
                            dangerouslySetInnerHTML={{__html: item.description}}
                            className="[&_span]:text-gray-900 [&_span]:font-medium [&_span]:text-[20px] 
                             text-vs-blue font-manrope text-[24px] lg:text-[30px] font-bold leading-[1.2]"
                          ></div>
                        )}
                      </div>
                    )
                  })
                )}
                {data.testimonialdescription && (
                  <p
                    className="text-gray-900 font-manrope text-[24px] lg:text-3xl font-bold leading-[120%] [&_span]:text-vs-blue"
                    dangerouslySetInnerHTML={{ __html: data?.testimonialdescription 
                       || "" }}
                  ></p>
                )}
              </div>

              {data.keyFeatures && data.keyFeatures.length > 0 && (
                <div className="flex-1 flex flex-col px-6 pt-12 pb-8 gap-8 border-l border-gray-200 md:max-w-[200px] lg:max-w-[270px]">
                    <h3 className="text-gray-500 font-inter text-sm font-medium leading-[110%]">Key Features Used</h3>
                    <ul className="flex flex-wrap gap-3">
                      {data.keyFeatures.map((item:any, index:number) => {
                        return(
                          <li key={index+item} className="flex items-center justify-center px-2 py-[6px] border border-gray-200 text-gray-700 text-sm leading-[1.3] rounded-full">
                            {item}
                          </li>
                        )
                      })}
                      
                    </ul>
                </div>
              )}
            </div>
        </div>

        {/* Testimonee Details bottom strip */}
        <div className="flex flex-col md:flex-row items-center gap-8 border-t border-dashed border-gray-300 py-4 px-8 justify-between">
          {/* name and designation */}
          <div>
            <p className="text-base text-gray-900 font-semibold leading-[140%]">{data?.name || "Unknown Name"}</p>
            <p className="text-sm text-gray-500 font-medium leading-[140%]">
              {data?.designation}
            </p>
          </div>
          {/* region */}
          <div className="flex flex-col gap-1">
            <span className="text-gray-900 text-base font-semibold leading-[140%]">{data?.place}</span>
            <span className="text-gray-500 text-sm font-medium leading-[140%]">{data?.region }</span>
          </div>

          {/* no of locations */}
          {data.locations && (
            <div className="flex flex-col gap-1">
              <span className="text-gray-900 text-base font-semibold leading-[140%]">{data?.locations}</span>
              <span className="text-gray-500 text-sm font-medium leading-[140%]">Locations</span>
            </div>
          )}

          {/* Logo */}
          {data?.logo && data.logo.url && (
            <div className="flex-shrink-0">
              <Image
                src={`${data.logo.url}`}
                alt="Company Logo"
                className="max-w-full"
                width={188}
                height={64}
              />
            </div>
          )}
          
        </div>
      </div>
    
    </div>
  );
});
TestimonialCard.displayName = "TestimonialCard";
export default TestimonialCard;
