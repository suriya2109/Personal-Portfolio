import React from 'react'
import { motion } from 'framer-motion';

const About= () => {
  return (
     <section id="about" className="py-20 bg-white">
      <motion.div 
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto text-center"
      >
        <h2 className="text-3xl font-bold mb-4">About Me</h2>
        <p>
          I am a Senior Software Engineer with 3+ years of experience in Angular, React, TypeScript, JavaScript (ES6+), HTML5, CSS3, and Tailwind CSS. 
          I specialize in building scalable, high-performance web applications, integrating AI-driven UI patterns, and optimizing digital experiences for FinTech and Insurance domains.
        </p>
      </motion.div>
    </section>
  )
}

export default About