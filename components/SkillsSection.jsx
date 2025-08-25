
// import React from "react";
// // eslint-disable-next-line no-unused-vars
// import { motion } from "framer-motion";
// import {
//   SiMongodb,
//   SiReact,
//   SiNodedotjs,
//   SiNextdotjs,
//   SiFirebase,
//   SiTypescript,
//   SiTailwindcss,
//   SiExpress,
//   SiGit,
//   SiHtml5,
//   SiCss3,
//   SiJavascript,
// } from "react-icons/si";

// // Row 1 icons with official colors
// const techIconsRow1 = [
//   { icon: SiMongodb, label: "MongoDB", color: "#47A248" },
//   { icon: SiReact, label: "React", color: "#61DAFB" },
//   { icon: SiNodedotjs, label: "Node.js", color: "#339933" },
//   { icon: SiNextdotjs, label: "Next.js", color: "#000000" },
//   { icon: SiFirebase, label: "Firebase", color: "#FFCA28" },
//   { icon: SiExpress, label: "Express.js", color: "#000000" },
// ];

// // Row 2 icons with official colors
// const techIconsRow2 = [
//   { icon: SiTailwindcss, label: "Tailwind CSS", color: "#38B2AC" },
//   { icon: SiTypescript, label: "TypeScript", color: "#3178C6" },
//   { icon: SiGit, label: "Git", color: "#F05032" },
//   { icon: SiHtml5, label: "HTML5", color: "#E34F26" },
//   { icon: SiCss3, label: "CSS3", color: "#1572B6" },
//   { icon: SiJavascript, label: "JavaScript", color: "#F7DF1E" },
// ];

// const SkillsSection = () => {
//   const skillItems = [
//   "Front-End Development: HTML, CSS, JavaScript, React",
//   "Back-End Development: Node.js, Express.js",
//   "Databases: MongoDB",
//   "Tools & Platforms: Git, Firebase, Linux, Postman",
//   "API Development: RESTful APIs",
//   "Soft Skills: Teamwork, Effective Communication",
// ];

//   return (
//     <motion.section
//       id="skills"
//       initial={{ opacity: 0 }}
//       whileInView={{ opacity: 1 }}
//       transition={{ duration: 0.5 }}
//       viewport={{ once: true }}
//       className="text-base-content font-mono max-w-6xl mx-auto p-4 px-4 sm:px-6 md:px-8"
//     >
//       <div
//         className="border border-primary/30 rounded-xl p-6 bg-base-200 backdrop-blur-sm shadow-lg hover:shadow-primary/10 transition-shadow duration-300"
//       >
//         <motion.div
//           initial={{ opacity: 0, y: 10 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.1 }}
//           viewport={{ once: true }}
//           className="mb-6 text-center"
//         >
//           <p className="text-sm text-primary mb-2">• My Skills</p>
//           <h2 className="text-2xl font-bold">Tools, tech,  <span className="text-base-content/60"> and soft skills 
// </span></h2>
//         </motion.div>

//         <div className="grid md:grid-cols-2 gap-10 items-start">
//           {/* Scrolling Icons */}
//           <div className="space-y-4">
//             {/* Row 1 scrolls right */}
//             <div className="overflow-hidden w-[288px] mx-auto">
//               <div className="flex gap-4 animate-scroll-right w-max">
//                 {techIconsRow1.concat(techIconsRow1).map(({ icon, label, color }, idx) => {
//                   const Icon = icon;
//                   return (
//                     <div
//                       key={idx}
//                       className="bg-base-100 w-12 h-12 flex items-center justify-center border border-base-300 rounded-md p-2 hover:border-primary transition"
//                       title={label}
//                     >
//                       <Icon style={{ color, width: 24, height: 24 }} />
//                     </div>
//                   );
//                 })}
//               </div>
//             </div>

//             {/* Row 2 scrolls left */}
//             <div className="overflow-hidden w-[288px] mx-auto">
//               <div className="flex gap-4 animate-scroll-left w-max">
//                 {techIconsRow2.concat(techIconsRow2).map(({ icon, label, color }, idx) => {
//                   const Icon = icon;
//                   return (
//                     <div
//                       key={idx}
//                       className="bg-base-100 w-12 h-12 flex items-center justify-center border border-base-300 rounded-md p-2 hover:border-primary transition"
//                       title={label}
//                     >
//                       <Icon style={{ color, width: 24, height: 24 }} />
//                     </div>
//                   );
//                 })}
//               </div>
//             </div>
//           </div>

//           {/* Skills List */}
//           <motion.ul
//             initial={{ opacity: 0 }}
//             whileInView={{ opacity: 1 }}
//             transition={{ delay: 0.2 }}
//             viewport={{ once: true }}
//             className="text-sm space-y-3 tracking-wide"
//           >
//             {skillItems.map((item, index) => (
//               <motion.li
//                 key={index}
//                 whileHover={{ x: 5 }}
//                 className="pl-4 border-l-2 border-primary/50 hover:border-primary transition-colors duration-300"
//                 transition={{ type: "spring", stiffness: 300 }}
//               >
//                 <strong>{item.split(":")[0]}:</strong>
//                 {item.split(":")[1]}
//               </motion.li>
//             ))}
//           </motion.ul>
//         </div>
//       </div>

