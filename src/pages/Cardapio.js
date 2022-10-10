import React from 'react';
import { motion } from 'framer-motion';

function Cardapio() {
  return (
    <motion.div
      className='cardapio'
      initial={{ opacity: 0, filter: 'blur(8px)' }}
      animate={{ opacity: 1, filter: 'blur(0px)', transition: { duration: 0.5 } }}
      exit={{ opacity: 0, filter: 'blur(8px)', transition: { duration: 0.7 } }}
    >
      <div className='adjust'>
        <p className='gray-warn'>Ainda não estamos aceitando pedidos online. Entre em contato para completar o pedido.</p>
      </div>
    </motion.div>
  );
}

export default Cardapio;
