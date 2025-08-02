
import React from "react";
import { Download } from "lucide-react";
import {
  SiReact,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiTailwindcss,
  SiFirebase,
  SiJavascript,
  SiTypescript,
  SiNextdotjs,
} from "react-icons/si";
import Typewriter from "typewriter-effect";

const techIcons = [
  { icon: SiReact, label: "React" },
  { icon: SiNextdotjs, label: "Next.js" },
  { icon: SiNodedotjs, label: "Node.js" },
  { icon: SiExpress, label: "Express.js" },
  { icon: SiMongodb, label: "MongoDB" },
  { icon: SiTailwindcss, label: "Tailwind CSS" },
  { icon: SiFirebase, label: "Firebase" },
  { icon: SiJavascript, label: "JavaScript" },
  { icon: SiTypescript, label: "TypeScript" },
];

const HeroSection = () => {
  return (
    <section
      id="home"
      className="max-w-4xl min-h-[80vh] mx-auto px-6 py-16 pt-24 flex items-center justify-center bg-base-100 transition-colors duration-300"
    >
      <div className="grid md:grid-cols-2 items-center gap-12 w-full">
        {/* Left: Profile Image */}
        <div className="flex justify-center relative">
          <div className="w-64 h-72 md:w-72 md:h-80 relative">
            <div
              className="w-full h-full overflow-hidden"
              style={{
                clipPath:
                  "polygon(25% 5%, 75% 5%, 100% 50%, 75% 95%, 25% 95%, 0% 50%)",
              }}
            >
              <img
                src="https://i.ibb.co/S4VvHSng/b.png"
                alt="Mehedi Hasan"
                className="w-full h-full object-cover bg-base-200"
              />
            </div>
            <div className=" absolute -bottom-1 left-1/2 -translate-x-1/2 bg-primary text-primary-content px-4 py-2 rounded-full font-semibold text-sm shadow-md">
              &lt;/&gt;
            </div>
          </div>
        </div>

        {/* Right: Content */}
        <div>
          <span className="text-sm text-base-content/60 font-mono flex items-center gap-2">
           <span className="text-secondary" > &lt;span&gt; </span>  Hey, I’m
            <span className="text-primary">
              <Typewriter
                options={{
                  strings: ["Mehedi Hasan"],
                  autoStart: true,
                  loop: true,
                  delay: 100,
                  deleteSpeed: 50,
                  pauseFor: 2000,
                }}
              />
            </span >
<span className="text-secondary" > &lt;/span&gt;</span>
           
          
          </span>

          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mt-4 text-base-content">
            Junior <span className="text-primary">{`{Full Stack}`}</span> Web Developer
          </h1>

          
<span className="mt-4 max-w-xl text-sm font-mono text-base-content/60 block">
  <span className="text-secondary">&lt;p&gt; </span> 
  With expertise in cutting-edge technologies such as NodeJS, React, and NextJS... I deliver web solutions that are both innovative and robust.
   <span className="text-secondary"> &lt;/p&gt;</span>
</span>

          {/* Tech Icons Scroll Section */}
          <div className="mt-6 flex items-center gap-2">
            <div className="relative overflow-hidden max-w-[260px] md:max-w-[300px] lg:max-w-[360px]">
              <div className="flex items-center gap-4 animate-scroll-horizontal w-max pr-16">
                {techIcons.concat(techIcons).map((tech, idx) => {
                  const IconComponent = tech.icon;
                  return (
                    <div
                      key={idx}
                      className="w-12 h-12 flex items-center justify-center border border-base-300 rounded-md p-2 hover:border-primary transition duration-300"
                      title={tech.label}
                    >
                      <IconComponent className="w-6 h-6 text-primary" />
                    </div>
                  );
                })}
              </div>
            </div>
            <span className="text-sm font-mono text-base-content/60">...and more</span>
          </div>

          {/* Download CV Button */}
          <a
            href="https://drive.google.com/uc?export=download&id=1gZMIsl3xbE6bdXfz82WAgOrwMJygx7KB"
            download
            className="mt-8 inline-flex items-center gap-2 text-primary hover:underline font-mono transition-colors duration-300"
          >
            <Download size={18} />
            [ Download CV ]
          </a>
        </div>
      </div>

      {/* Scroll Animation */}
      <style>
        {`
          @keyframes scroll-horizontal {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .animate-scroll-horizontal {
            animation: scroll-horizontal 25s linear infinite;
          }
        `}
      </style>
    </section>
  );
};

export default HeroSection;
