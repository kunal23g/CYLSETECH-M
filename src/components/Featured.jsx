import React, { useState } from 'react'
import pacam from '../assets/Project1.png'
import { motion } from 'framer-motion'
import { FaArrowUpLong } from "react-icons/fa6";

function Featured() {
    const [isHovering1, setHovering1] = useState(false)
    const [isHovering2, setHovering2] = useState(false)

    return (
        <div id='our-work' className='flex flex-col w-full py-10 lg:py-20 '>
            <div className='flex-none px-8 lg:px-20 border-b-[1px] border-zinc-700 pb-10'>
                <h1 className='text-4xl lg:text-7xl font-neueMontreal tracking-tight'>
                    Featured Projects
                </h1>
            </div>
            <div className='flex-grow px-8 lg:px-20'>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-10 mt-10'>
                    <div>
                    <div className='mr-3 inline-flex items-center mb-5 px-5 py-2 border-[1px] border-zinc-400 font-light uppercase text-xs lg:text-md rounded-full hover:bg-white hover:text-black transition-colors duration-300 ease-in-out'>
                            <span>PACAM</span>
                            <div className='w-2 h-2 bg-zinc-400 rounded-full ml-2'></div>
                        </div>
                        <a href="https://pacam.io" className='inline-block'>
                            <div className='Start mb-3 flex items-center gap-3 group'>
                                <div className='px-5 py-2 border-[1px] border-zinc-400 font-light uppercase text-xs lg:text-md rounded-full transition-colors duration-300 ease-in-out group-hover:bg-white group-hover:text-black'>
                                    Start the project
                                </div>
                                <div className='w-8 h-8 lg:w-9 lg:h-9 border-[1px] border-zinc-400 flex items-center justify-center rounded-full overflow-hidden relative'>
                                    <span className='rotate-[45deg] transition-colors duration-300 ease-in-out text-white group-hover:text-black relative z-10'>
                                        <FaArrowUpLong />
                                    </span>
                                    <span className='absolute inset-0 bg-white transform scale-0 transition-transform duration-300 ease-in-out group-hover:scale-100'></span>
                                </div>
                            </div>
                        </a>

                        
                        <motion.div 
                            className='relative flex items-center justify-center h-[50vh] lg:h-[75vh] hover:scale-105 duration-300'
                            onMouseEnter={() => setHovering1(true)} 
                            onMouseLeave={() => setHovering1(false)}
                            animate={{ zIndex: isHovering1 ? 20 : 10 }}
                        >
                            <motion.h1 
                                className='absolute flex overflow-hidden text-[#CDEA68] font-foundersGrotesk text-6xl lg:text-9xl pointer-events-none'
                            >
                                {"PACAM".split('').map((item, index) => (
                                    <motion.span 
                                        key={index}
                                        className='inline-block'
                                        initial={{ y: "100%" }} 
                                        animate={ isHovering1 ? { y: "0%" } : { y: "100%" } }
                                        transition={{ ease: [0.22, 1, 0.36, 1], delay: index * 0.01 }}
                                    >
                                        {item}
                                    </motion.span>
                                ))}
                            </motion.h1>
                            
                            <a href="https://pacam.io" className='flex items-center justify-center w-full h-full'>
                                <div className='flex items-center justify-center w-full h-full rounded-xl overflow-hidden bg-green-500'>
                                    <img className='w-full h-full object-cover' src={pacam} alt="PACAM" />
                                </div>
                            </a>
                        </motion.div>
                    </div>
                    <div>
                    <div className='mr-3 inline-flex items-center mb-5 px-5 py-2 border-[1px] border-zinc-400 font-light uppercase text-xs lg:text-md rounded-full hover:bg-white hover:text-black transition-colors duration-300 ease-in-out'>
                            <span>aajao</span>
                            <div className='w-2 h-2 bg-zinc-400 rounded-full ml-2'></div>
                        </div>
                    <a href="https://pacam.io" className='inline-block'>
                            <div className='Start mb-3 flex items-center gap-3 group'>
                                <div className='px-5 py-2 border-[1px] border-zinc-400 font-light uppercase text-xs lg:text-md rounded-full transition-colors duration-300 ease-in-out group-hover:bg-white group-hover:text-black'>
                                    Start the project
                                </div>
                                <div className='w-8 h-8 lg:w-10 lg:h-10 border-[1px] border-zinc-400 flex items-center justify-center rounded-full overflow-hidden relative'>
                                    <span className='rotate-[45deg] transition-colors duration-300 ease-in-out text-white group-hover:text-black relative z-10'>
                                        <FaArrowUpLong />
                                    </span>
                                    <span className='absolute inset-0 bg-white transform scale-0 transition-transform duration-300 ease-in-out group-hover:scale-100'></span>
                                </div>
                            </div>
                        </a>
                        <motion.div 
                            className='relative flex items-center justify-center h-[50vh] lg:h-[75vh] hover:scale-105 duration-300'
                            onMouseEnter={() => setHovering2(true)} 
                            onMouseLeave={() => setHovering2(false)}
                            animate={{ zIndex: isHovering2 ? 20 : 10 }}
                        >
                            <motion.h1 
                                className='absolute flex overflow-hidden text-[#CDEA68] font-foundersGrotesk text-6xl lg:text-9xl pointer-events-none'
                            >
                                {"CYSLETECH".split('').map((item, index) => (
                                    <motion.span 
                                        key={index}
                                        className='inline-block'
                                        initial={{ y: "100%" }} 
                                        animate={ isHovering2 ? { y: "0%" } : { y: "100%" } }
                                        transition={{ ease: [0.22, 1, 0.36, 1], delay: index * 0.01 }}
                                    >
                                        {item}
                                    </motion.span>
                                ))}
                            </motion.h1>
                            <div className='flex items-center justify-center w-full h-full rounded-xl overflow-hidden bg-green-500'>
                                <img className='w-full h-full object-cover' src={pacam} alt="PACAM" />
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Featured