// import React from "react";
// import { FaGithub, FaXTwitter, FaLinkedin , FaFacebook} from "react-icons/fa6";

// const Footer = () => {
//   return (
//     <footer className="bg-base-100 text-base-content font-mono text-sm py-10">
//       <div className="max-w-6xl mx-auto w-full px-4">
//         {/* Top Border */}
//         <div className="border-t border-base-300 w-full mb-6" />

//         <div className="flex flex-col items-center text-center space-y-4">
//           {/* Logo */}
//           <div className="flex items-center space-x-1 text-lg font-medium">
//             <span className="text-primary text-xl">&lt;/&gt;</span>
//             <span className="font-semibold">Mehedi</span>
//             <span className="text-base-content/60">Hasan</span>
//           </div>

//           {/* Social Icons */}
//           <div className="flex space-x-4 text-xl">
//             <a
//               href="https://facebook.com/mehedi.hasan1102"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="hover:text-primary transition"
//               aria-label="Facebook"
//             >
//               <FaFacebook />
//             </a>
//             <a
//               href="https://github.com/mehedi-hasan1102"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="hover:text-primary transition"
//               aria-label="GitHub"
//             >
//               <FaGithub />
//             </a>
//             <a
//               href="https://x.com/mehedihasan1102"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="hover:text-primary transition"
//               aria-label="Twitter"
//             >
//               <FaXTwitter />
//             </a>
//             <a
//               href="https://www.linkedin.com/in/mehedi-hasan1102/"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="hover:text-primary transition"
//               aria-label="LinkedIn"
//             >
//               <FaLinkedin />
//             </a>
//           </div>

//           {/* Navigation Links */}
//           <div className="flex flex-wrap justify-center gap-4 text-base-content/70 text-xs tracking-wide">
//             {[
//               { label: "Home", to: "/" },
//               { label: "About me", to: "#about-me" },
//               { label: "Projects", to: "#projects" },
//               { label: "Contact", to: "#contact-me" },
//             ].map((item) => (
//               <a
//                 key={item.label}
//                 href={item.to}
//                 className="hover:text-primary transition"
//               >
//                 {item.label}
//               </a>
//             ))}
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;
import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaXTwitter, FaLinkedin, FaFacebook } from "react-icons/fa6";

const Footer = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <footer className="bg-base-100 text-base-content font-mono text-sm py-10">
      <div className="max-w-6xl mx-auto w-full px-4">
        {/* Top Border */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          variants={fadeIn}
          viewport={{ once: true }}
          className="border-t border-base-300 w-full mb-6"
        />

        <motion.div 
          initial="hidden"
          whileInView="visible"
          variants={fadeIn}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="flex flex-col items-center text-center space-y-4"
        >
          {/* Logo */}
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="flex items-center space-x-1 text-lg font-medium"
          >
            <span className="text-primary text-xl">&lt;/&gt;</span>
            <span className="font-semibold">Mehedi</span>
            <span className="text-base-content/60">Hasan</span>
          </motion.div>

          {/* Social Icons */}
          <div className="flex space-x-4 text-xl">
            {[
              { icon: FaFacebook, href: "https://facebook.com/mehedi.hasan1102", label: "Facebook" },
              { icon: FaGithub, href: "https://github.com/mehedi-hasan1102", label: "GitHub" },
              { icon: FaXTwitter, href: "https://x.com/mehedihasan1102", label: "Twitter" },
              { icon: FaLinkedin, href: "https://www.linkedin.com/in/mehedi-hasan1102/", label: "LinkedIn" }
            ].map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition"
                aria-label={social.label}
                whileHover={{ y: -3, scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <social.icon />
              </motion.a>
            ))}
          </div>

          {/* Navigation Links */}
          <motion.div 
            className="flex flex-wrap justify-center gap-4 text-base-content/70 text-xs tracking-wide"
          >
            {[
              { label: "Home", to: "/" },
              { label: "About me", to: "#about-me" },
              { label: "Projects", to: "#projects" },
              { label: "Contact", to: "#contact-me" },
            ].map((item, index) => (
              <motion.a
                key={item.label}
                href={item.to}
                className="hover:text-primary transition"
                whileHover={{ y: -2 }}
                transition={{ delay: index * 0.05 }}
              >
                {item.label}
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;