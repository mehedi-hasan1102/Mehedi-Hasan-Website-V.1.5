import React from "react";
import { GraduationCap, BookOpenCheck } from "lucide-react";

const AboutSections = () => {
  return (
    <section id="about-me" className="bg-base-100 text-base-content font-mono pt-24 px-6">
      <div className="max-w-4xl mx-auto space-y-16">
        {/* Education + Research Section */}
        <div className="grid md:grid-cols-2 gap-10">
          {/* Education */}
          <div className="border border-primary rounded-md p-6">
            <p className="text-sm text-primary">• About Me</p>
            <h3 className="flex items-center gap-2 text-xl font-bold mb-6 text-base-content">
              <GraduationCap className="text-primary w-5 h-5" /> Education
            </h3>
            <ul className="space-y-5 text-sm">
              <li className="pl-3 border-l border-primary">
                <p className="text-base-content font-semibold">
                  <span className="text-primary">National university, Bangladesh</span>
                </p>
                <p className="text-base-content/60">Bachelor’s Degree in Physics</p>
              <p className="text-base-content/60">
  <span >Expected in 2025:</span>
</p>

              </li>
              <li className="pl-3 border-l border-primary">
                <p className="text-base-content font-semibold">
                   <span className="text-primary">Mymensingh College, Mymensingh</span>
                </p>
                <p className="text-base-content/60">
                  HSC in Science
                </p>
                 <p className="text-base-content/60">
                  2013–2015:{" "}
                </p>
              </li>
              <li className="pl-3 border-l border-primary">
                <p className="text-base-content font-semibold">
                  <span className="text-primary">Guzirkuna High School, Durgapur</span>
                </p>
                <p className="text-base-content/60">SSC in Science</p>

                 
                  <p className="text-base-content/60">
                  2005–2011:{" "}
                </p>
                
              </li>
            </ul>
          </div>

          {/* Certifications */}
          <div className="border border-primary rounded-md p-6">
            <p className="text-sm text-primary">• About Me</p>
            <h3 className="flex items-center gap-2 text-xl font-bold mb-6 text-base-content">
              <BookOpenCheck className="text-primary w-5 h-5" /> Certifications & Courses
            </h3>
            <ul className="space-y-5 text-sm">
              <li className="pl-3 border-l border-primary">
                <p className="text-base-content font-semibold">
                  
                  <span className="text-primary">
                    Complete Web Development Course
                  </span>{" "} 
                </p>
                <p className="text-base-content/60">
                  Programming Hero
                </p>
                <p className="text-base-content/60">
                  <p className="text-base-content/60">
                  2025–Present:{" "}
                </p>
                </p>

              </li>
              {/* <li className="pl-3 border-l border-primary">
                <p className="text-base-content font-semibold">
                  2021–2023: {" "}
                  <span className="text-primary">Cloud-Native Application Architectures</span>
                </p>
                <p className="text-base-content/60">
                  Studied best practices for designing cloud-native applications.
                </p>
              </li> */}
              {/* <li className="pl-3 border-l border-primary">
                <p className="text-base-content font-semibold">
                  2019–2020: {" "}
                  <span className="text-primary">AI-Driven User Experience Personalization</span>
                </p>
                <p className="text-base-content/60">
                  Leveraged AI to personalize user experiences based on behavior.
                </p>
              </li> */}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSections;
