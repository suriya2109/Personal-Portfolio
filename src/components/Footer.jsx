import React from 'react'
import { FaGithub, FaLinkedin, FaEnvelope, FaCode } from 'react-icons/fa';
const Footer = () => {
  return (
     <footer className="bg-gray-900 text-gray-300 py-8 mt-12">
      <div className="max-w-6xl mx-auto text-center space-y-4">
        <div className="flex justify-center gap-6 text-xl">
          <a href="https://github.com/suriya2109" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/suriya-p-a011161a1/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">
            <FaLinkedin />
          </a>
          <a href="mailto:suriyame2107@gmail.com" className="hover:text-white transition">
            <FaEnvelope />
          </a>
          <a href="https://leetcode.com/Suriya21072109/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">
            <FaCode />
          </a>
        </div>
        <p>© 2025 Suriya Periyasamy. All rights reserved.</p>
        <p>Built with React, Tailwind CSS & Framer Motion</p>
      </div>
    </footer>
  )
}

export default Footer