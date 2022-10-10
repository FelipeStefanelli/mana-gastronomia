import React from 'react';
import { motion } from 'framer-motion';

function Gallery() {
  return (
    <motion.div
      initial={{ opacity: 0, filter: 'blur(8px)' }}
      animate={{ opacity: 1, filter: 'blur(0px)', transition: { duration: 0.5 } }}
      exit={{ opacity: 0, filter: 'blur(8px)', transition: { duration: 0.7 } }}
    >
      Gallery
    </motion.div>
  );
}

export default Gallery;
