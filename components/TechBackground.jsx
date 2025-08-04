import React from "react";
import { motion } from "framer-motion";
import { 
  SiReact, 
  SiJavascript, 
  SiTypescript, 
  SiNodedotjs,
  SiNextdotjs,
  SiTailwindcss,
  SiGit
} from "react-icons/si";

const TechBackground = () => {
  const techIcons = [
    { icon: SiReact, size: 24, delay: 0 },
    { icon: SiJavascript, size: 22, delay: 0.2 },
    { icon: SiTypescript, size: 22, delay: 0.4 },
    { icon: SiNodedotjs, size: 24, delay: 0.1 },
    { icon: SiNextdotjs, size: 20, delay: 0.3 },
    { icon: SiTailwindcss, size: 22, delay: 0.5 },
    { icon: SiGit, size: 20, delay: 0.6 }
  ];

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden opacity-10">
      <div className="absolute inset-0 grid grid-cols-8 grid-rows-6 gap-4">
        {Array.from({ length: 48 }).map((_, i) => {
          const tech = techIcons[i % techIcons.length];
          const Icon = tech.icon;
          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ 
                opacity: 0.1,
                y: 0,
                transition: { 
                  delay: tech.delay + (i * 0.02),
                  duration: 0.8 
                }
              }}
              className="flex items-center justify-center"
            >
              <Icon 
                className="text-primary" 
                size={tech.size} 
              />
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default TechBackground;