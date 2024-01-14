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
                showDots:true
            });
        }

        return () => {
            if (vantaRef.current) {
                vantaRef.current.destroy();
            }
        };
    }, [inView, darkMode]);
    return (
        <div id="about" ref={ref2} className='md:pb-[30px] min-w-screen overflow-x-hidden overflow-hidden flex justify-center dark:bg-black bg-[#F4F4F4]'>
            <div id="mega" ref={ref} className='max:w-[1920px] w-screen md:h-[900px] min-h-[900px] dark:bg-black bg-[#F4F4F4] flex items-center justify-center md:flex-row flex-col'>

                <motion.div
                    
                    initial="hidden"
                    animate={inView ? 'visible' : 'hidden'}
                    variants={animationVariants}
                    className='h-[200px] md:w-[60%]  md:h-[500px] w-[80%] mt-[100px] flex-col flex md:justify-start md:items-start justify-end'
                >
                    <h1 className='dark:text-[#DADDE2] text-black md:ml-[20px] lg:ml-[100px] sm:text-8xl text-7xl font-satoshi font-bold'>About Me</h1>
                </motion.div>






                <motion.div
                    ref={ref}
                    initial="hidden"
                    animate={inView ? 'visible' : 'hidden'}
                    variants={animationVariants2}
                    className='h-full w-[80%]  flex flex-col items-center justify-center'
                >
                    <div className='md:h-[250px] h-0 md:block hidden w-full '>

                    </div>
                    <div className=' py-5 px-5 min-h-[500px] relative w-full md:mt-[100px] mt-0 flex flex-col justify-between'>
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
                        <div className='h-[300px] w-full flex mt-[50px] items-start md:flex-row flex-col'>
                            <p className='dark:text-[#DADDE2] text-black md:mt-auto mt-[20px] mr-auto font-satoshi text-5xl font-bold italic'>
                                Passion is Key.
                            </p>
                            <div className='h-full w-[300px] flex md:flex-row md:justify-end mb-auto items-end mr-[50px] lg:mr-[100px]'>
                                <a href='https://www.linkedin.com/in/dangoliveira/' target='blank' className='mr-[40px] dark:block hidden'>
                                    <img id="myImage" className='hover:scale-105 sm:w-[100px] sm:h-[100px] w-[70px] h-[70px]' src="https://github.com/GriDaniel/site-personal/blob/main/public/images/linked-light.png?raw=true"  />
                                </a>
                                <a href='https://www.linkedin.com/in/dangoliveira/' target='blank' className='mr-[40px] dark:hidden dark'>
                                    <img id="myImage" className='hover:scale-105 sm:w-[100px] sm:h-[100px] w-[70px] h-[70px]' src="https://github.com/GriDaniel/site-personal/blob/main/public/images/linked-dark.png?raw=true.png" />
                                </a>
                                <a href='https://github.com/GriDaniel' target='blank' className='dark:block hidden'>
                                    <img className='hover:scale-105 sm:w-[100px] sm:h-[100px] w-[70px] h-[70px]' src="https://github.com/GriDaniel/site-personal/blob/main/public/images/git-light.png?raw=true" alt="" />
                                </a>
                                <a href='https://github.com/GriDaniel' target='blank' className='dark:hidden block'>
                                    <img className='hover:scale-105 rounded-full sm:w-[100px] sm:h-[100px] w-[70px] h-[70px]' src="https://github.com/GriDaniel/site-personal/blob/main/public/images/git-dark.png?raw=true" alt="" />
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className='h-[250px] w-full md:block hidden'>

                    </div>
                </motion.div>





            </div>

        </div>
    );
};

export default About;
