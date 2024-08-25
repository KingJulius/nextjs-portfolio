import Image from "next/image";
import logoImage from "@/assets/images/logo.png";
import MenuIcon from "@/assets/icons/menu.svg";
import Link from "next/link";

export const Navbar = () => {
  return (
    <div className="bg-black">
      <div className="container">
        <div className="py-4 flex items-center justify-between">
          <div className="relative">
            <div className="absolute w-full top-2 bottom-0 bg-[linear-gradient(to_right,#F87BFF,#F892CF,#FFDD9B,#C2F0B1,#2FD8FE)] blur-md"></div>
            <Image src={logoImage} alt="logo" className="h-12 w-12 relative" />
          </div>
          <div className="border border-white border-opacity-30 h-10 w-10 inline-flex justify-center items-center rounded-lg sm:hidden">
            <MenuIcon className="text-white" />
          </div>
          <nav className="gap-6 items-center hidden sm:flex">
            <Link
              href="#"
              className="text-opacity-60 text-white hover:text-opacity-100 transition"
            >
              Home
            </Link>
            <Link
              href="#"
              className="text-opacity-60 text-white hover:text-opacity-100 transitio"
            >
              About
            </Link>
            <Link
              href="#"
              className="text-opacity-60 text-white hover:text-opacity-100 transitio"
            >
              Skills
            </Link>
            <Link
              href="#"
              className="text-opacity-60 text-white hover:text-opacity-100 transitio"
            >
              Experience
            </Link>
            <Link
              href="#"
              className="text-opacity-60 text-white hover:text-opacity-100 transitio"
            >
              Projects
            </Link>
            <Link
              href="#"
              className="text-opacity-60 text-white hover:text-opacity-100 transitio"
            >
              Contact
            </Link>
          </nav>
        </div>
      </div>
    </div>
  );
};
