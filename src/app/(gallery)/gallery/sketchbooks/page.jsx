import React from "react";
import bg from "../../../../../public/bg_white.png";
import portrait from "../../../../../public/portrait.png";
import Image from "next/image";
import buttonShape from "@/src/images/button_shapes/button_shape1.png";
const SketchbooksPage = () => {
  return (
    <main className="container flex justify-center items-center">
      <div className="relative ">
        <Image className="drop-shadow-2xl" src={buttonShape} width={650} />
        <div className="absolute inset-0 grid place-content-center w-full h-full z-10 ">
          <p className="text-6xl">Sketchbook</p>
        </div>
      </div>
    </main>
  );
};

export default SketchbooksPage;
