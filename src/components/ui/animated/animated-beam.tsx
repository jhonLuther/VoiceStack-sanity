"use client";

import { RefObject, useEffect, useId, useState } from "react";
import { motion } from "framer-motion";

import { cn } from "~/lib/utils";

export interface AnimatedBeamProps {
  className?: string;
  containerRef: RefObject<HTMLElement>; // Container ref
  fromRef: RefObject<HTMLElement>;
  toRef: RefObject<HTMLElement>;
  curvature?: number;
  useCurves?: boolean;
  reverse?: boolean;
  pathColor?: string;
  pathWidth?: number;
  pathOpacity?: number;
  gradientStartColor?: string;
  gradientStopColor?: string;
  delay?: number;
  duration?: number;
  startXOffset?: number;
  startYOffset?: number;
  endXOffset?: number;
  endYOffset?: number;
  lineType?: string;
}

export const AnimatedBeam: React.FC<AnimatedBeamProps> = ({
  className,
  containerRef,
  fromRef,
  toRef,
  curvature = 0,
  useCurves = true,
  reverse = false, 
  duration = Math.random() * 3 + 4,
  delay = 0,
  pathColor = "gray",
  pathWidth = 2,
  pathOpacity = 0.2,
  gradientStartColor = "#ffaa40",
  gradientStopColor = "#9c40ff",
  startXOffset = 0,
  startYOffset = 0,
  endXOffset = 0,
  endYOffset = 0,
  lineType,
  ...rest
}) => {
  const id = useId();
  const [pathD, setPathD] = useState("");
  const [svgDimensions, setSvgDimensions] = useState({ width: 0, height: 0 });

  // Calculate the gradient coordinates based on the reverse prop
  const gradientCoordinates = reverse
    ? {
        x1: ["90%", "-10%"],
        x2: ["100%", "0%"],
        y1: ["0%", "0%"],
        y2: ["0%", "0%"],
      }
    : {
        x1: ["10%", "110%"],
        x2: ["0%", "100%"],
        y1: ["0%", "0%"],
        y2: ["0%", "0%"],
      };

  useEffect(() => {
    
    const updatePath = () => {
      if (containerRef.current && fromRef.current && toRef.current) {
        const containerRect = containerRef.current.getBoundingClientRect();
        const rectA = fromRef.current.getBoundingClientRect();
        const rectB = toRef.current.getBoundingClientRect();
    
        const svgWidth = containerRect.width;
        const svgHeight = containerRect.height;
        setSvgDimensions({ width: svgWidth, height: svgHeight });
        console.log(containerRect.left)
        const startX =
          rectA.left - containerRect.left + rectA.width / 2 + startXOffset;
        const startY =
          rectA.top - containerRect.top + rectA.height / 2 + startYOffset;
        const endX =
          rectB.left - containerRect.left + rectB.width / 2 + endXOffset;
        const endY =
          rectB.top - containerRect.top + rectB.height / 2 + endYOffset;
    
        const cornerRadius = 20; // Adjust as needed
    
        // Determine the direction of the path
        const isHorizontal = Math.abs(endX - startX) > Math.abs(endY - startY);
        const isLeftToRight = startX < endX;
    
        let d;
    
        // Calculate the distance between the start and end points
        const distanceX = Math.abs(endX - startX);
        const distanceY = Math.abs(endY - startY);
    
        if (!useCurves || distanceX < 50 && distanceY < 50) {
          // If the path is short or curves are not needed, use a straight line
          d = `M ${startX},${startY} L ${endX},${endY}`;
        } else {
          // Otherwise, use curved path logic
          if (isHorizontal) {
            // Horizontal path
            const midX = (startX + endX) / 2;
    
            if (isLeftToRight) {
              // Left to Right
              d = `
                M ${startX},${startY}
                L ${midX - cornerRadius},${startY}
                Q ${midX},${startY} ${midX},${startY + cornerRadius}
                L ${midX},${endY - cornerRadius}
                Q ${midX},${endY} ${midX + cornerRadius},${endY}
                L ${endX},${endY}
              `;
            } else {
              // Right to Left
              d = `
                M ${startX},${startY}
                L ${midX + cornerRadius},${startY}
                Q ${midX},${startY} ${midX},${startY + cornerRadius}
                L ${midX},${endY - cornerRadius}
                Q ${midX},${endY} ${midX - cornerRadius},${endY}
                L ${endX},${endY}
              `;
            }
          } else {
            // Vertical path
            const midY = (startY + endY) / 2;
    
            if (isLeftToRight) {
              // Left to Right
              d = `
                M ${startX},${startY}
                L ${startX},${midY - cornerRadius}
                Q ${startX},${midY} ${startX + cornerRadius},${midY}
                L ${endX - cornerRadius},${midY}
                Q ${endX},${midY} ${endX},${midY + cornerRadius}
                L ${endX},${endY}
              `;
            } else {
              // Right to Left
              d = `
                M ${startX},${startY}
                L ${startX},${midY - cornerRadius}
                Q ${startX},${midY} ${startX - cornerRadius},${midY}
                L ${endX + cornerRadius},${midY}
                Q ${endX},${midY} ${endX},${midY + cornerRadius}
                L ${endX},${endY}
              `;
            }
          }
        }
    
        setPathD(d.trim());
      }
    };

    // Initialize ResizeObserver
    const resizeObserver = new ResizeObserver((entries) => {
      // For all entries, recalculate the path
      for (let entry of entries) {
        updatePath();
      }
    });

    // Observe the container element
    if (containerRef.current) {
      resizeObserver.observe(containerRef.current);
    }

    // Call the updatePath initially to set the initial path
    updatePath();

    // Clean up the observer on component unmount
    return () => {
      resizeObserver.disconnect();
    };
  }, [
    containerRef,
    fromRef,
    toRef,
    curvature,
    startXOffset,
    startYOffset,
    endXOffset,
    endYOffset,
    useCurves
  ]);

  return (
    <svg
      fill="none"
      width={svgDimensions.width}
      height={svgDimensions.height}
      xmlns="http://www.w3.org/2000/svg"
      className={cn(
        "pointer-events-none absolute left-0 top-0 transform-gpu stroke-2",
        className,
      )}
      viewBox={`0 0 ${svgDimensions.width} ${svgDimensions.height}`}
    >
      <path
        d={pathD}
        stroke={pathColor}
        strokeWidth={pathWidth}
        strokeOpacity={pathOpacity}
        strokeLinecap="round"
      />
      <path
        d={pathD}
        strokeWidth={pathWidth}
        stroke={`url(#${id})`}
        strokeOpacity="1"
        strokeLinecap="round"
      />
      <defs>
        <motion.linearGradient
          className="transform-gpu"
          id={id}
          gradientUnits={"userSpaceOnUse"}
          initial={{
            x1: "0%",
            x2: "0%",
            y1: "0%",
            y2: "0%",
          }}
          animate={{
            x1: gradientCoordinates.x1,
            x2: gradientCoordinates.x2,
            y1: gradientCoordinates.y1,
            y2: gradientCoordinates.y2,
          }}
          transition={{
            delay,
            duration,
            ease: [0.16, 1, 0.3, 1], // https://easings.net/#easeOutExpo
            repeat: Infinity,
            repeatDelay: 0,
          }}
        >
          <stop stopColor={gradientStartColor} stopOpacity="0"></stop>
          <stop stopColor={gradientStartColor}></stop>
          <stop offset="32.5%" stopColor={gradientStopColor}></stop>
          <stop
            offset="100%"
            stopColor={gradientStopColor}
            stopOpacity="0"
          ></stop>
        </motion.linearGradient>
      </defs>
    </svg>
  );
};
