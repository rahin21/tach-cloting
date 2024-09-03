import { cn } from "@/lib/utils";
import React from "react";

function ShopCart({className}:{className?:string}) {
  return (
    <div className={cn(" min-w-fit",className)}>
			<p className="absolute ms-[12px] mt-10 top-0 text-sm">0</p>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        width="100%"
        height="100%"
        viewBox="0 0 197.7 166"
        preserveAspectRatio="xMinYMax meet"
        data-hook="svg-icon-2"
      >
        <path d="M197.9 55.9L169.9 127.4 64.5 127.4 27.6 29.8 0 29.8 0.2 16.7 36.5 16.7 73.4 114.3 160.9 114.3 183 55.9"></path>
        <circle cx="143.8" cy="153" r="13"></circle>
        <circle cx="90.8" cy="153" r="13"></circle>
      </svg>
    </div>
  );
}

export default ShopCart;
