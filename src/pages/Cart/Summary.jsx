const Summary = () => {
   return (
      <div className="w-2/5 bg-white shadow-md rounded-md border sticky top-4">
         <div className="p-6">
            <h2 className="text-md font-semibold text-gray-500">
               PRICE DETAILS
            </h2>
         </div>
         <hr />
         <div>
            <div className="relative overflow-x-auto">
               <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                  <tbody>
                     <tr className="bg-white dark:bg-gray-800 dark:border-gray-700">
                        <th
                           scope="row"
                           className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                           Price (2 items)
                        </th>
                        <td className="px-6 py-4 text-right">$200</td>
                     </tr>
                     <tr className="bg-white dark:bg-gray-800 dark:border-gray-700">
                        <th
                           scope="row"
                           className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                           Discount
                        </th>
                        <td className="px-6 py-4 text-right"> - $50</td>
                     </tr>
                     <tr className="bg-white border-b border-dashed dark:bg-gray-800">
                        <th
                           scope="row"
                           className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                           Delivery Charges
                        </th>
                        <td className="px-6 py-4 text-right">$50</td>
                     </tr>
                     <tr className="bg-white border-b border-dashed dark:bg-gray-800">
                        <th
                           scope="row"
                           className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                           Total Amount
                        </th>
                        <td className="px-6 py-4 text-right">$1200</td>
                     </tr>
                     <tr className="bg-white dark:bg-gray-800">
                        <td className="pl-6 py-6 font-bold text-green-500">
                           You will save $120 on this order
                        </td>
                     </tr>
                  </tbody>
               </table>
            </div>
         </div>
      </div>
   );
};

export default Summary;
