

import React, { useEffect, useState } from "react";

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

  return (
    <section id="projects" className="bg-base-100 pt-24 px-4 font-mono max-w-5xl mx-auto">
      <h2 className="text-sm text-primary tracking-wide">* Projects</h2>
      <h1 className="text-3xl font-bold mb-8 text-base-content">My Recent Works</h1>

      <div className="space-y-10">
        {projects.slice(0, visibleProjects).map((project, index) => (
          <div
            key={index}
            className="grid md:grid-cols-2 gap-6 border border-base-300 p-6 rounded-lg"
          >
            <img
              src={project.images[0]}
              alt={project.title}
              className="w-full rounded shadow-md"
            />

            <div>
              <h3 className="text-xl text-primary font-semibold mb-2">
                {project.title}
              </h3>
              <p className="text-sm text-base-content/80 mb-4">
                {project.description}
              </p>

              <div className="text-xs border-t border-base-300 pt-3 space-y-2">
                <div>
                  {/* <span className="font-semibold text-base-content/60">
                    Client:
                  </span>{" "}
                  Conceptual Project */}
                </div>
                <div>
                  {/* <span className="font-semibold text-base-content/60">
                    Completion Time:
                  </span>{" "}
                  6 months */}
                </div>
                <div>
                  <span className="font-semibold text-base-content/60">
                    Technologies:
                  </span>{" "}
                  {project.techStack.join(", ")}
                </div>
              </div>

              <div className="mt-4 flex flex-wrap gap-4 text-sm">
                <a
                  href={project.liveLink}
                  className="text-primary hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  ↗ Live Demo
                </a>
                <a
                  href={project.frontendRepo}
                  className="text-base-content hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  ⎇ Frontend Repo
                </a>
                {project.backendRepo && (
                  <a
                    href={project.backendRepo}
                    className="text-base-content hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    ⎇ Backend Repo
                  </a>
                )}
              </div>
              
            </div>
            
          </div>
          
        ))}
        {visibleProjects < projects.length && (
          <button
            onClick={showMoreProjects}
            className="flex items-center gap-2 mt-2 font-medium text-primary hover:text-primary/80 transition"
          >
            show more project <span >↗</span>
          </button>
        )}
      </div>
    </section>
  );
};

export default ProjectSection;
