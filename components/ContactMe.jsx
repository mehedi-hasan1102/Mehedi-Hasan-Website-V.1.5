import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { Phone, Mail, MapPin } from "lucide-react"; 

const ContactMe = () => {
  const formRef = useRef();
  const [success, setSuccess] = useState(null);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_o3qo36f", // your EmailJS service ID
        "template_z368suy", // your EmailJS template ID
        formRef.current,
        "UFLgRUB3KBnkwrw5_" // your public key
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

  return (
   
    <section
      id="contact"
      className="min-h-screen  items-center justify-center bg-base-100 text-white px-6 py-20"
    >
      <div>  <h2 className="text-3xl md:text-4xl font-semibold text-green-400 mb-8">
            Let’s connect
          </h2></div>

      <div className=" flex max-w-6xl w-full  md:grid-cols-2 gap-12">

        
        {/* Left Side: Form */}
        <div>
         

          <form
            ref={formRef}
            onSubmit={sendEmail}
            className="flex flex-col gap-4"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                name="name"
                placeholder="Your name"
                required
                className="w-full bg-transparent border border-gray-700 rounded-md px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-green-400"
              />
              <input
                type="text"
                name="phone"
                placeholder="Phone"
                className="w-full bg-transparent border border-gray-700 rounded-md px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-green-400"
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                required
                className="w-full bg-transparent border border-gray-700 rounded-md px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-green-400"
              />
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                className="w-full bg-transparent border border-gray-700 rounded-md px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-green-400"
              />
            </div>

            <textarea
              name="message"
              rows="6"
              placeholder="Message"
              required
              className="bg-transparent border border-gray-700 rounded-md px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-green-400"
            ></textarea>

            <button
              type="submit"
              className="flex items-center gap-2 text-white mt-2 font-medium hover:text-green-400 transition"
            >
              Send Message <span className="text-green-400">↗</span>
            </button>

            {success === true && (
              <p className="text-green-400 mt-2">Message sent successfully!</p>
            )}
            {success === false && (
              <p className="text-red-400 mt-2">Failed to send. Try again.</p>
            )}
          </form>
        </div>

        {/* Right Side: Contact Info */}
        <div className="flex flex-col gap-6 mt-10 md:mt-0">
          {/* Phone */}
          <div className="flex items-center gap-4">
            <div className="p-3 rounded-md border border-gray-700 text-green-400">
              <Phone size={20} />
            </div>
            <div>
              <p className="text-gray-400 text-sm">Phone Number</p>
              <p className="font-mono">+1-234-567-8901</p>
            </div>
          </div>

          {/* Email */}
          <div className="flex items-center gap-4">
            <div className="p-3 rounded-md border border-gray-700 text-green-400">
              <Mail size={20} />
            </div>
            <div>
              <p className="text-gray-400 text-sm">Email</p>
              <p className="font-mono">contact@william.design</p>
            </div>
          </div>

         
         

          {/* Address */}
          <div className="flex items-center gap-4">
            <div className="p-3 rounded-md border border-gray-700 text-green-400">
              <MapPin size={20} />
            </div>
            <div>
              <p className="text-gray-400 text-sm">Address</p>
              <p className="font-mono">0811 Erdman Prairie, Joaville CA</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactMe;
