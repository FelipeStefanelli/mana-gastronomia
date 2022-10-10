import React from 'react';
import { motion } from 'framer-motion';

function Menu(props) {
    return (
        <motion.div
            initial={{ opacity: 0, filter: 'blur(8px)' }}
            animate={{ opacity: 1, filter: 'blur(0px)', transition: { duration: 0.5 } }}
            exit={{ opacity: 0, filter: 'blur(8px)', transition: { duration: 0.7 } }}
            className='menu-section'
        >
            <div className='menu-image'>
                <p>@managastronomiasaudavel</p>
            </div>
            <div className='menu-social'>
                <a className='site' onClick={() => props.navigate('/home')}>
                    <p>SITE</p>
                    <span className='social-image site'></span>
                </a>
                <a href="https://www.instagram.com/managastronomiasaudavel/?next=%2Fmanagastronomiasaudavel%2F" className='instagram' target="_blank" rel="noopener noreferrer">
                    <p>INSTAGRAM</p>
                    <span className='social-image instagram'></span>
                </a>
                <a href="https://www.facebook.com/ManaporAnaBombonatto" className='facebook'>
                    <p>FACEBOOK</p>
                    <span className='social-image facebook'></span>
                </a>
                <a href="https://anabombonatto.goomer.app/menu" className='goomer'>
                    <p>GOOMER</p>
                    <span className='social-image goomer'></span>
                </a>
                <a href="https://www.facebook.com/ManaporAnaBombonatto" className='b2b'>
                    <p>VAREJO / B2B</p>
                    <span className='social-image b2b'></span>
                </a>
            </div>
        </motion.div>
    );
}

export default Menu;
