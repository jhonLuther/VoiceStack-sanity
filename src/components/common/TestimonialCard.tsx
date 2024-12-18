import Image from "next/image";
import React, { forwardRef, useState } from "react";
import { VideoItem, VideoModal } from "./VideoModal";

type TestimonialCardProps = {
  data: any;
  index?: number; // Allow any type for the `data` prop
  onOpenVideo?: (video: VideoItem) => void;
};

const TestimonialCard = forwardRef<HTMLDivElement, TestimonialCardProps>(
  ({ data, index, onOpenVideo }, ref) => {

  return (
    <div className="top-40 sticky h-[100vh]" ref={ref} id={`${index}`}>
      <div className="p-4 rounded-lg shadow-md bg-white flex">

        {/* Image */}
        {data?.image?.url && (
          <div className="flex-1 max-w-[293px] self-start rounded-[10px] overflow-hidden"
            style={{ backgroundColor: data?.bgColor || "#ffffff" }}>

            <Image
              width={293}
              height={407}
              src={data.image.url}
              alt={`${data?.name || "Testimonial"}`}
              className="w-full h-full object-cover"
            />
          </div>
        )}
        <div className="px-8 pt-12 pb-4 flex-1 flex flex-col gap-6 justify-between">
          <div className="flex gap-3 flex-col">
            {/* Heading */}
            <h3 className="text-gray-500 font-inter text-base font-medium leading-[110%]">{data?.heading || ""}</h3>

            {/* Description */}
            <p
              className="text-gray-900 font-manrope text-3xl font-bold leading-[120%] [&_span]:text-vs-blue"
              dangerouslySetInnerHTML={{ __html: data?.description || "" }}
            ></p>
          </div>

          {/* User Details */}
          <div className="flex flex-col gap-6">
            <div>
              <p className="text-md font-semibold">{data?.name || "Unknown Name"}</p>
              <p className="text-sm text-gray-500">
                {data?.designation}
              </p>
            </div>
            <div className="flex pt-6 border-t border-dashed border-gray-300 justify-between gap-6">
              <div className="flex gap-6 items-center">
                <div className="flex flex-col gap-1">
                  <span className="text-gray-900 text-base font-semibold leading-[140%]">{data?.place}</span>
                  <span className="text-gray-500 text-base font-semibold leading-[140%]">{data?.region }</span>
                </div>
                {data.locations && (
                  <div className="flex flex-col gap-1">
                    <span className="text-gray-900 text-base font-semibold leading-[140%]">{data?.locations}</span>
                    <span className="text-gray-500 text-base font-semibold leading-[140%]">Locations</span>
                  </div>
                )}
              </div>

            </div>
           
          </div>

          {/* Logo */}
          {/* {data?.logo?.asset?._ref && (
            <Image
              src={`https://cdn.sanity.io/images/${data.logo.asset._ref}`}
              alt="Company Logo"
              className="w-10 h-10 mt-4"
            />
          )} */}
        </div>
      </div>


      {data?.video && data.video.videoId && (
        <div className="text-white cursor-pointer" onClick={() => onOpenVideo(data.video)}>
          {/* Watch Video */}
        </div>
      )}
    
    </div>
  );
});
TestimonialCard.displayName = "TestimonialCard";
export default TestimonialCard;
