// import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import {
//   Menu,
//   LucideFacebook,
//   X,
//   Linkedin,
//   Github,
//   Moon,
//   Sun,
// } from "lucide-react";

// const navItems = [
//   { label: "Home", to: "#home" },
//   { label: "About me", to: "#about" },
//   { label: "Projects", to: "#projects" },
//   { label: "Contact", to: "#contact" },
// ];

// const socialLinks = [
//   { icon: LucideFacebook, url: "https://facebook.com/mehedi.hasan1102", label: "Facebook" },
//   { icon: Github, url: "https://github.com/mehedi-hasan1102", label: "GitHub" },
//   { icon: X, url: "https://x.com/mehedihasan1102", label: "Twitter/X" },
//   { icon: Linkedin, url: "https://linkedin.com/in/mehedi-hasan1102", label: "LinkedIn" },
// ];

// const Navbar = () => {
//   const [menuOpen, setMenuOpen] = useState(false);
//   const [theme, setTheme] = useState(() => localStorage.getItem("theme") || "corporate");

//   useEffect(() => {
//     document.documentElement.setAttribute("data-theme", theme);
//   }, [theme]);

//   const toggleTheme = () => {
//     const newTheme = theme === "dark" ? "corporate" : "dark";
//     setTheme(newTheme);
//     localStorage.setItem("theme", newTheme);
//     document.documentElement.setAttribute("data-theme", newTheme);
//   };

//   const toggleMenu = () => setMenuOpen((prev) => !prev);

//   const renderNavItem = (item) => {
//     if (item.to.startsWith("/")) {
//       return (
//         <Link
//           key={item.label}
//           to={item.to}
//           className="hover:text-primary transition"
//           onClick={() => setMenuOpen(false)}
//         >
//           {item.label}
//         </Link>
//       );
//     }
//     return (
//       <a
//         key={item.label}
//         href={item.to}
//         className="hover:text-primary transition"
//         onClick={() => setMenuOpen(false)}
//       >
//         {item.label}
//       </a>
//     );
//   };

//   return (
//     <header className="max-w-6xl fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[95%] md:w-[90%]">
//       <div className="flex items-center justify-between bg-base-100/90 text-base-content px-6 py-3 rounded-xl shadow-lg backdrop-blur-md border border-base-300">
//         {/* Logo */}
//         <div className="flex items-center gap-2">
//           <span className="text-primary text-2xl">&lt;/&gt;</span>
//           <span className="font-semibold">
//             Mehedi<span className="text-base-content/60">Hasan</span>
//           </span>
//         </div>

//         {/* Desktop Nav */}
//         <nav className="hidden md:flex items-center gap-6 text-base-content/80">
//           {navItems.map(renderNavItem)}

//           {/* Social Icons */}
//           <div className="flex items-center gap-4 ml-4">
//             {socialLinks.map((link) => {
//               const IconComponent = link.icon;
//               return (
//                 <a
//                   key={link.label}
//                   href={link.url}
//                   aria-label={link.label}
//                   className="hover:text-primary transition"
//                 >
//                   <IconComponent size={18} />
//                 </a>
//               );
//             })}

//             {/* Theme Toggle */}
//             <button
//               onClick={toggleTheme}
//               className="w-6 h-6 flex items-center justify-center rounded-full border border-warning text-warning hover:bg-warning hover:text-black transition"
//               aria-label="Toggle Theme"
//             >
//               {theme === "dark" ? <Sun size={14} /> : <Moon size={14} />}
//             </button>
//           </div>
//         </nav>

//         {/* Mobile Menu Button */}
//         <button
//           onClick={toggleMenu}
//           className="md:hidden text-base-content hover:text-primary transition"
//         >
//           {menuOpen ? <X size={24} /> : <Menu size={24} />}
//         </button>
//       </div>

//       {/* Mobile Dropdown */}
//       {menuOpen && (
//         <div className="mt-2 bg-base-100/90 backdrop-blur-md border border-base-300 rounded-xl text-base-content px-6 py-4 flex flex-col gap-4 md:hidden">
//           {navItems.map(renderNavItem)}

