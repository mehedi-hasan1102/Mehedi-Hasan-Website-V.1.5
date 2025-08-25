
import React, { useState } from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import CountUp from "react-countup";
import { Briefcase, CheckCircle, Layers, BookOpen } from "lucide-react";

const stats = [
  { icon: <Briefcase className="w-10 h-10 text-primary" />, number: "20+", label: "Hands-On Projects" },
  { icon: <CheckCircle className="w-10 h-10 text-primary" />, number: "35+", label: "Projects Completed" },
  { icon: <Layers className="w-10 h-10 text-primary" />, number: "1", label: "Full-Stack Tech Stack" },
  { icon: <BookOpen className="w-10 h-10 text-primary" />, number: "500+", label: "Hours of Coding & Learning" },
];

const StatsSection = () => {
  const [triggerCounts, setTriggerCounts] = useState({});

  return (
    <motion.section
      id="stats"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="max-w-6xl mx-auto p-6 px-4 sm:px-6 md:px-8"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 bg-base-200 border border-primary/30 rounded-xl p-8 shadow-lg hover:shadow-primary/10 transition-shadow duration-300">
        {stats.map((stat, idx) => {
          const match = stat.number.match(/^(\d+)(.*)$/);
          const endNum = match ? parseInt(match[1], 10) : 0;
          const suffix = match ? match[2] : "";

          return (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              onViewportEnter={() => {
                setTriggerCounts((prev) => ({
                  ...prev,
                  [idx]: Date.now(), // re-render CountUp
                }));
              }}
              transition={{ delay: idx * 0.15, type: "spring", stiffness: 100 }}
              className="flex flex-col items-center text-center"
            >
              {stat.icon}
              <h3 className="text-5xl  mt-3">
                <CountUp
                  key={triggerCounts[idx] || 0}
                  start={0}
                  end={endNum}
                  duration={2.5}
                />
                {suffix}
              </h3>
              <p className="text-base-content/70 mt-1 font-mono tracking-wide">{stat.label}</p>
            </motion.div>
          );
        })}
      </div>
    </motion.section>
  );
};

export default StatsSection;
