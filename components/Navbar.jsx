import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  Menu,
  X,
  Linkedin,
  Github,
  Moon,
  Sun,
} from "lucide-react";

const navItems = [
  { label: "Home", to: "#home" },
  { label: "About me", to: "#about-me" },
  { label: "Projects", to: "#projects" },
  { label: "Contact", to: "#contact-me" },
];

const socialLinks = [
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

  const renderNavItem = (item) => {
    if (item.to.startsWith("/")) {
      return (
        <Link
          key={item.label}
          to={item.to}
          className="hover:text-primary transition"
          onClick={() => setMenuOpen(false)}
        >
          {item.label}
        </Link>
      );
    }
    return (
      <a
        key={item.label}
        href={item.to}
        className="hover:text-primary transition"
        onClick={() => setMenuOpen(false)}
      >
        {item.label}
      </a>
    );
  };

  return (
    <header className="max-w-6xl fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[95%] md:w-[90%]">
      <div className="flex items-center justify-between bg-base-100/90 text-base-content px-6 py-3 rounded-xl shadow-lg backdrop-blur-md border border-base-300">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <span className="text-primary text-2xl">&lt;/&gt;</span>
          <span className="font-semibold">
            Mehedi<span className="text-base-content/60">Hasan</span>
          </span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6 text-base-content/80">
          {navItems.map(renderNavItem)}

          {/* Social Icons */}
          <div className="flex items-center gap-4 ml-4">
            {socialLinks.map((link) => {
              const IconComponent = link.icon;
              return (
                <a
                  key={link.label}
                  href={link.url}
                  aria-label={link.label}
                  className="hover:text-primary transition"
                >
                  <IconComponent size={18} />
                </a>
              );
            })}

            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="w-6 h-6 flex items-center justify-center rounded-full border border-warning text-warning hover:bg-warning hover:text-black transition"
              aria-label="Toggle Theme"
            >
              {theme === "dark" ? <Sun size={14} /> : <Moon size={14} />}
            </button>
          </div>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-base-content hover:text-primary transition"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div className="mt-2 bg-base-100/90 backdrop-blur-md border border-base-300 rounded-xl text-base-content px-6 py-4 flex flex-col gap-4 md:hidden">
          {navItems.map(renderNavItem)}

          {/* Social + Theme */}
          <div className="flex items-center gap-4 mt-4">
            {socialLinks.map((link) => {
              const IconComponent = link.icon;
              return (
                <a
                  key={link.label}
                  href={link.url}
                  aria-label={link.label}
                  className="hover:text-primary transition"
                >
                  <IconComponent size={18} />
                </a>
              );
            })}
            <button
              onClick={toggleTheme}
              className="w-6 h-6 flex items-center justify-center rounded-full border border-warning text-warning hover:bg-warning hover:text-black transition"
              aria-label="Toggle Theme"
            >
              {theme === "dark" ? <Sun size={14} /> : <Moon size={14} />}
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
