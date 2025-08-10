

import React, { useEffect, useState } from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { Briefcase, ArrowUpRight } from "lucide-react";

const MultiRepoGitJournal = ({ username = "mehedi-hasan1102" }) => {
  const [repos, setRepos] = useState([]);
  const [commits, setCommits] = useState({});
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchReposAndCommits = async () => {
      try {
        const resRepos = await fetch(`https://api.github.com/users/${username}/repos`);
        if (!resRepos.ok) throw new Error("Failed to fetch repositories");
        const reposData = await resRepos.json();
        const sortedRepos = reposData.sort(
          (a, b) => new Date(b.updated_at) - new Date(a.updated_at)
        );
        setRepos(sortedRepos);

        const commitsData = {};
        for (const repo of sortedRepos.slice(0, 2)) {
          const resCommits = await fetch(
            `https://api.github.com/repos/${username}/${repo.name}/commits?per_page=5`
          );
          if (!resCommits.ok) continue;
          const data = await resCommits.json();
          commitsData[repo.name] = data;
        }
        setCommits(commitsData);
      } catch (err) {
        setError(err.message);
      }
    };
    fetchReposAndCommits();
  }, [username]);

  if (error) return null; // <---- Hide entire component on error

  return (
    <motion.section
      id="git-journal"
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
          <p className="text-sm text-primary mb-2">• Git Journaling</p>
          <h2 className="text-2xl font-bold">Recent Commits from My Repositories</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10">
          {repos.slice(0, 2).map((repo) => (
            <div key={repo.id} className="space-y-3">
              <h3 className="text-lg font-semibold border-l-4 border-primary pl-3">{repo.name}</h3>
              <ul className="text-sm space-y-2 tracking-wide max-h-52 overflow-y-auto pr-2">
                {(commits[repo.name] || []).map((commit) => (
                  <motion.li
                    key={commit.sha}
                    className="pl-4 border-l-2 border-primary/50 hover:border-primary transition-colors duration-300"
                    title={commit.commit.message}
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <strong>{commit.commit.message.split("\n")[0]}</strong>
                    <br />
                    <small className="text-primary/80">
                      {new Date(commit.commit.author.date).toLocaleString()} by {commit.commit.author.name}
                    </small>
                  </motion.li>
                ))}
                {(!commits[repo.name] || commits[repo.name].length === 0) && (
                  <li className="italic text-gray-500">No commits found.</li>
                )}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default MultiRepoGitJournal;
