import Image from "next/image";
import Link from "next/link";
import React from "react";
import bg from "@/../public/bg_white.png";

const IllustrationCard = ({ illustration }) => {
  return (
    <Link
      href={`/gallery/illustrations/${illustration.title}`}
      className="text-2xl"
    >
      <div className="hover:scale-[1.05] transition-all h-[740px] gap-12">
        <div className="absolute max-w-4xl">
          <Image
            src={bg}
            alt="White background image"
            width={"100%"}
            height={1200}
            className="drop-shadow-2xl"
          />
        </div>
        <div className="flex h-[740px] gap-12 relative max-w-4xl">
          <div className="h-full flex flex-col justify-between">
            <div className="w-[600px] flex flex-col gap-3">
              <h2 className="text-6xl">{illustration.title}</h2>
              <p className="text-2xl">{illustration.description}</p>
            </div>
            <div className="flex flex-col text-center items-start gap-5">
              <p>See more</p>
              <Image
                src={illustration.imageSources[0]}
                width={600}
                height={300}
                alt="test"
              ></Image>
            </div>
          </div>
          <div>
            <Image
              src={illustration.imageSources[1]}
              width={600}
              height={400}
              alt="test"
              className="h-full object-cover object-center"
            ></Image>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default IllustrationCard;
