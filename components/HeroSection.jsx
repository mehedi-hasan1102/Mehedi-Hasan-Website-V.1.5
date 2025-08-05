

import React from "react";
import { motion } from "framer-motion";
import { Download } from "lucide-react";
import {
  SiReact,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiTailwindcss,
  SiFirebase,
  SiJavascript,
  SiTypescript,
  SiNextdotjs,
} from "react-icons/si";
import Typewriter from "typewriter-effect";

const techIcons = [
  { icon: SiReact, label: "React" },
  { icon: SiNextdotjs, label: "Next.js" },
  { icon: SiNodedotjs, label: "Node.js" },
  { icon: SiExpress, label: "Express.js" },
  { icon: SiMongodb, label: "MongoDB" },
  { icon: SiTailwindcss, label: "Tailwind CSS" },
  { icon: SiFirebase, label: "Firebase" },
  { icon: SiJavascript, label: "JavaScript" },
  { icon: SiTypescript, label: "TypeScript" },
];

const HeroSection = () => {
  return (
    // <motion.section
    //   id="home"
    //   initial={{ opacity: 0 }}
    //   animate={{ opacity: 1 }}
    //   transition={{ duration: 0.5 }}
    //   className="min-h-screen max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-16 pt-24 flex items-center justify-center"
    // >

    <motion.section
  id="home"
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 0.5 }}
  className="w-full max-w-7xl px-4 sm:px-6 md:px-8 mx-auto  flex items-center justify-center py-4"
>

      <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-10 w-full bg-base-200 border border-primary/30 rounded-xl p-6 sm:p-10 shadow-lg">
        
        {/* Left Image */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="flex justify-center"
        >
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="w-48 h-60 sm:w-64 sm:h-72 relative"
          >
            <div
              className="w-full h-full overflow-hidden"
              style={{
                clipPath:
                  "polygon(25% 5%, 75% 5%, 100% 50%, 75% 95%, 25% 95%, 0% 50%)",
              }}
            >
              <motion.img
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                src="https://i.ibb.co/S4VvHSng/b.png"
                alt="Mehedi Hasan"
                className="w-full h-full object-cover bg-base-100"
              />
            </div>
            <motion.div
              whileHover={{ scale: 1.1 }}
              className="absolute -bottom-1 left-1/2 -translate-x-1/2 bg-primary text-primary-content px-4 py-2 rounded-full text-xs sm:text-sm font-semibold shadow-md"
            >
              &lt;/&gt;
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Right Content */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-balance"
        >
          {/* Typewriter intro */}
          <motion.span className="text-xs sm:text-sm text-base-content/60 font-mono flex flex-wrap items-center gap-x-2 gap-y-1 break-words">
            <span className="text-secondary">&lt;span&gt;</span>
            <span>Hey, I'm</span>
            <span className="text-primary">
              <Typewriter
                options={{
                  strings: ["Mehedi Hasan"],
                  autoStart: true,
                  loop: true,
                  delay: 100,
                  deleteSpeed: 50,
                  pauseFor: 2000,
                }}
              />
            </span>
            <span className="text-secondary">&lt;/span&gt;</span>
          </motion.span>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight mt-4 break-words"
          >
            Junior{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
              {`{Full Stack}`}
            </span>{" "}
            Web Developer
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="mt-4 text-sm sm:text-base font-mono text-base-content/60 break-words"
          >
            <span className="text-secondary">&lt;p&gt;</span>
            With expertise in technologies like NodeJS, React, and NextJS... I
            deliver web solutions that are both innovative and robust.
            <span className="text-secondary">&lt;/p&gt;</span>
          </motion.p>

          {/* Tech Icons */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-6 flex items-center gap-2"
          >
            <div className="overflow-hidden max-w-full">
              <div className="flex items-center gap-4 animate-scroll-horizontal w-max pr-10">
                {techIcons.concat(techIcons).map((tech, idx) => {
                  const IconComponent = tech.icon;
                  return (
                    <div
                      key={idx}
                      className="bg-base-100 w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center border border-base-300 rounded-md p-2 hover:border-primary transition duration-300"
                      title={tech.label}
                    >
                      <IconComponent className="w-5 h-5 text-primary" />
                    </div>
                  );
                })}
              </div>
            </div>
            <span className="text-xs sm:text-sm font-mono text-base-content/60 inline">
              ...and more
            </span>
          </motion.div>

          {/* Download Button */}
          <motion.a
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.7, ease: "easeOut" }}
            whileHover={{
              scale: 1.05,
              rotate: -0.5,
              transition: { type: "spring", stiffness: 300 },
            }}
            whileTap={{ scale: 0.97, rotate: 0.5 }}
            href="https://drive.google.com/uc?export=download&id=1gZMIsl3xbE6bdXfz82WAgOrwMJygx7KB"
            download
            className="group mt-6 inline-flex items-center gap-2 text-primary hover:underline font-mono text-sm transition-all duration-300"
          >
            <Download
              size={18}
              className="transition-transform duration-300 group-hover:-translate-y-[2px]"
            />
            [ Download CV ]
          </motion.a>
        </motion.div>
      </div>

      {/* Keyframe animation */}
      <style>
        {`
          @keyframes scroll-horizontal {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .animate-scroll-horizontal {
            animation: scroll-horizontal 25s linear infinite;
          }
        `}
      </style>
    </motion.section>
  );
};

export default HeroSection;
