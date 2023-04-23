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
          <div className="flex flex-col justify-between items-center gap-10 my-6">
            <Link
              href={"/gallery/sketchbooks"}
              className="relative px-6 py-3 font-bold text-black group text-4xl"
            >
              <span class="absolute inset-0 w-full h-full transition duration-300 ease-out transform -translate-x-2 -translate-y-2 bg-red-300 group-hover:translate-x-0 group-hover:translate-y-0"></span>
              <span class="absolute inset-0 w-full h-full border-4 border-black"></span>
              <span class="relative">Sketchbooks</span>
            </Link>
            <Link
              href={"/gallery/animations"}
              className="relative px-6 py-3 font-bold text-black group text-4xl"
            >
              <span class="absolute inset-0 w-full h-full transition duration-300 ease-out transform -translate-x-2 -translate-y-2 bg-green-300 group-hover:translate-x-0 group-hover:translate-y-0"></span>
              <span class="absolute inset-0 w-full h-full border-4 border-black"></span>
              <span class="relative">Animations</span>
            </Link>
            <Link
              href={"/gallery/illustrations"}
              className="relative px-6 py-3 font-bold text-black group text-4xl"
            >
              <span class="absolute inset-0 w-full h-full transition duration-300 ease-out transform -translate-x-2 -translate-y-2 bg-blue-300 group-hover:translate-x-0 group-hover:translate-y-0"></span>
              <span class="absolute inset-0 w-full h-full border-4 border-black"></span>
              <span class="relative">Illustrations</span>
            </Link>
          </div>
          <div className="flex flex-col justify-center items-center gap-6 my-6">
            <div className="grid grid-cols-2 gap-10">
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
