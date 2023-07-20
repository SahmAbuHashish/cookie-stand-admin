import React from 'react';
import Head from 'next/head';

export default function Index() {
  return (
    <div className="min-h-screen bg-gray-100">
    <Head>
      <title>Cookie Stand Admin</title>
    </Head>
            <header className="flex items-center justify-between p-4 bg-green-500">
            <h1 className="text-4xl text-gray-800">Cookie Stand Admin</h1>
        </header>
    <main className="container mx-auto p-4">
         <form className="flex-col w-5/6 mx-auto my-8 bg-green-300 border">
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
    </main>
    <footer className="flex items-center justify-between p-4 mt-4 bg-green-500">
            <h1 className="text-xl text-gray-800">&copy; 2023</h1>
        </footer>
  </div>
  );
}
