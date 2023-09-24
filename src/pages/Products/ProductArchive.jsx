import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import useTitle from "../../hooks/useTitle";
import ProductCard from "./ProductCard";

const ProductArchive = () => {
   useTitle("Products");
   const products = useLoaderData();
   const [index, setIndex] = useState(8);
   const initialProducts = products.slice(0, index);
   const [isAllProducts, setIsAllProducts] = useState(false);

   const loadMore = () => {
      setIndex((prevValue) => prevValue + 8);
   };

   useEffect(() => {
      if (index >= products.length) {
         setIsAllProducts(true);
      } else {
         setIsAllProducts(false);
      }
   }, [index, products.length]);
   return (
      <>
         <div className="p-10 grid grid-cols-4 gap-10">
            {initialProducts.map((product) => (
               <ProductCard key={product.id} product={product} />
            ))}
         </div>
         <div className="text-center">
            {isAllProducts ? (
               ""
            ) : (
               <button
                  onClick={loadMore}
                  type="button"
                  className="inline-flex items-center px-5 py-2.5 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                  Load More
               </button>
            )}
         </div>
      </>
   );
};

export default ProductArchive;
