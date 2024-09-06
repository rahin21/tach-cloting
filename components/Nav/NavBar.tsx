import Image from "next/image";
import Link from "next/link";
import React from "react";
import mainLogo from "/public/0.webp";
import SearchInput from "./Search";
import ShopCart from "./ShopCart";
import ShopHoverMenu from "./ShopHoverMenu";

function NavBar() {
  return (
    <nav className="container mx-auto">
      <ul className="font-bold flex justify-between items-center gap-5 h-28 lg:mx-64">
        <div className="flex items-center gap-28">
          <li>
            <Link href={"/"}>Home</Link>
          </li>
          <li>
            <ShopHoverMenu/>
          </li>
        </div>
        <li>
          <Image src={mainLogo} alt="Logo" />
        </li>
        <div className="flex items-center gap-3">
          <li>
            <SearchInput />
          </li>
          <li>
            <ShopCart className="w-7" />
          </li>
        </div>
      </ul>
    </nav>
  );
}

export default NavBar;
