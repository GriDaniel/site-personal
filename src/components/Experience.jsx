import React, { Component } from 'react'
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';


function Experience() {
    const controls = useAnimation();
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 1,
    })

    const animationVariants = {
        hidden: { opacity: 1, x: '-100%' },
        visible: { opacity: 1, x: '0%', transition: { duration: 0.5 } },
    };



    const animationVariants2 = {
        hidden: { opacity: 1, x: '100%' },
        visible: {
            opacity: 1, x: '0%', transition: {
                duration: 1,
                delay: 0.5,
            }
        },
    };


    return (
        <div ref={ref} id="experience" className='relative overflow-hidden h-screen max-w-screen bg-gradient-to-b from-black to-gray-950 flex-col flex'>
            <motion.div
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                variants={animationVariants}
                className="w-full h-screen dark:bg-[#060B0B] bg-white absolute z-[11]"
            >
            </motion.div>

            <motion.div
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                className='h-[200px] w-full flex lg:justify-end-reverse justify-center z-[11]'
                variants={animationVariants2}
            >
                <div className="flex justify-center items-center h-full w-[90%] lg:border-b-8 border-gray-500 lg:mt-[45px]">
                    <div className="h-[90%] w-[80%] flex items-center lg:justify-normal justify-center flex-row lg:mt-[45px] mt-[75px] lg:space-x-14 space-x-5">
                        <h1 className='font-roboto text-7xl'>Experience</h1>
                    </div>
                </div>
            </motion.div>
            <img src="src\assets\img3.jpg" alt="" className="dark:visible invisible absolute h-full w-screen animate-left-first object-cover  bg-black opacity-[0.20]" />

            <img src="src\assets\imgf3.jpg" alt="" className=" 
  dark:visible invisible h-full w-screen  absolute object-cover animate-left-second bg-black opacity-[0.20]" />

            <img src="src\assets\light.jpg" alt="" className="dark:invisible visible absolute h-full w-screen animate-left-first object-cover  bg-white opacity-[0.80]" />

            <img src="src\assets\lightFlipped.jpg" alt="" className=" 
dark:invisible visible h-full w-screen  absolute object-cover animate-left-second bg-white opacity-[0.80]" />

        </div >

    )
}

export default Experience;

