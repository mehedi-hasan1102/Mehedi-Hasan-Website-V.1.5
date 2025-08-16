
import React, { useEffect, useState } from "react";
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, X, Facebook, Linkedin, Twitter } from "lucide-react";

const BlogSection = () => {
  const [blogs, setBlogs] = useState([]);
  const [selectedBlog, setSelectedBlog] = useState(null);

  useEffect(() => {
    fetch("/blogs.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data))
      .catch((err) => console.error("Error loading blogs:", err));
  }, []);

  // Prevent background scroll when modal is open
  useEffect(() => {
    if (selectedBlog) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "auto";
  }, [selectedBlog]);

  const closeModal = () => setSelectedBlog(null);

  return (
    <motion.section
      id="blogs"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="text-base-content font-sans max-w-6xl mx-auto py-8 px-4 sm:px-6 md:px-8"
    >
      {/* Blog Cards */}
      <div className="rounded-2xl p-6 backdrop-blur-sm shadow-lg  transition-shadow duration-300">
        <div className="mb-8 text-center max-w-6xl">
          <p className="text-sm text-primary mb-2 font-mono ">• Insights & Tutorials</p>
          <h2 className="text-2xl font-mono font-bold tracking-tight">Latest tips, stories, <span className="text-base-content/60">and guides 
          </span></h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {blogs.map((blog) => (
            <motion.div
              key={blog.id}
              whileHover={{ y: -3 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="bg-base-100 border border-base-300 rounded-2xl p-4 hover:border-primary transition shadow-sm hover:shadow-md"
            >
              <div className="relative group p-2 border border-primary rounded-2xl mb-3 overflow-hidden">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-44 object-cover rounded-2xl transition-transform duration-300 group-hover:scale-105"
                />
                <span className="absolute bottom-3 left-3 bg-primary text-primary-content text-xs px-3 py-1 rounded-full shadow-md">
                  {blog.category}
                </span>

                <button
                  onClick={() => setSelectedBlog(blog)}
                  className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-75 group-hover:scale-100"
                >
                  <span className="bg-primary text-primary-content p-3 rounded-full shadow-lg hover:shadow-xl">
                    <ArrowUpRight size={20} />
                  </span>
                </button>
              </div>

              <p className="text-xs text-base-content/50 mb-1">
                {blog.date} • {blog.readTime}
              </p>
              <h3 className="text-lg font-semibold mb-2">{blog.title}</h3>
              <p className="text-sm leading-relaxed text-base-content/70">
                {blog.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Full Blog Modal */}
      <AnimatePresence>
  {selectedBlog && (
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
        {/* Blog Image */}
        <div className="md:w-1/2 w-full h-48 sm:h-64 md:h-auto overflow-hidden rounded-t-2xl md:rounded-l-2xl md:rounded-tr-none flex-shrink-0">
          <img
            src={selectedBlog.image}
            alt={selectedBlog.title}
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
          />
        </div>

        {/* Blog Content */}
        <div className="md:w-1/2 w-full p-6 sm:p-8 flex flex-col relative overflow-hidden">
          {/* Close Button */}
          <button
            onClick={closeModal}
            className="absolute top-4 right-4 text-base-content/60 hover:text-primary text-2xl font-bold"
            aria-label="Close modal"
          >
            <X size={24} />
          </button>

          <div className="overflow-y-auto pr-2 max-h-[90vh] space-y-4">
            {/* Blog Meta */}
            <p className="text-xs text-primary uppercase tracking-wide">
              {selectedBlog.date} • {selectedBlog.readTime} • {selectedBlog.category}
            </p>

            {/* Blog Title */}
            <h2 className="text-2xl sm:text-3xl font-bold text-primary">{selectedBlog.title}</h2>

            {/* Blog Content */}
            <div className="text-sm sm:text-base text-base-content/80 leading-relaxed space-y-4">
              {selectedBlog.fullContent
                ? selectedBlog.fullContent.split("\n\n").map((block, i) => (
                    <p key={i} className="whitespace-pre-line">{block}</p>
                  ))
                : <p>{selectedBlog.description}</p>
              }
            </div>

            {/* Optional: Social Share Buttons */}

            
            {/* Uncomment if needed */}
          </div>
        </div>
      </motion.div>
    </motion.div>
  )}
</AnimatePresence>

    </motion.section>
  );
};

export default BlogSection;
