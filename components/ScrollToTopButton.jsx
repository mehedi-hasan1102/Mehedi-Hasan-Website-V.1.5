import React, { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";
import { motion } from "framer-motion";

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 200);
    };
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <motion.button
      onClick={scrollToTop}
      initial={{ opacity: 0 }}
      animate={{ opacity: isVisible ? 1 : 0 }}
      transition={{ duration: 0.3 }}
      className="font-mono fixed bottom-6 right-6 z-50 p-3 rounded-xl
                 bg-base-200 text-base-content 
                 shadow-lg border border-primary/30 
                 hover:border-primary transition-all"
      aria-label="Scroll to top"
    >
      <ArrowUp size={18} />
    </motion.button>
  );
};

export default ScrollToTopButton;
