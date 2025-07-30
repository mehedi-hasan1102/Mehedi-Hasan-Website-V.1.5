import React from "react";
import {
  SiMongodb,
  SiReact,
  SiNodedotjs,
  SiNextdotjs,
  SiFirebase,
  SiTypescript,
  SiAngular,
  SiLaravel,
  SiTailwindcss,
  SiVuedotjs,
} from "react-icons/si";

// Row 1 icons
const techIconsRow1 = [
  { icon: SiMongodb, label: "MongoDB" },
  { icon: SiReact, label: "React" },
  { icon: SiNodedotjs, label: "Node.js" },
  { icon: SiNextdotjs, label: "Next.js" },
  { icon: SiFirebase, label: "Firebase" },
];

// Row 2 icons
const techIconsRow2 = [
  { icon: SiVuedotjs, label: "Vue.js" },
  { icon: SiAngular, label: "Angular" },
  { icon: SiLaravel, label: "Laravel" },
  { icon: SiTailwindcss, label: "Tailwind CSS" },
  { icon: SiTypescript, label: "TypeScript" },
];

const SkillsSection = () => {
  return (
    <section id="resume" className="bg-base-100 text-base-content font-mono py-16 px-4">
      <div className="max-w-5xl mx-auto border border-primary rounded-md p-8">
        <div className="mb-6">
          <p className="text-sm text-primary">• Projects</p>
          <h2 className="text-2xl font-bold">My Skills</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-10 items-start">
          {/* Scrolling Icons */}
          <div className="space-y-4">
            {/* Row 1 scrolls right */}
            <div className="overflow-hidden w-[288px] mx-auto">
              <div className="flex gap-4 animate-scroll-right w-max">
                {techIconsRow1.concat(techIconsRow1).map(({ icon: Icon, label }, idx) => (
                  <div
                    key={idx}
                    className="w-12 h-12 flex items-center justify-center border border-base-300 rounded-md p-2 hover:border-primary transition"
                    title={label}
                  >
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                ))}
              </div>
            </div>

            {/* Row 2 scrolls left */}
            <div className="overflow-hidden w-[288px] mx-auto">
              <div className="flex gap-4 animate-scroll-left w-max">
                {techIconsRow2.concat(techIconsRow2).map(({ icon: Icon, label }, idx) => (
                  <div
                    key={idx}
                    className="w-12 h-12 flex items-center justify-center border border-base-300 rounded-md p-2 hover:border-primary transition"
                    title={label}
                  >
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Skills List */}
          <ul className="text-sm space-y-3 tracking-wide">
            <li>
              <strong>Front-End:</strong> HTML, CSS, JavaScript, React, Angular
            </li>
            <li>
              <strong>Back-End:</strong> Node.js, Express, Python, Django
            </li>
            <li>
              <strong>Databases:</strong> MySQL, PostgreSQL, MongoDB
            </li>
            <li>
              <strong>Tools & Platforms:</strong> Git, Docker, AWS, Heroku
            </li>
            <li>
              <strong>Others:</strong> RESTful APIs, GraphQL, Agile Methodologies
            </li>
          </ul>
        </div>
      </div>

      {/* Keyframes styles */}
      <style jsx>{`
        @keyframes scroll-right {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        @keyframes scroll-left {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0);
          }
        }

        .animate-scroll-right {
          animation: scroll-right 15s linear infinite;
        }

        .animate-scroll-left {
          animation: scroll-left 15s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default SkillsSection;
