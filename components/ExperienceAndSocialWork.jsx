
import React, { useEffect, useState } from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { Briefcase, Users, ArrowUpRight } from "lucide-react";
import { BorderBeam } from "@stianlarsen/border-beam";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const ExperienceAndSocialWork = () => {
  const [data, setData] = useState({ experience: [], socialWork: [] });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/experienceSocial.json")
      .then((res) => res.json())
      .then((jsonData) => {
        setData(jsonData);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to fetch data:", err);
        setLoading(false);
      });
  }, []);

  if (loading) return <p className="text-center mt-10">Loading...</p>;

  return (
    <section
      // id="experience"
      id="resume"
      className="text-base-content font-mono max-w-6xl mx-auto p-4 px-4 sm:px-6 md:px-8"
    >
      <div className="space-y-16">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Experience Section */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={fadeIn}
            viewport={{ once: true, margin: "-100px" }}
            className="relative w-full  overflow-hidden bg-base-200 border border-primary/30 rounded-xl p-6 backdrop-blur-sm shadow-lg hover:shadow-primary/10 transition-shadow duration-300"
          >
            <BorderBeam
          size={400}
          duration={8}
          borderWidth={1}
          colorFrom="#22c55e" // Tailwind green-500
          colorTo="#16a34a"   // Tailwind green-600
        />
            <p className="text-sm text-primary mb-2">• Career Path</p>
            <h3 className="flex items-center gap-3 text-xl  mb-6 text-base-content">
              <Briefcase className="text-primary w-5 h-5" />
              <span>Work Experience</span>
            </h3>

            <ul className="space-y-6">
              {data.experience.map((item, index) => (
                <motion.li
                  key={index}
                  whileHover={{ x: 5 }}
                  className="pl-4 border-l-2 border-primary/50 hover:border-primary transition-colors duration-300"
                >
                  <p className="text-primary text-lg">
                    {item.title}
                  </p>
                  <p className="text-base-content/70 mt-1 font-medium">{item.time}</p>
                  <p className="text-base-content/60 text-sm mt-2 leading-relaxed">
                    {item.description}
                  </p>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Social Work Section */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={fadeIn}
            viewport={{ once: true, margin: "-100px" }}
            className="relative w-full  overflow-hidden bg-base-200 border border-primary/30 rounded-xl p-6 backdrop-blur-sm shadow-lg hover:shadow-primary/10 transition-shadow duration-300"
          ><BorderBeam
          size={400}
          duration={8}
          borderWidth={1}
          colorFrom="#22c55e" // Tailwind green-500
          colorTo="#16a34a"   // Tailwind green-600
        />
            <p className="text-sm text-primary mb-2">• Social Impact</p>
            <h3 className="flex items-center gap-3 text-xl  mb-6 text-base-content">
              <Users className="text-primary w-5 h-5" />
              <span>Community Work</span>
            </h3>

            <ul className="space-y-6">
              {data.socialWork.map((item, index) => (
                <motion.li
                  key={index}
                  whileHover={{ x: 5 }}
                  className="pl-4 border-l-2 border-primary/50 hover:border-primary transition-colors duration-300"
                >
                  <p className=" text-primary text-lg">{item.title}</p>
                  <p className="text-base-content/70 mt-1 font-medium">{item.time}</p>
                  <p className="text-base-content/60 text-sm mt-2 leading-relaxed">
                    {item.description}
                  </p>
                  {item.profileLink && (
                    <a
                      href={item.profileLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:underline flex items-center mt-2"
                    >
                      View Profile <ArrowUpRight size={14} className="ml-1" />
                    </a>
                  )}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceAndSocialWork;
