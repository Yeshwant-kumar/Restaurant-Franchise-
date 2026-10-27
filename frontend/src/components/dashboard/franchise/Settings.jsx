import React from 'react'
import { User } from 'lucide-react';
import { useState } from "react";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { use } from 'react';
const API_URL = import.meta.env.VITE_API_URL;
const Settings = () => {
  const fToken=localStorage.getItem("fToken");
  const doRedirect=useNavigate();
  const [obj, setobj] = useState({
    email: localStorage.getItem("user"),
    password: "",
    newPassword: "",
    cPassword: "",
    token: fToken,
  });
  function doUpdate(event) {
    var { name, value } = event.target;
    setobj({ ...obj, [name]: value });
  }
  async function makeUpdate()
  {
    let url = `${API_URL}/user/userUpdate`;
    let resp = await axios.post(url, obj, {
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
    });
    if (resp.data.status == true)
    {
      alert(resp.data.msg);
    }
    else {
      alert(resp.data.msg);
    }
    if(!resp.data.tstatus)
    {
      doRedirect("/home");
    }
  }
  return (
    <>
    <div className="min-h-screen flex flex-col items-center pt-20">
      <h2 className="text-2xl font-bold mb-2">Settings Page</h2>
      <p className="text-gray-500 mb-6">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
      </p>

      <div className="flex flex-col md:flex-row bg-white shadow-md rounded-lg w-full max-w-5xl p-6 gap-6">
        {/* Account Information */}
        <div className="flex-1">
          <h3 className="text-xl font-bold mb-2">Account Information</h3>
          <p className="text-gray-500 mb-4">Edit your profile quickly</p>

          <div className="flex flex-col items-center mb-4">
  <User className="w-20 h-20 text-gray-500" />
</div>

          <div className="space-y-4">
          <div>
                <label className="mb-2 block text-sm font-medium text-gray-700">First Name</label>
                <input
                  type="text"
                  placeholder='First Name'
                  className="w-full rounded-lg border border-gray-200 px-4 py-1.5"
                />
              </div>
              
              <div>
                <label className="mb-2 block text-sm font-medium text-gray-700">Email Address</label>
                <input
                  type="email"
                  value={localStorage.getItem("user")}
                  className="w-full rounded-lg border border-gray-200 px-4 py-1.5"
                />
              </div>
              <div>
                <label className="mb-2 block text-sm font-medium text-gray-700">Website</label>
                <input
                  type="url"
                  placeholder="exampla@domain.com"
                  className="w-full rounded-lg border border-gray-200 px-4 py-1.5"
                />
              </div>
            <button
              className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
            >
              Update Now
            </button>
          </div>
        </div>

        {/* Password Change */}
        <div className="flex-1">
          <h3 className="text-xl font-bold mb-2">Password</h3>

          <div className="space-y-4 py-4">
            <input
              type="password"
              name="password"
              onChange={doUpdate}
              placeholder="Current Password"
              className="w-full rounded-lg border border-gray-200 px-4 py-2.5"
            />
            <input
              type="password"
              name="newPassword"
              onChange={doUpdate}
              placeholder="New Password"
              className="w-full rounded-lg border border-gray-200 px-4 py-2.5"
            />
            <input
              type="password"
              name="cPassword"
              onChange={doUpdate}
              placeholder="Re-type New Password"
              className="w-full rounded-lg border border-gray-200 px-4 py-2.5"
            />
            <button
              onClick={makeUpdate}
              className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
    
    </>
  )
}

export default Settings
