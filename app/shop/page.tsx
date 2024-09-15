import React from "react";
import Product from "@/components/shop/product";
const products = [
  {
    img: "/shop/shop1.jpg",
    name: "Plain T-shirt",
    price: "$150.00",
  },
  {
    img: "/shop/shop2.jpg",
    name: "Plain T-shirt",
    price: "$150.00",
  },
  {
    img: "/shop/shop3.jpg",
    name: "Plain T-shirt",
    price: "$150.00",
  },
  {
    img: "/home/dresses.jpg",
    name: "Plain T-shirt",
    price: "$150.00",
  },
  {
    img: "/home/hero.jpg",
    name: "Plain T-shirt",
    price: "$150.00",
  },
  {
    img: "/home/hero2.jpg",
    name: "Plain T-shirt",
    price: "$150.00",
  },
  {
    img: "/home/kint.jpg",
    name: "Knits",
    price: "$150.00",
  },
  {
    img: "/home/tops.jpg",
    name: "Tops",
    price: "$150.00",
  },
];
function ShopPage() {
  return (
    <div className="flex justify-center">
			<div  className="grid md:grid-cols-2 gap-x-20 gap-y-10">
      {products.map((product, i) => (
          <Product
					key={i} 
            img={product.img}
            name={product.name}
            price={product.price}
          />
				))}
        </div>
    </div>
  );
}

export default ShopPage;
