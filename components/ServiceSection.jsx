import React from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { Code2, Server, Wrench } from "lucide-react";

const services = [
  {
    icon: <Code2 className="w-6 h-6 text-primary" />,
    title: "Frontend Development",
    description:
      "Building interactive and responsive interfaces using React, Next.js, and modern UI libraries like Tailwind CSS.",
  },
  {
    icon: <Server className="w-6 h-6 text-primary" />,
    title: "Backend Development",
    description:
      "Developing scalable and secure APIs with Node.js, Express, MongoDB, and Firebase.",
  },
  {
    icon: <Wrench className="w-6 h-6 text-primary" />,
    title: "Full Stack Solutions",
    description:
      "Delivering complete web apps with seamless integration of front-end and back-end technologies.",
  },
  {
    icon: <Wrench className="w-6 h-6 text-primary" />,
    title: "REST API Integration",
    description:
      "Creating and integrating robust REST APIs to connect services and ensure efficient data flow across your application.",
  },
  {
    icon: <Code2 className="w-6 h-6 text-primary" />,
    title: "Performance Optimization",
    description:
      "Improving application speed and responsiveness through lazy loading, code splitting, and optimized rendering techniques.",
  },
  {
    icon: <Server className="w-6 h-6 text-primary" />,
    title: "Authentication & Security",
    description:
      "Implementing secure authentication systems using JWT, OAuth, and Firebase Auth to protect users and data.",
  },
];


const ServiceSection = () => {
  return (
    <motion.section
      id="services"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="bg-base-100   text-base-content font-mono  max-w-6xl mx-auto py-4 px-4 sm:px-6 md:px-8"
    >
      <div className="bg-base-200 border border-primary/30 rounded-xl p-6  backdrop-blur-sm shadow-lg hover:shadow-primary/10 transition-shadow duration-300">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          viewport={{ once: true }}
          className="mb-6"
        >
          <p className="text-sm text-primary mb-2">• What I Do</p>
          <h2 className="text-2xl font-bold">My Services</h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 ">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -5 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="bg-base-100 border border-base-300 rounded-md p-4 hover:border-primary transition"
            >
              <div className="flex items-center gap-3 mb-3 ">
                <div className="p-2 border border-primary rounded-md">
                  {service.icon}
                </div>
                <h3 className="text-lg font-semibold">{service.title}</h3>
              </div>
              <p className="text-sm leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default ServiceSection;
