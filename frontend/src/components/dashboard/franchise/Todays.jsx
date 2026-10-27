import React from "react";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const API_URL = import.meta.env.VITE_API_URL;
const Todays = () => {
    const user=localStorage.getItem("user");
    const fToken = localStorage.getItem("fToken");
    let doRedirect = useNavigate();
  const [obj, setobj] = useState({
    email: user,
    sales:"",
    date:"",
    cVisited:"",
    token: fToken,
  });
  function doUpdate(event) {
    var { name, value } = event.target;
    setobj({ ...obj, [name]: value });
  }
  async function doPublish() {
    let url = `${API_URL}/user/saveSales`;
    let resp = await axios.post(url, obj, {
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
    });
    //alert(JSON.stringify(resp.data));
    if (resp.data.status == true) {
      alert(resp.data.msg)
    } else {
      alert(resp.data.msg);
    }
    if(resp.data.tstatus==false)
    {
      doRedirect('/home');
      alert(resp.data.msg);
      
    }
  }
  async function doDelete() {
    var token = localStorage.getItem("token");
    var url = `${API_URL}/user/doDelete`;

    const serverData = await axios.post(
      url,
      { uid: obj.uid },
      { headers: { authorization: `Bearer ${token}` } }
    );
}
  return (
    <div className="w-full pt-18">
      <div className="flex justify-center bg-gray-200 min-h-[calc(100vh-90px)]">
        <div className="container py-5 px-4 lg:px-15">
          <div className="w-full p-8 my-5 md:px-12 lg:w-9/12 lg:pl-20 lg:pr-40 mr-auto bg-white rounded-2xl shadow-2xl">
            <div className="flex">
              <h1 className="font-bold uppercase text-4xl">
                Send us a message
              </h1>
            </div>
            <div className="grid grid-cols-1 gap-5 md:grid-cols-2 mt-5">
              <input
              onChange={doUpdate}
              name="date"
                className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                type="date"
                placeholder="Date"
              />
              <input
              onChange={doUpdate}
              name="cVisited"
                className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                type="number"
                placeholder="Total Custmors Visited"
              />
            </div>
            <div className="my-4">
              <input
              name="sales"
              onChange={doUpdate}
                placeholder="Total Sales"
                className="w-full h-20 bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
              />
            </div>
            <div className="my-2 w-1/2 lg:w-1/4">
              <button
              onClick={doPublish}
                className="uppercase text-sm font-bold tracking-wide bg-blue-900 text-gray-100 p-3 rounded-lg w-full 
                      focus:outline-none focus:shadow-outline"
              >
                Publish
              </button>
            </div>
          </div>

          <div className="w-full lg:-mt-65 lg:w-2/6 px-8 py-12 ml-auto bg-blue-900 rounded-2xl">
            <div className="flex flex-col text-white">
              <h1 className="font-bold uppercase text-4xl my-4">
                Drop in our office
              </h1>
              <p className="text-gray-400">
              "Success in the food franchise business comes to those who serve quality, stay consistent, and never stop innovating. Stay hungry for growth!"
              </p>

              <div className="flex my-2 w-2/3 lg:w-1/2">
                <div className="flex flex-col">
                  <i className="fas fa-map-marker-alt pt-2 pr-2" />
                </div>
              </div>

              <div className="flex my-2 w-2/3 lg:w-1/2">
                <div className="flex flex-col">
                  <i className="fas fa-phone-alt pt-2 pr-2" />
                </div>
              </div>

              <div className="flex my-2 w-2/3 lg:w-1/2">
                <div className="rounded-full bg-white h-8 w-8 inline-block mx-1 text-center pt-1"></div>
                <div className="rounded-full bg-white h-8 w-8 inline-block mx-1 text-center pt-1"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Todays;
