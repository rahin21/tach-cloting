import React from "react";
import image_1 from "/public/home/hero.jpg";
import image_2 from "/public/home/hero2.jpg";
import Image from "next/image";
function Hero() {
  return (
    <div className="lg:p-5">
      <div className="flex flex-col gap-5">
        <Image src={image_1} alt="image" />
        <Image src={image_2} alt="image" />
      </div>
    </div>
  );
}

export default Hero;
