import Image from "next/image";
import React from "react";
import hero from "../../public/hero.png";

const HomePage = () => {
  return (
    <main>
      <div style={{ margin: "5rem 0 0 0" }}>
        <Image
          src={hero}
          alt="Eva illustrator"
          width={800}
          style={{ width: "100%", height: "100%" }}
        />
      </div>
    </main>
  );
};

export default HomePage;
