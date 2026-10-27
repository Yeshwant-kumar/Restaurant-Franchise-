import React from "react";
import { Route, Routes } from "react-router-dom";

import Home from "../components/dashboard/home/Home";
import About from "../components/dashboard/about/About";
import Contact from "../components/dashboard/Contact";
import Services from "../components/dashboard/Services";
import TandC from "../components/dashboard/terms conditions/TandC";

import Cdash from "../components/dashboard/admin/Cdash";
import Owner from "../components/dashboard/admin/Owner";
import Requests from "../components/dashboard/admin/Requests";
import Accepted from "../components/dashboard/admin/Accepted";
import Clients from "../components/dashboard/admin/Clients";
import Rejects from "../components/dashboard/admin/Rejects";

import Fdash from "../components/dashboard/franchise/Fdash";
import History from "../components/dashboard/franchise/History";
import Todays from "../components/dashboard/franchise/Todays";
import Settings from "../components/dashboard/franchise/Settings";
import Charts from "../components/dashboard/franchise/Charts";
import WelcomeF from "../components/dashboard/franchise/WelcomeF";

import Applications from "../components/dashboard/home/Applications";
import Welcome from "../components/dashboard/Welcome";

import AdminLogin from "../components/auth/AdminLogin";
import AdminSettings from "../components/auth/AdminSettings";
import ResetPassword from "../components/auth/ResetPassword";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/services" element={<Services />} />
      <Route path="/terms-and-conditions" element={<TandC />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/admin" element={<AdminLogin />} />
      <Route path="/owner" element={<Owner />}>
        <Route index element={<Welcome />} />
        <Route path="requests" element={<Requests />} />
        <Route path="accepted" element={<Accepted />} />
        <Route path="clients" element={<Clients />} />
        <Route path="rejects" element={<Rejects />} />
        <Route path="settings" element={<AdminSettings />} />
        <Route path="welcome" element={<Welcome />} />
      </Route>

      <Route path="/fdash" element={<Fdash />}>
        <Route index element={<WelcomeF />} />
        <Route path="dash" element={<WelcomeF />} />
        <Route path="history" element={<History />} />
        <Route path="todays" element={<Todays />} />
        <Route path="settings" element={<Settings />} />
        <Route path="charts" element={<Charts />} />
      </Route>

      <Route path="/register" element={<Applications />} />
      <Route path="/reset-password" element={<ResetPassword />}/>
      <Route path="/cdash" element={<Cdash />} />
      <Route path="*" element={<Home />} />
    </Routes>
  );
};

export default AppRouter;