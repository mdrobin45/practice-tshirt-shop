const CartItem = ({ product }) => {
   const { image, title, price } = product;
   return (
      <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
         <div className="flex flex-col items-center p-10">
            <img className="mb-3 w-1/2 h-1/2" src={image} alt="Bonnie image" />
            <h5 className="mb-1 text-xl text-center font-medium text-gray-900 dark:text-white">
               {title}
            </h5>
            <span className="text-sm text-gray-500 dark:text-gray-400">
               price: ${price}
            </span>
            <div className="flex mt-4 space-x-3 md:mt-6">
               <button className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-red-600 rounded-lg hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-red-600 dark:hover:bg-red-600 dark:focus:ring-blue-800">
                  REMOVE
               </button>
               <button className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-gray-900 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-700">
                  SAVE FOR LATER
               </button>
            </div>

            <div className="flex mt-4">
               <button
                  id="dropdown-button"
                  className="flex-shrink-0 z-10 bg-blue-700 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center text-white border border-gray-300 dark:border-gray-700 dark:text-white rounded-l-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-gray-300 dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
                  type="button">
                  <svg
                     className="w-4 h-4 text-white"
                     aria-hidden="true"
                     xmlns="http://www.w3.org/2000/svg"
                     fill="none"
                     viewBox="0 0 18 2">
                     <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M1 1h16"
                     />
                  </svg>
               </button>
               <div className="relative w-full">
                  <input
                     type="text"
                     className="block py-1 text-lg w-28 p-2.5 z-20 text-gray-900 bg-gray-50 rounded-r-lg border-l-gray-100 border-l-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500"
                     placeholder="1"
                  />
                  <button
                     type="submit"
                     className="absolute top-0 right-0 p-2.5 h-full text-sm font-medium text-white bg-blue-700 rounded-r-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                     <svg
                        className="w-4 h-4 dark:text-white"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 18 18">
                        <path
                           stroke="currentColor"
                           strokeLinecap="round"
                           strokeLinejoin="round"
                           strokeWidth="2"
                           d="M9 1v16M1 9h16"
                        />
                     </svg>
                  </button>
               </div>
            </div>
         </div>
      </div>
   );
};

export default CartItem;
