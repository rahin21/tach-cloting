import React from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import Link from "next/link";
import { cn } from "@/lib/utils";

const shop_links = [
  {
    name:'All',
    link:'/shop',
  },
  {
    name:'New Arrival',
    link:'/new-arrival',
  },
  {
    name:'Sweater & Cartigans',
    link:'/new-arrival',
  },
  {
    name:'Tops & Blouses',
    link:'/Tops-blouses',
  },
  {
    name:'Shorts & Skirts',
    link:'/shorts-skirts',
  },
  {
    name:'Knit',
    link:'/knit',
  },
  {
    name:'Jackets',
    link:'/jackets',
  },
  {
    name:'Pants',
    link:'/pants',
  },
  {
    name:'Dresses',
    link:'/dresses',
  },
  {
    name:'SALE',
    link:'/sale',
  },
]

function ShopHoverMenu() {
  return (
    <NavigationMenu >
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger className={cn(navigationMenuTriggerStyle(),`font-bold text-base`)}>
            Shop
          </NavigationMenuTrigger>
          <NavigationMenuContent >
            <ul className="p-6 lg:grid-cols-[.75fr_1fr]">
              {shop_links.map((shop_links,i)=>(

              <li className="text-center my-2" key={shop_links.name}>
                <Link href={`${shop_links.link}`} className="text-nowrap ">{shop_links.name}</Link>
              </li>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

export default ShopHoverMenu;
