import React from 'react'
import { motion } from 'framer-motion';

const Skills = () => {
 const skills = ["Angular", "React", "TypeScript", "JavaScript", "HTML5", "CSS3", "Tailwind CSS", "RxJS", "Node.js"];
  return (
     <section id="skills" className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">Skills</h2>
        <div className="flex flex-wrap justify-center gap-4">
          {skills.map(skill => (
            <motion.span 
              key={skill} 
              whileHover={{ scale: 1.1 }}
              className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full cursor-pointer"
            >
              {skill}
            </motion.span>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills