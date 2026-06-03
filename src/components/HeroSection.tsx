
import { motion } from 'motion/react';

export const HeroSection = () => {
  return (
    <section className="py-20 px-6 sm:px-12 bg-gray-50">
      <div className="max-w-5xl mx-auto text-center">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="font-display text-4xl sm:text-6xl font-bold text-gray-900 tracking-tighter"
        >
          Together, We're Stronger: The Future of Independent Pharmacy in the GTA
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-6 text-lg sm:text-xl text-gray-600 font-sans max-w-3xl mx-auto"
        >
          Join a collaborative network that reduces staffing costs by 40%, increases revenue by $10K/month, and expands patient access—while preserving your independence.
        </motion.p>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-10 flex flex-col sm:flex-row gap-4 justify-center"
        >
          <button className="bg-teal-600 text-white px-8 py-3 rounded-full hover:bg-teal-700 transition font-sans font-medium">For Pharmacy Owners: Learn More</button>
          <button className="bg-white text-teal-800 border-2 border-teal-600 px-8 py-3 rounded-full hover:bg-teal-50 transition font-sans font-medium">For Pharmacists: Explore Opportunities</button>
          <button className="bg-white text-teal-800 border-2 border-teal-600 px-8 py-3 rounded-full hover:bg-teal-50 transition font-sans font-medium">For Patients: Find a Network Pharmacy</button>
        </motion.div>
      </div>
    </section>
  );
};
