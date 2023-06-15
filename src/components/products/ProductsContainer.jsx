import React from "react";
import Product from "./Product";
import { obraGruesa } from "../productArray/productsArray";

const ProductsContainer = ( { comparative } ) => {

  return (

    <div className="py-8 w-full md:w-[1340px] m-auto">

      <div className="flex justify-center h-auto mx-auto py-10">
        <div className="grid md:grid-cols-3 grid-flow-row grid-cols-1 justify-center gap-8">
          {obraGruesa.map((item) => {

            if(comparative === item.category) {
              return (
                <Product
                  key={item.id}
                  img={item.img}
                  title={item.title}
                  description={item.description}
                  price={item.price}
                />
              )
            }
       
          })}
       
        </div>
      </div>
    </div>
  );
};

export default ProductsContainer;
