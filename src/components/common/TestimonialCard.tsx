import Image from "next/image";
import React, { forwardRef, useState } from "react";
import { VideoItem, VideoModal } from "./VideoModal";
import TickIcon from "../icons/TickIcon";
import VideoPlayIcon from "../icons/VideoPlayIcon";

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

    const topValue = 160 + (index * 20);

  return (
    // <div className="top-40 sticky h-[100vh]" ref={ref} id={`${index}`}>
    <div className={`sticky testimonial-card`} ref={ref} id={`${index}`}  data-index={index}
      style={{
        top:topValue,
        transform: isSticky ? `scale(${scale})` : "scale(1)",
        // opacity: isSticky ? 1 : 0.8,
        transition: "transform 0.3s ease, opacity 0.3s ease",
      }}
    >

      <div className={`rounded-[20px] shadow-md max-w-[1032px] mx-auto ${index % 2 === 0 ? 'bg-white': 'bg-gray-100'}`}>

        <div className="flex">
          {/* Image */}
          {data?.image?.url && (
            <div className="flex-1 max-w-[343px] overflow-hidden relative">
              <Image
                width={293}
                height={407}
                src={data.image.url}
                alt={`${data?.name || "Testimonial"}`}
                className="w-full h-full object-cover"
              />
              {data?.video && data.video.videoId && (
                <div className="cursor-pointer absolute bottom-3 right-3 flex gap-2 font-medium text-base
                  items-center rounded-l-full py-2 pr-4 pl-2 bg-white text-gray-900" onClick={() => onOpenVideo(data.video)}>
                  <span><VideoPlayIcon/></span>Watch
                </div>
              )}
            </div>
          )}
          
          {/* before and after data */}
          {data.before && data.before.length > 0 ?(
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
          ):(
          // {/* message and key features */}
            <div className="flex-1 flex flex-row gap-6 justify-between">
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
          )}
        </div>

        {/* Testimonee Details bottom strip */}
        <div className="flex flex-row items-center gap-8 border-t border-dashed border-gray-300 py-4 px-8 justify-between">
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
                className=""
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
