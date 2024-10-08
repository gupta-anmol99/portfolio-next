"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const Photo = () => {
  return (
    <div className="w-full h-full relative">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: 1.7, duration: 0.4, ease: "easeIn" },
        }}
      >
        <div className="w-[200px] h-[200px] xl:w-[458px] xl:h-[458px]   mix-blend-lighten absolute">
          <Image
            src={"/assets/image7.png"}
            priority
            quality={100}
            fill
            alt=""
            className="object-contain"
          />
        </div>

        {/* Image Circle Boundary */}

        <motion.svg
          className="w-[200px] xl:w-[458px] h-[200px] xl:h-[458px]"
          fill="transparent"
          viewBox="0 0 458 458"
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.circle
            cx="229"
            cy="229"
            r="227"
            stroke="#00ff99"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ strokeDasharray: "24 10 0 0" }}
            animate={{
              strokeDasharray: ["15 120 25 25", "16 25 92 72", "4 250 22 22"],
              rotate: [120, 360],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        </motion.svg>
      </motion.div>
    </div>
  );
};

export default Photo;
