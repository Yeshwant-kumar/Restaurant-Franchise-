import React from 'react'
import { useState } from 'react';
import axios from 'axios';
const API_URL = import.meta.env.VITE_API_URL;
const Applications = () => {

    const [obj, setobj] = useState({
        name:"",
        phonenumber:"",
        email: "",
        residentaladdresss:"",
        siteadress:"",
        city:"",
        state:"",
        zipcode:"",
        area:"",
        floorstatus:"",
        
    });
    function doUpdate(event) {
        var { name, value } = event.target;
        setobj({ ...obj, [name]: value });
    }
    async function registerUser()
    {
        let url = `${API_URL}/user/saveApplication`;
        let resp = await axios.post(url, obj, {
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
        });
        //alert(JSON.stringify(resp.data));
        if (resp.data.status == true) alert(resp.data.msg);
        else {
            alert(resp.data.msg);
        }
    }
  return (
<div class="flex h-screen bg-gray-100 pt-15">
   <div class="m-auto">
      <div>
         <div class="mt-5 bg-white rounded-lg shadow">
            <div class="flex">
               <div class="flex-1 py-5 pl-5 overflow-hidden">
                  <svg class="inline align-text-top" height="24px" viewBox="0 0 24 24" width="24px" xmlns="http://www.w3.org/2000/svg" fill="#000000">
                     <g>
                        <path d="m4.88889,2.07407l14.22222,0l0,20l-14.22222,0l0,-20z" fill="none" id="svg_1" stroke="null"></path>
                        <path d="m7.07935,0.05664c-3.87,0 -7,3.13 -7,7c0,5.25 7,13 7,13s7,-7.75 7,-13c0,-3.87 -3.13,-7 -7,-7zm-5,7c0,-2.76 2.24,-5 5,-5s5,2.24 5,5c0,2.88 -2.88,7.19 -5,9.88c-2.08,-2.67 -5,-7.03 -5,-9.88z" id="svg_2"></path>
                        <circle cx="7.04807" cy="6.97256" r="2.5" id="svg_3"></circle>
                     </g>
                  </svg>
                  <h1 class="inline text-2xl font-semibold leading-none">Personal Information</h1>
               </div>
            </div>
            <div class="px-5 pb-5">
               <input onChange={doUpdate} name='name'  placeholder="Name" class=" text-black placeholder-gray-600 w-full px-4 py-2.5 mt-2 text-base   transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200  focus:border-blueGray-500 focus:bg-white dark:focus:bg-gray-800 focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400" />
               <input onChange={doUpdate} name='email'  placeholder="Email" class=" text-black placeholder-gray-600 w-full px-4 py-2.5 mt-2 text-base   transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200  focus:border-blueGray-500 focus:bg-white dark:focus:bg-gray-800 focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400" />
               <input onChange={doUpdate} name='phonenumber'  placeholder="Phone Number" class=" text-black placeholder-gray-600 w-full px-4 py-2.5 mt-2 text-base   transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200  focus:border-blueGray-500 focus:bg-white dark:focus:bg-gray-800 focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400" /> 
               <input onChange={doUpdate} name='residentaladdress'  placeholder="Residental Address" class=" text-black placeholder-gray-600 w-full px-4 py-2.5 mt-2 text-base   transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200  focus:border-blueGray-500 focus:bg-white dark:focus:bg-gray-800 focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400" /> 
            </div>
            <div class="flex">
               <div class="flex-1 py-5 pl-5 overflow-hidden">
                  <svg class="inline align-text-top" width="21" height="20.5" xmlns="http://www.w3.org/2000/svg" fill="#000000">
                     <g>
                        <path d="m4.88889,2.07407l14.22222,0l0,20l-14.22222,0l0,-20z" fill="none" id="svg_1" stroke="null"></path>
                        <path d="m7.07935,0.05664c-3.87,0 -7,3.13 -7,7c0,5.25 7,13 7,13s7,-7.75 7,-13c0,-3.87 -3.13,-7 -7,-7zm-5,7c0,-2.76 2.24,-5 5,-5s5,2.24 5,5c0,2.88 -2.88,7.19 -5,9.88c-2.08,-2.67 -5,-7.03 -5,-9.88z" id="svg_2"></path>
                        <circle cx="7.04807" cy="6.97256" r="2.5" id="svg_3"></circle>
                     </g>
                  </svg>
                  <h1 class="inline text-2xl font-semibold leading-none">Address</h1>
               </div>
               <div class="flex-none pt-2.5 pr-2.5 pl-1"></div>
            </div>
            <div class="px-5 pb-5">
               <div class="flex">
                  <div class="flex-grow w-1/4 pr-2"><input onChange={doUpdate} name='siteaddress'  placeholder="Location" class=" text-black placeholder-gray-600 w-full px-4 py-2.5 mt-2 text-base   transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200  focus:border-blueGray-500 focus:bg-white dark:focus:bg-gray-800 focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400" /></div>
                  <div class="flex-grow"><input onChange={doUpdate} name='city' placeholder="City" class=" text-black placeholder-gray-600 w-full px-4 py-2.5 mt-2 text-base   transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200  focus:border-blueGray-500 focus:bg-white dark:focus:bg-gray-800 focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400" /></div>
               </div>
               <div class="flex">
                  <div class="flex-grow w-1/4 pr-2"><input onChange={doUpdate} name='state'  placeholder="State" class=" text-black placeholder-gray-600 w-full px-4 py-2.5 mt-2 text-base   transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200  focus:border-blueGray-500 focus:bg-white dark:focus:bg-gray-800 focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400" /></div>
                  <div class="flex-grow"><input onChange={doUpdate} name='zipcode' placeholder="Zip Code" class=" text-black placeholder-gray-600 w-full px-4 py-2.5 mt-2 text-base   transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200  focus:border-blueGray-500 focus:bg-white dark:focus:bg-gray-800 focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400" /></div>
               </div>
               <div class="flex">
                  <div class="flex-grow w-1/4 pr-2"><input onChange={doUpdate} name='area'  placeholder="Area of Site" class=" text-black placeholder-gray-600 w-full px-4 py-2.5 mt-2 text-base   transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200  focus:border-blueGray-500 focus:bg-white dark:focus:bg-gray-800 focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400" /></div>
                  <div class="flex-grow"><input onChange={doUpdate} name='' placeholder="Floor Status(Preferably Ground)" class=" text-black placeholder-gray-600 w-full px-4 py-2.5 mt-2 text-base   transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200  focus:border-blueGray-500 focus:bg-white dark:focus:bg-gray-800 focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400" /></div>
               </div>
               
            </div>
            <hr class="mt-4" />
            <div class="flex p-3">
               <div class="flex-initial pl-3">
                  <button onClick={registerUser} type="button" class="flex w-full items-center px-5 py-2.5 font-medium tracking-wide text-white capitalize   bg-black rounded-md hover:bg-gray-800  focus:outline-none focus:bg-gray-900  transition duration-300 transform active:scale-95 ease-in-out">
                     <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#FFFFFF">
                        <path d="M0 0h24v24H0V0z" fill="none"></path>
                        <path d="M5 5v14h14V7.83L16.17 5H5zm7 13c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3zm3-8H6V6h9v4z" opacity=".3"></path>
                        <path d="M17 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V7l-4-4zm2 16H5V5h11.17L19 7.83V19zm-7-7c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3zM6 6h9v4H6z"></path>
                     </svg>
                     <span class="pl-2 mx-1">Save</span>
                  </button>
               </div>
               
            </div>
         </div>
         
      </div>
   </div>
</div>
  )
}

export default Applications
