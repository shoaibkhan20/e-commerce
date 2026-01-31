import React from 'react';
import { motion } from 'framer-motion';

const Banner: React.FC = () => {
  return (
    <div className="relative bg-hero-banner bg-cover bg-center text-white overflow-hidden">
      <div className="absolute inset-0 bg-black bg-opacity-60" />
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
        <div className="text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-6xl font-extrabold tracking-tighter mb-4"
          >
            Find Your Next Favorite
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-2xl mx-auto text-lg md:text-xl text-gray-200 mb-8"
          >
            Curated collections of fashion, tech, and lifestyle products. Quality and style, delivered.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <a href="#products" className="bg-accent hover:bg-accent-hover text-white font-bold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105">
              Shop Now
            </a>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
