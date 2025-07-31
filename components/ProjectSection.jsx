// import React, { useState } from "react";

// const ProjectSection = () => {
//   const [projects, setProjects] = useState([
//     {
//       title: "Active Arena",
//       description:
//         "A production-ready play ground management app featuring real-time synchronization, JWT authentication, and optimized performance.",
//       features: [
//         "Payment integration with Stripe",
//         "JWT Authentication flow",
//         "Full CRUD operations",
//       ],
//       techStack: ["React 19", "Stripe", "Firebase"],
//       liveLink: "https://buildbox-a12.web.app",
//       frontendRepo:
//         "https://github.com/mehedi-hasan1102/Active-Arena-Client",
//       backendRepo:
//         "https://github.com/mehedi-hasan1102/Active-Arena-Server",
//       images: [
//         "https://i.ibb.co/Rkvdr5YS/pexels9773.jpg",
//         "https://i.ibb.co/7d9jJw84/Active-Arena-111.webp",
//         "https://i.ibb.co/xtPXvDhH/pexels-ajaybhargavguduru-863988.jpg",
//       ],
//     },
//     {
//       title: "Food Garden",
//       description:
//         "A production-ready food management app featuring real-time synchronization, JWT authentication, and optimized performance.",
//       features: [
//         "Real-time synchronization with Firebase",
//         "JWT Authentication flow",
//         "Full CRUD operations",
//       ],
//       techStack: ["React 19", "Tailwind CSS", "Firebase"],
//       liveLink: "https://food-garden-bd.web.app",
//       frontendRepo:
//         "https://github.com/mehedi-hasan1102/Food-Garden-Client",
//       backendRepo:
//         "https://github.com/mehedi-hasan1102/Food-Garden-Server",
//       images: [
//         "https://i.ibb.co/NnQx5NND/Food-Guardian-06-29-2025-01-13-AM.png",
//         "https://i.ibb.co/7x50g4Vj/meet2.jpg",
//         "https://i.ibb.co/cSqTBKXF/meet5.jpg",
//       ],
//     },
//     {
//       title: "Plant Care Tracker",
//       description:
//         "Helps users manage and track plant care routines with reminders and notes.",
//       features: ["Add/Edit Plants", "Reminders", "Light/Dark Theme"],
//       techStack: ["MongoDB", "Express", "React", "Node.js"],
//       liveLink: "https://plant-care-tracker-bd.web.app",
//       frontendRepo:
//         "https://github.com/mehedi-hasan1102/Plant-Care-Client",
//       backendRepo:
//         "https://github.com/mehedi-hasan1102/Plant-Care-Server",
//       images: [
//         "https://i.ibb.co/27ssr5tp/Plant-Care-06-29-2025-12-43-AM.png",
//         "https://i.ibb.co/5Xd0czvc/Houseplant-Primer-A-Guide-to-Basic-Care-and-Durable-Plants.jpg",
//         "https://i.ibb.co/DyWjQ7G/maxresdefault.jpg",
//       ],
//     },
//     {
//       title: "Event Explorer",
//       description:
//         "A full-stack event booking platform where users can browse and reserve seats for local events.",
//       features: ["Authentication", "Booking System", "Firebase Integration"],
//       techStack: ["React", "Firebase", "Node.js"],
//       liveLink: "https://event-explorer-bd.netlify.app",
//       frontendRepo:
//         "https://github.com/mehedi-hasan1102/Event-Explorer",
//       images: [
//         "https://i.ibb.co/VWcfS0BV/Home-Event-Explorer-06-29-2025-01-07-AM.png",
//         "https://i.ibb.co/nqDYhzLP/image5.jpg",
//         "https://i.ibb.co/N26HnVz1/image8.jpg",
//       ],
//     },
//   ]);

//   const [current, setCurrent] = useState(0);
//   const project = projects[current];

//   const next = () => setCurrent((prev) => (prev + 1) % projects.length);
//   const prev = () => setCurrent((prev) => (prev - 1 + projects.length) % projects.length);

