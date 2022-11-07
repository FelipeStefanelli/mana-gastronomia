import React, { useState } from 'react';
import { motion } from 'framer-motion';

function Menu(props) {
    const [whatsappLink, setWhatsappLink] = useState('http://web.whatsapp.com/send?1=pt_BR&phone=5511998773386');
    const [whatsappMobileLink, setWhatsappMobileLink] = useState('http://api.whatsapp.com/send?1=pt_BR&phone=5511998773386');
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
                    <span className='social-image-container'>
                        <span className='social-image site'></span>
                    </span>
                </a>
                <a href="https://www.instagram.com/managastronomiasaudavel/?next=%2Fmanagastronomiasaudavel%2F" className='instagram' target="_blank" rel="noopener noreferrer">
                    <p>INSTAGRAM</p>
                    <span className='social-image-container'>
                        <span className='social-image instagram'></span>
                    </span>
                </a>
                <a href="https://www.facebook.com/ManaporAnaBombonatto" target="_blank" rel="noopener noreferrer" className='facebook'>
                    <p>FACEBOOK</p>
                    <span className='social-image-container'>
                        <span className='social-image facebook'></span>
                    </span>
                </a>
                <a href="https://anabombonatto.goomer.app/menu" target="_blank" rel="noopener noreferrer" className='goomer'>
                    <p>GOOMER</p>
                    <span className='social-image-container'>
                        <span className='social-image goomer'></span>
                    </span>
                </a>
                <a href={window.screen.width > 1023 ? whatsappLink : whatsappMobileLink} target="_blank" rel="noopener noreferrer" className='b2b'>
                    <p>VAREJO / B2B</p>
                    <span className='social-image-container'>
                        <span className='social-image b2b'></span>
                    </span>
                </a>
            </div>
        </motion.div>
    );
}

export default Menu;
