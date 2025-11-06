import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  const [formData, setFormData] = useState({ name:'', email:'', message:'' });
  const [status, setStatus] = useState(null);

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  }

  const handleSubmit = e => {
    e.preventDefault();
    setStatus('sending');
    setTimeout(() => setStatus('success'), 1000);
  }

  return (
      <section id="contact" className="py-20 bg-white">
      <div className="max-w-md mx-auto text-center">
        <motion.h2 initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1 }} className="text-3xl font-bold mb-6">
          Contact Me
        </motion.h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} required className="w-full p-3 border border-gray-300 rounded"/>
          <input type="email" name="email" placeholder="Your Email" value={formData.email} onChange={handleChange} required className="w-full p-3 border border-gray-300 rounded"/>
          <textarea name="message" placeholder="Your Message" value={formData.message} onChange={handleChange} required rows="5" className="w-full p-3 border border-gray-300 rounded"/>
          <button type="submit" className="w-full bg-blue-600 text-white py-3 rounded hover:bg-blue-700 transition">
            {status==='sending' ? 'Sending...' : 'Send Message'}
          </button>
        </form>
        {status==='success' && <p className="mt-4 text-green-600 text-center">Message sent successfully!</p>}
      </div>
    </section>
  )
}

export default Contact