//   return (
//     <section className="bg-base-100 py-10 px-4 font-mono max-w-5xl mx-auto">
//       <h2 className="text-sm text-primary tracking-wide">* Projects</h2>
//       <h1 className="text-3xl font-bold mb-8 text-base-content">My Recent Works</h1>

//       <div className="grid md:grid-cols-2 gap-6 border border-base-300 p-6 rounded-lg">
//         <img
//           src={project.images[0]}
//           alt={project.title}
//           className="w-full rounded shadow-md"
//         />

//         <div>
//           <h3 className="text-xl text-primary font-semibold mb-2">
//             {project.title}
//           </h3>
//           <p className="text-sm text-base-content/80 mb-4">
//             {project.description}
//           </p>

//           <div className="text-xs border-t border-base-300 pt-3 space-y-2">
//             <div>
//               <span className="font-semibold text-base-content/60">Client:</span> Conceptual Project
//             </div>
//             <div>
//               <span className="font-semibold text-base-content/60">Completion Time:</span> 6 months
//             </div>
//             <div>
//               <span className="font-semibold text-base-content/60">Technologies:</span> {project.techStack.join(", ")}
//             </div>
//           </div>

//           <div className="mt-4 flex flex-wrap gap-4 text-sm">
//             <a
//               href={project.liveLink}
//               className="text-primary hover:underline"
//               target="_blank"
//               rel="noopener noreferrer"
//             >
//               ↗ Live Demo
//             </a>
//             <a
//               href={project.frontendRepo}
//               className="text-base-content hover:underline"
//               target="_blank"
//               rel="noopener noreferrer"
//             >
//               ⎇ Frontend Repo
//             </a>
//             {project.backendRepo && (
//               <a
//                 href={project.backendRepo}
//                 className="text-base-content hover:underline"
//                 target="_blank"
//                 rel="noopener noreferrer"
//               >
//                 ⎇ Backend Repo
//               </a>
//             )}
//           </div>

//           <div className="flex justify-end gap-4 mt-6">
//             <button
//               onClick={prev}
//               className="bg-base-200 hover:bg-base-300 border border-base-300 rounded-full p-2 text-primary transition"
//               aria-label="Previous project"
//             >
//               ←
//             </button>
//             <button
//               onClick={next}
//               className="bg-base-200 hover:bg-base-300 border border-base-300 rounded-full p-2 text-primary transition"
//               aria-label="Next project"
//             >
//               →
//             </button>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ProjectSection;
import React, { useState } from "react";

