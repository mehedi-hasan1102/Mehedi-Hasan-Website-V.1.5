import React from "react";
import { FaGithub, FaXTwitter, FaLinkedin } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-base-100 text-base-content font-mono text-sm py-10">
      <div className="max-w-5xl mx-auto w-full px-4">
        {/* Top Border */}
        <div className="border-t border-base-300 w-full mb-6" />

        <div className="flex flex-col items-center text-center space-y-4">
          {/* Logo */}
          <div className="flex items-center space-x-1 text-lg font-medium">
            <span className="text-primary text-xl">&lt;/&gt;</span>
            <span className="font-semibold">Mehedi</span>
            <span className="text-base-content/60">Hasan</span>
          </div>

          {/* Social Icons */}
          <div className="flex space-x-4 text-xl">
            <a
              href="https://github.com/mehedi-hasan1102"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>
            <a
              href="https://x.com/mehedihasan1102"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition"
              aria-label="Twitter"
            >
              <FaXTwitter />
            </a>
            <a
              href="https://www.linkedin.com/in/mehedihasan1102/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-wrap justify-center gap-4 text-base-content/70 text-xs tracking-wide">
            {[
              { label: "Home", to: "/" },
              { label: "About me", to: "#about-me" },
              { label: "Projects", to: "#projects" },
              { label: "Contact", to: "#contact-me" },
            ].map((item) => (
              <a
                key={item.label}
                href={item.to}
                className="hover:text-primary transition"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
