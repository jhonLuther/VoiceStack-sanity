import React, { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";

interface AnimatedNumberProps {
  value: number;
  suffix?: string;
  className?: string;
}

const AnimatedNumber = ({ value, suffix = "", className = "" }: AnimatedNumberProps) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const animationStarted = useRef(false);

  useEffect(() => {
    if (!isInView || animationStarted.current) return;
    
    animationStarted.current = true;
    
    // Start from 0
    setCount(0);
    
    // Use requestAnimationFrame for smoother animation
    let startTime: number | null = null;
    const duration = 2000; // 2 seconds duration for smoother animation
    
    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      
      // Use easeOutExpo for smoother ending
      const easeOutExpo = 1 - Math.pow(2, -10 * progress);
      const nextCount = easeOutExpo * value;
      
      setCount(nextCount);
      
      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setCount(value);
      }
    };
    
    requestAnimationFrame(animate);
    
    // Clear animation on unmount
    return () => {
      animationStarted.current = false;
    };
  }, [isInView, value]);

  const formatNumber = (num: number) => {
    if (num >= 1_000_000_000) return `${(num / 1_000_000_000).toFixed(0)}B`;
    if (num >= 1_000_000) return `${(num / 1_000_000).toFixed(0)}M`;
    return `${Math.round(num)}${suffix}`;
  };

  return (
    <div className="flex flex-col items-center">
      <motion.span
        ref={ref}
        className={`font-bold text-4xl md:text-6xl lg:text-7xl text-white ${className}`}
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ 
          duration: 0.8, 
          ease: [0.25, 0.1, 0.25, 1.0],
          delay: 0.1
        }}
      >
        {formatNumber(count)}
      </motion.span>
    </div>
  );
};

export default AnimatedNumber;