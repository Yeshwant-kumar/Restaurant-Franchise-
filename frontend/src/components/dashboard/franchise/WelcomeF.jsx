import React from 'react';
import { motion } from "framer-motion";
import { Briefcase, Users, Star, ArrowRight } from "lucide-react";

const WelcomeF = () => {
  return (
    <div className="pt-20 min-h-screen w-full bg-gradient-to-r from-gray-800 to-gray-900 p-8 text-white flex items-center justify-center">
      <div className="w-full max-w-6xl">
        <motion.div 
          initial={{ opacity: 0, y: -20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h1 className="text-4xl font-bold">Welcome to Your Flavors & Finesse Dashboard 🍽️</h1>
          <p className="text-gray-300 mt-2 text-lg">Manage and grow your franchise network efficiently.</p>
        </motion.div>
        <div className="grid md:grid-cols-3 gap-6 mt-12">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
              className="bg-gray-700 p-6 rounded-2xl shadow-lg text-center border border-gray-600 hover:scale-105 transition-transform"
            >
              <stat.icon className="w-12 h-12 mx-auto text-rose-400 mb-2" />
              <h2 className="text-2xl font-bold">{stat.value}</h2>
              <p className="text-gray-300">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-4">Quick Actions</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {actions.map((action, index) => (
              <motion.button
                key={index}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.2, duration: 0.5 }}
                className="flex items-center justify-between w-full p-4 bg-gray-700 rounded-lg hover:bg-rose-500 transition text-lg font-bold"
              >
                {action.label}
                <ArrowRight className="w-5 h-5" />
              </motion.button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
const stats = [
  { icon: Briefcase, label: "Franchises", value: "250+" },
  { icon: Users, label: "Average FootFall", value: "55" },
  { icon: Star, label: "Average Rating", value: "4.8 / 5" },
];

const actions = [
  { label: "Contact Admin" },
  { label: "" },
  { label: "Financial Growths" },
  { label: "Marketing Tools" },
];

export default WelcomeF;
