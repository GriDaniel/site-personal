import React, { useRef, useEffect, useState, Component } from 'react'
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useMediaQuery } from 'react-responsive';



function Projects() {
    const imageCarouselRef = useRef(null);
    const textCarouselRef = useRef(null);


    useEffect(() => {
        const imageCarousel = imageCarouselRef.current;
        const textCarousel = textCarouselRef.current;

        const handleScroll = () => {
            window.requestAnimationFrame(() => {

                const scrollRatio = imageCarousel.scrollLeft / (imageCarousel.scrollWidth - imageCarousel.clientWidth);


                textCarousel.scrollLeft = scrollRatio * (textCarousel.scrollWidth - textCarousel.clientWidth);
            });
        };

        imageCarousel.addEventListener('scroll', handleScroll);

        return () => {
            imageCarousel.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const carouselImageRef = useRef(null);
    const carouselTextRef = useRef(null);

    useEffect(() => {
        const carouselImage = carouselImageRef.current;
        const carouselText = carouselTextRef.current;

        const handleScroll = () => {
            window.requestAnimationFrame(() => {

                const scrollRatio = carouselImage.scrollTop / (carouselImage.scrollHeight - carouselImage.clientHeight);


                carouselText.scrollTop = scrollRatio * (carouselText.scrollHeight - carouselText.clientHeight);
            });
        };

        carouselImage.addEventListener('scroll', handleScroll);

        return () => {
            carouselImage.removeEventListener('scroll', handleScroll);
        };
    }, []);



    const controls = useAnimation();
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.2,
    })

    const animationVariants = {
        hidden: { opacity: 1, x: '-100vw' },
        visible: { opacity: 1, x: '0%', transition: { duration: 1 } },
    };



    const animationVariants2 = {
        hidden: { opacity: 0, x: '100vw' },
        visible: {
            opacity: 1, x: '0%', transition: {
                duration: 1,


            }
        },
    };

    

    const animationVariants3 = {
        hidden: { opacity: 0, y: '-100vh' },
        visible: {
            opacity: 1, y: '0%', transition: {
                duration: 1,


            }
        },
    };

    const animationVariants4 = {
        hidden: { opacity: 0, x: '100vw' },
        visible: {
            opacity: 1, x: '0%', transition: {
                duration: 1,


            }
        },
    };

    const animationVariants5 = {
        hidden: { opacity: 0, x: '100vw' },
        visible: {
            opacity: 1, x: '0%', transition: {
                duration: 1,


            }
        },
    };
    const isMobileScreen = useMediaQuery({ maxWidth: 768 });
    return (
        <div id="projects" ref={ref} className='md:pb-[200px] pb-0 min-w-screen overflow-x-hidden overflow-hidden flex justify-center items-center dark:bg-black bg-[#F4F4F4]'>
            <div className='max:w-[1920px] w-screen dark:bg-black bg-[#F4F4F4] flex justify-center flex-col'>
                <motion.div initial="hidden"
                    animate={inView ? 'visible' : 'hidden'}
                    variants={animationVariants3} className='w-full min-h-[100px] flex md:justify-normal justify-center'>

                    <h1 className='md:ml-[20px] lg:ml-[100px] w-[80%] dark:text-[#DADDE2] h1-special text-black sm:text-8xl text-7xl font-satoshi font-bold'>Projects</h1>


                </motion.div>

                <div className='w-full md:h-[600px]  overflow-x-hidden overflow-hidden flex md:flex-row flex-col mt-[100px] md:gap-[100px] gap-[0px] justify-center'>
                    <div className='md:hidden flex flex-col md:absolute h-full w-full'>
                        <motion.div animate={inView ? 'visible' : 'hidden'}
                        variants={animationVariants4} ref={imageCarouselRef} className="md:hidden flex h-[500px] w-[80%] mx-auto carousel rounded-[50px]">



                            <div className="md:hidden carousel-item w-full relative h-full flex justify-center">
                                <img loading="lazy" className='w-full h-full object-cover' src="https://github.com/GriDaniel/site-personal/blob/main/public/images/carousel-one.jpg?raw=true" />

                                <div className='absolute h-full w-full'>
                                    <img loading="lazy" className='relative w-[150px] h-[150px]' src="https://github.com/GriDaniel/site-personal/blob/main/public/images/swipe-indicator.png?raw=true" alt="" />
                                </div>






                            </div>
                            <div className="md:hidden block carousel-item w-full h-full">
                                <img loading="lazy" className='w-full  h-full object-cover' src="https://github.com/GriDaniel/site-personal/blob/main/public/images/carousel-two.jpg?raw=true" />



                            </div>
                            <div className="md:hidden block carousel-item w-full h-full">
                                <img loading="lazy" className='w-full  h-full object-cover' src="https://github.com/GriDaniel/site-personal/blob/main/public/images/carousel-three.jpg?raw=true" />

                            </div>
                        </motion.div>

                        <motion.div animate={inView ? 'visible' : 'hidden'}
                        variants={animationVariants5} ref={textCarouselRef} className="mt-[40px] md:pb-0 pb-[100px] pointer-events-none md:hidden min-h-[550px] carousel rounded-box">
                            <div className="border-b-transparent carousel-item h-full w-screen flex items-center flex-col dark:bg-black bg-[#F4F4F4]">
                                <div className='w-[80%] flex items-center justify-between'>
                                    <h1 className='font-satoshi text-6xl dark:text-[#DADDE2] text-black'>Novus Car</h1>

                                </div>

                                <div className='text-black w-[80%] mt-[10px] dark:text-[#DADDE2] font-satoshi italic text-3xl'>
                                    McMaster Engineering Competition (November, 2023)
                                </div>
                                <p className='w-[80%] text-black dark:text-[#DADDE2] mt-[40px] text-3xl'>
                                    1st place winners, devising programming solutions to enhance the features and preformance of autonomous vehicles.
                                </p>
                                <a className='mt-[40px] mx-auto ' href='https://github.com/GriDaniel/Novus-Car-Parking-Simulator' target='blank'>
                                    <button className='pointer-events-auto dark:hover:shadow-darkMode-button hover:shadow-lightMode-button dark:bg-[#060B0B] bg-gray-300 dark:hover:bg-[#FAF8FF] button flex row items-center gap-3 font-satoshi text-[30px] dark:hover:text-black dark:text-[#DADDE2] text-black'>
                                        Learn More

                                        <img loading="lazy" className='w-[30px] h-[30px]' src="https://github.com/GriDaniel/site-personal/blob/main/public/images/new-tab.png?raw=true" alt="" />

                                    </button>
                                </a>
                            </div>
                            <div className="carousel-item h-full w-screen flex items-center flex-col dark:bg-black bg-[#F4F4F4]">
                                <div className='w-[80%] flex items-center justify-between'>
                                    <h1 className='font-satoshi text-6xl dark:text-[#DADDE2] text-black'>Nasa Squad</h1>

                                </div>

                                <div className='w-[80%] text-black dark:text-[#DADDE2] font-satoshi italic text-3xl'>
                                    NASA Space Apps Challenge (October, 2023)
                                </div>
                                <p className='w-[80%] text-black dark:text-[#DADDE2] mt-[40px] text-3xl'>
                                    Competed by using machine learning to train a model that extracts vital data from extensive space biology datasets, aiding in determining the impact of space travel on human bone health.
                                </p>
                                <a className='mt-[40px] mx-auto ' href='https://github.com/Achen2804/NasaTime' target='blank'>
                                    <button className='pointer-events-auto dark:hover:shadow-darkMode-button hover:shadow-lightMode-button dark:bg-[#060B0B] bg-gray-300 dark:hover:bg-[#FAF8FF] button flex row items-center gap-3 font-satoshi text-[30px] dark:hover:text-black dark:text-[#DADDE2] text-black'>
                                        Learn More

                                        <img loading="lazy" className='w-[30px] h-[30px]' src="https://github.com/GriDaniel/site-personal/blob/main/public/images/new-tab.png?raw=true" alt="" />

                                    </button>
                                </a>
                            </div>
                            <div className="carousel-item h-full w-screen flex items-center flex-col dark:bg-black bg-[#F4F4F4]">
                                <div className='w-[80%] flex items-center justify-between'>
                                    <h1 className='h1-special font-satoshi text-6xl dark:text-[#DADDE2] text-black'>CAD Designathon</h1>

                                </div>

                                <div className='w-[80%] text-black dark:text-[#DADDE2] font-satoshi italic text-3xl'>

                                </div>
                                <p className='w-[80%] text-black dark:text-[#DADDE2] mt-[40px] text-3xl'>
                                    Challenged other designers by designing a non-motorized mechanical system to protect electrical
                                    connectors from debris in space using AutoDesk Inventor.
                                </p>
                                <a className='mt-[40px] mx-auto ' href='https://drive.google.com/drive/folders/1yRbgQakXEV3RKcN3VuTO3bHrm6SJnn3d?usp=sharing' target='blank'>
                                    <button className='pointer-events-auto dark:hover:shadow-darkMode-button hover:shadow-lightMode-button dark:bg-[#060B0B] bg-gray-300 dark:hover:bg-[#FAF8FF] button flex row items-center gap-3 font-satoshi text-[30px] dark:hover:text-black dark:text-[#DADDE2] text-black'>
                                        Learn More

                                        <img loading="lazy" className='w-[30px] h-[30px]' src="https://github.com/GriDaniel/site-personal/blob/main/public/images/new-tab.png?raw=true" alt="" />

                                    </button>
                                </a>
                            </div>
                        </motion.div>
                    </div>

                    <motion.div className="pointer-events-none md:flex md:relative absolute hidden shadow-none min-h-[800px] md:w-[700px]  w-0 carousel md:carousel-vertical flex-row overflow-x-scroll snap-x rounded-lg mr-auto lg:ml-[100px] md:ml-[20px]" ref={carouselTextRef} initial="hidden"
                        animate={inView ? 'visible' : 'hidden'}
                        variants={animationVariants} >
                        <div className="carousel-item h-full md:flex hidden flex-col dark:bg-black bg-[#F4F4F4]">
                            <div className='w-full flex items-center justify-between'>
                                <h1 className='font-satoshi text-6xl dark:text-[#DADDE2] text-black'>Novus Car</h1>

                            </div>

                            <div className='text-black dark:text-[#DADDE2] font-satoshi italic text-3xl'>
                                McMaster Engineering Competition (November, 2023)
                            </div>
                            <p className='text-black dark:text-[#DADDE2] mt-[40px] text-3xl'>
                                1st place winners, devising programming solutions to enhance the features and preformance of autonomous vehicles.
                            </p>
                            <a className='mt-[40px] h-full mx-auto ' href='https://github.com/GriDaniel/Novus-Car-Parking-Simulator' target='blank'>
                                <button className='pointer-events-auto dark:hover:shadow-darkMode-button hover:shadow-lightMode-button dark:bg-[#060B0B] bg-gray-300 dark:hover:bg-[#FAF8FF] button flex row items-center gap-3 font-satoshi text-[30px] dark:hover:text-black dark:text-[#DADDE2] text-black'>
                                    Learn More

                                    <img loading="lazy" className='w-[30px] h-[30px]' src="https://github.com/GriDaniel/site-personal/blob/main/public/images/new-tab.png?raw=true" alt="" />

                                </button>
                            </a>
                        </div>
                        <div className="carousel-item h-full md:flex hidden flex-col dark:bg-black bg-[#F4F4F4]">
                            <div className='w-full flex items-center justify-between'>
                                <h1 className='font-satoshi text-6xl dark:text-[#DADDE2] text-black'>Nasa Squad</h1>

                            </div>

                            <div className='text-black dark:text-[#DADDE2] font-satoshi italic text-3xl'>
                                NASA Space Apps Challenge (October, 2023)
                            </div>
                            <p className='text-black dark:text-[#DADDE2] mt-[40px] text-3xl'>
                                Competed by using machine learning to train a model that extracts vital data from extensive space biology datasets, aiding in determining the impact of space travel on human bone health.
                            </p>
                            <a className='mt-[40px] mx-auto ' href='https://github.com/Achen2804/NasaTime' target='blank'>
                                <button className='pointer-events-auto dark:hover:shadow-darkMode-button hover:shadow-lightMode-button dark:bg-[#060B0B] bg-gray-300 dark:hover:bg-[#FAF8FF] button flex row items-center gap-3 font-satoshi text-[30px] dark:hover:text-black dark:text-[#DADDE2] text-black'>
                                    Learn More

                                    <img loading="lazy" className='w-[30px] h-[30px]' src="https://github.com/GriDaniel/site-personal/blob/main/public/images/new-tab.png?raw=true" alt="" />

                                </button>
                            </a>
                        </div>
                        <div className="carousel-item h-full md:flex hidden flex-col dark:bg-black bg-[#F4F4F4]">
                            <div className=' w-full flex items-center justify-between'>
                                <h1 className='w-[90%] h1-special font-satoshi text-6xl dark:text-[#DADDE2] text-black'> Designathon</h1>

                            </div>

                            <div className='text-black dark:text-[#DADDE2] font-satoshi italic text-3xl'>

                            </div>
                            <p className='text-black dark:text-[#DADDE2] mt-[40px] text-3xl'>
                                Challenged other designers by designing a non-motorized mechanical system to protect electrical
                                connectors from debris in space using AutoDesk Inventor.
                            </p>
                            <a className='mt-[40px] mx-auto ' href='https://drive.google.com/drive/folders/1yRbgQakXEV3RKcN3VuTO3bHrm6SJnn3d?usp=sharing' target='blank'>
                                <button className='pointer-events-auto dark:hover:shadow-darkMode-button hover:shadow-lightMode-button dark:bg-[#060B0B] bg-gray-300 dark:hover:bg-[#FAF8FF] button flex row items-center gap-3 font-satoshi text-[30px] dark:hover:text-black dark:text-[#DADDE2] text-black'>
                                    Learn More

                                    <img loading="lazy" className='w-[30px] h-[30px]' src="https://github.com/GriDaniel/site-personal/blob/main/public/images/new-tab.png?raw=true" alt="" />

                                </button>
                            </a>
                        </div>

                    </motion.div>



                    <motion.div ref={carouselImageRef} initial="hidden"
                        animate={inView ? 'visible' : 'hidden'}
                        variants={animationVariants2} className="md:relative absolute md:flex hidden translate-y-[-20%] h-[600px] md:w-[900px] w-0 md:justify-normal justify-center carousel md:carousel-vertical flex-row md:rounded-[50px] md:mr-[20px] lg:mr-[100px]">
                        <div className="carousel-item md:block hidden h-full">
                            <img loading="lazy" className='w-full  h-full object-cover' src="https://github.com/GriDaniel/site-personal/blob/main/public/images/carousel-one.jpg?raw=true" />
                            <div className="absolute left-[10%] top-[0%] scale-[200%] mouse_scroll mx-auto block w-[24px] lg:mt-[100px] mt-[50px]">
                                <div className="mouse mt dark:bg-transparent bg-black border-2 dark:border-white border-[#303030]">
                                    <div className="wheel"></div>
                                </div>
                                <div>
                                    <span className="m_scroll_arrows unu border-r-2 border-b-2 dark:border-white border-[#303030]"></span>
                                    <span className="m_scroll_arrows doi border-r-2 border-b-2 dark:border-white border-[#303030]"></span>
                                    <span className="m_scroll_arrows trei border-r-2 border-b-2 dark:border-white border-[#303030]"></span>
                                </div>
                            </div>


                        </div>
                        <div className="md:block hidden carousel-item h-full">
                            <img loading="lazy" className='w-full  h-full object-cover' src="https://github.com/GriDaniel/site-personal/blob/main/public/images/carousel-two.jpg?raw=true" />



                        </div>
                        <div className="md:block hidden carousel-item h-full">
                            <img loading="lazy" className='w-full  h-full object-cover' src="https://github.com/GriDaniel/site-personal/blob/main/public/images/carousel-three.jpg?raw=true" />

                        </div>

                    </motion.div>





                </div>
            </div>
        </div>
    )
}

export default Projects