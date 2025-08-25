import React from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { Code2, Server, Wrench, Cpu, Gauge ,Lock   } from "lucide-react";
import { BorderBeam } from "@stianlarsen/border-beam";

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
    icon: <Cpu className="w-6 h-6 text-primary" />,
    title: "REST API Integration",
    description:
      "Creating and integrating robust REST APIs to connect services and ensure efficient data flow across your application.",
  },
  {
    icon: <Gauge className="w-6 h-6 text-primary" />,
    title: "Performance Optimization",
    description:
      "Improving application speed and responsiveness through lazy loading, code splitting, and optimized rendering techniques.",
  },
  {
    icon: <Lock className="w-6 h-6 text-primary" />,
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
      className="  text-base-content font-mono  max-w-6xl mx-auto py-4 px-4 sm:px-6 md:px-8"
    >
      <div className="relative w-full rounded-xl overflow-hidden bg-base-200 border border-primary/30  p-6  backdrop-blur-sm shadow-lg hover:shadow-primary/10 transition-shadow duration-300">
        
        <BorderBeam
          size={800}
          duration={8}
          borderWidth={1}
          colorFrom="#22c55e" // Tailwind green-500
          colorTo="#16a34a"   // Tailwind green-600
        />
 
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          viewport={{ once: true }}
          className="mb-6 text-center"
        >
          <p className="text-sm text-primary mb-2">• Cooperation</p>
          <h2 className="text-2xl ">Designing solutions 
            
             <span className="text-base-content/60"> customized
to meet your requirements</span> </h2>
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
                <h3 className="text-lg ">{service.title}</h3>
              </div>
              <p className="text-sm leading-relaxed text-base-content/60">{service.description}</p>
              
            </motion.div>
            
            
          ))}
        </div>

        <div className="mt-8 text-center">
  <p className="text-sm mb-2">
    Excited to take on new projects and collaborate.
    Let's chat about your ideas.{" "}
    <a 
      href="#contact" 
      className="text-primary hover:underline cursor-pointer "
      onClick={(e) => {
        e.preventDefault();
        document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
      }}
    >
      Reach out!
    </a>
  </p>
</div>
      </div>
    </motion.section>
  );
};

export default ServiceSection;