const ProjectSection = () => {
  const [projects] = useState([
    {
      title: "Active Arena",
      description:
        "A production-ready play ground management app featuring real-time synchronization, JWT authentication, and optimized performance.",
      features: [
        "Payment integration with Stripe",
        "JWT Authentication flow",
        "Full CRUD operations",
      ],
      techStack: ["React 19", "Stripe", "Firebase"],
      liveLink: "https://buildbox-a12.web.app",
      frontendRepo:
        "https://github.com/mehedi-hasan1102/Active-Arena-Client",
      backendRepo:
        "https://github.com/mehedi-hasan1102/Active-Arena-Server",
      images: [
        "https://i.ibb.co/Rkvdr5YS/pexels9773.jpg",
        "https://i.ibb.co/7d9jJw84/Active-Arena-111.webp",
        "https://i.ibb.co/xtPXvDhH/pexels-ajaybhargavguduru-863988.jpg",
      ],
    },
    {
      title: "Food Garden",
      description:
        "A production-ready food management app featuring real-time synchronization, JWT authentication, and optimized performance.",
      features: [
        "Real-time synchronization with Firebase",
        "JWT Authentication flow",
        "Full CRUD operations",
      ],
      techStack: ["React 19", "Tailwind CSS", "Firebase"],
      liveLink: "https://food-garden-bd.web.app",
      frontendRepo:
        "https://github.com/mehedi-hasan1102/Food-Garden-Client",
      backendRepo:
        "https://github.com/mehedi-hasan1102/Food-Garden-Server",
      images: [
        "https://i.ibb.co/NnQx5NND/Food-Guardian-06-29-2025-01-13-AM.png",
        "https://i.ibb.co/7x50g4Vj/meet2.jpg",
        "https://i.ibb.co/cSqTBKXF/meet5.jpg",
      ],
    },
    {
      title: "Plant Care Tracker",
      description:
        "Helps users manage and track plant care routines with reminders and notes.",
      features: ["Add/Edit Plants", "Reminders", "Light/Dark Theme"],
      techStack: ["MongoDB", "Express", "React", "Node.js"],
      liveLink: "https://plant-care-tracker-bd.web.app",
      frontendRepo:
        "https://github.com/mehedi-hasan1102/Plant-Care-Client",
      backendRepo:
        "https://github.com/mehedi-hasan1102/Plant-Care-Server",
      images: [
        "https://i.ibb.co/27ssr5tp/Plant-Care-06-29-2025-12-43-AM.png",
        "https://i.ibb.co/5Xd0czvc/Houseplant-Primer-A-Guide-to-Basic-Care-and-Durable-Plants.jpg",
        "https://i.ibb.co/DyWjQ7G/maxresdefault.jpg",
      ],
    },
    {
      title: "Event Explorer",
      description:
        "A full-stack event booking platform where users can browse and reserve seats for local events.",
      features: ["Authentication", "Booking System", "Firebase Integration"],
      techStack: ["React", "Firebase", "Node.js"],
      liveLink: "https://event-explorer-bd.netlify.app",
      frontendRepo:
        "https://github.com/mehedi-hasan1102/Event-Explorer",
      images: [
        "https://i.ibb.co/VWcfS0BV/Home-Event-Explorer-06-29-2025-01-07-AM.png",
        "https://i.ibb.co/nqDYhzLP/image5.jpg",
        "https://i.ibb.co/N26HnVz1/image8.jpg",
      ],
    },
  ]);

  const latestProjects = [...projects].slice(-3).reverse(); // latest 3

  return (
    <section id="projects" className="bg-base-100 pt-24 px-4 font-mono max-w-5xl mx-auto">
      <h2 className="text-sm text-primary tracking-wide">* Projects</h2>
      <h1 className="text-3xl font-bold mb-8 text-base-content">My Recent Works</h1>

      <div className="space-y-10">
        {latestProjects.map((project, index) => (
          <div
            key={index}
            className="grid md:grid-cols-2 gap-6 border border-base-300 p-6 rounded-lg"
          >
            <img
              src={project.images[0]}
              alt={project.title}
              className="w-full rounded shadow-md"
            />

            <div>
              <h3 className="text-xl text-primary font-semibold mb-2">
                {project.title}
              </h3>
              <p className="text-sm text-base-content/80 mb-4">
                {project.description}
              </p>

              <div className="text-xs border-t border-base-300 pt-3 space-y-2">
                <div>
                  {/* <span className="font-semibold text-base-content/60">
                    Client:
                  </span>{" "}
                  Conceptual Project */}
                </div>
                <div>
                  {/* <span className="font-semibold text-base-content/60">
                    Completion Time:
                  </span>{" "}
                  6 months */}
                </div>
                <div>
                  <span className="font-semibold text-base-content/60">
                    Technologies:
                  </span>{" "}
                  {project.techStack.join(", ")}
                </div>
              </div>

              <div className="mt-4 flex flex-wrap gap-4 text-sm">
                <a
                  href={project.liveLink}
                  className="text-primary hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  ↗ Live Demo
                </a>
                <a
                  href={project.frontendRepo}
                  className="text-base-content hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  ⎇ Frontend Repo
                </a>
                {project.backendRepo && (
                  <a
                    href={project.backendRepo}
                    className="text-base-content hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    ⎇ Backend Repo
                  </a>
                )}
              </div>
              
            </div>
            
          </div>
          
        ))}
        <button
                type="submit"
                className="flex items-center gap-2 mt-2 font-medium text-primary hover:text-primary/80 transition"
              >
                show more project <span>↗</span>
              </button>
      </div>
    </section>
  );
};

export default ProjectSection;
