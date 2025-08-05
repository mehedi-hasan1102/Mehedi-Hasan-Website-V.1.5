
import React from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import {
  SiMongodb,
  SiReact,
  SiNodedotjs,
  SiNextdotjs,
  SiFirebase,
  SiTypescript,
  SiTailwindcss,
  SiExpress,
  SiGit,
  SiHtml5,
  SiCss3,
  SiJavascript,
} from "react-icons/si";

// Row 1 icons
const techIconsRow1 = [
  { icon: SiMongodb, label: "MongoDB" },
  { icon: SiReact, label: "React" },
  { icon: SiNodedotjs, label: "Node.js" },
  { icon: SiNextdotjs, label: "Next.js" },
  { icon: SiFirebase, label: "Firebase" },
  { icon: SiExpress, label: "Express.js" },
];

// Row 2 icons
const techIconsRow2 = [
  { icon: SiTailwindcss, label: "Tailwind CSS" },
  { icon: SiTypescript, label: "TypeScript" },
  { icon: SiGit, label: "Git" },
  { icon: SiHtml5, label: "HTML5" },
  { icon: SiCss3, label: "CSS3" },
  { icon: SiJavascript, label: "JavaScript" },
];

const SkillsSection = () => {
  return (
    <motion.section 
      id="skills"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className=" bg-base-100  text-base-content font-mono max-w-6xl mx-auto p-4 px-4 sm:px-6 md:px-8"
    
    >
      
      <div 
      
      // className="border border-primary/30 rounded-xl p-8"
       className=" border border-primary/30 rounded-xl p-6 bg-base-200 backdrop-blur-sm shadow-lg hover:shadow-primary/10 transition-shadow duration-300"
      >
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          viewport={{ once: true }}
          className="mb-6 "
        >
        
          <p className=" text-sm text-primary mb-2">• Technical Proficiency</p>
          <h2 className="text-2xl font-bold">My Skills</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10 items-start">
          {/* Scrolling Icons */}
          <div className="space-y-4 ">
            {/* Row 1 scrolls right */}
            <div className="overflow-hidden w-[288px] mx-auto ">
              <div className="flex gap-4 animate-scroll-right w-max ">
                {techIconsRow1.concat(techIconsRow1).map(({ icon, label }, idx) => {
                  const Icon = icon;
                  return (
                    <div
                      key={idx}
                      whileHover={{ scale: 1.1 }}
                      className="bg-base-100 w-12 h-12 flex items-center justify-center border border-base-300 rounded-md p-2 hover:border-primary transition"
                      title={label}
                    >
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Row 2 scrolls left */}
            <div className="overflow-hidden w-[288px] mx-auto">
              <div className="flex gap-4 animate-scroll-left w-max">
                {techIconsRow2.concat(techIconsRow2).map(({ icon, label }, idx) => {
                  const Icon = icon;
                  return (
                    <div
                      key={idx}
                      whileHover={{ scale: 1.1 }}
                      className="bg-base-100 w-12 h-12 flex items-center justify-center border border-base-300 rounded-md p-2 hover:border-primary transition"
                      title={label}
                    >
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Skills List */}
          <motion.ul
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
            className="text-sm space-y-3 tracking-wide"
          >
            {[
              "Front-End: HTML, CSS, JavaScript, React",
              "Back-End: Node.js, Express",
              "Databases: MongoDB",
              "Tools & Platforms: Git, Firebase", 
              "Others: RESTful APIs"
            ].map((item, index) => (
              <motion.li
                key={index}
                whileHover={{ x: 5 }}
                className="pl-4 border-l-2 border-primary/50 hover:border-primary transition-colors duration-300"
                transition={{ type: "spring", stiffness: 300 }}
              >
                <strong>{item.split(':')[0]}:</strong>{item.split(':')[1]}
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </div>

      {/* Keyframes styles */}
      <style jsx>{`
        @keyframes scroll-right {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes scroll-left {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
        .animate-scroll-right {
          animation: scroll-right 15s linear infinite;
        }
        .animate-scroll-left {
          animation: scroll-left 15s linear infinite;
        }
      `}</style>
    </motion.section>
  );
};

export default SkillsSection;