import React, { use } from "react";
import { NavLink } from "react-router";

const categoryPromise = fetch("/categories.json").then((res) => res.json());

const Categories = () => {
  const categories = use(categoryPromise);
  // console.log(categories);
  return (
    <div>
      <h2 className="font-semibold text-xl">
        All Categories({categories.length})
      </h2>
      <div className="grid grid-cols-1 gap-3 mt-6">
        {categories.map(
          (category) => (
            (
              <NavLink 
               key={category.id} 
               className="btn bg-white border-none shadow-none text-accent font-semibold text-xl hover:bg-base-200"
               to={`/category/${category.id}`}
               >
                {category.name}
              </NavLink>
            )
          )
        )}
      </div>
    </div>
  );
};

export default Categories;
