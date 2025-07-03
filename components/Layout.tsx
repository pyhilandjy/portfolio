import Link from "next/link";

import { ReactNode } from "react";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <nav className="bg-gray-800 p-4 fixed w-full top-0 z-10">
        <div className="container mx-auto flex justify-between">
          <div className="text-white font-bold">Junyong&#39;s Portfolio</div>
          <div>
            <Link
              href="#about-me"
              className="text-gray-300 hover:text-white px-3"
            >
              About Me
            </Link>
            <Link
              href="#career"
              className="text-gray-300 hover:text-white px-3"
            >
              Career
            </Link>
            <Link
              href="#projects"
              className="text-gray-300 hover:text-white px-3"
            >
              Projects
            </Link>
          </div>
        </div>
      </nav>
      <main>{children}</main>
    </div>
  );
};

export default Layout;
