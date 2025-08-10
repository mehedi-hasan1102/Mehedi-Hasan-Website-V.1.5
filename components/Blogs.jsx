import React from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

const blogs = [
  {
    id: 1,
    image: "/images/blog1.png",
    date: "March 28, 2023",
    readTime: "3 min read",
    title: "Optimize Your Web Application for Speed",
    description: "Stay ahead of the curve with these emerging trends in UI/UX design.",
  },
  {
    id: 2,
    image: "/images/blog2.png",
    date: "March 28, 2023",
    readTime: "3 min read",
    title: "Best Practices for Secure Web Development",
    description: "Stay ahead of the curve with these emerging trends in UI/UX design.",
  },
  {
    id: 3,
    image: "/images/blog3.png",
    date: "March 28, 2023",
    readTime: "3 min read",
    title: "10 JavaScript Frameworks for Web Development in 2024",
    description: "Stay ahead of the curve with these emerging trends in UI/UX design.",
  },
];

const BlogSection = () => {
  return (
    <motion.section
      id="blogs"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="text-base-content font-mono max-w-6xl mx-auto py-4 px-4 sm:px-6 md:px-8"
    >
      <div className="bg-base-200 border border-primary/30 rounded-xl p-6 backdrop-blur-sm shadow-lg hover:shadow-primary/10 transition-shadow duration-300 mb-10">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          viewport={{ once: true }}
          className="mb-6 text-left max-w-xl"
        >
          <p className="text-sm text-primary mb-2">• Insights & Tutorials</p>
          <h2 className="text-2xl font-bold">Latest Blogs</h2>
          
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {blogs.map((blog) => (
            <motion.div
              key={blog.id}
              whileHover={{ y: -5 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="bg-base-100 border border-base-300 rounded-md p-4 hover:border-primary transition"
            >
              <div className="p-2 border border-primary rounded-md mb-3 overflow-hidden">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-32 object-cover rounded-md"
                  loading="lazy"
                />
              </div>
              <p className="text-xs text-base-content/50 mb-1">
                {blog.date} • {blog.readTime}
              </p>
              <h3 className="text-lg font-semibold mb-2">{blog.title}</h3>
              <p className="text-sm leading-relaxed text-base-content/70 mb-3">
                {blog.description}
              </p>
              <a
                href="#"
                className="text-primary font-medium hover:underline"
              >
                Read More →
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default BlogSection;
