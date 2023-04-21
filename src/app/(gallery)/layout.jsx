import Image from "next/image";
import Link from "next/link";

import evgeniia_namestnikova from "../../../public/evgeniia_namestnikova.png";
import instagram_logo from "../../../public/instagram_logo.png";
import youtube_logo from "../../../public/youtube_logo.png";
import twitter_logo from "../../../public/twitter_logo.png";
import linkedin_logo from "../../../public/linkedin_logo.png";

export default function GalleryLayout({ children }) {
  return (
    <div className="flex ">
      <div className="bg-white h-screen min-w-[360px]">
        <div className="flex flex-col justify-around items-center h-full gap-12">
          <div className="flex flex-col justify-center items-center gap-6 my-6">
            <Link
              href={"/gallery/sketchbooks"}
              className="text-black hover:text-black/40 text-4xl border-2 p-4 rounded-2xl w-[250px]"
            >
              Sketchbooks
            </Link>
            <Link
              href={"/gallery/animations"}
              className="text-black hover:text-black/40 text-4xl border-2 p-4 rounded-2xl w-[250px]"
            >
              Animations
            </Link>
            <Link
              href={"/gallery/illustrations"}
              className="text-black hover:text-black/40 text-4xl border-2 p-4 rounded-2xl w-[250px]"
            >
              Illustrations
            </Link>
          </div>
          <div className="flex flex-col justify-center items-center gap-6 my-6">
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
        </div>
      </div>
      {children}
    </div>
  );
}
