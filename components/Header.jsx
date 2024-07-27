import Link from "next/link";
import { Button } from "./ui/button";

// Components
import Nav from "./Nav";
import MobileNav from "./MobileNav";

const Header = () => {
  return (
    <header className="py-8 xl:py-12 text-white">
      <div className="container mx-auto flex justify-between items-center ">
        {/* LOGO */}
        <Link href={"/"}>
          <h1 className="text-4xl font-semibold">
            Anmol<span className="text-accent">.</span>
          </h1>
        </Link>

        {/* Desktop Navbar */}
        <div className="hidden xl:flex items-center gap-8">
          <Nav />
          {/* <Link href={"resume"}>
            <Button>Resume</Button>
          </Link> */}
        </div>

        {/* Mobile Navbar */}

        <div className="xl:hidden">
          <MobileNav />
        </div>
      </div>
    </header>
  );
};

export default Header;
