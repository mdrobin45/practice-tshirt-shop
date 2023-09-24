import { useLoaderData } from "react-router-dom";
import { getProductFromStorage } from "../../localhost/localhost";
import CartItem from "./CartItem";
import Summary from "./Summary";

const Cart = () => {
   const allProducts = useLoaderData();
   const cartProductId = getProductFromStorage();

   const filteredProduct = allProducts.filter((product) => {
      return cartProductId.some((id) => {
         return product.id === id;
      });
   });
   return (
      <div className="p-10 gap-6 flex justify-between items-start bg-gray-100">
         <div className=" w-3/5 gap-x-4 grid grid-cols-2 gap-y-10">
            {filteredProduct.map((cartItem) => (
               <CartItem key={cartItem.id} product={cartItem} />
            ))}
         </div>
         <Summary />
      </div>
   );
};

export default Cart;
