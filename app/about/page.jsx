"use client";

import { FaHtml5, FaJs, FaCss3, FaReact, FaPython } from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss, SiPytorch } from "react-icons/si";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";

const experience = {
  icon: "/assets/resume/badge.svg",
  title: "Experience",
  items: [
    {
      company: "Arizona State University",
      position: "Research Assistant",
      duration: "2024 - Present",
    },

    {
      company: "Arizona State University",
      position: "Student Researcher",
      duration: "2023 - 2024",
    },

    {
      company: "e2Serv Technologies",
      position: "Software Developer",
      duration: "2021 - 2022",
    },

    {
      company: "Swaayatt Robots",
      position: "Deep Learning Intern",
      duration: "2021",
    },
  ],
};

const education = {
  icon: "/assets/resume/cap.svg",
  title: "Education",
  items: [
    {
      school: "Arizona State University",
      degree: "MS in Computer Engineering",
      duration: "2022 - 2024",
    },

    {
      school: "National Institute of Technology, Bhopal",
      degree: "B.Tech in Electronics and Communication Engineering",
      duration: "2017 - 2021",
    },
  ],
};

const skills = {
  title: "Skills",

  skillList: [
    {
      icon: <SiNextdotjs className="text-5xl" />,
      name: "Next.js",
    },
    {
      icon: <SiTailwindcss className="text-5xl" />,
      name: "Tailwind CSS",
    },
    {
      icon: <FaPython className="text-5xl" />,
      name: "Python",
    },
    {
      icon: <SiPytorch className="text-5xl" />,
      name: "Pytorch",
    },
    {
      icon: <FaReact className="text-5xl" />,
      name: "React.js",
    },
    {
      icon: <FaJs className="text-5xl" />,
      name: "JavaScript",
    },
    {
      icon: <FaHtml5 className="text-5xl" />,
      name: "HTML 5",
    },
    {
      icon: <FaCss3 className="text-5xl" />,
      name: "CSS 3",
    },
  ],
};

const page = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 1.7, duration: 0.4, ease: "easeInOut" },
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs
          defaultValue="experience"
          className="flex flex-col xl:flex-row gap-[60px]"
        >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6 justify-center">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
          </TabsList>

          {/* Content */}
          <div className="min-h-[70vh] w-full">
            {/* Experience */}
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h1 className="text-4xl font-semibold">{experience.title}</h1>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {experience.items.map((item, index) => {
                      return (
                        <li
                          className="bg-[#27272c] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                          key={index}
                        >
                          <span className="text-accent/60">
                            {item.duration}
                          </span>
                          <h3 className="text-2xl max-w-[260px] text-center lg:text-left">
                            {item.position}
                          </h3>
                          <div className="flex mt-5  items-center gap-3">
                            <span className="w-[5px] lg:w-[6px] lg:h-[6px] h-[5px] bg-accent rounded-full"></span>
                            <p className="text-white/60">{item.company}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            {/* education */}
            <TabsContent value="education" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h1 className="text-4xl font-semibold">{education.title}</h1>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {education.items.map((item, index) => {
                      return (
                        <li
                          className="bg-[#27272c] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                          key={index}
                        >
                          <span className="text-accent/60">
                            {item.duration}
                          </span>
                          <h3 className="text-2xl max-w-[260px] text-center lg:text-left">
                            {item.degree}
                          </h3>
                          <div className="flex mt-5  items-center gap-3">
                            <span className="w-[5px] lg:w-[6px] lg:h-[6px] h-[5px] bg-accent rounded-full"></span>
                            <p className="text-white/60">{item.school}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            {/* skills */}
            <TabsContent value="skills" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <div>
                  <h1 className="text-4xl font-semibold">{skills.title}</h1>
                </div>

                <ul className="grid grid-cols-2 lg:grid-cols-4 gap-[30px]">
                  {skills.skillList.map((skill, index) => {
                    return (
                      <li
                        key={index}
                        className="flex flex-col items-center justify-center lg:items-start gap-1 "
                      >
                        <TooltipProvider>
                          <Tooltip>
                            <TooltipTrigger asChild>
                              <div className=" bg-[#27272c] h-[150px] w-[150px] flex items-center justify-center rounded-xl  mx-auto">
                                <span>{skill.icon}</span>
                              </div>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p>{skill.name}</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default page;
