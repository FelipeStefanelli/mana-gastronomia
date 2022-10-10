import React from 'react';
import { motion } from 'framer-motion';

function AboutUs() {
  return (
    <motion.div
      className="nutri-info-container mb-5"
      initial={{ opacity: 0, filter: 'blur(8px)' }}
      animate={{ opacity: 1, filter: 'blur(0px)', transition: { duration: 0.5 } }}
      exit={{ opacity: 0, filter: 'blur(8px)', transition: { duration: 0.7 } }}
    >
      AboutUs
    </motion.div>
  );
}

export default AboutUs;
