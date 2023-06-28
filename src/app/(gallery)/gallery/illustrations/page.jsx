import React from "react";
import IllustrationCard from "@/src/components/gallery-cards/illustration-card";
import { IllustrationConfig } from "@/src/config/illustration";
import buttonShape from "@/src/images/button_shapes/button_shape3.png";
import Image from "next/image";

const IllustrationsPage = () => {
  return (
    <main className="container flex flex-col justify-center items-center">
      <div className="relative ">
        <Image className="drop-shadow-2xl" src={buttonShape} width={650} />
        <div className="absolute inset-0 grid place-content-center w-full h-full z-10 ">
          <h1 className="text-6xl">Illustration</h1>
        </div>
      </div>
      <div className="flex flex-col gap-12 h-full">
        {IllustrationConfig.initialData.map((illustration, index) => (
          <section
            id={`illustration-${index}`}
            className="h-screen flex flex-col justify-center items-center"
          >
            <div className="h-[75%] flex flex-col gap-12">
              <IllustrationCard illustration={illustration} />
            </div>
          </section>
        ))}
      </div>
    </main>
  );
};

export default IllustrationsPage;
