// https://zelio-nextjs.vercel.app/index-2   


<AnimatePresence>
        {showModal && selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="font-mono fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-base-200 border border-primary/30 rounded-xl p-6 shadow-lg max-w-lg w-full relative overflow-y-auto max-h-[90vh]"
            >
              {/* Close Button */}
              <button
                onClick={closeModal}
                className="absolute top-3 right-3 text-base-content/60 hover:text-primary text-xl font-bold"
                aria-label="Close modal"
              >
                ✕
              </button>

              {/* Title */}
              <h2 className="text-xl font-bold text-primary mb-3">
                {selectedProject.title}
              </h2>

              {/* Project Image */}
              {selectedProject.images && selectedProject.images.length > 0 && (
                <img
                  src={selectedProject.images[0]}
                  alt={selectedProject.title}
                  className="w-full h-48 object-cover rounded-md mb-4 shadow"
                />
              )}

              {/* Tech Stack */}
              <div className="mb-4">
                <span className="font-semibold text-sm">Tech Stack:</span>
                <div className="flex flex-wrap gap-2 mt-1">
                  {selectedProject.techStack.map((tech, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 text-xs border border-base-300 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Description */}
              <p className="text-sm mb-4">{selectedProject.description}</p>

              {/* Links */}
              <div className="flex flex-wrap gap-4 mb-4">
                <motion.a
                  whileHover={{ x: 3 }}
                  href={selectedProject.liveLink}
                  className="flex items-center gap-1 text-primary hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ArrowUpRight size={16} /> Live Demo
                </motion.a>
                <motion.a
                  whileHover={{ x: 3 }}
                  href={selectedProject.frontendRepo}
                  className="flex items-center gap-1 text-primary hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github size={16} /> Frontend
                </motion.a>

                {selectedProject.backendRepo && (
                  <motion.a
                    whileHover={{ x: 3 }}
                    href={selectedProject.backendRepo}
                    className="flex items-center gap-1 text-primary hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github size={16} /> Backend
                  </motion.a>
                )}
              </div>

              {/* Challenges */}
              {selectedProject.challenges && (
                <div className="mb-4">
                  <span className="font-semibold text-sm">Challenges Faced:</span>
                  <p className="text-xs text-base-content/80 mt-1">
                    {selectedProject.challenges}
                  </p>
                </div>
              )}

              {/* Future Plans */}
              {selectedProject.futurePlans && (
                <div>
                  <span className="font-semibold text-sm">Future Plans:</span>
                  <p className="text-xs text-base-content/80 mt-1">
                    {selectedProject.futurePlans}
                  </p>
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>