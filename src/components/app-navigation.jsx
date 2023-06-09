import Link from "next/link";
import React from "react";
import Image from "next/image";
import { navigationConfig } from "../config/nav";
import portrait from "../../public/portrait.png";

export const AppNavigation = () => {
  return (
    <header className="bg-white sticky top-0 flex justify-start z-50">
      <nav className="relative w-[90%] m-auto content-center justify-between flex py-3 px-2">
        <div>
          <Link className="text-3xl" href="/">
            <Image
              src={portrait}
              alt="Representation of the artist"
              className=""
              width={64}
            />
          </Link>
        </div>
        <div className="flex gap-6 items-center pl-6">
          {navigationConfig.mainNav.map((nav, index) => (
            <Link key={index} className="text-3xl h-fit" href={nav.href}>
              <h1>{nav.title}</h1>
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
};
