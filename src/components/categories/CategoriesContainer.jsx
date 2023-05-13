import React from "react";
import Category from "./Category";
import { categories } from "../categoriesArray/categories";

const CategoriesContainer = () => {

  return (

    <div className="py-8 w-full md:w-[1340px] m-auto">

      <div className="flex justify-center items-center w-[100%] h-[100px] px-16">
        <h3 className="font-cabin text-3xl bg-slate-300 px-10 py-2 rounded">Productos Obra Gruesa</h3>
      </div>

      <div className="flex justify-center w-[90vw] h-fit mx-auto py-10">
        <div className="grid md:grid-cols-3 grid-flow-row grid-cols-1 justify-center gap-8 mb-10">
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