import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";
import Link from "next/link";

// Components
import Socials from "@/components/Socials";
import Photo from "@/components/Photo";

const Home = () => {
  return (
    <section className="h-full">
      <div className="container max-auto h-full">
        <div className="flex flex-col xl:flex-row justify-between items-center xl:pt-8 xl:pb-24">
          {/* Text about me */}
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span className="text-xl">Roboticist & <br />Software Developer</span>
            <h1 className="h1 mb-6">
              Hi, I'm <br /> <span className="text-accent">Anmol Gupta</span>
            </h1>
            <p className="text-white/80 mb-9 max-w-[500px] text-center xl:text-left">
            I am a Ph.D. student at Arizona State University, where I work under the guidance of Dr. Nakul Gopalan. My research focuses on the integration of robotics with vision systems. Additionally, I am a software developer with experience in full-stack and mobile development. 
            </p>
            {/* Button and Socials */}
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <Link
                target="_blank"
                href={
                  "https://drive.google.com/file/d/1xNUNZhI7aCFmQpqA9aCBTb3qeNjc9KtE/view?usp=drive_link"
                }
              >
                <Button
                  variant="outline"
                  size="md"
                  className="uppercase items-center gap-2 flex"
                >
                  <span>Resume</span>
                  <FiDownload className="text-xl" />
                </Button>
              </Link>
              <div className="mb-8 xl:mb-0">
                <Socials />
              </div>
            </div>
          </div>
          {/* My Photo */}
          <div className="order-1 xl:order-none mb-3 "><Photo /></div>
        </div>
      </div>
    </section>
  );
};

export default Home;
