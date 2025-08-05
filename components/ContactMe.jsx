// // import React, { useRef, useState } from "react";
// // import emailjs from "@emailjs/browser";
// // import { Phone, Mail, MapPin, MessageSquare } from "lucide-react";
// // // eslint-disable-next-line no-unused-vars
// // import { motion } from "framer-motion";

// // const ContactMe = () => {
// //   const formRef = useRef();
// //   const [success, setSuccess] = useState(null);

// //   const sendEmail = (e) => {
// //     e.preventDefault();

// //     emailjs
// //       .sendForm(
// //         "service_o3qo36f",
// //         "template_z368suy",
// //         formRef.current,
// //         "UFLgRUB3KBnkwrw5_"
// //       )
// //       .then(
// //         () => {
// //           setSuccess(true);
// //           e.target.reset();
// //         },
// //         () => {
// //           setSuccess(false);
// //         }
// //       );
// //   };

// //   const fadeIn = {
// //     hidden: { opacity: 0, y: 20 },
// //     visible: { opacity: 1, y: 0 }
// //   };

// //   return (
// //     <section
// //       id="contact"
// //       className=" p-4 min-h-screen bg-base-100 text-base-content pt-24 max-w-6xl mx-auto "
// //     >
// //       <div className="max-w-6xl mx-auto w-full ">
// //         <motion.div
// //           initial="hidden"
// //           whileInView="visible"
// //           variants={fadeIn}
// //           viewport={{ once: true }}
// //         >
// //           <p className="text-sm text-primary mb-2">• Get in Touch</p>
// //           <h1 className="text-4xl font-bold mb-8 text-base-content">Let's connect</h1>
// //         </motion.div>

// //         <div className="flex flex-col md:flex-row gap-12">
// //           {/* Form */}
// //           <motion.div 
// //             initial="hidden"
// //             whileInView="visible"
// //             variants={fadeIn}
// //             transition={{ delay: 0.1 }}
// //             viewport={{ once: true }}
// //             className="w-full md:w-1/2"
// //           >
// //             <form
// //               ref={formRef}
// //               onSubmit={sendEmail}
// //               className="flex flex-col gap-4"
// //             >
// //               <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
// //                 <motion.input
// //                   whileFocus={{ scale: 1.02 }}
// //                   type="text"
// //                   name="name"
// //                   placeholder="Your name"
// //                   required
// //                   className="input input-bordered w-full"
// //                 />
// //                 <motion.input
// //                   whileFocus={{ scale: 1.02 }}
// //                   type="text"
// //                   name="phone"
// //                   placeholder="Phone"
// //                   className="input input-bordered w-full"
// //                 />
// //                 <motion.input
// //                   whileFocus={{ scale: 1.02 }}
// //                   type="email"
// //                   name="email"
// //                   placeholder="Email"
// //                   required
// //                   className="input input-bordered w-full"
// //                 />
// //                 <motion.input
// //                   whileFocus={{ scale: 1.02 }}
// //                   type="text"
// //                   name="subject"
// //                   placeholder="Subject"
// //                   className="input input-bordered w-full"
// //                 />
// //               </div>

// //               <motion.textarea
// //                 whileFocus={{ scale: 1.02 }}
// //                 name="message"
// //                 rows="6"
// //                 placeholder="Message"
// //                 required
// //                 className="textarea textarea-bordered w-full"
// //               ></motion.textarea>

// //               <input
// //                 type="hidden"
// //                 name="time"
// //                 value={new Date().toLocaleString()}
// //               />

// //               <motion.button
// //                 type="submit"
// //                 whileHover={{ scale: 1.02 }}
// //                 whileTap={{ scale: 0.98 }}
// //                 className="mt-8 inline-flex items-center gap-2 text-primary hover:underline font-mono transition-colors duration-300"
// //               >
// //                 Send Message <span>↗</span>
// //               </motion.button>

// //               {success === true && (
// //                 <motion.p 
// //                   initial={{ opacity: 0 }}
// //                   animate={{ opacity: 1 }}
// //                   className="text-success mt-2"
// //                 >
// //                   Message sent successfully!
// //                 </motion.p>
// //               )}
// //               {success === false && (
// //                 <motion.p 
// //                   initial={{ opacity: 0 }}
// //                   animate={{ opacity: 1 }}
// //                   className="text-error mt-2"
// //                 >
// //                   Failed to send. Try again.
// //                 </motion.p>
// //               )}
// //             </form>
// //           </motion.div>

