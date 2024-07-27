"use client";

import { motion } from "framer-motion";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import { LuExternalLink } from "react-icons/lu";

import Image from "next/image";
import Link from "next/link";

//components
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import SliderBtns from "@/components/SliderBtns";

const papers = [
  {
    num: "01",
    authors:
      "Pulkit Verma, Rushang Karia, Gaurav Vipat, Anmol Gupta, and Siddharth Srivastava",
    title: "Learning AI-System Capabilities under Stochasticity",
    conference: "NeurIPS GenPlan 2023",
    image: "/assets/research/r1.png",
    href: "https://openreview.net/forum?id=boub8VqmZu",
    github: "/research",
  },
  {
    num: "02",
    authors: "Anmol",
    title: "Coming Soon",
    conference: "Coming Soon",
    image: "/assets/research/comingSoonf.jpeg",
    href: "/research",
    github: "/research",
  },
];

const Research = () => {
  const [paper, setPaper] = useState(papers[0]);

  const handleSlideChange = (swiper) => {
    const currentPaperIndex = swiper.activeIndex;
    setPaper(papers[currentPaperIndex]);
  };
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 1.7, duration: 0.4, ease: "easeInOut" },
      }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[30px] h-[50%]">
              {/* num */}
              <div className="text-6xl leading-none font-extrabold text-transparent text-outline">
                {paper.num}
              </div>
              {/* title */}
              <div>
                <h2 className="text-[30px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
                  {paper.title}
                </h2>
                {/* authors */}
              </div>
              <div>
                <p className="text-white/60">{paper.authors}</p>
              </div>
              {/* conference */}
              <div>
                <p className="text-accent">{paper.conference}</p>
              </div>
              {/* border */}
              <div className="border border-white/20"></div>
              {/* Links */}
              <div>
                <Link target="_blank" href={paper.href}>
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger className="rounded-full w-[60px] h-[60px] bg-white/5  flex items-center justify-center group">
                        <BsArrowUpRight className="text-white text-2xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Read Paper</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full xl:w-[50%]">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className="xl:h-[520px] mb-12"
              onSlideChange={handleSlideChange}
            >
              {papers.map((paper, index) => {
                return (
                  <SwiperSlide className="w-full" key={index}>
                    <div className="h-[460px] relative group flex justify-center items-center bg-pink-50/20">
                      {/* Overlay */}
                      <div className="w-full h-full bottom-0 top-0 absolute bg-black/10 z-10"></div>

                      {/* Image */}
                      <div className="w-full h-full">
                        <Image
                          src={paper.image}
                          alt="Picture of the author"
                          className="object-cover"
                          fill
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}

              {/* Slider Button */}
              <SliderBtns
                containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
                btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all"
              />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Research;
