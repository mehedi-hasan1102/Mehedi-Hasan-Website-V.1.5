
// import React from "react";
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
// import { motion } from "framer-motion";

// const techIconsRow1 = [
//   { icon: SiMongodb, label: "MongoDB" },
//   { icon: SiReact, label: "React" },
//   { icon: SiNodedotjs, label: "Node.js" },
//   { icon: SiNextdotjs, label: "Next.js" },
//   { icon: SiFirebase, label: "Firebase" },
//   { icon: SiExpress, label: "Express.js" },
// ];

// const techIconsRow2 = [
//   { icon: SiTailwindcss, label: "Tailwind CSS" },
//   { icon: SiTypescript, label: "TypeScript" },
//   { icon: SiGit, label: "Git" },
//   { icon: SiHtml5, label: "HTML5" },
//   { icon: SiCss3, label: "CSS3" },
//   { icon: SiJavascript, label: "JavaScript" },
// ];

// const SkillsSection = () => {
//   const fadeIn = {
//     hidden: { opacity: 0, y: 20 },
//     visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
//   };

//   return (
//     <section id="resume" className=" max-w-6xl mx-auto bg-base-100 text-base-content font-mono py-6">
//       <motion.div 
//         initial="hidden"
//         whileInView="visible"
//         variants={fadeIn}
//         viewport={{ once: true, margin: "-100px" }}
//         className="max-w-6xl mx-auto border border-primary/30 rounded-xl p-8 bg-base-100/50 backdrop-blur-sm shadow-lg hover:shadow-primary/10 transition-shadow duration-300"
//       >
//         <div className="mb-10">
//           <p className="text-sm text-primary mb-2">• Technical Proficiency</p>
//           <h2 className="text-3xl font-bold">My Skills</h2>
//         </div>

//         <div className="grid md:grid-cols-2 gap-12 items-start">
//           {/* Animated Tech Icons */}
//           <div className="space-y-6">
//             {/* Row 1 */}
//             <div className="overflow-hidden w-full">
//               <div className="flex gap-4 animate-scroll-right w-max">
//                 {[...techIconsRow1, ...techIconsRow1].map(({ icon, label }, idx) => {
//                   const Icon = icon;
//                   return (
//                     <motion.div
//                       key={idx}
//                       whileHover={{ scale: 1.1, y: -5 }}
//                       className="w-14 h-14 flex items-center justify-center rounded-lg bg-base-200/50 border border-base-300/30 hover:border-primary/50 transition-all duration-300"
//                       title={label}
//                     >
//                       <Icon className="w-7 h-7 text-primary" />
//                     </motion.div>
//                   );
//                 })}
//               </div>
//             </div>

//             {/* Row 2 */}
//             <div className="overflow-hidden w-full">
//               <div className="flex gap-4 animate-scroll-left w-max">
//                 {[...techIconsRow2, ...techIconsRow2].map(({ icon, label }, idx) => {
//                   const Icon = icon;
//                   return (
//                     <motion.div
//                       key={idx}
//                       whileHover={{ scale: 1.1, y: -5 }}
//                       className="w-14 h-14 flex items-center justify-center rounded-lg bg-base-200/50 border border-base-300/30 hover:border-primary/50 transition-all duration-300"
//                       title={label}
//                     >
//                       <Icon className="w-7 h-7 text-primary" />
//                     </motion.div>
//                   );
//                 })}
//               </div>
//             </div>
//           </div>

//           {/* Skills List */}
//           <motion.ul 
//             initial="hidden"
//             whileInView="visible"
//             variants={fadeIn}
//             viewport={{ once: true }}
//             className="space-y-4 text-base"
//           >
//             <motion.li 
//               whileHover={{ x: 5 }}
//               className="pl-4 border-l-2 border-primary/50 hover:border-primary transition-colors duration-300"
//             >
//               <strong className="text-primary">Front-End:</strong> React, Next.js, HTML5, CSS3, JavaScript, TypeScript, Tailwind CSS
//             </motion.li>
//             <motion.li 
//               whileHover={{ x: 5 }}
//               className="pl-4 border-l-2 border-primary/50 hover:border-primary transition-colors duration-300"
//             >
//               <strong className="text-primary">Back-End:</strong> Node.js, Express.js
//             </motion.li>
//             <motion.li 
//               whileHover={{ x: 5 }}
//               className="pl-4 border-l-2 border-primary/50 hover:border-primary transition-colors duration-300"
//             >
//               <strong className="text-primary">Databases:</strong> MongoDB, Firebase
//             </motion.li>
//             <motion.li 
//               whileHover={{ x: 5 }}
//               className="pl-4 border-l-2 border-primary/50 hover:border-primary transition-colors duration-300"
//             >
//               <strong className="text-primary">Tools:</strong> Git, RESTful APIs
//             </motion.li>
//           </motion.ul>
//         </div>

