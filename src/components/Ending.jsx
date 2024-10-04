import React, { useEffect, useState, useRef } from 'react';

function Ending() {
    const [rotate, setRotate] = useState(0);

    useEffect(() => {
        const handleMouseMove = (e) => {
            const mouseX = e.clientX;
            const mouseY = e.clientY;

            let deltaX = mouseX - window.innerWidth / 2;
            let deltaY = mouseY - window.innerHeight / 2;

            var angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);
            setRotate(angle - 180);
        };

        window.addEventListener("mousemove", handleMouseMove);

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
        };
    }, []);
    return (
        <div className='absolute flex flex-col sm:flex-row gap-4 sm:gap-6 md:gap-8 lg:gap-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
                        {[0, 1].map((index) => (
                            <div 
                                key={index}
                                className='relative flex items-center justify-center w-[40vw] h-[40vw] sm:w-[30vw] sm:h-[30vw] md:w-[25vw] md:h-[25vw] lg:w-[15vw] lg:h-[15vw] rounded-full bg-zinc-100'
                            >
                                <div className='relative w-2/3 h-2/3 rounded-full bg-zinc-900'>
                                    <div 
                                        style={{
                                            transform: `translate(-50%,-50%) rotate(${rotate}deg)`
                                        }} 
                                        className='line flex absolute top-1/2 left-1/2 w-full h-10'
                                    >
                                        <div className='w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 lg:w-9 lg:h-9 rounded-full bg-zinc-100'></div>
                                        <h1 className='uppercase ml-3 font-bold text-2xl text-white'>PLAY</h1>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
    )
}

export default Ending
