import React from "react";
import { Code, Globe, Briefcase, Mail, Phone, User } from "lucide-react";

const Founder = () => {
  return (
    <div className="relative h-screen flex items-center justify-center bg-gray-900 overflow-hidden px-8 py-16">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-gray-950 to-gray-800 opacity-90"></div>

      <div className="relative z-10 grid md:grid-cols-2 grid-cols-1 items-center gap-16 md:px-24 px-8">
        {/* Left Section - Developer Info */}
        <div className="text-center md:text-left space-y-6">
          <h1 className="text-5xl font-extrabold text-white leading-tight">
            <span className="text-rose-400">Hey,</span> I'm DEEPAK SINGLA
          </h1>
          <p className="text-gray-300 text-lg leading-relaxed">
            A Full Stack Developer passionate about building scalable, high-performance web applications.  
            Skilled in MERN stack, I bring creativity & efficiency to every project.
          </p>

          {/* Developer Contact Info */}
          <div className="space-y-3">
            <div className="flex items-center gap-3 text-gray-300">
              <Mail className="w-6 h-6 text-rose-400" />
              <p>Email: deepak1442005@gmail.com</p>
            </div>
            <div className="flex items-center gap-3 text-gray-300">
              <Phone className="w-6 h-6 text-rose-400" />
              <p>Phone: +91 79862 40401</p>
            </div>
          </div>
        </div>

        {/* Right Section - Developer Image */}
        <div>
          <img 
            src="https://img.freepik.com/free-vector/isolated-young-handsome-man-different-poses-white-background-illustration_632498-859.jpg?t=st=1742502162~exp=1742505762~hmac=53c073234dd2ba71d89ce227b6743bb413c943a0dba9bfaac1631b266d6be1d4&w=826" 
            alt="Developer" 
            className="md:size-96 size-72 rounded-full border-4 border-rose-500 shadow-lg" 
          />
        </div>
      </div>
    </div>
  );
};

export default Founder;
