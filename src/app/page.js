import Image from "next/image";
import React from "react";
import hero from "../../public/hero.png";

const HomePage = () => {
  return (
    <main>
      <div className="bg-home">
        <Image src={hero} alt="Home Page" />
      </div>
    </main>
  );
};

export default HomePage;
