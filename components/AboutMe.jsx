
import React, { useEffect, useState } from "react";
import { GraduationCap, BookOpenCheck, ArrowUpRight } from "lucide-react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const AboutSections = () => {
  const [aboutData, setAboutData] = useState({ education: [], certifications: [] });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/aboutData.json")
      .then((res) => res.json())
      .then((data) => {
        // Sort Education (extract year from details and sort desc)
        const sortedEducation = [...data.education].sort((a, b) => {
          const yearA = parseInt(a.details?.match(/\d{4}/)?.[0] || "0", 10);
          const yearB = parseInt(b.details?.match(/\d{4}/)?.[0] || "0", 10);
          return yearB - yearA;
        });

        // Sort Certifications (sort by year desc)
        const sortedCertifications = [...data.certifications].sort((a, b) => {
          const yearA = parseInt(a.year, 10);
          const yearB = parseInt(b.year, 10);
          return yearB - yearA;
        });

        setAboutData({
          education: sortedEducation,
          certifications: sortedCertifications,
        });
        setLoading(false);
      })
      .catch((error) => {
        console.error("Failed to load about data:", error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p className="text-center mt-10">Loading...</p>;
  }

  return (
    <motion.section
      id="resume"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
      className="text-base-content font-mono max-w-6xl mx-auto p-4 px-4 sm:px-6 md:px-8"
    >
      <div className="space-y-16">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Education Section */}
          <motion.div
            variants={fadeInUp}
            className="bg-base-200 border border-primary/30 rounded-xl p-6 backdrop-blur-sm shadow-lg hover:shadow-primary/10 transition-shadow duration-300"
          >
            <p className="text-sm text-primary mb-2">• Education Path</p>
            <h3 className="flex items-center gap-3 text-xl font-bold mb-6 text-base-content">
              <GraduationCap className="text-primary w-5 h-5" />
              <span>Academic Achievements</span>
            </h3>

            <ul className="space-y-6 max-h-[300px] overflow-y-auto pr-2">
              {aboutData.education.map((edu, index) => (
                <motion.li
                  key={index}
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="pl-4 border-l-2 border-primary/50 hover:border-primary transition-colors duration-300"
                  title={edu.degree}
                >
                  <p className="text-base-content font-semibold">
                    <span className="text-primary px-1 rounded">
                      {edu.institution}
                    </span>
                  </p>
                  <p className="text-base-content/70 mt-1">
                    {edu.degree} {edu.details ? `| ${edu.details}` : ""}
                  </p>
                  {edu.credentialLink && (
                    <a
                      href={edu.credentialLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:underline flex items-center mt-1"
                    >
                      View Credential <ArrowUpRight size={14} className="ml-1" />
                    </a>
                  )}
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Certifications Section */}
          <motion.div
            variants={fadeInUp}
            className="bg-base-200 border border-primary/30 rounded-xl p-6 backdrop-blur-sm shadow-lg hover:shadow-primary/10 transition-shadow duration-300"
          >
            <p className="text-sm text-primary mb-2">• Skill Credentials</p>
            <h3 className="flex items-center gap-3 text-xl font-bold mb-6 text-base-content">
              <BookOpenCheck className="text-primary w-5 h-5" />
              <span>Verified Learning</span>
            </h3>

            <ul className="space-y-6 max-h-[300px] overflow-y-auto pr-2">
              {aboutData.certifications.map((cert, index) => (
                <motion.li
                  key={index}
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="pl-4 border-l-2 border-primary/50 hover:border-primary transition-colors duration-300"
                  title={cert.title}
                >
                  <p className="text-base-content font-semibold">
                    <span className="text-primary  px-1 rounded">{cert.title}</span>
                  </p>
                  <p className="text-base-content/70 mt-1">
                    {cert.issuer} | {cert.year}
                  </p>
                  {cert.credentialLink && (
                    <a
                      href={cert.credentialLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:underline flex items-center mt-1"
                    >
                      View Credential <ArrowUpRight size={14} className="ml-1" />
                    </a>
                  )}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default AboutSections;
