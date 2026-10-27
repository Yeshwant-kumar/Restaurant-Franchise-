import React from 'react'
import { useState } from 'react';
import axios from 'axios';
const API_URL = import.meta.env.VITE_API_URL;
const AdminSettings = () => {
  let admin=localStorage.getItem("admin");
  const [obj, setobj] = useState({
      username: admin,
      password: "",
      newPassword: "",
      cPassword: "",
    });
    function doUpdate(event) {
      var { name, value } = event.target;
      setobj({ ...obj, [name]: value });
    }
    async function makeUpdate()
    {
      let url = `${API_URL}/admin/adminUpdate`;
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
    }
  return (
    <div className="p-4 pt-12">
      <div className="border-2 rounded-lg dark:border-gray-700 mt-14">
        <div className="mb-4 rounded-sm bg-gray-50">
          <div class="flex flex-wrap gap-4 p-6 justify-center text-lg font-serif">
          <div className="flex-1">
          <h3 className="text-xl font-bold mb-2">Password</h3>

          <div className="space-y-4 py-4">
            <input
            onChange={doUpdate}
              type="password"
              name="password"
              placeholder="Current Password"
              className="w-full rounded-lg border border-gray-200 px-4 py-2.5"
            />
            <input
            onChange={doUpdate}
              type="password"
              name="newPassword"
              placeholder="New Password"
              className="w-full rounded-lg border border-gray-200 px-4 py-2.5"
            />
            <input
            onChange={doUpdate}
              type="password"
              name="cPassword"
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
      </div>
    </div>
  )
}

export default AdminSettings
