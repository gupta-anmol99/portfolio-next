import Link from "next/link";
import { FaLinkedin, FaGithub, FaInstagram, FaTwitter } from "react-icons/fa";

const className =
  "text-accent text-2xl hover:text-accent-hover hover:transition-all duration-500 hover:text-3xl";

const socials = [
  {
    icon: <FaGithub className={className} />,
    link: "https://github.com/gupta-anmol99",
  },
  {
    icon: <FaLinkedin className={className} />,
    link: "https://www.linkedin.com/in/gupta-anmol17/",
  },
  {
    icon: <FaInstagram className={className} />,
    link: "https://www.instagram.com/curious_sapien/",
  },
  {
    icon: <FaTwitter className={className} />,
    link: "/",
  },
];

const Socials = () => {
  return (
    <div className="flex flex-row items-center gap-8">
      {socials.map((social) => {
        return (
          <Link key={social.link} target="_blank" href={social.link}>
            {social.icon}
          </Link>
        );
      })}
    </div>
  );
};

export default Socials;
