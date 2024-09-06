import Image from "next/image";
import React from "react";
import shopImg from "/public/shop/shop3.jpg";

function Product() {
  return (
    <div className="relative group">
      <div className="aspect-[3/4] w-[40] inline-block overflow-hidden items-end relative">
        <Image
          src={shopImg}
          width={300}
          height={300}
          alt="img"
          className=" w-full h-full object-cover hover:scale-110 transition-transform duration-300"
        />
      <div className="absolute bottom-0 left-0 w-full inset-0 bg-opacity-80 text-center bg-white text-black py-2">
        <p >Quick View</p>
      </div>
      </div>
    </div>
  );
}

export default Product;
