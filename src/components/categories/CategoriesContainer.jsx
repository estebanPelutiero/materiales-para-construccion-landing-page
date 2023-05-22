import React from "react";
import Category from "./Category";
import { categories } from "../categoriesArray/categories";

const CategoriesContainer = () => {

  return (

    <div id="productos" className="w-full md:w-[1340px] m-auto">

      <div className="flex justify-center items-center w-[100%] h-[100px] px-16">
        <h3 className="font-cabin text-3xl bg-slate-300 px-10 py-2 rounded">Productos Obra Gruesa</h3>
      </div>

      <div className="flex justify-center h-fit mx-auto py-5">
        <div className="grid md:grid-cols-3 grid-flow-row grid-cols-1 justify-center gap-14 mb-5">
          {categories.map((category) => {
        
              return (
                <Category
                  key={category.id}
                  name={category.name}  
                  img={category.img}
                />
              );
            
          })}

        </div>
      </div>
    </div>
  );
};

export default CategoriesContainer;