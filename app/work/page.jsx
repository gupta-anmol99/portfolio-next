"use client";
import { BsArrowDownRight } from "react-icons/bs";
import Link from "next/link";
import { motion } from "framer-motion";

const works = [
  {
    num: "01",
    title: "Web Development",
    description:
      "Web development using Next.js, React.js, Node.js, Express.js, MongoDB, and more.",
    href: "/work",
  },
  {
    num: "02",
    title: "App Development",
    description: "Mobile app developement using React Native and expo.",
    href: "/work",
  },
  {
    num: "03",
    title: "UI/UX Design",
    description: "UI/UX designing for websited and mobile apps.",
    href: "/work",
  },
  {
    num: "04",
    title: "Blog",
    description:
      "Blogs on mental health and life experiences. I write about my experiences and how I overcame them.",
    href: "/work",
  },
  {
    num: "05",
    title: "Photo Gallery",
    description:
      "As an avid traveller, I have collected a lot of photos. I have a gallery where I showcase my photos.",
    href: "/work",
  },
];

const page = () => {
  return (
    <section className="flex flex-col min-h-[80vh] justify-center py-12 xl:py-0">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 1.7, duration: 0.4, ease: "easeInOut" },
          }}
          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-[60px]"
        >
          {works.map((work, index) => {
            return (
              <div key={index} className="flex-1 flex-col gap-6 flex group">
                <div className="flex w-full justify-between items-center">
                  <div className="text-5xl font-extrabold text-transparent text-outline group-hover:text-outline-hover transition-all duration-500">
                    {work.num}
                  </div>
                  <Link
                    href={work.href}
                    className="border rounded-full bg-white w-[60px] h-[60px] flex items-center justify-center group-hover:bg-accent hover:-rotate-45 transition-all duration-500"
                  >
                    <BsArrowDownRight className="text-primary text-3xl" />
                  </Link>
                </div>
                <h2 className="text-4xl font-semibold group-hover:text-accent transition-all duration-500">
                  {work.title}
                </h2>
                <p className="text-white/60">{work.description}</p>
                <div className="border-b border-white/20 w-full"></div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default page;
