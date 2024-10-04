import React, { useEffect, useState } from 'react';
import about from '../assets/About.jpg';

function About() {
    const [isLargeScreen, setIsLargeScreen] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsLargeScreen(window.innerWidth >= 768);
        };

        handleResize();
        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <div id='about-us'
            {...(isLargeScreen ? { 'data-scroll': true, 'data-scroll-section': true, 'data-scroll-speed': '-0.10' } : {})}
            className='w-full p-4 sm:p-8 md:p-12 lg:p-20 bg-[#CDEA68] '
        >
            <h1 className='text-black mt-5 font-neueMontreal text-2xl sm:text-3xl md:text-4xl lg:text-[3vw] leading-tight lg:leading-[4.5vw] tracking-tight'>
                At our web development agency, we believe in the power of zero-code technology to revolutionize the way businesses approach their digital needs. Our team of experts leverages the latest tools and platforms to create custom
            </h1>
            <div className='w-full grid grid-cols-1 lg:grid-cols-2 gap-5 border-t-[1px] pt-10 border-[#a1b562] mt-10 lg:mt-20'>
                <div className='flex flex-col justify-between'>
                    <h1 className=' sm:text-3xl font-neueMontreal font-semibold  lg:text-7xl text-black'>Elevate your Business with our Code:</h1>
                    <h1 className=' mt-3 sm:text-2xl  lg:text-2xl text-black'>At CYLSETECH, we are dedicated to transforming the way businesses grow, innovate, and succeed. As a service-driven startup, we offer tailored solutions to meet the unique needs of companies across various industries. With a focus on delivering value, efficiency, and innovation, we partner with businesses to help them thrive in a rapidly evolving digital landscape.</h1>
                    <button className='group relative px-6 py-4 lg:px-10 lg:py-6 mt-6 lg:mt-8 bg-zinc-900 rounded-full uppercase text-white flex items-center justify-between overflow-hidden w-fit'>
                        <span className='relative z-10 transition-colors duration-300 group-hover:text-black'>Read More</span>
                        <div className='relative z-10 w-2 h-2 bg-zinc-100 rounded-full ml-4 transition-colors duration-300 group-hover:bg-black'></div>
                        <div className='absolute inset-0 bg-white transform translate-y-full transition-transform duration-300 group-hover:translate-y-0'></div>
                    </button>
                </div>
                <div className='relative aspect-square rounded-3xl overflow-hidden group'>
                    <img className='w-full h-full object-cover' src={about} alt="About" />
                    <div className='absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
                        <span className='text-white uppercase text-4xl font-bold'>cylsetech</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;