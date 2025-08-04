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
    <motion.section
      id="home"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-base-100 max-w-6xl mx-auto px-6 py-16 pt-24 flex items-center justify-center transition-colors duration-300"
    >
      <div className="grid md:grid-cols-2 items-center gap-12 w-full">
        {/* Left: Profile Image with Animation */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="flex justify-center relative"
        >
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="w-64 h-72 md:w-72 md:h-80 relative"
          >
            <div
              className="w-full h-full overflow-hidden"
              style={{
                clipPath:
                  "polygon(25% 5%, 75% 5%, 100% 50%, 75% 95%, 25% 95%, 0% 50%)",
              }}
            >
              <motion.img
                initial={{ scale: 1 }}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                src="https://i.ibb.co/S4VvHSng/b.png"
                alt="Mehedi Hasan"
                className="w-full h-full object-cover bg-base-200"
              />
            </div>
            <motion.div
              whileHover={{ scale: 1.1 }}
              className="absolute -bottom-1 left-1/2 -translate-x-1/2 bg-primary text-primary-content px-4 py-2 rounded-full font-semibold text-sm shadow-md"
            >
              &lt;/&gt;
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Right: Content */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <motion.span 
            className="text-sm text-base-content/60 font-mono flex flex-wrap items-center gap-x-2 gap-y-1"
          >
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
<motion.h1
  initial={{ opacity: 0, y: 10 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.3 }}
  className="text-4xl md:text-5xl font-extrabold leading-tight mt-4 text-gray-900 dark:text-white"
>
  Junior{" "}
  <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
    {`{Full Stack}`}
  </span>{" "}
  Web Developer
</motion.h1>

          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="mt-4 max-w-xl text-sm font-mono text-base-content/60 block"
          >
            <span className="text-secondary">&lt;p&gt;</span> 
            With expertise in cutting-edge technologies such as NodeJS, React, and NextJS... I deliver web solutions that are both innovative and robust.
            <span className="text-secondary">&lt;/p&gt;</span>
          </motion.span>

          {/* Tech Icons Scroll Section */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-6 flex items-center gap-2"
          >
            <div className="relative overflow-hidden max-w-[260px] md:max-w-[300px] lg:max-w-[360px]">
              <div className="flex items-center gap-4 animate-scroll-horizontal w-max pr-16">
                {techIcons.concat(techIcons).map((tech, idx) => {
                  const IconComponent = tech.icon;
                  return (
                    <motion.div
                      key={idx}
                      whileHover={{ scale: 1.1, y: -5 }}
                      className="w-12 h-12 flex items-center justify-center border border-base-300 rounded-md p-2 hover:border-primary transition duration-300"
                      title={tech.label}
                    >
                      <IconComponent className="w-6 h-6 text-primary" />
                    </motion.div>
                  );
                })}
              </div>
            </div>
            <span className="text-sm font-mono text-base-content/60">...and more</span>
          </motion.div>

          {/* Download CV Button */}
          <motion.a
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            href="https://drive.google.com/uc?export=download&id=1gZMIsl3xbE6bdXfz82WAgOrwMJygx7KB"
            download
            className="mt-8 inline-flex items-center gap-2 text-primary hover:underline font-mono transition-colors duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Download size={18} />
            [ Download CV ]
          </motion.a>
        </motion.div>
      </div>

      {/* Scroll Animation */}
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