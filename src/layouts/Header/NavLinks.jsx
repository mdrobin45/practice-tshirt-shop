import { NavLink } from "react-router-dom";

const NavLinks = () => {
   return (
      <div
         className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
         id="navbar-sticky">
         <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
               <NavLink
                  to="/"
                  className="block py-2 pl-3 pr-4 bg-blue-700 rounded md:bg-transparent text-gray-900 md:p-0 md:dark:text-blue-500"
                  aria-current="page">
                  Home
               </NavLink>
            </li>
            <li>
               <NavLink
                  to="/products"
                  className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
                  Products
               </NavLink>
            </li>
            <li>
               <NavLink
                  to="/contact"
                  className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
                  Contact
               </NavLink>
            </li>
         </ul>
      </div>
   );
};

export default NavLinks;
