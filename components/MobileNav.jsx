"use client";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { CiMenuBurger } from "react-icons/ci";

const links = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "About",
    path: "/about",
  },
  {
    name: "Research",
    path: "/research",
  },
  {
    name: "Work",
    path: "/work",
  },
  
  {
    name: "Contact",
    path: "/contact",
  },
];

const MobileNav = () => {
  const pathname = usePathname();
  return (
    <Sheet>
      <SheetTrigger className="flex justify-center items-center ">
        <CiMenuBurger className="text-[32px] text-accent" />
      </SheetTrigger>

      <SheetContent className="flex-col flex">
        <div className="mt-24 mb-20 text-center text-2xl">
          <Link href={"/"}>
            <h1 className="text-4xl font-semibold">
              Anmol<span className="text-accent">.</span>
            </h1>
          </Link>
        </div>

        <nav className="flex flex-col gap-8 justify-center items-center">
          {links.map((link, index) => {
            return (
              <Link
                key={index}
                href={link.path}
                className={`${
                  link.path === pathname &&
                  "text-accent border-b-2 border-accent"
                } text-xl capitalize font-medium hover:text-accent transition-all`}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