//       {/* Keyframes styles */}
//       <style jsx>{`
//         @keyframes scroll-right {
//           0% {
//             transform: translateX(0);
//           }
//           100% {
//             transform: translateX(-50%);
//           }
//         }
//         @keyframes scroll-left {
//           0% {
//             transform: translateX(-50%);
//           }
//           100% {
//             transform: translateX(0);
//           }
//         }
//         .animate-scroll-right {
//           animation: scroll-right 15s linear infinite;
//         }
//         .animate-scroll-left {
//           animation: scroll-left 15s linear infinite;
//         }
//       `}</style>
//     </motion.section>
//   );
// };

// export default SkillsSection;


import React from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import OrbitalAnimation from "./OrbitalAnimation";
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

// Row 1 icons with official colors
const techIconsRow1 = [
  { icon: SiMongodb, label: "MongoDB", color: "#47A248" },
  { icon: SiReact, label: "React", color: "#61DAFB" },
  { icon: SiNodedotjs, label: "Node.js", color: "#339933" },
  { icon: SiNextdotjs, label: "Next.js", color: "#000000" },
  { icon: SiFirebase, label: "Firebase", color: "#FFCA28" },
  { icon: SiExpress, label: "Express.js", color: "#000000" },
];

// Row 2 icons with official colors
const techIconsRow2 = [
  { icon: SiTailwindcss, label: "Tailwind CSS", color: "#38B2AC" },
  { icon: SiTypescript, label: "TypeScript", color: "#3178C6" },
  { icon: SiGit, label: "Git", color: "#F05032" },
  { icon: SiHtml5, label: "HTML5", color: "#E34F26" },
  { icon: SiCss3, label: "CSS3", color: "#1572B6" },
  { icon: SiJavascript, label: "JavaScript", color: "#F7DF1E" },
];

const SkillsSection = () => {
  const skillItems = [
    "Front-End Development: HTML, CSS, JavaScript, React",
    "Back-End Development: Node.js, Express.js",
    "Databases: MongoDB",
    "Tools & Platforms: Git, Firebase, Linux, Postman",
    "API Development: RESTful APIs",
    "Soft Skills: Teamwork, Effective Communication",
  ];

  return (
    <motion.section
      id="skills"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="text-base-content font-mono max-w-6xl mx-auto p-4 px-4 sm:px-6 md:px-8"
    >
      <div className=" overflow-hidden relative border border-primary/30 rounded-xl p-6 bg-base-200 backdrop-blur-sm shadow-lg hover:shadow-primary/10 transition-shadow duration-300">
        
        {/* Orbital Animation - positioned at top-right */}
        <div className="absolute -top-6 -right-6 hidden md:block overflow-visible">
  <OrbitalAnimation />
</div>


        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          viewport={{ once: true }}
          className="mb-6 text-center"
        >
          <p className="text-sm text-primary mb-2">• My Skills</p>
          <h2 className="text-2xl ">
            Tools, tech, <span className="text-base-content/60"> and soft skills</span>
          </h2>
        </motion.div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 gap-10 items-start">
          
          {/* Scrolling Icons */}
          <div className="space-y-4">
            {/* Row 1 scrolls right */}
            <div className="overflow-hidden w-[288px] mx-auto">
              <div className="flex gap-4 animate-scroll-right w-max">
                {techIconsRow1.concat(techIconsRow1).map(({ icon, label, color }, idx) => {
                  const Icon = icon;
                  return (
                    <div
                      key={idx}
                      className="bg-base-100 w-12 h-12 flex items-center justify-center border border-base-300 rounded-md p-2 hover:border-primary transition"
                      title={label}
                    >
                      <Icon style={{ color, width: 24, height: 24 }} />
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Row 2 scrolls left */}
            <div className="overflow-hidden w-[288px] mx-auto">
              <div className="flex gap-4 animate-scroll-left w-max">
                {techIconsRow2.concat(techIconsRow2).map(({ icon, label, color }, idx) => {
                  const Icon = icon;
                  return (
                    <div
                      key={idx}
                      className="bg-base-100 w-12 h-12 flex items-center justify-center border border-base-300 rounded-md p-2 hover:border-primary transition"
                      title={label}
                    >
                      <Icon style={{ color, width: 24, height: 24 }} />
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
            {skillItems.map((item, index) => (
              <motion.li
                key={index}
                whileHover={{ x: 5 }}
                className="pl-4 border-l-2 border-primary/50 hover:border-primary transition-colors duration-300"
                transition={{ type: "spring", stiffness: 300 }}
              >
                <strong>{item.split(":")[0]}:</strong>
                {item.split(":")[1]}
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </div>

      {/* Keyframes styles */}
      <style jsx>{`
        @keyframes scroll-right {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        @keyframes scroll-left {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0);
          }
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