//           {/* Social + Theme */}
//           <div className="flex items-center gap-4 mt-4">
//             {socialLinks.map((link) => {
//               const IconComponent = link.icon;
//               return (
//                 <a
//                   key={link.label}
//                   href={link.url}
//                   aria-label={link.label}
//                   className="hover:text-primary transition"
//                 >
//                   <IconComponent size={18} />
//                 </a>
//               );
//             })}
//             <button
//               onClick={toggleTheme}
//               className="w-6 h-6 flex items-center justify-center rounded-full border border-warning text-warning hover:bg-warning hover:text-black transition"
//               aria-label="Toggle Theme"
//             >
//               {theme === "dark" ? <Sun size={14} /> : <Moon size={14} />}
//             </button>
//           </div>
//         </div>
//       )}
//     </header>
//   );
// };

// export default Navbar;
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Menu, LucideFacebook, X, Linkedin, Github, Moon, Sun } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion"; // For animations

// Example of explicit usage (even if obvious)
const MotionDiv = motion.div;
const Presence = AnimatePresence;

const navItems = [
  { label: "Home", to: "#home" },
  { label: "About", to: "#about" },
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
  const [theme, setTheme] = useState(() => localStorage.getItem("theme") || "corporate");

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "corporate" : "dark";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
  };

  const toggleMenu = () => setMenuOpen((prev) => !prev);

  const renderNavItem = (item, index) => (
    <motion.div
      key={item.label}
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
    >
      {item.to.startsWith("/") ? (
        <Link
          to={item.to}
          className="hover:text-primary transition-colors duration-300 px-3 py-2 rounded-lg hover:bg-base-200/50"
          onClick={() => setMenuOpen(false)}
        >
          {item.label}
        </Link>
      ) : (
        <a
          href={item.to}
          className="hover:text-primary transition-colors duration-300 px-3 py-2 rounded-lg hover:bg-base-200/50"
          onClick={() => setMenuOpen(false)}
        >
          {item.label}
        </a>
      )}
    </motion.div>
  );

  return (
    <header className="p-4  fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[95%] md:w-[90%] max-w-6xl">
      {/* Main Navbar */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className=" border border-primary/30 flex items-center justify-between bg-base-100/80 text-base-content px-6 py-3 rounded-xl shadow-lg backdrop-blur-lg "
      >
        {/* Logo */}
        <motion.div whileHover={{ scale: 1.05 }} className="flex items-center gap-2">
          <span className="text-primary text-2xl font-mono">&lt;/&gt;</span>
          <span className="font-bold text-lg">
            Mehedi <span className="text-base-content/60">Hasan</span>
          </span>
        </motion.div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-2">
          {navItems.map((item, index) => renderNavItem(item, index))}

          {/* Social Icons */}
          <div className="flex items-center gap-3 ml-4">
            {socialLinks.map((link) => {
              const IconComponent = link.icon;
              return (
                <motion.a
                  key={link.label}
                  href={link.url}
                  aria-label={link.label}
                  whileHover={{ y: -2, scale: 1.1 }}
                  className="p-2 rounded-full hover:bg-base-200/30 transition-colors"
                >
                  <IconComponent size={18} />
                </motion.a>
              );
            })}

            {/* Theme Toggle */}
            <motion.button
              onClick={toggleTheme}
              whileTap={{ scale: 0.9 }}
              className="p-2 rounded-full border border-base-300 hover:bg-base-200/30 transition-colors"
              aria-label="Toggle Theme"
            >
              {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
            </motion.button>
          </div>
        </nav>

        {/* Mobile Menu Button */}
        <motion.button
          onClick={toggleMenu}
          whileHover={{ scale: 1.1 }}
          className="md:hidden p-2 rounded-full hover:bg-base-200/30"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </motion.button>
      </motion.div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="mt-2 bg-base-100/90 backdrop-blur-lg border border-base-300/50 rounded-xl shadow-lg px-6 py-4 flex flex-col gap-3 md:hidden"
          >
            {navItems.map((item, index) => renderNavItem(item, index))}

            <div className="flex items-center justify-between mt-4 pt-4 border-t border-base-300/30">
              <div className="flex gap-4">
                {socialLinks.map((link) => {
                  const IconComponent = link.icon;
                  return (
                    <motion.a
                      key={link.label}
                      href={link.url}
                      aria-label={link.label}
                      whileHover={{ y: -2 }}
                      className="p-2 rounded-full hover:bg-base-200/30"
                    >
                      <IconComponent size={18} />
                    </motion.a>
                  );
                })}
              </div>
              <motion.button
                onClick={toggleTheme}
                whileHover={{ scale: 1.1 }}
                className="p-2 rounded-full border border-base-300 hover:bg-base-200/30"
              >
                {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;