// import React, { useEffect, useState } from "react";
// import { Eye, ArrowUpRight, Github } from "lucide-react";
// // eslint-disable-next-line no-unused-vars
// import { motion } from "framer-motion";

// const ProjectSection = () => {
//   const [projects, setProjects] = useState([]);
//   const [visibleProjects, setVisibleProjects] = useState(3);
//   const [showModal, setShowModal] = useState(false);
//   const [selectedProject, setSelectedProject] = useState(null);

//   useEffect(() => {
//     fetch("/projects.json")
//       .then((res) => res.json())
//       .then((data) => setProjects(data));
//   }, []);

//   const showMoreProjects = () => {
//     setVisibleProjects((prev) => prev + 2);
//   };

//   const openModal = (project) => {
//     setSelectedProject(project);
//     setShowModal(true);
//   };

//   const closeModal = () => {
//     setShowModal(false);
//     setSelectedProject(null);
//   };

//   return (
//     <>
//       <motion.section
//         id="portfolio"
//         initial={{ opacity: 0 }}
//         whileInView={{ opacity: 1 }}
//         transition={{ duration: 0.5 }}
//         viewport={{ once: true }}
//         className="text-base-content font-mono max-w-6xl mx-auto py-4 px-4 sm:px-6 md:px-8"
//       >
//         <div className="bg-base-200 border border-primary/30 rounded-xl p-6 backdrop-blur-sm shadow-lg hover:shadow-primary/10 transition-shadow duration-300">
//           <motion.div
//             initial={{ opacity: 0, y: 10 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.1 }}
//             viewport={{ once: true }}
//             className="mb-6 text-center mx-auto"
//           >
//             <p className="text-sm text-primary mb-2">• My Recent Works</p>
//             <h2 className="text-2xl font-bold">Interactive projects demonstrating <span className="text-base-content/60"> real-world solutions
// </span></h2>
//           </motion.div>

//           <div className="space-y-6">
//             {projects.slice(0, visibleProjects).map((project, index) => (
//               <motion.div
//                 key={index}
//                 whileHover={{ y: -5 }}
//                 transition={{ type: "spring", stiffness: 200 }}
//                 className="bg-base-100 border border-base-300 rounded-md p-4 hover:border-primary transition"
//               >
//                 <div className="grid md:grid-cols-2 gap-6 items-start">
//                   <motion.div
//                     whileHover={{ scale: 1.02 }}
//                     className="overflow-hidden rounded-lg"
//                   >
//                     <img
//                       src={project.images[0]}
//                       alt={project.title}
//                       className="w-full h-full object-cover rounded-lg shadow"
//                     />
//                   </motion.div>

//                   <div className="flex flex-col justify-between">
//                     <div>
//                       <h3 className="text-lg font-semibold text-primary mb-3">
//                         {project.title}
//                       </h3>
//                       <p className="text-sm leading-relaxed text-base-content/80 mb-4">
//                         {project.description}
//                       </p>

//                       <div className="mb-4">
//                         <hr className="my-3 h-px border-0 bg-base-300/30" />
//                         <div className="flex flex-wrap items-center gap-x-2">
//                           <span className="text-sm text-base-content/60">
//                             Technologies:
//                           </span>
//                           {project.techStack.map((tech, i) => (
//                             <motion.span
//                               key={i}
//                               initial={{ opacity: 0 }}
//                               animate={{ opacity: 1 }}
//                               transition={{ delay: i * 0.05 }}
//                               className="text-xs text-base-content/80"
//                             >
//                               {tech}
//                               {i < project.techStack.length - 1 ? "," : ""}
//                             </motion.span>
//                           ))}
//                         </div>
//                         <hr className="my-3 h-px border-0 bg-base-300/30" />
//                       </div>
//                     </div>

//                     <div className="flex flex-wrap gap-4 text-sm">
//                       <motion.a
//                         whileHover={{ x: 3 }}
//                         href={project.liveLink}
//                         className="flex items-center gap-1 text-primary hover:underline"
//                         target="_blank"
//                         rel="noopener noreferrer"
//                       >
//                         <ArrowUpRight size={16} /> Live Demo
//                       </motion.a>
//                       <motion.a
//                         whileHover={{ x: 3 }}
//                         href={project.frontendRepo}
//                         className="flex items-center gap-1 text-primary hover:underline"
//                         target="_blank"
//                         rel="noopener noreferrer"
//                       >
//                         <Github size={16} /> Frontend
//                       </motion.a>

