import { motion } from 'framer-motion';
import React, { useState, useEffect } from 'react';
import { FaArrowUpLong } from "react-icons/fa6";
import pacam from "../assets/Project1.png";

function Landing() {
    const [isLargeScreen, setIsLargeScreen] = useState(false);

    // Check for screen size and activate data-scroll for medium and larger screens
    useEffect(() => {
        const handleResize = () => {
            setIsLargeScreen(window.innerWidth >= 768); // 768px is the Tailwind breakpoint for medium screens (md)
        };

        handleResize(); // Run initially to check the current screen size
        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize); // Cleanup event listener
    }, []);

    return (
        <div
            {...(isLargeScreen ? { 'data-scroll': true, 'data-scroll-section': true, 'data-scroll-speed': '-0.9' } : {})}
            className='w-full lg:h-screen bg-zinc-900 mb-5 pt-2'
        >
            <div className='textstructre mt-28 lg:mt-32 px-4 lg:px-16'>
                {["we create", "eye-opening", "projects"].map((item, index) => {
                    return (
                      <div key={index} className='masker overflow-hidden font-foundersGrotesk'>
                      <div className='w-fit flex items-center '> {/* Ensure items are centered */}
                          {index === 1 && (
                              <motion.div
                                  initial={{ x: -100, width: 0 }} // Removed height property
                                  animate={{ x: 0, width: "8vw" }} // Removed height property
                                  transition={{ type: "spring", stiffness: 100, damping: 30, duration: 5 }}
                                  className='mr-3 lg:mr-6 bg-zinc-100 text-black flex items-center justify-center' // Removed height property
                              >
                                  <h1 className='text-[2vw]  md:py-[1.5vw] lg:py-5 py-[5vw] '>CYLSETECH</h1>
                              </motion.div>
                          )}
                          <h1 className='mb-[1vw] h-full uppercase text-[20vw] md:text-[9vw] font-semibold leading-[0.8]'>
                              {item}
                          </h1>
                      </div>
                  </div>
                  
                    );
                })}
            </div>
            <div className='border-t-[1px] border border-zinc-800 mt-20 mb-20 flex lg:flex-row flex-col justify-between lg:items-center py-5  lg:px-16'>
                {["For public and private companies", "From the first pitch to IPO"].map((item, index) => (
                    <p key={index} className='lg:text-md font-light tracking-tight lg:px-0 px-5 py-5'>{item}</p>
                ))}
                 <div className='Start flex items-center gap-3 group'>
    <div className='ml-4 px-5 py-2 border-[1px] border-zinc-400 font-light uppercase text-xs lg:text-md rounded-full transition-colors duration-300 ease-in-out group-hover:bg-white group-hover:text-black'>
      Start the project
    </div>
    <div className='relative w-8 h-8 lg:w-10 lg:h-10 border-[1px] border-zinc-400 flex items-center justify-center rounded-full overflow-hidden'>
      <span className='rotate-[45deg] transition-colors duration-300 ease-in-out text-white group-hover:text-black relative z-10'>
        <FaArrowUpLong />
      </span>
      <span className='absolute inset-0 bg-white transform scale-0 transition-transform duration-300 ease-in-out group-hover:scale-100 rounded-full'></span>
    </div>
  </div>
            </div>
        </div>
    );
}

export default Landing;
