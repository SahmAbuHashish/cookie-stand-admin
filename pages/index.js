import React from 'react';
import Head from 'next/head';
import { useState } from "react";


export default function Index() {
  const [formdata, setFormdata] = useState({});
  const handleSubmit = (event) => {
    event.preventDefault();
    let formInputs = {
      location: event.target.location.value,
      min: event.target.min.value,
      max: event.target.max.value,
      avg: event.target.avg.value,
    };
    setFormdata(formInputs);
  };
  return (
    <div className="min-h-screen bg-gray-100">
    <Head>
      <title>Cookie Stand Admin</title>
    </Head>
            <header className="flex items-center justify-between p-4 bg-green-500">
            <h1 className="text-4xl text-gray-800">Cookie Stand Admin</h1>
        </header>
    <main className="container mx-auto p-4">
         <form onSubmit={handleSubmit} className="flex-col w-5/6 mx-auto my-8 bg-green-300 border">
            <h1 className="p-3 text-2xl font-semibold text-center text-gray-800">Create Cookie Stand</h1>
             <div className="flex mx-3 my-4 text-gray-800">
                 <label className="mr-2 font-semibold" for='location'>Location</label>
                 <input name="location" className="flex-auto " />
            </div>
            <div className="flex mx-3 my-4 mt-8 justify-evenly w-7/8">
                 <div className="flex-col w-1/4 p-1 mr-2 text-sm font-semibold text-center text-gray-800">
                     <label for="minCustomers" >Minimum Customers per Hour</label>
                     <input name="minCustomers" className="flex-auto " />
                 </div>
                 <div className="flex-col w-1/4 p-1 mr-2 text-sm font-semibold text-center text-gray-800">
                     <label for='maxCustomers'>Maximum Customers per Hour</label>
                     <input name="maxCustomers" className="flex-auto " />
                 </div>
                 <div className="flex-col w-1/4 p-1 mr-2 text-sm font-semibold text-center text-gray-800">
                    <label for='avgCookies'>Average Cookies per Sale</label>
                     <input name="avgCookies" className="flex-auto " />
                 </div>
                <button className="w-1/4 font-semibold bg-green-500 rounded text-gray-800">Create</button>
             </div>
         </form>
                <div>
                <ul className="text-xl text-center text-gray-800">
                  <li>Location : {formdata.location}</li>
                  <li>Minimum Customers per Hour: {formdata.min}</li>
                  <li>Maximum Customers per Hour: {formdata.max}</li>
                  <li>Average Cookie per Sale: {formdata.avg}</li>
                </ul>
                </div>
                <p className="text-xl text-center font-medium text-gray-800">report Table Coming soon ...</p>
    </main>
    <footer className="flex items-center justify-between p-4 mt-4 bg-green-500">
            <h1 className="text-xl text-gray-800">&copy; 2023</h1>
        </footer>
  </div>
  );
}




// export default function Main() {
//   const [formdata, setFormdata] = useState({});
//   const handleSubmit = (event) => {
//     event.preventDefault();
//     let formInputs = {
//       location: event.target.location.value,
//       min: event.target.min.value,
//       max: event.target.max.value,
//       avg: event.target.avg.value,
//     };
//     setFormdata(formInputs);
//   };
//   return (
//     <div className="min-h-screen bg-gray-100">
//       <Head>
//         <title>Cookie Stand Admin</title>
//       </Head>
//       <header className="flex items-center justify-between p-4 bg-green-500">
//         <h1 className="text-4xl text-gray-800">Cookie Stand Admin</h1>
//       </header>
//       <main className="flex flex-1 flex-col items-center justify-between p-24">
//         <div className=" bg-green-300 p-10 rounded-2xl">
//           <h2 className="text-center text-3xl font-bold text-gray-800">Create Cookie Stand</h2>
//           <form onSubmit={handleSubmit}>
//             <div className="flex p-10">
//               <label className="text-xl font-medium text-gray-800">Location:</label>
//               <input name="location" className="w-full" />
//             </div>
//             <div className="flex font-medium text-center">
//               <div className="flex flex-col p-10">
//                 <label className="text-xl text-gray-800">Minimum Customers per Hour:</label>
//                 <input name="min" />
//               </div>
//               <div className="flex flex-col p-10">
//                 <label className="text-xl text-gray-800">Maximum Customers per Hour:</label>
//                 <input name="max" />
//               </div>
//               <div className="flex flex-col p-10">
//                 <label className="text-xl text-gray-800">Average Cookie per Sale:</label>
//                 <input name="avg" />
//               </div>
//               <button type="submit" className="bg-green-500 p-10">
//                 Create
//               </button>
//             </div>
//           </form>
//         </div>
//         <div>
//           <ul className="text-xl text-gray-800">
//             <li >Location : {formdata.location}</li>
//             <li>Minimum Customers per Hour: {formdata.min}</li>
//             <li>Maximum Customers per Hour: {formdata.max}</li>
//             <li>Average Cookie per Sale: {formdata.avg}</li>
//           </ul>
//         </div>
//         <p className="text-xl font-medium text-gray-800">report Table Coming soon ...</p>
//       </main>
//       <footer className="flex items-center justify-between p-4 mt-4 bg-green-500">
//         <h1 className="text-xl text-gray-800 ">&copy; 2023</h1>
//       </footer>
//     </div>
//   );
// }