// //           {/* Contact Info */}
// //           <motion.div 
// //             initial="hidden"
// //             whileInView="visible"
// //             variants={fadeIn}
// //             transition={{ delay: 0.2 }}
// //             viewport={{ once: true }}
// //             className="w-full md:w-1/2 flex flex-col gap-6"
// //           >
// //             <motion.div 
// //               whileHover={{ x: 5 }}
// //               className="flex items-center gap-4"
// //             >
// //               <div className="p-3 rounded-md border border-base-300 text-primary">
// //                 <Phone size={20} />
// //               </div>
// //               <div>
// //                 <p className="text-sm opacity-70">Phone Number</p>
// //                 <p className="font-mono">+8801747874773</p>
// //               </div>
// //             </motion.div>

// //             <motion.div 
// //               whileHover={{ x: 5 }}
// //               className="flex items-center gap-4"
// //             >
// //               <div className="p-3 rounded-md border border-base-300 text-primary">
// //                 <Mail size={20} />
// //               </div>
// //               <div>
// //                 <p className="text-sm opacity-70">Email</p>
// //                 <p className="font-mono">mehedi.hasan11023@gmail.com</p>
// //               </div>
// //             </motion.div>

// //             <motion.div 
// //               whileHover={{ x: 5 }}
// //               className="flex items-center gap-4"
// //             >
// //               <div className="p-3 rounded-md border border-base-300 text-primary">
// //                 <MapPin size={20} />
// //               </div>
// //               <div>
// //                 <p className="text-sm opacity-70">Address</p>
// //                 <p className="font-mono">Mymensingh, Bangladesh</p>
// //               </div>
// //             </motion.div>

// //             <motion.div 
// //               whileHover={{ x: 5 }}
// //               className="flex items-center gap-4"
// //             >
// //               <div className="p-3 rounded-md border border-base-300 text-primary">
// //                 <MessageSquare size={20} />
// //               </div>
// //               <div>
// //                 <p className="text-sm opacity-70">Instant Chat</p>
// //                 <motion.a
// //                   whileHover={{ x: 3 }}
// //                   href="https://wa.me/8801747874773"
// //                   target="_blank"
// //                   rel="noopener noreferrer"
// //                   className="font-mono hover:underline text-primary/80 transition"
// //                 >
// //                   Chat with Me on WhatsApp <span>↗</span>
// //                 </motion.a>
// //               </div>
// //             </motion.div>
// //           </motion.div>
// //         </div>
// //       </div>
// //     </section>
// //   );
// // };

// // export default ContactMe;

// import React, { useRef, useState } from "react";
// import emailjs from "@emailjs/browser";
// import { Phone, Mail, MapPin, MessageSquare } from "lucide-react";
// import { motion } from "framer-motion";

// const ContactMe = () => {
//   const formRef = useRef();
//   const [success, setSuccess] = useState(null);

//   const sendEmail = (e) => {
//     e.preventDefault();

//     emailjs
//       .sendForm(
//         "service_o3qo36f",
//         "template_z368suy",
//         formRef.current,
//         "UFLgRUB3KBnkwrw5_"
//       )
//       .then(
//         () => {
//           setSuccess(true);
//           e.target.reset();
//         },
//         () => {
//           setSuccess(false);
//         }
//       );
//   };

//   const fadeIn = {
//     hidden: { opacity: 0, y: 20 },
//     visible: { opacity: 1, y: 0 },
//   };

//   return (
//     <section
//       id="contact"
//       className=" bg-base-100 max-w-6xl mx-auto text-base-content font-mono pt-24 py-4 px-4 min-h-screen  "
//     >
//       <div className="   px-4  ">
//         {/* Header */}
//         <motion.div
//           initial="hidden"
//           whileInView="visible"
//           variants={fadeIn}
//           viewport={{ once: true }}
//         >
//           <p className="text-sm text-primary mb-2">• Get in Touch</p>
//           <h1 className="text-4xl font-bold mb-10 text-base-content">
//             Let's connect
//           </h1>
//         </motion.div>

