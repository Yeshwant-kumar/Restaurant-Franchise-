import React from 'react'
import { useState } from 'react';
import { Eye, EyeOff, Lock, Mail } from 'lucide-react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
const API_URL = import.meta.env.VITE_API_URL;
const Flogin = () => {
    const [showPassword, setShowPassword] = useState(false);
    let doRedirect = useNavigate();
    const [obj, setobj] = useState({
    email: "",
    password: "",
  });
  function doUpdate(event) {
    var { name, value } = event.target;
    setobj({ ...obj, [name]: value });
  }
  async function makeLogin()
  {
      let url = `${API_URL}/user/doFLogin`;
      let resp = await axios.post(url, obj, {
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
      });
      let token="";
      if (resp.data.status == true)
      {
        token=resp.data.token;
        localStorage.setItem("fToken", token);
        localStorage.setItem("user", resp.data.user);
        doRedirect("/fdash");
      }
      else {
        alert(resp.data.msg);
      }
  }
  async function resetPassword()
  {
    doRedirect("/reset-password");
    
  }
  return (
    <div className="min-h-[calc(100vh-70px)] flex items-center justify-center bg-gray-50">
      <div className="max-w-md w-full space-y-8 p-8 bg-white rounded-xl shadow-lg">
        <div className="text-center">
          <h2 className="mt-6 text-3xl font-extrabold text-gray-900">
            Welcome back
          </h2>
          <p className="mt-2 text-sm text-gray-600">
            Please sign in to your account
          </p>
        </div>

        <div className="mt-8 space-y-6">
          <div className="space-y-4">
            <div className="relative">
              <label htmlFor="email" className="text-sm font-medium text-gray-700">
                Email address
              </label>
              <div className="mt-1 relative rounded-md shadow-sm">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Mail className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  
                  name="email"
                  type="email"
                  required
                  onChange={doUpdate}
                  className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="you@example.com"
                />
              </div>
            </div>

            <div className="relative">
              <label htmlFor="password" className="text-sm font-medium text-gray-700">
                Password
              </label>
              <div className="mt-1 relative rounded-md shadow-sm">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Lock className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  name="password"
                  type={showPassword ? 'text' : 'password'}
                  required
                  onChange={doUpdate}
                  className="block w-full pl-10 pr-10 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Enter your password"
                />
                <button
                  type="button"
                  className="absolute inset-y-0 right-0 pr-3 flex items-center"
                  
                >
                  {showPassword ? (
                    <EyeOff className="h-5 w-5 text-gray-400" />
                  ) : (
                    <Eye className="h-5 w-5 text-gray-400" />
                  )}
                </button>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
              />
              <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                Remember me
              </label>
            </div>

            <div className="text-sm">
              <button onClick={resetPassword} className="font-medium text-blue-600 hover:text-blue-500">
                Forgot your password?
              </button>
            </div>
          </div>

          {/* Submit Button */}
          <div>
            <button
            onClick={makeLogin}
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-200"
            >
              Sign in
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Flogin
