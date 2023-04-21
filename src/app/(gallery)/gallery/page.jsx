import React from "react";
import bg from "../../../../public/bg_white.png";
import portrait from "../../../../public/portrait.png";
import Image from "next/image";

const GalleryPage = () => {
  return (
    <main className="container flex justify-center items-center">
      <div>
        <div className="w-full h-full relative">
          <Image src={bg} alt="White background image" width={"100%"} />
          <div className="absolute w-full h-full top-0 left-0  px-36 py-20">
            <div className="flex h-full gap-12">
              <Image
                src={portrait}
                alt="Representation of the artist"
                className=""
                width={500}
              />
              <div className="flex flex-col text-center w-full h-full justify-around ">
                <h1 className="text-7xl ">Gallery</h1>
                <div className="flex flex-col gap-16">
                  <p className="text-xs sm:text-sm lg:text-3xl font-extralight text-center ">
                    Welcome to the Gallery section of Evgeniia Namestnikova's
                    portfolio website. Here you'll find a showcase of her work,
                    which is divided into three categories: animations,
                    illustrations, and sketchbooks. Take a look at some of her
                    most exciting projects and see the unique style and skill
                    that she brings to each one.
                  </p>
                  <p className="text-xs sm:text-sm lg:text-3xl font-extralight text-center ">
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
  );
};

export default GalleryPage;
