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
          <h1 className="text-7xl font-bold">About</h1>
          <div className="flex flex-col gap-16">
            <p className="text-xs sm:text-sm lg:text-3xl font-extralight text-center ">
              Welcome to the Gallery section of Evgeniia Namestnikova's
              portfolio website. Here you'll find a showcase of her work, which
              is divided into three categories: animations, illustrations, and
              sketchbooks. Take a look at some of her most exciting projects and
              see the unique style and skill that she brings to each one.
            </p>
            <p className="text-xs sm:text-sm lg:text-3xl font-extralight text-center ">
              {" "}
              Let's make something together!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
