import React from "react";
import { Github, Twitter, Linkedin, Facebook } from "lucide-react";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 mt-8 "
    >
      <div className=" rounded-t-xl
 pb-4  backdrop-blur-sm hover:shadow-primary/10 transition-shadow duration-300 font-mono text-sm text-base-content ">
        {/* Divider */}
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: "100%" }}
          transition={{ duration: 0.5 }}
          className="h-px bg-primary/30 mb-6"
        />

        {/* Branding */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="flex flex-col items-center text-center gap-2 mb-4"
        >
          <div className="flex items-center gap-1 text-lg font-medium">
            <span className="text-primary text-xl">&lt;/&gt;</span>
            <span className="font-semibold">Mehedi</span>
            <span className="text-base-content/60">Hasan</span>
          </div>

          {/* Social Icons */}
          <div className="flex gap-4 mt-2 text-base-content/80">
            {[
              {
                icon: Facebook,
                href: "https://facebook.com/mehedi.hasan1102",
                label: "Facebook",
              },
              {
                icon: Github,
                href: "https://github.com/mehedi-hasan1102",
                label: "GitHub",
              },
              {
                icon: Twitter,
                href: "https://x.com/mehedihasan1102",
                label: "Twitter",
              },
              {
                icon: Linkedin,
                href: "https://www.linkedin.com/in/mehedi-hasan1102/",
                label: "LinkedIn",
              },
            ].map((social, idx) => (
              <motion.a
                key={idx}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition"
                aria-label={social.label}
                whileHover={{ y: -2, scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <social.icon size={18} />
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Navigation Links */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
          className="flex flex-wrap justify-center gap-4 text-xs tracking-wide text-base-content/70"
        >
          {[
            

            { label: "About me", to: "#about" },
  { label: "Resume", to: "#resume" },
  { label: "Services", to: "#services" },
  { label: "Portfoliyo", to: "#portfolio" },
  // { label: "Skills", to: "#skills" },
  //  { label: "Blogs", to: "#skills" },
  { label: "Contact", to: "#contact" },
          ].map((item, index) => (
            <motion.a
              key={item.label}
              href={item.to}
              className="hover:text-primary transition"
              whileHover={{ y: -1 }}
            >
              {item.label}
            </motion.a>
          ))}
        </motion.div>
<p className="text-center text-xs text-base-content/50 m-4">
          &copy; {new Date().getFullYear()} Mehedi Hasan. All rights reserved.
        </p>
        
      </div>
      {/* Copyright */}
        
     
    </motion.footer>
  );
};

export default Footer;
