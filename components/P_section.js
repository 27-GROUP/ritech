import React, { useState } from "react";
import listProduct from "./product-list";

export default function P_section() {
  return (



    <div className="bg-white">
        <div className="mt-10 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {listProduct.map((listProduct, index) => (
            <div className="max-w-sm bg-white rounded-lg border border-gray-100 shadow-md dark:bg-gray-800 dark:border-gray-700" key={index}>
              <a>
                <img className="rounded-t-lg" src={listProduct.image} />
              </a>
              <div className="p-5">
                <a>
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{listProduct.name}</h5>
                </a>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{listProduct.categorie}</p>
              </div>
            </div>
          ))}
        </div>
    </div>

  );
};