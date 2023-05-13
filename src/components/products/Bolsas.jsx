import React from "react";
import Product from "./Product";
import { obraGruesa } from "../productArray/productsArray";

const Bolsas = () => {

  return (

    <div className="py-8 w-full md:w-[1340px] m-auto">

      <div className="flex justify-center items-center w-[100%] h-[100px] mt-20">
        <h1 className="font-cabin text-3xl bg-orange-400 px-10 py-4 rounded">Nuestros Productos</h1>
      </div>

      <div className="flex justify-center md:justify-start items-center w-[100%] h-[100px] px-16 mt-10">
        <h2 className="font-cabin text-2xl bg-orange-300 px-10 py-2 rounded">Obra gruesa</h2>
      </div>

      <div className="flex justify-center items-center w-[100%] h-[100px] px-16 mt-10">
        <h3 className="font-cabin italic text-2xl bg-slate-300 px-10 py-2 rounded">Bolsas</h3>
      </div>

      <div className="flex justify-center w-[90vw] h-auto mx-auto py-10">
        <div className="grid md:grid-cols-3 grid-flow-row grid-cols-1 justify-center gap-8">
          {obraGruesa.map((item) => {

            if(item.category === "bolsa") {
              return (
                <Product
                  key={item.id}
                  img={item.img}
                  title={item.title}
                  description={item.description}
                  price={item.price}
                />
              );
            }
          })}

        </div>
      </div>
    </div>
  );
};

export default Bolsas;
