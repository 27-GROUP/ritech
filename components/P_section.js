import listProduct from "./product-list";

export default function P_section() {
  return (

    <div className="bg-white">
      <div className="mt-10 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
        {listProduct.map((listProduct, index) => (
          <div className="m-3 max-w-sm bg-white rounded-lg border border-gray-100 shadow-md dark:bg-gray-800 dark:border-gray-700" key={index}>
            <a className="block">
              <img
                src={listProduct.image}
                className="object-cover w-full h-56 shadow-xl rounded-xl"
              />

              <div className="p-4">
                <h5 className="text-xl font-bold text-gray-900">
                  {listProduct.name}
                </h5>

                <p className="mt-2 text-gray-700 font-bold italic">
                  {listProduct.categorie}
                </p>
              </div>
            </a>
          </div>
        ))}
      </div>
    </div>

  );
};