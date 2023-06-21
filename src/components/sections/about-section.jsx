import React from "react";
import Image from "next/image";
import bg from "@/../public/bg_white.png";
import portrait from "@/../public/portrait.png";

export const AboutSection = () => {
  return (
    <section
      id="about"
      className="relative h-screen flex items-center justify-center w-full"
    >
      <Image
        src={bg}
        alt="White background image"
        width={"100%"}
        height={600}
        className="drop-shadow-2xl w-[80%]"
      />
      <div className="absolute w-full h-full flex justify-center items-center max-w-screen-lg">
        <Image
          src={portrait}
          alt="Representation of the artist"
          className="object-contain"
          width={500}
        />
        <div className="flex flex-col text-center w-full h-full justify-center gap-12">
          <h1 className="text-7xl">About</h1>
          <div className="flex flex-col gap-16">
            <p className="text-xs sm:text-sm lg:text-2xl font-extralight text-center ">
              Evgeniia, a narrative and editorial illustrator from Russia, is
              currently located in Ontario. Her artwork is a unique blend of
              traditional folklore, modern culture, and elements of nature. She
              never excludes the use of traditional materials, which always
              helps her to create whimsical and dynamic illustrations.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
