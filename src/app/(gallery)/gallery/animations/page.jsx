import React from "react";
import buttonShape from "@/src/images/button_shapes/button_shape2.png";
import Image from "next/image";
import AnimationCard from "@/src/components/gallery-cards/animation-card";
import { AnimationConfig } from "@/src/config/animation.js";
import Link from "next/link";

const AnimationsPage = () => {
  return (
    <main className="container flex flex-col justify-center items-center">
      <div className="relative ">
        <Image className="drop-shadow-2xl" src={buttonShape} width={650} />
        <div className="absolute inset-0 grid place-content-center w-full h-full z-10 ">
          <p className="text-6xl">Animation</p>
        </div>
      </div>
      <div className="flex flex-col gap-12 h-full">
        {AnimationConfig.initialData.map((animation, index) => (
          <section
            id={`animation-${index}`}
            className="h-screen flex flex-col justify-center items-center"
            key={index}
          >
            <div className="h-[75%] flex flex-col gap-12">
              <AnimationCard animation={animation} />
              {index != AnimationConfig.initialData.length - 1 && (
                <div className="flex items-center"></div>
              )}
            </div>
          </section>
        ))}
      </div>
    </main>
  );
};

export default AnimationsPage;
