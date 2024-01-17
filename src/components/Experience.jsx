import React, { useRef, useEffect, Component } from 'react'
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';




function Experience() {
    const controls = useAnimation();
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.2,
    })

    const animationVariants = {
        hidden: { opacity: 1, x: '-100vw' },
        visible: { opacity: 1, x: '0%', transition: { duration: 0.5 } },
    };



    const animationVariants2 = {
        hidden: { opacity: 0, y: '-100vh' },
        visible: {
            opacity: 1, y: '0%', transition: {
                duration: 0.6,
                delay: 0,

            }
        },
    };


    return (
        <section>
            <div id="experience" ref={ref} className='pb-[100px] min-w-screen overflow-x-hidden overflow-hidden flex justify-center items-center dark:bg-black bg-[#F4F4F4]'>
                <div className='max:w-[1920px] w-screen min-h-auto dark:bg-black bg-[#F4F4F4] flex items-center justify-center md:flex-row flex-col'>
                    <motion.div

                        initial="hidden"
                        animate={inView ? 'visible' : 'hidden'}
                        variants={animationVariants}
                        className='min-h-auto md:w-[50%] w-[80%] flex-col flex md:justify-start md:items-start justify-end'
                    >
                        <h1 className='dark:text-[#DADDE2] h1-special text-black md:ml-[20px] md:mt-0 mt-[0px] lg:ml-[100px] sm:text-8xl text-7xl font-satoshi font-bold'>Experience</h1>
                        <h2 className='dark:text-[#DADDE2] min-h-[70px] text-black md:ml-[20px] mt-[40px] lg:ml-[100px] text-5xl italic font-extralight'>Front-end developer at Cybercash</h2>
                        <span className="bg-blue-100  text-blue-800 md:ml-[20px] font-satoshi text-2xl mt-[20px] lg:ml-[100px] font-medium me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-blue-400 border border-blue-400">June 2023 – August 2023
                        </span>


                        <p className='md:ml-[20px] min-h-auto mt-[40px] lg:ml-[100px] dark:text-[#DADDE2] text-black font-satoshi text-3xl '>
                            Using front-end development tools, I worked on designing both a website and customer-survey for a mattress company whose goal was to combat and educate the public on ocean pollution through the advertisement of their premium mattresses that use REPREVE® Our Ocean™ fiber.
                        </p>
                        <div className='md:ml-[20px] lg:ml-[100px] gap-2 md:w-[300px] w-full mt-[40px] rounded-lg flex items-center md:justify-between justify-center'>
                            <svg className='w-[100px]' viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><path d="m5.902 27.201-2.246-25.201h24.688l-2.249 25.197-10.11 2.803z" fill="#1572b6" /><path d="m16 27.858 8.17-2.265 1.922-21.532h-10.092z" fill="#33a9dc" /><path d="m16 13.191h4.09l.282-3.165h-4.372v-3.091h.011 7.739l-.074.829-.759 8.518h-6.917z" fill="#fff" /><path d="m16.019 21.218-.014.004-3.442-.93-.22-2.465h-1.673-1.43l.433 4.853 6.331 1.758.015-.004z" fill="#ebebeb" /><path d="m19.827 16.151-.372 4.139-3.447.93v3.216l6.336-1.756.047-.522.537-6.007z" fill="#fff" /><g fill="#ebebeb"><path d="m16.011 6.935v1.92 1.163.008h-7.456-.01l-.062-.695-.141-1.567-.074-.829z" /><path d="m16 13.191v1.92 1.163.008h-3.389-.01l-.062-.695-.14-1.567-.074-.829z" /></g></svg>
                            <svg className='w-[100px]' viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><path d="m5.902 27.201-2.247-25.201h24.69l-2.25 25.197-10.11 2.803z" fill="#e44f26" /><path d="m16 27.858 8.17-2.265 1.922-21.532h-10.092z" fill="#f1662a" /><path d="m16 13.407h-4.09l-.282-3.165h4.372v-3.091h-.011-7.739l.074.83.759 8.517h6.917z" fill="#ebebeb" /><path d="m16 21.434-.014.004-3.442-.929-.22-2.465h-1.673-1.43l.433 4.852 6.332 1.758.014-.004z" fill="#ebebeb" /><g fill="#fff"><path d="m15.989 13.407v3.091h3.806l-.358 4.009-3.448.93v3.216l6.337-1.757.046-.522.726-8.137.076-.83h-.833z" /><path d="m15.989 7.151v1.92 1.164.007h7.456.01l.062-.694.141-1.567.074-.83z" /></g></svg>
                            <svg className='w-[100px]' viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><path d="m2 2h28v28h-28z" fill="#f5de19" /><path d="m20.809 23.875a2.866 2.866 0 0 0 2.6 1.6c1.09 0 1.787-.545 1.787-1.3 0-.9-.716-1.222-1.916-1.747l-.658-.282c-1.9-.809-3.16-1.822-3.16-3.964 0-1.973 1.5-3.476 3.853-3.476a3.889 3.889 0 0 1 3.742 2.107l-2.057 1.315a1.789 1.789 0 0 0 -1.689-1.128 1.145 1.145 0 0 0 -1.259 1.128c0 .789.489 1.109 1.618 1.6l.658.282c2.236.959 3.5 1.936 3.5 4.133 0 2.369-1.861 3.667-4.36 3.667a5.055 5.055 0 0 1 -4.795-2.691zm-9.295.228c.413.733.789 1.353 1.693 1.353.864 0 1.41-.338 1.41-1.653v-8.947h2.631v8.982c0 2.724-1.6 3.964-3.929 3.964a4.085 4.085 0 0 1 -3.947-2.4z" /></svg>
                        </div>
                    </motion.div>








                    <motion.div

                        initial="hidden"
                        animate={inView ? 'visible' : 'hidden'}
                        variants={animationVariants2}
                        className='md:h-full w-[50%] min-h-[700px] flex flex-col items-center justify-center'

                    >
                        <div className='mt-[100px] w-[650px] h-[400px]'>
                            <img className='500:scale-[120%] 380:scale-[90%] scale-[70%] w-full h-full' src="https://github.com/GriDaniel/site-personal/blob/main/public/images/exp-mockup.png?raw=true" alt="" />
                        </div>
                        <div className='w-[269px] pb-0 min-h-[100px] gap-5 flex flex-row items-center justify-center mt-[100px] '>
                            <a href='https://gridaniel.github.io/Ortobom-Quiz/' target='blank'>
                                <button className='dark:hover:shadow-darkMode-button hover:shadow-lightMode-button dark:bg-[#060B0B] bg-gray-300 dark:hover:bg-[#FAF8FF] button flex row items-center gap-3 font-satoshi text-[30px] dark:hover:text-black dark:text-[#DADDE2] text-black'>
                                    View

                                    <img className='w-[30px] h-[30px]' src="https://github.com/GriDaniel/site-personal/blob/main/public/images/new-tab.png?raw=true" alt="" />

                                </button>
                            </a>

                            <button className='dark:bg-[#060B0B] dark:hover:bg-white hover:shadow-lightMode-button bg-gray-300 dark:hover:shadow-darkMode-button button-two'>
                                <a href='https://github.com/GriDaniel/Ortobom-Landing-Website.git' target='blank' className='dark:block hidden'>
                                    <img className='w-[74px] h-[74px]' src="https://github.com/GriDaniel/site-personal/blob/main/public/images/git-light.png?raw=true" alt="" />
                                </a>
                                <a href='https://github.com/GriDaniel/Ortobom-Landing-Website.git' target='blank' className='dark:hidden block'>
                                    <img className='w-[74px] h-[74px]' src="https://github.com/GriDaniel/site-personal/blob/main/public/images/git-dark.png?raw=true" alt="" />
                                </a>

                            </button>

                        </div>
                    </motion.div>














                </div>

            </div>
        </section>

    )
}

export default Experience;

