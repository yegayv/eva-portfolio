import Image from "next/image";
import buttonShape from "@/src/images/button_shapes/button_shape1.png";
import SketchbookCard from "@/src/components/gallery-cards/sketchbook-card";

const SketchbooksPage = () => {
  return (
    <main className="container flex justify-center items-center flex-col">
      <div className="relative ">
        <Image className="drop-shadow-2xl" src={buttonShape} width={650} />
        <div className="absolute inset-0 grid place-content-center w-full h-full z-10 ">
          <h1 className="text-6xl">Sketchbook</h1>
        </div>
      </div>
      <div className="flex flex-col justify-center w-full gap-5">
        <SketchbookCard />
        <SketchbookCard />
        <SketchbookCard />
        <SketchbookCard />
        <SketchbookCard />
        <SketchbookCard />
        <SketchbookCard />
        <SketchbookCard />
      </div>
    </main>
  );
};

export default SketchbooksPage;
