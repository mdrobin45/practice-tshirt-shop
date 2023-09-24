import useTitle from "../../hooks/useTitle";

const Contact = () => {
   useTitle("Contact");
   return (
      <form className="w-2/4 shadow-md p-6 rounded-md mx-auto my-10 border">
         <div className="mb-6">
            <label
               htmlFor="fName"
               className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
               First Name
            </label>
            <input
               type="text"
               id="fName"
               className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
               placeholder="John"
               required
            />
         </div>
         <div className="mb-6">
            <label
               htmlFor="lName"
               className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
               Last Name
            </label>
            <input
               type="text"
               id="lName"
               className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
               placeholder="Deo"
               required
            />
         </div>
         <div className="mb-6">
            <label
               htmlFor="email"
               className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
               Your Email
            </label>
            <input
               type="email"
               id="email"
               className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
               placeholder="example@yahoo.com"
               required
            />
         </div>
         <div className="mb-6">
            <label
               htmlFor="message"
               className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
               Your message
            </label>
            <textarea
               id="message"
               rows="4"
               className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
               placeholder="Leave a comment..."></textarea>
         </div>

         <div className="flex items-start mb-6">
            <div className="flex items-center h-5">
               <input
                  id="remember"
                  type="checkbox"
                  value=""
                  className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
                  required
               />
            </div>
            <label
               htmlFor="remember"
               className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
               Remember me
            </label>
         </div>
         <button
            type="submit"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Submit
         </button>
      </form>
   );
};

export default Contact;
