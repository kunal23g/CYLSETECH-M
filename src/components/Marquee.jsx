import { motion } from 'framer-motion';
import React, { useEffect, useState } from 'react';

function Marquee() {
    const [isLargeScreen, setIsLargeScreen] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsLargeScreen(window.innerWidth >= 768); // 768px for medium screens
        };

        handleResize(); // Check size on initial render
        window.addEventListener('resize', handleResize); // Update on resize

        return () => window.removeEventListener('resize', handleResize); // Cleanup
    }, []);

    return (
        <div
            {...(isLargeScreen ? { 'data-scroll': true, 'data-scroll-section': true, 'data-scroll-speed': '0.02' } : {})}
            className='w-full overflow-hidden py-5 lg:py-10 rounded-tl-3xl rounded-tr-3xl bg-[#004D43] text-white'
        >
            <div className='text md:border-t md:border-b border-zinc-300 font-foundersGrotesk flex whitespace-nowrap overflow-hidden pr-20 mb-4'>
                <motion.h1 initial={{ x: "0" }} animate={{ x: "-100%" }} transition={{ ease: "linear", repeat: Infinity, duration: 5 }} className='uppercase -mt-[2vw] text-[25vw] leading-none font-semibold pr-9'>
                    we are CYLSE
                </motion.h1>
                <motion.h1 initial={{ x: "0" }} animate={{ x: "-100%" }} transition={{ ease: "linear", repeat: Infinity, duration: 5 }} className='uppercase -mt-[2vw] text-[25vw] leading-none font-semibold pr-9'>
                    we are CYLSE
                </motion.h1>
            </div>
        </div>
    );
}

export default Marquee;
