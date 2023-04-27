import React from "react";
import IllustrationCard from "@/src/components/gallery-cards/illustration-card";
import { IllustrationConfig } from "@/src/config/illustration";
import Link from "next/link";
import buttonShape from "@/src/images/button_shapes/button_shape3.png";
import Image from "next/image";

const IllustrationsPage = () => {
  return (
    <main className="container flex flex-col justify-center items-center">
      <div className="relative ">
        <Image className="drop-shadow-2xl" src={buttonShape} width={650} />
        <div className="absolute inset-0 grid place-content-center w-full h-full z-10 ">
          <p className="text-6xl">Illustration</p>
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
              {index != IllustrationConfig.initialData.length - 1 && (
                <div className="flex items-center before:h-[3px] before:flex-1  before:bg-black before:content-[''] after:h-[3px] after:flex-1 after:bg-black  after:content-['']">
                  <Link
                    href={`/gallery/illustrations/#illustration-${index + 1}`}
                    type="button"
                    className="flex items-center rounded-full border border-black bg-secondary-50 px-3 py-2 text-center text-xl font-serif  bg-black text-white hover:bg-gray-100"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="mr-1 h-6 w-6"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                        clipRule="evenodd"
                      />
                    </svg>
                    DOWN
                  </Link>
                </div>
              )}
            </div>
          </section>
        ))}
      </div>
    </main>
  );
};

export default IllustrationsPage;
