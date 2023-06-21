import Image from "next/image";
import Link from "next/link";
import React from "react";

const IllustrationCard = ({ illustration }) => {
  return (
    <div className="flex h-[740px] max-w-4xl gap-12 hover:scale-[1.05] transition-all">
      <div className="h-full flex flex-col justify-between">
        <div className="w-[600px] flex flex-col gap-3">
          <h2 className="text-6xl">{illustration.title}</h2>
          <p className="text-2xl">{illustration.description}</p>
        </div>
        <div className="flex flex-col text-center items-start gap-5">
          <Link
            href={`/gallery/illustrations/${illustration.title}`}
            className="text-2xl"
          >
            See more
          </Link>
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
  );
};

export default IllustrationCard;
