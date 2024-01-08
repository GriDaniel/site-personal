import React, { useRef, useEffect, Component } from 'react'
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';



function Projects() {

    const carousel1Ref = useRef(null);
    const carousel2Ref = useRef(null);


    useEffect(() => {
        let isSyncing = false;

        const handleScroll1 = () => {
            if (!isSyncing) {
                isSyncing = true;
                carousel2Ref.current.scrollLeft = carousel1Ref.current.scrollLeft;
                isSyncing = false;
            }
        };

        const handleScroll2 = () => {
            if (!isSyncing) {
                isSyncing = true;
                carousel1Ref.current.scrollLeft = carousel2Ref.current.scrollLeft;
                isSyncing = false;
            }
        };

        const carousel1 = carousel1Ref.current;
        const carousel2 = carousel2Ref.current;

        carousel1.addEventListener('scroll', handleScroll1);
        carousel2.addEventListener('scroll', handleScroll2);

        return () => {
            carousel1.removeEventListener('scroll', handleScroll1);
            carousel2.removeEventListener('scroll', handleScroll2);
        };
    }, []);

    const carousel3Ref = useRef(null);
    const carousel4Ref = useRef(null);

    useEffect(() => {
        const carousel3 = carousel3Ref.current;
        const carousel4 = carousel4Ref.current;

        const syncScroll = (source, target) => {
            if (!source || !target) return;

            let isSyncing = false;

            source.addEventListener('scroll', () => {
                if (!isSyncing) {
                    isSyncing = true;
                    target.scrollTop = source.scrollTop;
                    isSyncing = false;
                }
            });
        };

        syncScroll(carousel3, carousel4);
        syncScroll(carousel4, carousel3);

        return () => {
            carousel3.removeEventListener('scroll', syncScroll);
            carousel4.removeEventListener('scroll', syncScroll);
        };
    }, []);



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
        <div id="projects" ref={ref} className='min-w-screen overflow-x-hidden overflow-hidden flex justify-center items-center dark:bg-black bg-[#F4F4F4]'>
            <div className='max:w-[1920px] w-screen dark:bg-black bg-[#F4F4F4] flex justify-center flex-col'>
                <div className='w-full h-[100px] mt-[120px] flex md:justify-normal justify-center'>
                    <div className='w-[80%] h-full lg:ml-[100px] md:ml-[20px]  '>
                        <h1 className='dark:text-[#DADDE2] h1-special text-black  md:mt-0 mt-[100px] sm:text-8xl text-7xl font-satoshi font-bold'>Projects</h1>

                    </div>
                </div>

                <div className='w-full  min-h-[800px] flex md:flex-row flex-col mt-[100px] gap-[100px] justify-center'>

                    <div ref={carousel1Ref} class="mt-[100px] pointer-events-none md:hidden min-h-[550px] carousel rounded-box">
                        <div className="border-b-transparent carousel-item h-full w-screen flex items-center flex-col dark:bg-black bg-[#F4F4F4]">
                            <div className='w-[80%] flex items-center justify-between'>
                                <h1 className='font-satoshi text-[60px] dark:text-[#DADDE2] text-black'>Novus Car</h1>

                            </div>

                            <div className='text-black w-[80%] dark:text-[#DADDE2] font-satoshi italic text-3xl'>
                                McMaster Engineering Competition (November, 2023)
                            </div>
                            <p className='w-[80%] text-black dark:text-[#DADDE2] mt-[65px] text-3xl'>
                                1st place winners, devising programming solutions to enhance the features and preformance of autonomous vehicles.
                            </p>
                            <a className='mt-[100px] mx-auto ' href='https://gridaniel.github.io/Ortobom-Quiz/' target='blank'>
                                <button className='pointer-events-auto dark:hover:shadow-darkMode-button hover:shadow-lightMode-button dark:bg-[#060B0B] bg-gray-300 dark:hover:bg-[#FAF8FF] button flex row items-center gap-3 font-satoshi text-[30px] dark:hover:text-black dark:text-[#DADDE2] text-black'>
                                    Learn More

                                    <img className='w-[30px] h-[30px]' src="proc.png" alt="" />

                                </button>
                            </a>
                        </div>
                        <div className="carousel-item h-full w-screen flex items-center flex-col dark:bg-black bg-[#F4F4F4]">
                            <div className='w-[80%] flex items-center justify-between'>
                                <h1 className='font-satoshi text-[60px] dark:text-[#DADDE2] text-black'>Nasa Squad</h1>

                            </div>

                            <div className='w-[80%] text-black dark:text-[#DADDE2] font-satoshi italic text-3xl'>
                                NASA Space Apps Challenge (October, 2023)
                            </div>
                            <p className='w-[80%] text-black dark:text-[#DADDE2] mt-[65px] text-3xl'>
                                Competed by using machine learning to train a model that extracts vital data from extensive space biology datasets, aiding in determining the impact of space travel on human bone health.
                            </p>
                            <a className='mt-[100px] mx-auto ' href='https://gridaniel.github.io/Ortobom-Quiz/' target='blank'>
                                <button className='pointer-events-auto dark:hover:shadow-darkMode-button hover:shadow-lightMode-button dark:bg-[#060B0B] bg-gray-300 dark:hover:bg-[#FAF8FF] button flex row items-center gap-3 font-satoshi text-[30px] dark:hover:text-black dark:text-[#DADDE2] text-black'>
                                    Learn More

                                    <img className='w-[30px] h-[30px]' src="proc.png" alt="" />

                                </button>
                            </a>
                        </div>
                        <div className="carousel-item h-full w-screen flex items-center flex-col dark:bg-black bg-[#F4F4F4]">
                            <div className='w-[80%] flex items-center justify-between'>
                                <h1 className='h1-special font-satoshi text-[60px] dark:text-[#DADDE2] text-black'>CAD Designathon</h1>

                            </div>

                            <div className='w-[80%] text-black dark:text-[#DADDE2] font-satoshi italic text-3xl'>

                            </div>
                            <p className='w-[80%] text-black dark:text-[#DADDE2] mt-[65px] text-3xl'>
                                Challenged other designers by designing a non-motorized mechanical system to protect electrical
                                connectors from debris in space using AutoDesk Inventor.
                            </p>
                            <a className='mt-[100px] mx-auto ' href='https://gridaniel.github.io/Ortobom-Quiz/' target='blank'>
                                <button className='pointer-events-auto dark:hover:shadow-darkMode-button hover:shadow-lightMode-button dark:bg-[#060B0B] bg-gray-300 dark:hover:bg-[#FAF8FF] button flex row items-center gap-3 font-satoshi text-[30px] dark:hover:text-black dark:text-[#DADDE2] text-black'>
                                    Learn More

                                    <img className='w-[30px] h-[30px]' src="proc.png" alt="" />

                                </button>
                            </a>
                        </div>
                    </div>

                    <div ref={carousel2Ref} class="md:hidden h-[700px] w-[80%] mx-auto carousel rounded-[50px]">

                        <div className="carousel-item w-full relative h-full flex justify-center">
                            <img className='w-full h-full object-cover' src="ONEHERE.jpg" />

                            <div className='absolute h-full w-full'>
                                <img className='relative w-[150px] h-[150px]' src="handnew.png" alt="" />
                            </div>






                        </div>
                        <div className="carousel-item w-full h-full flex justify-center">
                            <img className='w-full  h-full object-cover' src="polg.jpg" />



                        </div>
                        <div className="carousel-item w-full h-full flex justify-center">
                            <img className='w-full  h-full object-cover' src="charg3.jpg" />

                        </div>
                    </div>

                    <div ref={carousel3Ref} className="pointer-events-none md:flex hidden shadow-none min-h-[800px] w-[700px] carousel md:carousel-vertical flex-row overflow-x-scroll snap-x rounded-lg mr-auto lg:ml-[100px] md:ml-[20px]">
                        <div className="carousel-item h-full flex flex-col dark:bg-black bg-[#F4F4F4]">
                            <div className='w-full flex items-center justify-between'>
                                <h1 className='font-satoshi text-[60px] dark:text-[#DADDE2] text-black'>Novus Car</h1>

                            </div>

                            <div className='text-black dark:text-[#DADDE2] font-satoshi italic text-3xl'>
                                McMaster Engineering Competition (November, 2023)
                            </div>
                            <p className='text-black dark:text-[#DADDE2] mt-[65px] text-3xl'>
                                1st place winners, devising programming solutions to enhance the features and preformance of autonomous vehicles.
                            </p>
                            <a className='mt-[100px] h-full mx-auto ' href='https://gridaniel.github.io/Ortobom-Quiz/' target='blank'>
                                <button className='pointer-events-auto dark:hover:shadow-darkMode-button hover:shadow-lightMode-button dark:bg-[#060B0B] bg-gray-300 dark:hover:bg-[#FAF8FF] button flex row items-center gap-3 font-satoshi text-[30px] dark:hover:text-black dark:text-[#DADDE2] text-black'>
                                    Learn More

                                    <img className='w-[30px] h-[30px]' src="proc.png" alt="" />

                                </button>
                            </a>
                        </div>
                        <div className="carousel-item h-full flex flex-col dark:bg-black bg-[#F4F4F4]">
                            <div className='w-full flex items-center justify-between'>
                                <h1 className='font-satoshi text-[60px] dark:text-[#DADDE2] text-black'>Nasa Squad</h1>

                            </div>

                            <div className='text-black dark:text-[#DADDE2] font-satoshi italic text-3xl'>
                                NASA Space Apps Challenge (October, 2023)
                            </div>
                            <p className='text-black dark:text-[#DADDE2] mt-[65px] text-3xl'>
                                Competed by using machine learning to train a model that extracts vital data from extensive space biology datasets, aiding in determining the impact of space travel on human bone health.
                            </p>
                            <a className='mt-[100px] mx-auto ' href='https://gridaniel.github.io/Ortobom-Quiz/' target='blank'>
                                <button className='pointer-events-auto dark:hover:shadow-darkMode-button hover:shadow-lightMode-button dark:bg-[#060B0B] bg-gray-300 dark:hover:bg-[#FAF8FF] button flex row items-center gap-3 font-satoshi text-[30px] dark:hover:text-black dark:text-[#DADDE2] text-black'>
                                    Learn More

                                    <img className='w-[30px] h-[30px]' src="proc.png" alt="" />

                                </button>
                            </a>
                        </div>
                        <div className="carousel-item h-full flex flex-col dark:bg-black bg-[#F4F4F4]">
                            <div className=' w-full flex items-center justify-between'>
                                <h1 className='h1-special font-satoshi text-[60px] dark:text-[#DADDE2] text-black'>CAD Designathon</h1>

                            </div>

                            <div className='text-black dark:text-[#DADDE2] font-satoshi italic text-3xl'>

                            </div>
                            <p className='text-black dark:text-[#DADDE2] mt-[65px] text-3xl'>
                                Challenged other designers by designing a non-motorized mechanical system to protect electrical
                                connectors from debris in space using AutoDesk Inventor.
                            </p>
                            <a className='mt-[100px] mx-auto ' href='https://gridaniel.github.io/Ortobom-Quiz/' target='blank'>
                                <button className='pointer-events-auto dark:hover:shadow-darkMode-button hover:shadow-lightMode-button dark:bg-[#060B0B] bg-gray-300 dark:hover:bg-[#FAF8FF] button flex row items-center gap-3 font-satoshi text-[30px] dark:hover:text-black dark:text-[#DADDE2] text-black'>
                                    Learn More

                                    <img className='w-[30px] h-[30px]' src="proc.png" alt="" />

                                </button>
                            </a>
                        </div>

                    </div>



                    <div ref={carousel4Ref} className="md:flex hidden translate-y-[-20%] h-[700px] w-[900px] md:justify-normal justify-center carousel md:carousel-vertical flex-row md:rounded-[50px] mr-[100px]">
                        <div className="carousel-item h-full">
                            <img className='w-full  h-full object-cover' src="ONEHERE.jpg" />
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
                        <div className="carousel-item h-full">
                            <img className='w-full  h-full object-cover' src="polg.jpg" />



                        </div>
                        <div className="carousel-item h-full">
                            <img className='w-full  h-full object-cover' src="charg3.jpg" />

                        </div>

                    </div>





                </div>
            </div>
        </div>
    )
}

export default Projects