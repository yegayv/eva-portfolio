import React from "react";
import bg from "../../../../../public/bg_white.png";
import portrait from "../../../../../public/portrait.png";
import Image from "next/image";
const AnimationsPage = () => {
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
                <h1 className="text-7xl ">Animations</h1>
                <div className="flex flex-col gap-16">
                  <p className="text-xs sm:text-sm lg:text-3xl font-extralight text-center ">
                    Evgeniia is a skilled animator, bringing her characters and
                    stories to life through movement and action. She has created
                    animations for a variety of clients, including children's TV
                    shows, educational videos, and promotional materials. Her
                    animations are engaging, whimsical, and full of personality.
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

export default AnimationsPage;
