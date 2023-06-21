import React from "react";
import bg from "../../../../public/bg_white.png";
import portrait_green from "../../../../public/portrait-green.png";
import Image from "next/image";
import { navigationConfig } from "@/src/config/nav";
import Link from "next/link";
import btnShape3 from "@/src/images/button_shapes/button_shape3.png";
import btnShape2 from "@/src/images/button_shapes/button_shape2.png";
import btnShape1 from "@/src/images/button_shapes/button_shape1.png";

const GalleryPage = () => {
  return (
    <div className="flex flex-col lg:flex-row grow overflow-hidden ">
      <div className="px-5 lg:min-w-[280px] h-full">
        <div className="flex flex-col justify-around items-center h-full gap-12">
          <div className="flex flex-col justify-between items-center gap-10">
            {navigationConfig.sideBar.map((sidebarItem, index) => {
              return (
                <div
                  className="relative flex justify-center items-center"
                  key={index}
                >
                  <Image
                    src={
                      index == 0
                        ? btnShape3
                        : index == 1
                        ? btnShape2
                        : btnShape1
                    }
                    style={
                      index == 0
                        ? { rotate: "0deg" }
                        : index == 1
                        ? { rotate: "-2deg" }
                        : { rotate: "3deg" }
                    }
                    width={400}
                    height={400}
                    alt="button shape"
                    className="drop-shadow-2xl"
                  ></Image>
                  <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center">
                    <Link
                      href={sidebarItem.href}
                      className="relative px-6 py-3 text-black group text-5xl"
                    >
                      <span className="relative ">{sidebarItem.title}</span>
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <main className="hidden lg:flex container  justify-center items-center">
        <div>
          <div className="w-full h-full relative ">
            <Image
              src={bg}
              alt="White background image"
              width={"100%"}
              className=" drop-shadow-2xl"
            />
            <div className="absolute w-full h-full top-0 left-0  px-20 xl:px-36 py-20">
              <div className="flex h-full gap-12 ">
                <Image
                  src={portrait_green}
                  alt="Representation of the artist"
                  className="object-contain w-[40%]"
                  width={500}
                />
                <div className="flex flex-col text-center w-full h-full justify-center gap-5 xl:gap-12">
                  <h1 className="text-2xl xl:text-5xl 2xl:text-7xl">Gallery</h1>
                  <div className="flex flex-col gap-5 xl:gap-16">
                    <p className="text-xs sm:text-sm md:text-lg xl:text-xl 2xl:text-3xl font-extralight text-center ">
                      Welcome to the Gallery section of Evgeniia Namestnikova's
                      portfolio website. Here you'll find a showcase of her
                      work, which is divided into three categories: animations,
                      illustrations, and sketchbooks. Take a look at some of her
                      most exciting projects and see the unique style and skill
                      that she brings to each one.
                    </p>
                    <p className="text-xs sm:text-sm md:text-lg xl:text-xl 2xl:text-3xl font-extralight text-center ">
                      {" "}
                      Let's make something together!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default GalleryPage;
