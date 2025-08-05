import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import { motion } from "framer-motion";

// import TechBackground from "./TechBackground";
// import Footer from "./Footer";
import ScrollToTopButton from './ScrollToTopButton';
import LightRays from './LightRays';

const Layout = () => {
  return (
    <>
   
      {/* Tech-themed background */}
      {/* <TechBackground /> */}
      <div className="fixed top-0 left-0 w-full h-full z-[-1]">
        <LightRays />
      </div>
      <ScrollToTopButton />

      {/* Main content container with proper stacking */}
      <div className="relative z-10 flex flex-col min-h-screen">
        {/* Animated navbar */}
        <Navbar />

        {/* Main content area with subtle entrance animation */}
        <motion.main
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="flex-1"
        >

        

          <Outlet />
        </motion.main>

        {/* Footer with contact links */}
        {/* <Footer /> */}
      </div>
    </>
  );
};

export default Layout;