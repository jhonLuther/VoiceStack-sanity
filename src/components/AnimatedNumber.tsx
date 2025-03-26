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
    setCount(0); 
    const duration = 1200; 
    let startTime = performance.now();

    const animate = () => {
      const elapsedTime = performance.now() - startTime;
      const progress = Math.min(elapsedTime / duration, 1);

      const easeOutExpo = 1 - Math.pow(2, -10 * progress);
      setCount(easeOutExpo * value);

      if (progress < 1) requestAnimationFrame(animate);
      else setCount(value);
    };

    requestAnimationFrame(animate);
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
        className={`font-bold font-manrope text-4xl md:text-6xl lg:text-7xl text-transparent bg-clip-text bg-gradient-to-r from-[#4A3CE1] to-[#B2ABFF] inline-block ${className}`}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{
          duration: 0.6, 
          ease: [0.25, 0.1, 0.25, 1.0],
          delay: 0, 
        }}
      >
        {formatNumber(count)}
      </motion.span>
    </div>
  );
};

export default AnimatedNumber;
