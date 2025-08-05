import React from "react";
import { GraduationCap, BookOpenCheck, ArrowUpRight } from "lucide-react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

const AboutSections = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section
      id="about-me"
      className="bg-base-100 text-base-content font-mono pt-24 max-w-6xl mx-auto p-4"
    >
      <div className=" space-y-16">
        {/* Education + Certifications Section */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Education */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            variants={fadeIn}
            viewport={{ once: true, margin: "-100px" }}
            className="border border-primary/30 rounded-xl p-6 bg-base-100/50 backdrop-blur-sm shadow-lg hover:shadow-primary/10 transition-shadow duration-300"
          >
            <p className="text-sm text-primary mb-2">• Overview</p>
            <h3 className="flex items-center gap-3 text-xl font-bold mb-6 text-base-content">
              <GraduationCap className="text-primary w-5 h-5" /> 
              <span>Education</span>
            </h3>
            
            <ul className="space-y-6">
              <motion.li 
                whileHover={{ x: 5 }}
                className="pl-4 border-l-2 border-primary/50 hover:border-primary transition-colors duration-300"
              >
                <p className="text-base-content font-semibold">
                  <span className="text-primary bg-primary/10 px-1 rounded">
                    National University, Bangladesh
                  </span>
                </p>
                <p className="text-base-content/70 mt-1">Bachelor's Degree in Physics</p>
                <p className="text-base-content/60 text-sm mt-1">Expected in 2025</p>
              </motion.li>

              <motion.li 
                whileHover={{ x: 5 }}
                className="pl-4 border-l-2 border-primary/50 hover:border-primary transition-colors duration-300"
              >
                <p className="text-base-content font-semibold">
                  <span className="text-primary bg-primary/10 px-1 rounded">
                    Mymensingh College, Mymensingh
                  </span>
                </p>
                <p className="text-base-content/70 mt-1">HSC in Science</p>
                <p className="text-base-content/60 text-sm mt-1">2013–2015</p>
              </motion.li>

              <motion.li 
                whileHover={{ x: 5 }}
                className="pl-4 border-l-2 border-primary/50 hover:border-primary transition-colors duration-300"
              >
                <p className="text-base-content font-semibold">
                  <span className="text-primary bg-primary/10 px-1 rounded">
                    Guzirkuna High School, Durgapur
                  </span>
                </p>
                <p className="text-base-content/70 mt-1">SSC in Science</p>
                <p className="text-base-content/60 text-sm mt-1">2005–2011</p>
              </motion.li>
            </ul>
          </motion.div>

          {/* Certifications */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            variants={fadeIn}
            viewport={{ once: true, margin: "-100px" }}
            className="border border-primary/30 rounded-xl p-6 bg-base-100/50 backdrop-blur-sm shadow-lg hover:shadow-primary/10 transition-shadow duration-300"
          >
            <p className="text-sm text-primary mb-2">• Overview</p>
            <h3 className="flex items-center gap-3 text-xl font-bold mb-6 text-base-content">
              <BookOpenCheck className="text-primary w-5 h-5" /> 
              <span>Certifications & Courses</span>
            </h3>
            
            <ul className="space-y-6">
              <motion.li 
                whileHover={{ x: 5 }}
                className="pl-4 border-l-2 border-primary/50 hover:border-primary transition-colors duration-300"
              >
                <p className="text-base-content font-semibold">
                  <span className="text-primary bg-primary/10 px-1 rounded">
                    Complete Web Development Course
                  </span>
                </p>
                <p className="text-base-content/70 mt-1">Programming Hero</p>
                <p className="text-base-content/60 text-sm mt-1 flex items-center gap-1">
                  2025
                </p>
              </motion.li>

              <motion.li 
                whileHover={{ x: 5 }}
                className="pl-4 border-l-2 border-primary/50 hover:border-primary transition-colors duration-300"
              >
                <p className="text-base-content font-semibold">
                  <span className="text-primary bg-primary/10 px-1 rounded">
                    The Web Developer's Kickstart
                  </span>
                </p>
                <p className="text-base-content/70 mt-1">Programming Hero</p>
                <p className="text-base-content/60 text-sm mt-1 flex items-center gap-1">
                  2024 • 
                  <a 
                    href="https://drive.google.com/file/d/1foa5JvZzFY1BksRLs0hkynrTZ9v-0jC9/view" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-primary hover:underline flex items-center"
                  >
                    View Credential <ArrowUpRight size={14} className="ml-1" />
                  </a>
                </p>
              </motion.li>

              <motion.li 
                whileHover={{ x: 5 }}
                className="pl-4 border-l-2 border-primary/50 hover:border-primary transition-colors duration-300"
              >
                <p className="text-base-content font-semibold">
                  <span className="text-primary bg-primary/10 px-1 rounded">
                    Quantum Method Course
                  </span>
                </p>
                <p className="text-base-content/70 mt-1">Yoga Foundation</p>
                <p className="text-base-content/60 text-sm mt-1 flex items-center gap-1">
                  2018 • 
                  <a 
                    href="https://drive.google.com/file/d/1hUAAXA4n8V-8e9WQ3DtZ0uAfrgbHg8zd/view" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-primary hover:underline flex items-center"
                  >
                    View Credential <ArrowUpRight size={14} className="ml-1" />
                  </a>
                </p>
              </motion.li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSections;