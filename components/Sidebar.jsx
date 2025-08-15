import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  Phone,
  Mail,
  MapPin,
  Linkedin,
  Github,
  Twitter,
  Facebook,
} from "lucide-react";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Toggle Button - Desktop Only */}
      <button
        onClick={() => setIsOpen(true)}
        className="hidden md:block p-2 rounded-lg bg-primary text-white shadow-lg hover:bg-primary/80 transition"
      >
        ☰
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.aside
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ duration: 0.3 }}
            className="fixed top-0 left-0 h-full w-80 bg-neutral-900/95 backdrop-blur-xl text-neutral-100 shadow-lg z-50 flex flex-col"
          >
            {/* Header */}
            <div className="relative p-6 border-b border-neutral-700">
              <button
                onClick={() => setIsOpen(false)}
                className="absolute top-4 right-4 text-neutral-400 hover:text-white"
              >
                <X size={24} />
              </button>
              <div className="flex flex-col items-center text-center">
                <img
                  src="/your-profile.jpg" // replace with your image path
                  alt="Mehedi Hasan"
                  className="w-20 h-20 rounded-full border-2 border-primary shadow-md object-cover"
                />
                <h2 className="mt-3 text-lg font-bold">Mehedi Hasan</h2>
                <p className="text-sm text-primary">Full Stack Developer</p>
              </div>
            </div>

            {/* Body */}
            <div className="flex-1 p-6 space-y-6 overflow-y-auto">
              {/* Contact Info */}
              <div>
                <h3 className="text-sm font-semibold text-primary uppercase tracking-wide mb-3">
                  Contact Info
                </h3>
                <div className="space-y-3 text-sm">
                  <div className="flex items-center gap-3">
                    <Phone size={18} className="text-primary" /> +880 1747-874773
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail size={18} className="text-primary" /> mehedi.hasan11023@gmail.com
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin size={18} className="text-primary" /> Mymensingh, Bangladesh
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div>
                <h3 className="text-sm font-semibold text-primary uppercase tracking-wide mb-3">
                  Social Links
                </h3>
                <div className="flex gap-4">
                  <a
                    href="https://facebook.com/mehedi.hasan1102"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-full bg-neutral-800 hover:bg-primary hover:text-white transition"
                  >
                    <Facebook size={18} />
                  </a>
                  <a
                    href="https://github.com/mehedi-hasan1102"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-full bg-neutral-800 hover:bg-primary hover:text-white transition"
                  >
                    <Github size={18} />
                  </a>
                  <a
                    href="https://x.com/mehedihasan1102"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-full bg-neutral-800 hover:bg-primary hover:text-white transition"
                  >
                    <Twitter size={18} />
                  </a>
                  <a
                    href="https://linkedin.com/in/mehedi-hasan1102"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-full bg-neutral-800 hover:bg-primary hover:text-white transition"
                  >
                    <Linkedin size={18} />
                  </a>
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="p-6 border-t border-neutral-700 text-xs text-neutral-500">
              © {new Date().getFullYear()} Mehedi Hasan. All rights reserved.
            </div>
          </motion.aside>
        )}
      </AnimatePresence>
    </>
  );
};

export default Sidebar;