//         <div className="flex flex-col lg:flex-row gap-12">
//           {/* Contact Form */}
//           <motion.div
//             initial="hidden"
//             whileInView="visible"
//             variants={fadeIn}
//             transition={{ delay: 0.1 }}
//             viewport={{ once: true, amount: 0.2 }}
//             className="w-full lg:w-1/2"
//           >
//             <form
//               ref={formRef}
//               onSubmit={sendEmail}
//               className="flex flex-col gap-6"
//             >
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                 <motion.input
//                   whileFocus={{ scale: 1.02 }}
//                   type="text"
//                   name="name"
//                   placeholder="Your name"
//                   required
//                   className="input input-bordered w-full"
//                 />
//                 <motion.input
//                   whileFocus={{ scale: 1.02 }}
//                   type="text"
//                   name="phone"
//                   placeholder="Phone"
//                   className="input input-bordered w-full"
//                 />
//                 <motion.input
//                   whileFocus={{ scale: 1.02 }}
//                   type="email"
//                   name="email"
//                   placeholder="Email"
//                   required
//                   className="input input-bordered w-full"
//                 />
//                 <motion.input
//                   whileFocus={{ scale: 1.02 }}
//                   type="text"
//                   name="subject"
//                   placeholder="Subject"
//                   className="input input-bordered w-full"
//                 />
//               </div>

//               <motion.textarea
//                 whileFocus={{ scale: 1.02 }}
//                 name="message"
//                 rows="5"
//                 placeholder="Message"
//                 required
//                 className="textarea textarea-bordered w-full"
//               ></motion.textarea>

//               <input
//                 type="hidden"
//                 name="time"
//                 value={new Date().toLocaleString()}
//               />

//               <motion.button
//                 type="submit"
//                 whileHover={{ scale: 1.02 }}
//                 whileTap={{ scale: 0.98 }}
//                 className="mt-6 inline-flex items-center gap-2 text-primary hover:underline font-mono transition-colors duration-300"
//               >
//                 Send Message <span>↗</span>
//               </motion.button>

//               {success === true && (
//                 <motion.p
//                   initial={{ opacity: 0 }}
//                   animate={{ opacity: 1 }}
//                   className="text-success mt-2"
//                 >
//                   Message sent successfully!
//                 </motion.p>
//               )}
//               {success === false && (
//                 <motion.p
//                   initial={{ opacity: 0 }}
//                   animate={{ opacity: 1 }}
//                   className="text-error mt-2"
//                 >
//                   Failed to send. Try again.
//                 </motion.p>
//               )}
//             </form>
//           </motion.div>

//           {/* Contact Info */}
//           <motion.div
//             initial="hidden"
//             whileInView="visible"
//             variants={fadeIn}
//             transition={{ delay: 0.2 }}
//             viewport={{ once: true, amount: 0.2 }}
//             className="w-full lg:w-1/2 flex flex-col gap-6"
//           >
//             {[
//               {
//                 icon: <Phone size={20} />,
//                 label: "Phone Number",
//                 value: "+8801747874773",
//               },
//               {
//                 icon: <Mail size={20} />,
//                 label: "Email",
//                 value: "mehedi.hasan11023@gmail.com",
//               },
//               {
//                 icon: <MapPin size={20} />,
//                 label: "Address",
//                 value: "Mymensingh, Bangladesh",
//               },
//               {
//                 icon: <MessageSquare size={20} />,
//                 label: "Instant Chat",
//                 value: (
//                   <motion.a
//                     whileHover={{ x: 3 }}
//                     href="https://wa.me/8801747874773"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="hover:underline text-primary/80 transition font-mono"
//                   >
//                     Chat with Me on WhatsApp <span>↗</span>
//                   </motion.a>
//                 ),
//               },
//             ].map((item, idx) => (
//               <motion.div
//                 whileHover={{ x: 5 }}
//                 key={idx}
//                 className="flex items-start gap-4"
//               >
//                 <div className="p-3 rounded-md border border-base-300 text-primary">
//                   {item.icon}
//                 </div>
//                 <div>
//                   <p className="text-sm opacity-70">{item.label}</p>
//                   <p className="font-mono break-words">{item.value}</p>
//                 </div>
//               </motion.div>
//             ))}
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ContactMe;
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { Phone, Mail, MapPin, MessageSquare } from "lucide-react";
import { motion } from "framer-motion";

