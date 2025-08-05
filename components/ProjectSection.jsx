import React, { useEffect, useState } from "react";
import { ArrowUpRight, Github } from "lucide-react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

const ProjectSection = () => {
  const [projects, setProjects] = useState([]);
  const [visibleProjects, setVisibleProjects] = useState(3);

  useEffect(() => {
    fetch("/projects.json")
      .then((res) => res.json())
      .then((data) => setProjects(data));
  }, []);

  const showMoreProjects = () => {
    setVisibleProjects((prev) => prev + 2);
  };

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section id="projects" className="bg-base-100 pt-24 px-6 font-mono max-w-6xl mx-auto">
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={fadeIn}
        viewport={{ once: true, margin: "-50px" }}
        className="mb-12"
      >
        <p className="text-sm text-primary mb-2">• Featured Projects</p>
        <h1 className="text-4xl font-bold text-base-content">My Recent Works</h1>
      </motion.div>

      <div className="space-y-8">
        {projects.slice(0, visibleProjects).map((project, index) => (
          <motion.div
            key={index}
            initial="hidden"
            whileInView="visible"
            variants={fadeIn}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className=" border border-primary/30 rounded-xl p-6 bg-base-100/50 backdrop-blur-sm shadow-lg hover:shadow-primary/10 transition-shadow duration-300  hover:shadow-lg "
          >
            <div className="grid md:grid-cols-2 gap-8">
              <motion.div whileHover={{ scale: 1.02 }} className="overflow-hidden rounded-lg">
                <img
                  src={project.images[0]}
                  alt={project.title}
                  className="w-full h-full object-cover rounded-lg shadow-md"
                />
              </motion.div>

              <div className="flex flex-col justify-between">
                <div>
                  <h3 className="text-xl text-primary font-semibold mb-3">
                    {project.title}
                  </h3>
                  <p className="text-base text-base-content/80 mb-6">
                    {project.description}
                  </p>


<div className="mb-6">
  <hr className="my-4 h-px border-0 bg-base-300/30" />
  <div className="flex flex-wrap items-center gap-x-2">
    <span className="text-sm text-base-content/60">Technologies:</span>
    {project.techStack.map((tech, i) => (
      <motion.span
        key={i}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: i * 0.05 }}
        className="text-xs text-base-content/80"
      >
        {tech}{i < project.techStack.length - 1 ? ',' : ''}
      </motion.span>
    ))}
  </div>
  <hr className="my-4 h-px border-0 bg-base-300/30" />
</div>
                </div>

                <div className="flex flex-wrap gap-4 text-sm">
                  <motion.a
                    whileHover={{ x: 3 }}
                    href={project.liveLink}
                    className="flex items-center gap-1 text-primary hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ArrowUpRight size={16} /> Live Demo
                  </motion.a>
                  <motion.a
                    whileHover={{ x: 3 }}
                    href={project.frontendRepo}
                    className="flex items-center gap-1 text-base-content hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github size={16} /> Frontend
                  </motion.a>
                  {project.backendRepo && (
                    <motion.a
                      whileHover={{ x: 3 }}
                      href={project.backendRepo}
                      className="flex items-center gap-1 text-base-content hover:underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github size={16} /> Backend
                    </motion.a>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        ))}

        {visibleProjects < projects.length && (
          
          <motion.div
  initial={{ opacity: 0, y: 10 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.4 }}
  viewport={{ once: true }}
  className="flex justify-start mt-8"
>
  <motion.button
    onClick={showMoreProjects}
    className="inline-flex items-center gap-2 text-primary hover:underline font-mono"
    whileHover={{ 
      scale: 1.05,
      transition: { duration: 0.2 }
    }}
    whileTap={{ 
      scale: 0.95,
      transition: { duration: 0.1 }
    }}
  >
    <motion.span
      animate={{ rotate: [0, 10, -5, 0] }}
      transition={{ duration: 0.5, repeat: Infinity, repeatDelay: 2 }}
    >
      +
    </motion.span>
    Show More Project
  </motion.button>
</motion.div>
        )}
      </div>
    </section>
  );
};

export default ProjectSection;