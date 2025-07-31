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

  return (
    <section
      id="contact-me"
      className="min-h-screen bg-base-100 text-base-content pt-24 px-6"
    >
      <div className="max-w-4xl mx-auto w-full">
        <p className="text-sm text-primary">• Contact</p>
        <h1 className="text-4xl font-bold mb-8 text-base-content">Let’s connect</h1>

        <div className="flex flex-col md:flex-row gap-12">
          {/* Form */}
          <div className="w-full md:w-1/2">
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
                  className="input input-bordered w-full"
                />
                <input
                  type="text"
                  name="phone"
                  placeholder="Phone"
                  className="input input-bordered w-full"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  required
                  className="input input-bordered w-full"
                />
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  className="input input-bordered w-full"
                />
              </div>

              <textarea
                name="message"
                rows="6"
                placeholder="Message"
                required
                className="textarea textarea-bordered w-full"
              ></textarea>

              {/* ✅ Hidden time field to show Date/Time in EmailJS */}
              <input
                type="hidden"
                name="time"
                value={new Date().toLocaleString()}
              />

              <button
                type="submit"
                className="whitespace-pre mt-8 inline-flex items-center gap-2 text-primary hover:underline font-mono transition-colors duration-300"
              >
                Send Message <span>↗</span>
              </button>

              {success === true && (
                <p className="text-success mt-2">Message sent successfully!</p>
              )}
              {success === false && (
                <p className="text-error mt-2">Failed to send. Try again.</p>
              )}
            </form>
          </div>

          {/* Contact Info */}
          <div className="w-full md:w-1/2 flex flex-col gap-6">
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-md border border-base-300 text-primary">
                <Phone size={20} />
              </div>
              <div>
                <p className="text-sm opacity-70">Phone Number</p>
                <p className="font-mono">+8801747874773</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="p-3 rounded-md border border-base-300 text-primary">
                <Mail size={20} />
              </div>
              <div>
                <p className="text-sm opacity-70">Email</p>
                <p className="font-mono">mehedi.hasan11023@gmail.com</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="p-3 rounded-md border border-base-300 text-primary">
                <MapPin size={20} />
              </div>
              <div>
                <p className="text-sm opacity-70">Address</p>
                <p className="font-mono">Mymensingh, Bangladesh</p>
              </div>
            </div>

            {/* ✅ Video Call Section */}
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-md border border-base-300 text-primary">
                <Phone size={20} />
              </div>
              <div>
                <p className="text-sm opacity-70">Video Call</p>
                <a
                  href="https://calendly.com/mehedi-hasan1102"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono   hover:underline text-primary/80 transition"
                >
                  Book a Call via Calendly  <span>↗</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactMe;
