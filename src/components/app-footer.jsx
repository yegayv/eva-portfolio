import React from "react";
import Link from "next/link";
import { navigationConfig } from "../config/nav";
import Image from "next/image";
import evgeniia_namestnikova from "../../public/evgeniia_namestnikova.png";
import instagram_logo from "../../public/instagram_logo.png";
import youtube_logo from "../../public/youtube_logo.png";
import twitter_logo from "../../public/twitter_logo.png";
import linkedin_logo from "../../public/linkedin_logo.png";

export const AppFooter = () => {
  return (
    <footer>
      <div className="footer-containers">
        <div className="footer-image">
          <Image src={evgeniia_namestnikova} alt="Eva Brand" width={400} />
        </div>
        <div className="footer-pages">
          <ul className="footer-links">
            {navigationConfig.mainNav.map((nav) => {
              if (nav.dropdown) {
                return nav.dropdownContent.map((link) => (
                  <li>
                    <Link className="footer-link" href={link.href}>
                      {link.title}
                    </Link>
                  </li>
                ));
              }
              return (
                <li>
                  <Link className="footer-link" href={nav.href}>
                    {nav.title}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="footer-socials">
          <div>
            <a href="https://www.instagram.com/sunmay.illust/">
              <Image src={instagram_logo} />
            </a>
          </div>
          <div>
            <a href="https://www.twitter.com">
              <Image src={twitter_logo} />
            </a>
          </div>
          <div>
            <a href="https://www.youtube.com/channel/UCvpdGE-L52LVdFtbLZByJZw">
              <Image src={youtube_logo} />
            </a>
          </div>
          <div>
            <a href="https://ca.linkedin.com/in/evgeniia-namestnikova-9914bb230">
              <Image src={linkedin_logo} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
