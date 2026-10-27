import React from 'react'
import { useContext } from 'react'
import { userContext } from '../../../context/RequestData';
import axios from 'axios';
const API_URL = import.meta.env.VITE_API_URL;
const Clients = () => {
     const {userData} = useContext(userContext);
     async function openUser(e)
     {
      alert(e)
      let eData={ email: e ,status:0};
    let url = `${API_URL}/user/doAccept`;
      let resp = await axios.post(url,eData,{headers: { "Content-Type": "application/x-www-form-urlencoded"}});
     }
  return (
      <div className="w-full pt-10 mt-14">
        <div className="bg-gray-50">
          <div class="flex flex-wrap gap-4 p-6 justify-center text-lg font-serif">
            {userData
              .filter((obj) => obj.status === 2)
              .map((obj, index) => (
                <a
                  key={index}
                  onClick={(e) => openUser(obj.email)}
                  class="bg-gray-100 flex-grow text-black border-l-8 border-green-500 rounded-md px-3 py-2 w-full md:w-5/12 lg:w-4/12"
                >
                  {obj.name}
                  <div class="text-gray-500 font-thin text-sm">
                    <span>{obj.city}</span>
                    <span>{obj.zipcode}</span>
                    <span></span>
                  </div>
                </a>
              ))}
          </div>
        </div>
      </div>
  )
}

export default Clients
