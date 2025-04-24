import React, { useEffect } from 'react';
const teamMembers = [
  {
    name: "Kartikeya Singh",
    role: "Software Developer",
    img: "/images/1.png",
  },
  {
    name: "Mitul Bhavesh Seth",
    role: "ML Engineer",
    img: "/images/2.png",
  },
  {
    name: "Malay Muskan",
    role: "Front-End Engineer",
    img: "/images/3.png",
  },
  {
    name: "Sohan VR",
    role: "ML Engineer",
    img: "/images/4.png",
  },
];

export default function About() {


  return (
    <div className="p-6 max-w-6xl mx-auto">
      <section data-aos="fade-up">
        <h1 className="text-4xl font-bold mb-4">About Bone.ai</h1>
        <p className="text-lg text-gray-600 mb-8">
          Bone.ai is an AI-powered diagnostic platform focused on analyzing X-ray images for bone fractures...
        </p>
      </section>

      <section data-aos="fade-up" className="mt-16">
        <h2 className="text-3xl font-semibold mb-8 text-center">Meet the Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-4 shadow-md text-center team-card"
              data-aos="zoom-in"
            >
              <img
                src={member.img}
                alt={member.name}
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-bold">{member.name}</h3>
              <p className="text-sm text-gray-500">{member.role}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
