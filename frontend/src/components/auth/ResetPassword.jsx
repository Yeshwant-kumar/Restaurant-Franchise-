import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { EyeIcon, EyeOffIcon } from "lucide-react";
import axios from "axios";
const API_URL = import.meta.env.VITE_API_URL;

const ResetPassword = () => {
  const [step, setStep] = useState(1);
  const [otp, setOtp] = useState("");
  const [enteredOtp, setEnteredOtp] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [obj, setobj] = useState({
    email: "",
    newPassword: "",
    cPassword: "",
  });
  function doUpdate(event) {
    var { name, value } = event.target;
    setobj({ ...obj, [name]: value });
  }
  async function sendOtp() {
    if (!obj.email) return alert("Please enter your email");
    let url = `${API_URL}/user/forgotPassword`;
    let resp = await axios.post(url, obj, {
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
    });
    if (!resp.data.status) {
      alert(resp.data.msg);
      return;
    }
    let randomOtp = Math.floor(1000 + Math.random() * 9000);
    setOtp(randomOtp.toString());
    const emailData = {
      email: obj.email,
      password: randomOtp,
      message: "Your OTP for password reset is below.",
    };

    try {
      await emailjs.send(
        "service_this", // Replace with your EmailJS Service ID
        "template_69hq4y5", // Replace with your EmailJS Template ID
        emailData,
        "ZzRZBRS5bFGXhr4kZ" // Replace with your EmailJS Public Key
      );
      setStep(2);
    } catch (error) {
      console.error("EmailJS Error:", error);
      alert("Failed to send OTP. Try again!");
    }
  }

  // Verify OTP
  const verifyOtp = () => {
    if (enteredOtp !== otp) {
      alert("Invalid OTP. Try again!");
      return;
    }
    alert("OTP verified successfully!");
    setStep(3);
  };

  async function resetPassword() {
    let url = `${API_URL}/user/resetPassword`;
    let resp = await axios.post(url, obj, {
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
    });
    if (!resp.data.status) {
      alert(resp.data.msg);
    } else {
      alert(resp.data.msg);
    }
    setStep(1);
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-gray-700 to-gray-400 p-6">
      <div className="w-full max-w-md p-8 bg-gray-700 shadow-lg rounded-2xl border border-gray-600">
        {step === 1 && (
          <>
            <h2 className="text-3xl font-bold text-white text-center mb-6">
              🔐 Enter Email
            </h2>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 mt-2 bg-gray-800 text-white border border-gray-600 rounded-lg focus:ring-2 focus:ring-orange-500"
              onChange={doUpdate}
              required
            />
            <button
              onClick={sendOtp}
              className="w-full py-2 mt-4 bg-rose-600 hover:bg-rose-700 text-white font-bold rounded-lg transition"
            >
              Send OTP
            </button>
          </>
        )}

        {step === 2 && (
          <>
            <h2 className="text-3xl font-bold text-white text-center mb-6">
              🔢 Enter OTP
            </h2>
            <input
              type="text"
              placeholder="Enter OTP"
              className="w-full px-4 py-2 mt-2 bg-gray-800 text-white border border-gray-600 rounded-lg focus:ring-2 focus:ring-orange-500"
              value={enteredOtp}
              onChange={(e) => setEnteredOtp(e.target.value)}
              required
            />
            <button
              onClick={verifyOtp}
              className="w-full py-2 mt-4 bg-rose-500 hover:bg-rose-700 text-white font-bold rounded-lg transition"
            >
              Verify OTP
            </button>
          </>
        )}

        {step === 3 && (
          <>
            <h2 className="text-3xl font-bold text-white text-center mb-6">
              🔒 Reset Password
            </h2>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="New password"
                name="newPassword"
                className="w-full px-4 py-2 mt-2 bg-gray-800 text-white border border-gray-600 rounded-lg focus:ring-2 focus:ring-orange-500"
                onChange={doUpdate}
                required
              />
              <button
                type="button"
                className="absolute top-3 right-4 text-gray-400 hover:text-gray-200"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <EyeOffIcon /> : <EyeIcon />}
              </button>
            </div>
            <input
              type="password"
              placeholder="Confirm password"
              className="w-full px-4 py-2 mt-2 bg-gray-800 text-white border border-gray-600 rounded-lg focus:ring-2 focus:ring-orange-500"
              name="cPassword"
              onChange={doUpdate}
              required
            />
            <button
              onClick={resetPassword}
              className="w-full py-2 mt-4 bg-green-500 hover:bg-green-600 text-white font-bold rounded-lg transition"
            >
              Reset Password
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default ResetPassword;
