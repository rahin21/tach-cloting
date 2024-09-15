import Image from "next/image";
import React from "react";
import shopImg from "/public/shop/shop3.jpg";

function Product({img, price, name}:{img:string, price:string, name:string}) {
  return (
    <div className="relative cursor-pointer">
      <div className="aspect-[3/4] w-[27rem] inline-block overflow-hidden items-end relative group ">
        <Image
          src={img}
          width={400}
          height={400}
          alt="img"
          className="w-full h-full object-cover group-hover:scale-110 relative transition-transform duration-300"
        />
        <div className="absolute -bottom-10 group-hover:bottom-0 left-0 w-full opacity-80 text-center transition-all duration-300 ">
          <p className="bg-white text-black py-2">Quick View</p>
        </div>
      </div>
			<div className="font-medium">
				<h1 className="text-xl">{name}</h1>
				<p>{price}</p>
			</div>
    </div>
  );
}

export default Product;
