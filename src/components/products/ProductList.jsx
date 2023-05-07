import React from "react";
import Product from "./Product";
import { products } from "../productArray/productsArray";

const ProductList = () => {

  return (

    <div className="py-8">

      <div className="flex justify-center items-center w-[100%] h-[100px]">
        <h1 className="font-cabin text-3xl bg-orange-300 px-3 py-2 rounded">Nuestros Productos</h1>
      </div>

      <div className="w-[90vw] h-screen mx-auto my-10 ">
        <div className="flex flex-row justify-evenly">
          {products.map((item) => {
            return (
              <Product
                key={item.id}
                img={item.img}
                title={item.title}
                description={item.description}
                price={item.price}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ProductList;