//         {/* Keyframes styles */}
//         <style jsx>{`
//           @keyframes scroll-right {
//             0% { transform: translateX(0); }
//             100% { transform: translateX(-50%); }
//           }
//           @keyframes scroll-left {
//             0% { transform: translateX(-50%); }
//             100% { transform: translateX(0); }
//           }
//           .animate-scroll-right {
//             animation: scroll-right 20s linear infinite;
//           }
//           .animate-scroll-left {
//             animation: scroll-left 20s linear infinite;
//           }
//         `}</style>
//       </motion.div>
//     </section>
//   );
// };

// export default SkillsSection;








// import React from "react";
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

// // Row 1 icons
// const techIconsRow1 = [
//   { icon: SiMongodb, label: "MongoDB" },
//   { icon: SiReact, label: "React" },
//   { icon: SiNodedotjs, label: "Node.js" },
//   { icon: SiNextdotjs, label: "Next.js" },
//   { icon: SiFirebase, label: "Firebase" },
//   { icon: SiExpress, label: "Express.js" },
// ];

// // Row 2 icons
// const techIconsRow2 = [
//   { icon: SiTailwindcss, label: "Tailwind CSS" },
//   { icon: SiTypescript, label: "TypeScript" },
//   { icon: SiGit, label: "Git" },
//   { icon: SiHtml5, label: "HTML5" },
//   { icon: SiCss3, label: "CSS3" },
//   { icon: SiJavascript, label: "JavaScript" },
// ];

// const SkillsSection = () => {
//   return (
//     <section id="resume" className="bg-base-100  max-w-6xl mx-auto text-base-content font-mono py-16 px-4">
//       <div className=" border border-primary rounded-md p-8">
//         <div className="mb-6">
//           <p className="text-sm text-primary">• About Me</p>
//           <h2 className="text-2xl font-bold">My Skills</h2>
//         </div>

//         <div className="grid md:grid-cols-2 gap-10 items-start">
//           {/* Scrolling Icons */}
//           <div className="space-y-4">
//             {/* Row 1 scrolls right */}
//             <div className="overflow-hidden w-[288px] mx-auto">
//               <div className="flex gap-4 animate-scroll-right w-max">
//                 {techIconsRow1.concat(techIconsRow1).map(({ icon, label }, idx) => {
//                   const Icon = icon;
//                   return (
//                     <div
//                       key={idx}
//                       className="w-12 h-12 flex items-center justify-center border border-base-300 rounded-md p-2 hover:border-primary transition"
//                       title={label}
//                     >
//                       <Icon className="w-6 h-6 text-primary" />
//                     </div>
//                   );
//                 })}
//               </div>
//             </div>

//             {/* Row 2 scrolls left */}
//             <div className="overflow-hidden w-[288px] mx-auto">
//               <div className="flex gap-4 animate-scroll-left w-max">
//                 {techIconsRow2.concat(techIconsRow2).map(({ icon, label }, idx) => {
//                   const Icon = icon;
//                   return (
//                     <div
//                       key={idx}
//                       className="w-12 h-12 flex items-center justify-center border border-base-300 rounded-md p-2 hover:border-primary transition"
//                       title={label}
//                     >
//                       <Icon className="w-6 h-6 text-primary" />
//                     </div>
//                   );
//                 })}
//               </div>
//             </div>
//           </div>

//           {/* Skills List */}
//           <ul className="text-sm space-y-3 tracking-wide">
//             <li>
//               <strong>Front-End:</strong> HTML, CSS, JavaScript, React
//             </li>
//             <li>
//               <strong>Back-End:</strong> Node.js, Express
//             </li>
//             <li>
//               <strong>Databases:</strong> MongoDB
//             </li>
//             <li>
//               <strong>Tools & Platforms:</strong> Git, Firebase
//             </li>
//             <li>
//               <strong>Others:</strong> RESTful APIs
//             </li>
//           </ul>
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
//     </section>
//   );
// };

// export default SkillsSection;
import React from "react";
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
      id="resume"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="bg-base-100 max-w-6xl mx-auto text-base-content font-mono py-16 px-4"
    >
      <div className="border border-primary rounded-md p-8">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          viewport={{ once: true }}
          className="mb-6"
        >
        
          <p className="text-sm text-primary">• Technical Proficiency</p>
          <h2 className="text-2xl font-bold">My Skills</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10 items-start">
          {/* Scrolling Icons */}
          <div className="space-y-4">
            {/* Row 1 scrolls right */}
            <div className="overflow-hidden w-[288px] mx-auto">
              <div className="flex gap-4 animate-scroll-right w-max">
                {techIconsRow1.concat(techIconsRow1).map(({ icon, label }, idx) => {
                  const Icon = icon;
                  return (
                    <motion.div
                      key={idx}
                      whileHover={{ scale: 1.1 }}
                      className="w-12 h-12 flex items-center justify-center border border-base-300 rounded-md p-2 hover:border-primary transition"
                      title={label}
                    >
                      <Icon className="w-6 h-6 text-primary" />
                    </motion.div>
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
                    <motion.div
                      key={idx}
                      whileHover={{ scale: 1.1 }}
                      className="w-12 h-12 flex items-center justify-center border border-base-300 rounded-md p-2 hover:border-primary transition"
                      title={label}
                    >
                      <Icon className="w-6 h-6 text-primary" />
                    </motion.div>
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