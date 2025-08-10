
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ArrowUpRight, Github } from "lucide-react";
import { motion } from "framer-motion";

const ProjectDetails = () => {
  const { title } = useParams();
  const [project, setProject] = useState(null);

  useEffect(() => {
    fetch("/projects.json")
      .then((res) => res.json())
      .then((data) => {
        const decodedTitle = decodeURIComponent(title);
        const selectedProject = data.find((p) => p.title === decodedTitle);
        setProject(selectedProject);
      });
  }, [title]);

  if (!project) {
    return <div>Loading...</div>;
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="font-mono max-w-4xl mx-auto py-12 px-4 sm:px-6 md:px-8"
    >
      <div className="bg-base-200 border border-primary/30 rounded-xl p-6 shadow-lg">
        <h2 className="text-3xl font-bold text-primary mb-4">
          {project.title}
        </h2>

        <img
          src={project.images[0]}
          alt={project.title}
          className="w-full h-auto object-cover rounded-lg shadow-md mb-6"
        />

        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-3">Details</h3>
            <p className="text-base-content/80 mb-4">{project.description}</p>

            <div className="mb-4">
              <h4 className="font-semibold text-sm mb-2">Tech Stack:</h4>
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 text-sm border border-base-300 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              <a
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline flex items-center gap-1"
              >
                <ArrowUpRight size={16} /> Live Project
              </a>
              <a
                href={project.frontendRepo}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline flex items-center gap-1"
              >
                <Github size={16} /> Client Repo
              </a>
              {project.backendRepo && (
                <a
                  href={project.backendRepo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline flex items-center gap-1"
                >
                  <Github size={16} /> Server Repo
                </a>
              )}
            </div>
          </div>

          <div>
            {project.challenges && (
              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-3">Challenges Faced</h3>
                <p className="text-base-content/80">{project.challenges}</p>
              </div>
            )}

            {project.futurePlans && (
              <div>
                <h3 className="text-xl font-semibold mb-3">Future Plans</h3>
                <p className="text-base-content/80">{project.futurePlans}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectDetails;
