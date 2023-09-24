import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Cart from "../pages/Cart/Cart";
import Contact from "../pages/Contact/Contact";
import Favorite from "../pages/Favorite/Favorite";
import Home from "../pages/Home/Home";
import ProductArchive from "../pages/Products/ProductArchive";
import SingleProduct from "../pages/Products/SingleProduct";

const router = createBrowserRouter([
   {
      path: "/",
      element: <App />,
      children: [
         {
            path: "/",
            element: <Home />,
         },
         {
            path: "/products",
            element: <ProductArchive />,
            loader: () =>
               fetch("https://mdrobin45.github.io/api/t-shirts.json"),
         },
         {
            path: "/contact",
            element: <Contact />,
         },
         {
            path: "/products/:productName",
            element: <SingleProduct />,
         },
         {
            path: "/cart",
            element: <Cart />,
            loader: () =>
               fetch("https://mdrobin45.github.io/api/t-shirts.json"),
         },
         {
            path: "/favorite",
            element: <Favorite />,
         },
      ],
   },
]);

export default router;
