import React from "react";
import Product from "./Product";
import { obraGruesa } from "../productArray/productsArray";

const Ladrillos = () => {

  return (

    <div className="py-8 w-full md:w-[1340px] m-auto">

      <div className="flex justify-center items-center w-[100%] h-[100px] px-16">
        <h3 className="font-cabin italic text-2xl bg-slate-300 px-10 py-2 rounded">Ladrillos</h3>
      </div>

      <div className="flex justify-center w-[90vw] h-screen mx-auto py-10">
        <div className="grid md:grid-cols-3 grid-flow-row grid-cols-1 justify-center gap-8">
          {obraGruesa.map((item) => {

            if(item.category === "ladrillo") {
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

export default Ladrillos;