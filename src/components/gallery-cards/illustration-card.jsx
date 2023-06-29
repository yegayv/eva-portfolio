import Image from "next/image";
import Link from "next/link";
import React from "react";
import bg from "@/../public/bg_white.png";

const IllustrationCard = ({ illustration }) => {
  return (
    <Link
      href={`/gallery/illustrations/${illustration.title}`}
      className="text-2xl hover:scale-[1.05] transition-all h-[80%] relative flex flex-col justify-center items-center px-44"
    >
      <Image
        src={bg}
        alt="White background image"
        width={1200}
        height={"100%"}
        className="absolute drop-shadow-2xl flex h-full w-full"
      />
      <div className="flex gap-12 z-10">
        <div className="h-full flex flex-col justify-between gap-3">
          <div className="w-[600px] flex flex-col gap-3">
            <h2 className="text-6xl">{illustration.title}</h2>
            <p className="text-xl">{illustration.description}</p>
          </div>
          <div className="flex flex-col text-center text-lg items-start gap-3">
            <Image
              src={illustration.imageSources[0]}
              width={600}
              height={300}
              alt="test"
              className="rounded-lg"
            ></Image>
          </div>
        </div>
        <Image
          src={illustration.imageSources[1]}
          width={400}
          height={400}
          alt="test"
          className="h-full object-cover object-center rounded-lg"
        />
      </div>
    </Link>
  );
};

export default IllustrationCard;
