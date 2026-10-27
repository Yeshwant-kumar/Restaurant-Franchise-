import React from "react";
import { useNavigate } from "react-router-dom";
import { useState ,useContext} from "react";
import axios from "axios";
import { userContext } from "../../context/RequestData";
const API_URL = import.meta.env.VITE_API_URL;
const AdminLogin = () => {
  let doRedirect = useNavigate();
  const {callData}=useContext(userContext);
  const [obj, setobj] = useState({
    username: "",
    password: "",
  });
  function doUpdate(event) {
    var { name, value } = event.target;
    setobj({ ...obj, [name]: value });
  }
  async function registerUser()
  {
      let url = `${API_URL}/admin/saveAdmin`;
      let resp = await axios.post(url, obj, {
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
      });
      //alert(JSON.stringify(resp.data));
      if (resp.data.status == true) alert(resp.data.msg);
      else {
        alert(resp.data.msg);
      }
  }
  async function makeLogin() {
  
    let url = `${API_URL}/admin/adminLogin`;
      let resp = await axios.post(url, obj, {
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
      });
      let token="";
      if (resp.data.status == true)
      {
        token=resp.data.token;
        localStorage.setItem("adminToken", token);
        localStorage.setItem("admin", resp.data.user);
        doRedirect("/owner");
        check();

      }
      else {
        alert(resp.data.msg);
      }
  }
  async function check()
    {
        var result=await callData();
    }
  return (
    <div>
      <div class="bg-gray-200 h-screen flex items-center justify-center p-4 dark:bg-slate-800">
        <div class="bg-white p-6 shadow-lg rounded-xl w-96 dark:bg-slate-100">
          <div class="text-2xl text-blue-800 font-bold capitalize text-center mb-4">
            <h3>welcome back!</h3>
          </div>
          <div>
            <div>
              <div class="capitalize text-xl mb-2">
                <label>username</label>
              </div>
              <div class="border-2 relative">
                <span class="absolute px-2 inset-y-0 left-0 flex items-center text-gray-400">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="size-5"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
                    />
                  </svg>
                </span>
                <input
                  class="w-full placeholder:capitalize px-8 py-1.5 outline-blue-800"
                  type="text"
                  name="username"
                  onChange={doUpdate}
                  placeholder="enter username"
                />
              </div>
            </div>
            <div class="mt-4">
              <div class="capitalize text-xl mb-2">
                <label>password</label>
              </div>
              <div class="border-2 relative">
                <span class="absolute px-2 inset-y-0 left-0 flex items-center text-gray-400">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="size-5"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z"
                    />
                  </svg>
                </span>
                <input
                  class="w-full placeholder:capitalize px-8 py-1.5 outline-blue-800"
                  type="password"
                  name="password"
                  onChange={doUpdate}
                  placeholder="enter password"
                />
              </div>
            </div>
            <div class="sm:flex sm:justify-between inline-block my-4"></div>
            <div>
              <button onClick={makeLogin} class="bg-blue-800 text-xl text-white font-medium uppercase p-2 rounded-lg w-full opacity-90 hover:opacity-100">
                login
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
