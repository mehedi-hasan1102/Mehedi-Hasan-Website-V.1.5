

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import GitHubCalendar from "react-github-calendar";

const GitHubActivitySection = () => {
  const [error, setError] = useState(null);
  const username = "mehedi-hasan1102";

  // Optional: simple API call to validate username before rendering calendar
  useEffect(() => {
    fetch(`https://api.github.com/users/${username}`)
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch GitHub user");
        return res.json();
      })
      .then(() => setError(null))
      .catch((err) => setError(err.message));
  }, [username]);

  if (error) return null; // Hide entire component on error

  return (
    <motion.section
      id="github-activity"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="text-base-content font-mono max-w-6xl mx-auto p-4 px-4 sm:px-6 md:px-8"
    >
      <div className="border border-primary/30 rounded-xl p-6 bg-base-200 backdrop-blur-sm shadow-lg hover:shadow-primary/10 transition-shadow duration-300">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          viewport={{ once: true }}
          className="mb-6"
        >
          <p className="text-sm text-primary mb-2">• GitHub Activity</p>
          <h2 className="text-2xl font-bold">My GitHub Calendar</h2>
        </motion.div>

        <motion.div
          className="flex justify-center items-center"
          initial={{ scale: 0.95, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
        >
          <GitHubCalendar
            username={username}
            colorScheme="light"
            blockSize={14}
            blockMargin={4}
            fontSize={16}
          />
        </motion.div>
      </div>
    </motion.section>
  );
};

export default GitHubActivitySection;
