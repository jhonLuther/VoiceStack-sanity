import Image from "next/image";
import React from "react";

type TestimonialCardProps = {
  data: any; // Allow any type for the `data` prop
};

const TestimonialCard: React.FC<TestimonialCardProps> = ({ data }) => {
  return (
    <div
      className="p-4 rounded-lg shadow-md top-[100px] sticky bg-white flex gap h-[100vh]"
      
    >
      {/* Image */}
      {data?.image?.url && (
        <div className="flex-1 max-w-[293px]"
          style={{ backgroundColor: data?.bgColor || "#ffffff" }}>

          <Image
            width={293}
            height={407}
            src={data.image.url}
            alt={`${data?.name || "Testimonial"}`}
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
      )}
      <div className="py-8 pt-12 pb-4 flex-1">

        {/* Heading */}
        <h3 className="mt-4 text-lg font-bold">{data?.heading || "No heading"}</h3>

        {/* Description */}
        <p
          className="mt-2 text-gray-700 [&_span]:text-blue-500"
          dangerouslySetInnerHTML={{ __html: data?.description || "" }}
        ></p>

        {/* User Details */}
        <div className="mt-4">
          <p className="text-md font-semibold">{data?.name || "Unknown Name"}</p>
          <p className="text-sm text-gray-500">
            {data?.designation || "No designation"}
          </p>
          <p className="text-sm text-gray-500">
            {data?.place || "Unknown Place"},{" "}
            {data?.region || "Unknown Region"} -{" "}
            {data?.locations || "Unknown Locations"} locations
          </p>
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


      {/* Video (Optional) */}
      {/* {data?.video?.videoId && (
        <a
          href={`https://embed.vidyard.com/watch/${data.video.videoId}`}
          target="_blank"
          rel="noopener noreferrer"
          className="block mt-4 text-blue-500 underline"
        >
          Watch Video
        </a>
      )} */}
    </div>
  );
};

export default TestimonialCard;