//                       {project.backendRepo && (
//                         <motion.a
//                           whileHover={{ x: 3 }}
//                           href={project.backendRepo}
//                           className="flex items-center gap-1 text-primary hover:underline"
//                           target="_blank"
//                           rel="noopener noreferrer"
//                         >
//                           <Github size={16} /> Backend
//                         </motion.a>
//                       )}

//                       {/* View Details Button */}
//                       <motion.button
//                         whileHover={{ x: 3 }}
//                         onClick={() => openModal(project)}
//                         className="flex items-center gap-1 text-primary hover:underline"
//                       >
//                         <Eye size={18} className="flex-shrink-0" />
//                         <span>View Details</span>
//                       </motion.button>
//                     </div>
//                   </div>
//                 </div>
//               </motion.div>
//             ))}
//           </div>

//           {visibleProjects < projects.length && (
//             <motion.div
//               initial={{ opacity: 0, y: 10 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.4 }}
//               viewport={{ once: true }}
//               className="flex justify-center mt-8"
//             >
//               <motion.button
//                 onClick={showMoreProjects}
//                 className="inline-flex items-center gap-2 text-primary hover:underline font-mono"
//                 whileHover={{
//                   scale: 1.05,
//                   transition: { duration: 0.2 },
//                 }}
//                 whileTap={{
//                   scale: 0.95,
//                   transition: { duration: 0.1 },
//                 }}
//               >
//                 <motion.span
//                   animate={{ rotate: [0, 10, -5, 0] }}
//                   transition={{ duration: 0.5, repeat: Infinity, repeatDelay: 2 }}
//                 >
//                   +
//                 </motion.span>
//                 Show More Projects
//               </motion.button>
//             </motion.div>
//           )}
//         </div>
//       </motion.section>

//       {/* Modal */}
//       {showModal && selectedProject && (
//         <motion.div
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           exit={{ opacity: 0 }}
//           className="font-mono fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4"
//         >
//           <motion.div
//             initial={{ scale: 0.9, opacity: 0 }}
//             animate={{ scale: 1, opacity: 1 }}
//             exit={{ scale: 0.9, opacity: 0 }}
//             className="bg-base-200 border border-primary/30 rounded-xl p-6 shadow-lg max-w-lg w-full relative overflow-y-auto max-h-[90vh]"
//           >
//             {/* Close Button */}
//             <button
//               onClick={closeModal}
//               className="absolute top-3 right-3 text-base-content/60 hover:text-primary text-xl font-bold"
//               aria-label="Close modal"
//             >
//               ✕
//             </button>

//             {/* Title */}
//             <h2 className="text-xl font-bold text-primary mb-3">
//               {selectedProject.title}
//             </h2>

//             {/* Project Image */}
//             {selectedProject.images && selectedProject.images.length > 0 && (
//               <img
//                 src={selectedProject.images[0]}
//                 alt={selectedProject.title}
//                 className="w-full h-48 object-cover rounded-md mb-4 shadow"
//               />
//             )}

//             {/* Tech Stack */}
//             <div className="mb-4">
//               <span className="font-semibold text-sm">Tech Stack:</span>
//               <div className="flex flex-wrap gap-2 mt-1">
//                 {selectedProject.techStack.map((tech, i) => (
//                   <span
//                     key={i}
//                     className="px-2 py-1 text-xs border border-base-300 rounded"
//                   >
//                     {tech}
//                   </span>
//                 ))}
//               </div>
//             </div>

//             {/* Description */}
//             <p className="text-sm mb-4">{selectedProject.description}</p>

//             {/* Links */}
//             <div className="flex flex-wrap gap-4 mb-4">
//               <motion.a
//                 whileHover={{ x: 3 }}
//                 href={selectedProject.liveLink}
//                 className="flex items-center gap-1 text-primary hover:underline"
//                 target="_blank"
//                 rel="noopener noreferrer"
//               >
//                 <ArrowUpRight size={16} /> Live Demo
//               </motion.a>
//               <motion.a
//                 whileHover={{ x: 3 }}
//                 href={selectedProject.frontendRepo}
//                 className="flex items-center gap-1 text-primary hover:underline"
//                 target="_blank"
//                 rel="noopener noreferrer"
//               >
//                 <Github size={16} /> Frontend
//               </motion.a>

