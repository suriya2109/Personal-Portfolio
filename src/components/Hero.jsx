import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
      <section id="hero" className="h-screen flex flex-col justify-center items-center bg-gray-50 text-center">
      <motion.h1 
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-5xl font-bold mb-4"
      >
        Hi, I'm Suriya Periyasamy
      </motion.h1>
      <motion.p 
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="text-xl mb-6 max-w-xl"
      >
        Senior Software Engineer | Front-End Developer | Angular & React Expert
      </motion.p>
      <div className="flex gap-4">
        <a href="#contact" className="bg-blue-600 text-white py-3 px-6 rounded hover:bg-blue-700 transition">Contact Me</a>
        <a href="/Suriya_CV.pdf" className="bg-gray-800 text-white py-3 px-6 rounded hover:bg-gray-900 transition" download>Download CV</a>
      </div>
    </section>

  )
}

export default Hero