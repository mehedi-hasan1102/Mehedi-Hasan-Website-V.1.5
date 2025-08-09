

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  Menu,
  LucideFacebook,
  X,
  Linkedin,
  Github,
  Moon,
  Sun,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { label: "Home", to: "#home" },
  { label: "About", to: "#about" },
  { label: "Services", to: "#services" },
  { label: "Skills", to: "#skills" },
  { label: "Projects", to: "#projects" },
  { label: "Contact", to: "#contact" },
];

const socialLinks = [
  { icon: LucideFacebook, url: "https://facebook.com/mehedi.hasan1102", label: "Facebook" },
  { icon: Github, url: "https://github.com/mehedi-hasan1102", label: "GitHub" },
  { icon: X, url: "https://x.com/mehedihasan1102", label: "Twitter/X" },
  { icon: Linkedin, url: "https://linkedin.com/in/mehedi-hasan1102", label: "LinkedIn" },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [theme, setTheme] = useState(() => localStorage.getItem("theme") || "lemonade");

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    const newTheme = theme === "abyss" ? "lemonade" : "abyss";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  const toggleMenu = () => setMenuOpen((prev) => !prev);

  const renderNavItem = (item, index) => (
    <motion.div
      key={item.label}
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.04 }}
    >
      {item.to.startsWith("/") ? (
        <Link
          to={item.to}
          className="text-sm sm:text-base block hover:text-primary px-3 py-2 rounded-lg hover:bg-base-200/50 transition"
          onClick={() => setMenuOpen(false)}
        >
          {item.label}
        </Link>
      ) : (
        <a
          href={item.to}
          className="text-sm sm:text-base block hover:text-primary px-3 py-2 rounded-lg hover:bg-base-200/50 transition"
          onClick={() => setMenuOpen(false)}
        >
          {item.label}
        </a>
      )}
    </motion.div>
  );

  return (
    // <header className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[95%] md:w-[90%] max-w-6xl">
      // <header className="fixed top-4 left-0 right-0 z-50">
        <header className="top-4 left-0 right-0 z-50 py-4">

        <div className="w-full max-w-6xl px-4 sm:px-6 md:px-8 mx-auto font-mono ">
    {/* your navbar content here */}
   
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="border border-primary/30 flex items-center justify-between bg-base-200 text-base-content px-4 md:px-6 py-3 rounded-xl shadow-lg backdrop-blur-md shadow-lg hover:shadow-primary/10 transition-shadow duration-300"
      >
        {/* Logo */}
        <motion.div whileHover={{ scale: 1.05 }} className="flex items-center gap-2 whitespace-nowrap">
          <span className="text-primary text-xl sm:text-2xl font-mono">&lt;/&gt;</span>
          <span className="font-bold text-sm sm:text-lg">
            Mehedi <span className="text-base-content/60">Hasan</span>
          </span>
        </motion.div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-2 flex-1 justify-center flex-wrap">
          {navItems.map((item, index) => renderNavItem(item, index))}
        </nav>

        {/* Social & Theme Toggle (Desktop) */}
        <div className="hidden md:flex items-center gap-2 ml-4">
          {socialLinks.map((link) => {
            const Icon = link.icon;
            return (
              <motion.a
                key={link.label}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.label}
                whileHover={{ y: -2, scale: 1.1 }}
                className="p-2 rounded-full hover:text-primary hover:bg-base-200/30"
              >
                <Icon size={18} />
              </motion.a>
            );
          })}
          <motion.button
            onClick={toggleTheme}
            whileTap={{ scale: 0.95 }}
            className="p-2 rounded-full border border-base-300 hover:text-primary  hover:bg-base-200/30"
            aria-label="Toggle Theme"
          >
            {theme === "abyss" ? <Sun size={16} /> : <Moon size={16} />}
          </motion.button>
        </div>

        {/* Mobile Menu Button */}
        <motion.button
          onClick={toggleMenu}
          whileHover={{ scale: 1.05 }}
          className="md:hidden p-2 rounded-full hover:bg-base-200/30"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </motion.button>
      </motion.div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="mt-2 bg-base-100/90 backdrop-blur-md border border-base-300/50 rounded-xl shadow-lg px-6 py-4 flex flex-col gap-2 md:hidden"
          >
            {navItems.map((item, index) => renderNavItem(item, index))}

            <div className="flex items-center justify-between mt-4 pt-4 border-t border-base-300/30">
              <div className="flex gap-3 flex-wrap">
                {socialLinks.map((link) => {
                  const Icon = link.icon;
                  return (
                    <motion.a
                      key={link.label}
                      href={link.url}
                      aria-label={link.label}
                      whileHover={{ y: -2 }}
                      className="p-2 rounded-full hover:bg-base-200/30"
                    >
                      <Icon size={18} />
                    </motion.a>
                  );
                })}
              </div>
              <motion.button
                onClick={toggleTheme}
                whileHover={{ scale: 1.1 }}
                className="p-2 rounded-full border border-base-300 hover:bg-base-200/30"
              >
                {theme === "abyss" ? <Sun size={16} /> : <Moon size={16} />}
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      </div> 
    </header>
  );
};

export default Navbar;
