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
      duration: "August 2024 - Present",
    },

    {
      company: "Arizona State University",
      position: "Student Researcher",
      duration: "August 2023 - April 2024",
    },

    {
      company: "e2Serv Technologies",
      position: "Software Developer",
      duration: "August 2021 - July 2022",
    },

    {
      company: "Swaayatt Robots",
      position: "Deep Learning Intern",
      duration: "January 2021 - July 2021",
    },
  ],
};

const education = {
  icon: "/assets/resume/cap.svg",
  title: "Education",
  items: [
    {
      school: "Arizona State University",
      degree: "Master of Science in Computer Engineering",
      duration: "August 2022 - May 2024",
    },

    {
      school: "National Institute of Technology, Bhopal",
      degree:
        "Bachelor of Technology in Electronics and Communication Engineering",
      duration: "August 2017 - May 2021",
    },
  ],
};

const skills = {
  title: "Skills",
  description:
    "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus, est. ",

  skillList: [
    {
      icon: <SiNextdotjs />,
      name: "Next.js",
    },
    {
      icon: <SiTailwindcss />,
      name: "Tailwind CSS",
    },
    {
      icon: <FaPython />,
      name: "Python",
    },
    {
      icon: <SiPytorch />,
      name: "Pytorch",
    },
    {
      icon: <FaReact />,
      name: "React.js",
    },
    {
      icon: <FaJs />,
      name: "JavaScript",
    },
    {
      icon: <FaHtml5 />,
      name: "HTML 5",
    },
    {
      icon: <FaCss3 />,
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
        transition: { duration: 1.7, delay: 0.4, ease: "easeInOut" },
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs
          defaultValue="experience"
          className="flex flex-col xl:flex-row gap-[60px]"
        >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
          </TabsList>

          {/* Content */}
          <div>content</div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default page;
