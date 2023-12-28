
import { motion } from "framer-motion"
import { TypeAnimation } from 'react-type-animation';
import React, { useEffect, useRef } from 'react';
import anime from 'animejs';






function Hero({ darkMode, toggleDarkMode }) {
    const containerVariants = {
        hidden: { y: '-100vh' },
        visible: { y: 0 },
    };


    return (
        <>


            <div id="title" className='hero main  wrapper h-screen min-w-screen select-none dark:bg-gradient-to-b from-black to-gray-950 bg-white  flex justify-center'>


                <div className="relative overflow-hidden h-full max:w-[1920px] w-full flex justify-center items-center">
                    <motion.div
                        initial={{ opacity: 0, y: -1000 }}
                        animate={{ opacity: 1, y: 0, transition: { duration: 1.2, delay: 0.25 } }}
                        transition={{ type: 'spring', stiffness: 50 }}
                        className="heading absolute container-special dark:text-[#DADDE2] text-[#303030] dark:z-auto z-[2] font-fjalla h-screen uppercase mb-[75px] lg:mt-[150px] mt-[180px] text-center flex flex-col justify-center items-center"
                    >
                        Daniel Oliveira
                        <motion.div
                            initial={{ opacity: 0, y: 1000 }} // Initial hidden state for the typed animation
                            animate={{ opacity: 1, y: 0 }} // Animation to make it visible
                            transition={{ duration: 1, delay: 0.5 }} // Animation transition
                            className='text font-sans h-[5%] capitalize font-light dark:text-[#DADDE2] text-[#303030] container-special-two'
                        >

                            <TypeAnimation
                                sequence={[
                                    '',
                                    1550,
                                    'level II computer engineering student',
                                    1250,
                                    'front-end developer',
                                    2500,
                                ]}
                                wrapper="span"
                                speed={90}
                                repeat={Infinity}
                            />

                        </motion.div>
                        <motion.div
                            className="mouse_scroll mx-auto block w-[24px] lg:mt-[100px] mt-[50px]"
                            initial={{ opacity: 0, display: 'block' }}
                            animate={{ opacity: 1, display: 'block' }}
                            transition={{ duration: 2, delay: 1.6 }}
                        >
                            <div className="mouse mt dark:bg-transparent bg-black border-2 dark:border-white border-[#303030]">
                                <div className="wheel"></div>
                            </div>
                            <div>
                                <span className="m_scroll_arrows unu border-r-2 border-b-2 dark:border-white border-[#303030]"></span>
                                <span className="m_scroll_arrows doi border-r-2 border-b-2 dark:border-white border-[#303030]"></span>
                                <span className="m_scroll_arrows trei border-r-2 border-b-2 dark:border-white border-[#303030]"></span>
                            </div>
                        </motion.div>
                    </motion.div>

                    <img src="img3.jpg" alt="" className="dark:visible invisible absolute h-full w-screen animate-left-first object-cover  bg-black opacity-[0.20]" />

                    <img src="imgf3.jpg" alt="" className=" 
  dark:visible invisible h-full w-screen  absolute object-cover animate-left-second bg-black opacity-[0.20]" />

                    <img src="light.jpg" alt="" className="dark:invisible visible absolute h-full w-screen animate-left-first object-cover  bg-white opacity-[0.80]" />

                    <img src="lightFlipped.jpg" alt="" className=" 
dark:invisible visible h-full w-screen  absolute object-cover animate-left-second bg-white opacity-[0.80]" />
                    




                </div>

            </div>





        </>
    )
}

export default Hero
