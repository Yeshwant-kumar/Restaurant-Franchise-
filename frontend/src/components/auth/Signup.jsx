import React from "react";
import { useState } from "react";
import axios from "axios";
const API_URL = import.meta.env.VITE_API_URL;

const Signup = () => {
  var [textType, setText] = useState("None");
  const [obj, setobj] = useState({
    email: "",
    pwd: "",
    cpwd: "",
  });
  function doUpdate(event) {
    var { name, value } = event.target;
    setobj({ ...obj, [name]: value });
  }
  async function registerUser()
  {
      if(JSON.stringify(obj.cpwd)===JSON.stringify(obj.pwd))
      {
      let url = `${API_URL}/user/saveuserWithPost`;
      let resp = await axios.post(url, obj, {
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
      });
      //alert(JSON.stringify(resp.data));
      if (resp.data.status == true) alert(resp.data.msg);
      else {
        alert(resp.data.msg);
      }
    }
    else{
      alert("Passwords do not match");
    }
  }
  return (
    
    <div>
      <div className="relative mx-auto w-full max-w-md bg-white px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 sm:rounded-xl sm:px-10">
        <div className="w-full">
          <div className="text-center">
            <h1 className="text-3xl font-semibold text-gray-900">Sign in</h1>
            <p className="mt-2 text-gray-500">
              Sign in below to access your account
            </p>
          </div>
          <div className="mt-5">
            
              <div className="relative mt-6">
                <input
                  type="email"
                  name="email"
                  id="email"
                  onChange={doUpdate}
                  placeholder="Email Address"
                  className="peer mt-1 w-full border-b-2 border-gray-300 px-0 py-1 placeholder:text-transparent focus:border-gray-500 focus:outline-none"
                  autocomplete="NA"
                />
                <label
                  for="email"
                  className="pointer-events-none absolute top-0 left-0 origin-left -translate-y-1/2 transform text-sm text-gray-800 opacity-75 transition-all duration-100 ease-in-out peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:top-0 peer-focus:pl-0 peer-focus:text-sm peer-focus:text-gray-800"
                >
                  Email Address
                </label>
              </div>
              <div className="relative mt-6">
                <input
                  type="password"
                  name="pwd"
                  id="pwd"
                  onChange={doUpdate}
                  placeholder="Password"
                  className="peer peer mt-1 w-full border-b-2 border-gray-300 px-0 py-1 placeholder:text-transparent focus:border-gray-500 focus:outline-none"
                />
                <label
                  for="password"
                  className="pointer-events-none absolute top-0 left-0 origin-left -translate-y-1/2 transform text-sm text-gray-800 opacity-75 transition-all duration-100 ease-in-out peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:top-0 peer-focus:pl-0 peer-focus:text-sm peer-focus:text-gray-800"
                >
                  Password
                </label>
              </div>
              <div className="relative mt-6">
                <input
                  type="password"
                  name="cpwd"
                  id="cpwd"
                  onChange={doUpdate}
                  placeholder="Password"
                  className="peer peer mt-1 w-full border-b-2 border-gray-300 px-0 py-1 placeholder:text-transparent focus:border-gray-500 focus:outline-none"
                />
                <label
                  for="password"
                  className="pointer-events-none absolute top-0 left-0 origin-left -translate-y-1/2 transform text-sm text-gray-800 opacity-75 transition-all duration-100 ease-in-out peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:top-0 peer-focus:pl-0 peer-focus:text-sm peer-focus:text-gray-800"
                >
                  Confirm Password
                </label>
              </div>
              <div className="my-6">
                <button
                  onClick={registerUser}
                  className="w-full rounded-md bg-black px-3 py-4 text-white focus:bg-gray-600 focus:outline-none"
                >
                  Sign in
                </button>
              </div>
              <p className="text-center text-sm text-gray-500">
                Don&#x27;t have an account yet?
                <button
                
                  className="font-semibold text-gray-600 hover:underline focus:text-gray-800 focus:outline-none"
                >
                  Sign up
                </button>
                .
              </p>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
