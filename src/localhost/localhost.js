import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const getProductFromStorage = () => {
   const storedProduct = localStorage.getItem("shirt_cartId");
   if (storedProduct) {
      return JSON.parse(storedProduct);
   }
   return [];
};
// save product
const saveProductToStorage = (productId) => {
   const storedProduct = getProductFromStorage();
   const exist = storedProduct.find((id) => id === productId);

   if (!exist) {
      storedProduct.push(productId);
      localStorage.setItem("shirt_cartId", JSON.stringify(storedProduct));
      toast.success("Cart updated!");
   } else {
      toast.error("Already exist!");
   }
};

export { getProductFromStorage, saveProductToStorage };