//               {selectedProject.backendRepo && (
//                 <motion.a
//                   whileHover={{ x: 3 }}
//                   href={selectedProject.backendRepo}
//                   className="flex items-center gap-1 text-primary hover:underline"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                 >
//                   <Github size={16} /> Backend
//                 </motion.a>
//               )}
//             </div>

//             {/* Challenges */}
//             {selectedProject.challenges && (
//               <div className="mb-4">
//                 <span className="font-semibold text-sm">Challenges Faced:</span>
//                 <p className="text-xs text-base-content/80 mt-1">
//                   {selectedProject.challenges}
//                 </p>
//               </div>
//             )}

//             {/* Future Plans */}
//             {selectedProject.futurePlans && (
//               <div>
//                 <span className="font-semibold text-sm">Future Plans:</span>
//                 <p className="text-xs text-base-content/80 mt-1">
//                   {selectedProject.futurePlans}
//                 </p>
//               </div>
//             )}
//           </motion.div>
//         </motion.div>
//       )}
//     </>
//   );
// };

// export default ProjectSection;





// grid lay out 

import React, { useEffect, useState } from "react";
import { Eye, ArrowUpRight, Github } from "lucide-react";
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "framer-motion";

const ProjectSection = () => {
  const [projects, setProjects] = useState([]);
  const [visibleProjects, setVisibleProjects] = useState(3);
  const [showModal, setShowModal] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    fetch("/projects.json")
      .then((res) => res.json())
      .then((data) => setProjects(data));
  }, []);

  const showMoreProjects = () => setVisibleProjects((prev) => prev + 3);
  const openModal = (project) => {
    setSelectedProject(project);
    setShowModal(true);
  };
  const closeModal = () => {
    setShowModal(false);
    setSelectedProject(null);
  };

  return (
    <>
      <motion.section
        id="portfolio"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-base-content font-mono  mx-auto py-4 px-4 sm:px-6 md:px-8 max-w-6xl "
      >
        <div className="bg-base-200 border border-primary/30 rounded-xl p-6 backdrop-blur-sm shadow-lg hover:shadow-primary/10 transition-shadow duration-300">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
            className="mb-6 text-center mx-auto"
          >
            <p className="text-sm text-primary mb-2">• My Recent Works</p>
            <h2 className="text-2xl font-bold">Interactive projects demonstrating <span className="text-base-content/60"> real-world solutions
 </span></h2>
          </motion.div>

          {/* Grid Layout */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.slice(0, visibleProjects).map((project, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 200 }}
                className="bg-base-100 border border-base-300 rounded-md p-4 hover:border-primary transition shadow hover:shadow-lg"
              >
                {/* Project Image */}
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="overflow-hidden rounded-lg mb-4 relative group rounded-2xl mb-3 "
                >
                  <img
                    src={project.images[0]}
                    alt={project.title}
                    className="w-full h-44 object-cover rounded-2xl transition-transform duration-300 group-hover:scale-105"
                  />
                </motion.div>

                {/* Project Info */}
                <h3 className="text-lg font-semibold text-primary mb-2">
                  {project.title}
                </h3>
                {/* <p className="text-sm text-base-content/80 mb-4">
                  {project.description}
                </p> */}
                <p className="text-sm text-base-content/80 leading-relaxed mb-4">
              {project.description.length > 50
                ? `${project.description.slice(0, 50)}...`
                : project.description}
            </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-4 text-xs">
                  {project.techStack.map((tech, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 border border-base-300 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex flex-wrap gap-4 text-sm justify-between">
                  <motion.a
                    whileHover={{ x: 3 }}
                    href={project.liveLink}
                    className="flex items-center gap-1 text-primary hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ArrowUpRight size={16} /> Live Demo
                  </motion.a>
                  {/* <motion.a
                    whileHover={{ x: 3 }}
                    href={project.frontendRepo}
                    className="flex items-center gap-1 text-primary hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github size={16} /> Frontend
                  </motion.a> */}

                  {/* {project.backendRepo && (
                    <motion.a
                      whileHover={{ x: 3 }}
                      href={project.backendRepo}
                      className="flex items-center gap-1 text-primary hover:underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github size={16} /> Backend
                    </motion.a>
                  )} */}

                  <motion.button
                    whileHover={{ x: 3 }}
                    onClick={() => openModal(project)}
                    className="flex items-center gap-1 text-primary hover:underline"
                  >
                    <Eye size={18} /> View Details
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Show More Button */}
          {visibleProjects < projects.length && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              viewport={{ once: true }}
              className="flex justify-center mt-8"
            >
              <motion.button
                onClick={showMoreProjects}
                className="inline-flex items-center gap-2 text-primary hover:underline font-mono"
                whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                whileTap={{ scale: 0.95, transition: { duration: 0.1 } }}
              >
                <motion.span
                  animate={{ rotate: [0, 10, -5, 0] }}
                  transition={{ duration: 0.5, repeat: Infinity, repeatDelay: 2 }}
                >
                  +
                </motion.span>
                Show More Projects
              </motion.button>
            </motion.div>
          )}
        </div>
      </motion.section>

      {/* Modal */}
     <AnimatePresence>
  {showModal && selectedProject && (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-[9999] p-4"
    >
      <motion.div
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.95, opacity: 0 }}
        className="bg-base-200 border border-primary/30 rounded-2xl shadow-2xl w-full max-w-5xl relative overflow-hidden flex flex-col md:flex-row max-h-[95vh]"
      >
        {/* Project Image */}
        {selectedProject.images && selectedProject.images.length > 0 && (
          <div className="md:w-1/2 w-full h-48 sm:h-64 md:h-auto overflow-hidden rounded-t-2xl md:rounded-l-2xl md:rounded-tr-none flex-shrink-0">
            <img
              src={selectedProject.images[0]}
              alt={selectedProject.title}
              className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
            />
          </div>
        )}

        {/* Project Content */}
        <div className="md:w-1/2 w-full p-6 sm:p-8 flex flex-col relative overflow-hidden">
          {/* Close Button */}
          <button
            onClick={closeModal}
            className="absolute top-4 right-4 text-base-content/60 hover:text-primary text-2xl font-bold"
            aria-label="Close modal"
          >
            ✕
          </button>

          <div className="overflow-y-auto pr-2 max-h-[90vh] space-y-4">
            {/* Project Title */}
            <h2 className="text-2xl sm:text-3xl font-bold text-primary">{selectedProject.title}</h2>

            {/* Tech Stack */}
            <div className="flex flex-wrap gap-2 mt-1">
              {selectedProject.techStack.map((tech, i) => (
                <span
                  key={i}
                  className="px-2 sm:px-3 py-1 text-xs sm:text-sm border border-base-300 rounded"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Description */}
            <p className="text-sm sm:text-base text-base-content/80 leading-relaxed mt-2">
              {selectedProject.description}
            </p>

            {/* Links */}
            <div className="flex flex-wrap gap-4 mt-4">
              <motion.a
                whileHover={{ x: 3 }}
                href={selectedProject.liveLink}
                className="flex items-center gap-1 text-primary hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                <ArrowUpRight size={18} /> Live Demo
              </motion.a>

              <motion.a
                whileHover={{ x: 3 }}
                href={selectedProject.frontendRepo}
                className="flex items-center gap-1 text-primary hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github size={18} /> Frontend
              </motion.a>

              {selectedProject.backendRepo && (
                <motion.a
                  whileHover={{ x: 3 }}
                  href={selectedProject.backendRepo}
                  className="flex items-center gap-1 text-primary hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github size={18} /> Backend
                </motion.a>
              )}
            </div>

            {/* Challenges */}
            {selectedProject.challenges && (
              <div>
                <span className="font-semibold text-sm">Challenges:</span>
                <p className="text-sm text-base-content/80 mt-1">{selectedProject.challenges}</p>
              </div>
            )}

            {/* Future Plans */}
            {selectedProject.futurePlans && (
              <div>
                <span className="font-semibold text-sm">Future Plans:</span>
                <p className="text-sm text-base-content/80 mt-1">{selectedProject.futurePlans}</p>
              </div>
            )}
          </div>
        </div>
      </motion.div>
    </motion.div>
  )}
</AnimatePresence>


    </>
  );
};

export default ProjectSection;