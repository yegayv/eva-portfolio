import React from "react";
import Image from "next/image";
import { navigationConfig } from "@/src/config/nav";
import Link from "next/link";
import btnShape1 from "@/src/images/button_shapes/button_shape3.png";
import btnShape2 from "@/src/images/button_shapes/button_shape2.png";
import btnShape3 from "@/src/images/button_shapes/button_shape1.png";

const GalleryPage = () => {
  return (
    <div className="flex flex-col w-full h-screen">
      <div className="px-5 lg:min-w-[80px] h-full">
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
                      <span className="relative ">
                        <h1>{sidebarItem.title}</h1>
                      </span>
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GalleryPage;
