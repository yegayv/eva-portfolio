import Image from "next/image";
import React from "react";
import hero from "../../../public/hero.webp";
import { AboutSection } from "@/src/components/sections/about-section";
import ContactSection from "@/src/components/sections/contact-section";

const HomePage = () => {
  return (
    <main>
      <section className="h-screen flex items-center justify-center ">
        <Image
          src={hero}
          alt="Home Page"
          width={"1300"}
          className="drop-shadow-2xl"
        />
      </section>
      <AboutSection></AboutSection>
      <ContactSection />
    </main>
  );
};

export default HomePage;
