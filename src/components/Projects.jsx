import React from 'react'
import { motion } from 'framer-motion';

const Projects = () => {

const projects = [
  { name: "Shriram Finance Ltd", description: "Retail & Payment Platforms", tech: "Angular, RxJS, SCSS", link: "#" },
  { name: "Shriram Life Insurance Ltd", description: "Life Insurance Portal & Calculators", tech: "Angular, Chart.js", link: "#" },
  { name: "Travel Insurance Consultants", description: "Next.js + React Travel Platform", tech: "React, Next.js, Node.js", link: "#" },
  { name: "Shriram Asset Management", description: "Mutual Funds & Investment Platform", tech: "React, Tailwind CSS", link: "#" },
];
  return (
      <section id="projects" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map(p => (
            <motion.a
              key={p.name}
              href={p.link}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="p-6 border rounded-lg shadow hover:shadow-lg transition"
            >
              <h3 className="font-bold text-xl mb-1">{p.name}</h3>
              <p className="text-gray-600 mb-2">{p.description}</p>
              <p className="text-sm text-gray-500">{p.tech}</p>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects