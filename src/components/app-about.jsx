import React from "react";
import Image from "next/image";
import bg from "../../public/bg_white.png";
import portrait from "../../public/portrait.png";
import about from "../../public/about.png";


export const AppAbout = () => {
  return (
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
            <div className="flex flex-col text-center w-full">
              <Image src={about} alt="The heading for about article" />
              <div className="h-full flex flex-col gap-12">
                <p className="text-xs sm:text-sm lg:text-2xl font-extralight text-center ">
                  My favorite things to create are editorial and children's book
                  illustrations, but actually anything can inspire me to work.
                  My media interests lay in the sphere of traditional materials;
                  I think that textures and wankiness may bring so much mood
                  into the image.
                </p>
                <p className="text-xs sm:text-sm lg:text-2xl font-extralight text-center ">
                  {" "}
                  Let's make something together!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