const ContactMe = () => {
  const formRef = useRef();
  const [success, setSuccess] = useState(null);

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_o3qo36f",
        "template_z368suy",
        formRef.current,
        "UFLgRUB3KBnkwrw5_"
      )
      .then(
        () => {
          setSuccess(true);
          e.target.reset();
        },
        () => {
          setSuccess(false);
        }
      );
  };

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.section
      id="contact"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="bg-base-100 text-base-content font-mono max-w-6xl mx-auto  py-4 px-4 sm:px-6 md:px-8 "
    >
      <div className="bg-base-200 border border-primary/30 rounded-xl p-6 backdrop-blur-sm shadow-lg hover:shadow-primary/10 transition-shadow duration-300">
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={fadeIn}
          viewport={{ once: true }}
          className="mb-6"
        >
          <p className="text-sm text-primary mb-2">• Get in Touch</p>
          <h2 className="text-2xl font-bold text-base-content">Let's connect</h2>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Contact Form */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={fadeIn}
            transition={{ delay: 0.1 }}
            viewport={{ once: true, amount: 0.2 }}
            className="w-full lg:w-1/2"
          >
            <form
              ref={formRef}
              onSubmit={sendEmail}
              className="flex flex-col gap-6"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <motion.input
                  whileFocus={{ scale: 1.02 }}
                  type="text"
                  name="name"
                  placeholder="Your name"
                  required
                  className="input input-bordered w-full"
                />
                <motion.input
                  whileFocus={{ scale: 1.02 }}
                  type="text"
                  name="phone"
                  placeholder="Phone"
                  className="input input-bordered w-full"
                />
                <motion.input
                  whileFocus={{ scale: 1.02 }}
                  type="email"
                  name="email"
                  placeholder="Email"
                  required
                  className="input input-bordered w-full"
                />
                <motion.input
                  whileFocus={{ scale: 1.02 }}
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  className="input input-bordered w-full"
                />
              </div>

              <motion.textarea
                whileFocus={{ scale: 1.02 }}
                name="message"
                rows="5"
                placeholder="Message"
                required
                className="textarea textarea-bordered w-full"
              ></motion.textarea>

              <input
                type="hidden"
                name="time"
                value={new Date().toLocaleString()}
              />

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="mt-6 inline-flex items-center gap-2 text-primary hover:underline font-mono transition-colors duration-300"
              >
                Send Message <span>↗</span>
              </motion.button>

              {success === true && (
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-success mt-2"
                >
                  ✅ Message sent successfully!
                </motion.p>
              )}
              {success === false && (
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-error mt-2"
                >
                  ❌ Failed to send. Please try again.
                </motion.p>
              )}
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={fadeIn}
            transition={{ delay: 0.2 }}
            viewport={{ once: true, amount: 0.2 }}
            className="w-full lg:w-1/2 flex flex-col gap-6"
          >
            {[
              {
                icon: <Phone size={20} />,
                label: "Phone Number",
                value: "+8801747874773",
              },
              {
                icon: <Mail size={20} />,
                label: "Email",
                value: "mehedi.hasan11023@gmail.com",
              },
              {
                icon: <MapPin size={20} />,
                label: "Address",
                value: "Mymensingh, Bangladesh",
              },
              {
                icon: <MessageSquare size={20} />,
                label: "Instant Chat",
                value: (
                  <motion.a
                    whileHover={{ x: 3 }}
                    href="https://wa.me/8801747874773"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline text-primary/80 transition font-mono"
                  >
                    Chat with Me on WhatsApp <span>↗</span>
                  </motion.a>
                ),
              },
            ].map((item, idx) => (
              <motion.div
                whileHover={{ x: 5 }}
                key={idx}
                className="flex items-start gap-4"
              >
                <div className="p-3 rounded-md border border-base-300 text-primary">
                  {item.icon}
                </div>
                <div>
                  <p className="text-sm opacity-70">{item.label}</p>
                  <p className="font-mono break-words">{item.value}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default ContactMe;
