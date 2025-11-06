import React from 'react';
import { motion } from 'framer-motion';

const Experience = () => {
  const experiences = [
  {
    role: "Senior Software Engineer",
    company: "Novac Technology Solutions",
    period: "July 2022 – Present",
    description: "Leading front-end development, performance engineering, and AI-enhanced user experiences for Angular & React applications in FinTech and Insurance domains."
  },
  {
    role: "Software Engineer",
    company: "Previous Company",
    period: "2020 – 2022",
    description: "Developed scalable web applications, optimized UI performance, and collaborated with cross-functional teams to deliver enterprise-grade solutions."
  }
];
  return (
      <section id="experience" className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">Experience</h2>
        <div className="space-y-6">
          {experiences.map(exp => (
            <motion.div key={exp.role} initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <h3 className="font-bold text-xl">{exp.role}</h3>
              <p className="text-gray-600">{exp.company} | {exp.period}</p>
              <p className="text-gray-500">{exp.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience