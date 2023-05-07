import React from "react";
import Link from "next/link";
import { navigationConfig } from "../config/nav";
import Image from "next/image";
import instagram_logo from "../../public/instagram_logo.png";
import youtube_logo from "../../public/youtube_logo.png";
import twitter_logo from "../../public/twitter_logo.png";
import linkedin_logo from "../../public/linkedin_logo.png";

export const AppFooter = () => {
  return (
    <footer className="bg-white flex justify-start z-50">
      <div className="relative w-[90%] m-auto justify-center md:justify-between flex flex-col md:flex-row gap-2 md:gap-0 items-center py-3 px-2 text-xl">
        <div className="text-3xl md:text-2xl">Evgeniia Namestnikova</div>
        <div className="flex gap-6 content-center">
          <ul className="list-none h-[50px] content-center flex flex-row gap-6 items-center">
            {navigationConfig.mainNav.map((nav) => (
              <li
                key={nav.href}
                className="text-2xl  md:text-xl inline-block relative pr-5 before:content-['/'] before:absolute before:top-1/2 before:-translate-y-1/2 before:right-0 before:decoration-[rgba(0,0,0,0.322)] last:pr-0 last-of-type:before:hidden"
              >
                <Link
                  className="text-black/40 hover:text-black"
                  href={nav.href}
                >
                  {nav.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex gap-4">
          <div>
            <a href="https://www.instagram.com/sunmay.illust/">
              <Image src={instagram_logo} width={35} height={35} />
            </a>
          </div>
          <div>
            <a href="https://www.egor.love">
              <Image src={twitter_logo} width={35} height={35} />
            </a>
          </div>
          <div>
            <a href="https://www.youtube.com/channel/UCvpdGE-L52LVdFtbLZByJZw">
              <Image src={youtube_logo} width={35} height={35} />
            </a>
          </div>
          <div>
            <a href="https://ca.linkedin.com/in/evgeniia-namestnikova-9914bb230">
              <Image src={linkedin_logo} width={35} height={35} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
