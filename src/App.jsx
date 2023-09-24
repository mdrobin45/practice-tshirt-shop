import { useEffect, useState } from "react";
import { Outlet, useNavigation } from "react-router-dom";
import { SyncLoader } from "react-spinners";
import { ToastContainer } from "react-toastify";
import { MyContext } from "./contextAPI/MyContext";
import Footer from "./layouts/Footer/Footer";
import Header from "./layouts/Header/Header";
import {
   getProductFromStorage,
   saveProductToStorage,
} from "./localhost/localhost";

const App = () => {
   const [loader, setLoader] = useState(true);
   const navigation = useNavigation();
   const [count, setCount] = useState(0);

   // Loading timer
   setTimeout(() => {
      setLoader(false);
   }, 1000);

   // Add to cart handler
   const handleAddToCart = (id) => {
      saveProductToStorage(id);
      const addedProduct = getProductFromStorage();
      setCount(addedProduct.length);
   };
   useEffect(() => {
      const addedProduct = getProductFromStorage();
      setCount(addedProduct.length);
   }, []);
   return (
      <>
         <MyContext.Provider value={{ handleAddToCart, count }}>
            {loader ? (
               <div className="h-[80vh] flex flex-col justify-center items-center">
                  <SyncLoader color="#36d7b7" />
               </div>
            ) : (
               <main>
                  <Header />
                  {navigation.state === "loading" ? (
                     <div className="h-[80vh] flex flex-col justify-center items-center">
                        <SyncLoader color="#36d7b7" />
                     </div>
                  ) : (
                     <div>
                        <Outlet />
                     </div>
                  )}
                  <Footer />
                  <ToastContainer autoClose={1500} />
               </main>
            )}
         </MyContext.Provider>
      </>
   );
};

export default App;
