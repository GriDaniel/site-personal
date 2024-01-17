import React, { useEffect, useRef } from 'react';
import NET from 'vanta/dist/vanta.net.min'
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { TypeAnimation } from 'react-type-animation';



const About = ({ darkMode }) => {


    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.2
    });

    const [ref2, inView2] = useInView({
        triggerOnce: true,
        threshold: 0.2
    });

    const vantaRef = useRef(null);


    const animationVariants = {
        hidden: { opacity: 1, y: '-250vh' },
        visible: { opacity: 1, y: '0%', transition: { delay: 0, duration: 1.25, ease: 'easeInOut' } },
    };

    const animationVariants2 = {
        hidden: { opacity: 1, x: '150vw' },
        visible: { opacity: 1, x: '0%', transition: { delay: 0, duration: 1.25, ease: 'easeInOut' } },
    };
    useEffect(() => {
        if (inView2) {
            vantaRef.current = NET({
                el: "#mega",
                mouseControls: true,
                touchControls: true,
                gyroControls: false,
                minHeight: 200.00,
                minWidth: 200.00,
                scale: 1.00,
                scaleMobile: 1.00,
                color: darkMode ? 0xffffff : 0x0,
                backgroundColor: darkMode ? 0x0 : 0xf4f4f4,
                points: 3.00,
                maxDistance: 18.00,
                spacing: 20.00,
                showDots: true
            });
        }

        return () => {
            if (vantaRef.current) {
                vantaRef.current.destroy();
            }
        };
    }, [inView, darkMode]);
    return (
        <div ref={ref2} className='md:pb-0 pb-[100px] min-w-screen overflow-x-hidden overflow-hidden flex justify-center dark:bg-black bg-[#F4F4F4]'>
            <div id="about" className='h-[10px] w-[20px] md:mt-[265px] mt-[100px]'>

            </div>
            <div id="mega" ref={ref} className='max:w-[1920px] w-screen md:h-[900px] min-h-auto dark:bg-black bg-[#F4F4F4] flex items-center justify-center md:flex-row flex-col'>

                <motion.div

                    initial="hidden"
                    animate={inView ? 'visible' : 'hidden'}
                    variants={animationVariants}
                    className='min-h-[50px] md:w-[60%] md:h-[500px] w-[80%] md:mt-[150px] mt-[100px] flex-col flex justify-start md:items-start'
                >
                    <h1 className='dark:text-[#DADDE2] text-black md:ml-[20px] lg:ml-[100px] sm:text-8xl text-7xl font-satoshi font-bold'>About Me</h1>
                </motion.div>






                <motion.div
                    ref={ref}
                    initial="hidden"
                    animate={inView ? 'visible' : 'hidden'}
                    variants={animationVariants2}
                    className='min-h-auto w-[80%] flex flex-col items-center md:justify-center justify-start'
                >

                    <div className='md:mt-[150px] md:px-5 px-0 min-h-[500px] relative w-full mt-[40px] flex flex-col justify-center items-center'>
                        <p className='dark:text-[#DADDE2] text-black dark:bg-black bg-[#F4F4F4]  mb-auto lg:mr-[100px] md:mr-[50px] font-satoshi text-3xl'>
                            I am driven by innovation, aiming to merge computer engineering and web design to develop impactful projects. My focus lies in creating initiatives that address societal needs by harnessing technology for substantive and meaningful change. I am currently dedicated to building a platform or system aimed at simplifying the learning process for <br></br><div className='inline'><span className='font-extrabold relative '>
                                <TypeAnimation
                                    sequence={[
                                        1550, 'calculus.',
                                        1550, 'physics.',
                                        1550, 'circuits.',
                                        1550, 'C/C++.',
                                        1550, 'logic design.',



                                    ]}
                                    wrapper="span"
                                    speed={45}
                                    repeat={Infinity}


                                />
                            </span>
                            </div>
                        </p>
                        <div className='min-h-auto w-full flex md:mt-[100px] mt-[40px] items-start md:flex-row flex-col md:gap-0 gap-[20px]'>
                            <p className='dark:text-[#DADDE2] text-black md:mt-0 mt-auto mr-auto font-satoshi text-4xl font-bold italic'>
                                Passion is Key.
                            </p>
                            <div className='h-[60px] w-[300px] flex md:flex-row md:justify-end md:mb-auto mb-0 items-end mr-[50px] lg:mr-[100px]'>
                                <a href='https://www.linkedin.com/in/dangoliveira/' target='blank' className='mr-[40px] dark:block hidden'>
                                    <img id="myImage" className='hover:scale-105 md:w-[100px] md:h-[100px] w-[60px] h-[60px]' src="https://github.com/GriDaniel/site-personal/blob/main/public/images/linked-light.png?raw=true" />
                                </a>
                                <a href='https://www.linkedin.com/in/dangoliveira/' target='blank' className='mr-[40px] dark:hidden dark'>
                                    <img id="myImage" className='hover:scale-105 md:w-[100px] md:h-[100px] w-[60px] h-[60px]' src="https://github.com/GriDaniel/site-personal/blob/main/public/images/linked-dark.png?raw=true.png" />
                                </a>
                                <a href='https://github.com/GriDaniel' target='blank' className='dark:block hidden'>
                                    <img className='hover:scale-105 md:w-[100px] md:h-[100px] w-[60px] h-[60px]' src="https://github.com/GriDaniel/site-personal/blob/main/public/images/git-light.png?raw=true" alt="" />
                                </a>
                                <a href='https://github.com/GriDaniel' target='blank' className='dark:hidden block'>
                                    <img className='hover:scale-105 rounded-full md:w-[100px] md:h-[100px] w-[60px] h-[60px]' src="https://github.com/GriDaniel/site-personal/blob/main/public/images/git-dark.png?raw=true" alt="" />
                                </a>
                            </div>
                        </div>
                    </div>

                </motion.div>





            </div>

        </div>
    );
};

export default About;
