import React from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

function About() {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 1,
  })

  const animationVariants = {
    hidden: { opacity: 1, x: '100%' },
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


  const animationVariants3 = {
    hidden: { opacity: 1, x: '-100%' },
    visible: {
      opacity: 1, x: '0%', transition: {
        duration: 1, 
        delay: 0.5,
      }
    },
  };

  const animationVariants4 = {
    hidden: { opacity: 1, y: '100%' },
    visible: {
      opacity: 1, y: '0%', transition: {
        duration: 1,
        delay: 0.5,
      }
    },
  };
  return (
    <div className='min-w-screen flex justify-center h-[1080px] items-center'>

      <div ref={ref} className='relative overflow-hidden w-screen max:w-[1920px] h-full bg-gradient-to-b from-gray-950 to-black flex-col flex items-center'>
        

        {/* <motion.div
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={animationVariants}
        className="max:w-[1920px] w-full h-screen dark:bg-[#060B0B] bg-white absolute z-[11] flex flex-col"
      >
      </motion.div>

      <motion.div
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className='h-[250px] max:w-[1920px] w-full font-normal mt-[2vw] flex lg:justify-end-reverse justify-center z-[11]'
        variants={animationVariants2}
      >
        <div className="flex justify-center items-center h-full w-[90%]  lg:mt-[45px]">
          <div className="h-[90%] w-[80%] flex items-center lg:justify-normal justify-center flex-row lg:mt-[45px] mt-[75px] lg:space-x-14 space-x-5">
            <h1 className='heading font-roboto container-special-three dark:text-[#DADDE2] text-[#303030]'>About</h1>
            <a className="dark:block hidden" href="https://github.com/gridaniel" target="_blank">
              <svg className="dark:visible invisible imgSpecialSize hover:scale-[105%]" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"><path fill="aliceblue" d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38c0-.27.01-1.13.01-2.2c0-.75-.25-1.23-.54-1.48c1.78-.2 3.65-.88 3.65-3.95c0-.88-.31-1.59-.82-2.15c.08-.2.36-1.02-.08-2.12c0 0-.67-.22-2.2.82c-.64-.18-1.32-.27-2-.27c-.68 0-1.36.09-2 .27c-1.53-1.03-2.2-.82-2.2-.82c-.44 1.1-.16 1.92-.08 2.12c-.51.56-.82 1.28-.82 2.15c0 3.06 1.86 3.75 3.64 3.95c-.23.2-.44.55-.51 1.07c-.46.21-1.61.55-2.33-.66c-.15-.24-.6-.83-1.23-.82c-.67.01-.27.38.01.53c.34.19.73.9.82 1.13c.16.45.68 1.31 2.69.94c0 .67.01 1.3.01 1.49c0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
            </a>
            <a className="dark:hidden block" href="https://github.com/gridaniel" target="_blank">
              <svg className="dark:invisible visible imgSpecialSize hover:scale-[105%]"xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg>
            </a>
            <a href="https://www.linkedin.com/in/dangoliveira/" target="_blank">
              <svg className="imgSpecialSize hover:scale-[105%]" xmlns="http://www.w3.org/2000/svg" width="256" height="256" viewBox="0 0 256 256"><g fill="none"><rect width="256" height="256" fill="#fff" rx="60" /><rect width="256" height="256" fill="#0A66C2" rx="60" /><path fill="#fff" d="M184.715 217.685h29.27a4 4 0 0 0 4-3.999l.015-61.842c0-32.323-6.965-57.168-44.738-57.168c-14.359-.534-27.9 6.868-35.207 19.228a.32.32 0 0 1-.595-.161V101.66a4 4 0 0 0-4-4h-27.777a4 4 0 0 0-4 4v112.02a4 4 0 0 0 4 4h29.268a4 4 0 0 0 4-4v-55.373c0-15.657 2.97-30.82 22.381-30.82c19.135 0 19.383 17.916 19.383 31.834v54.364a4 4 0 0 0 4 4ZM38 59.627c0 11.865 9.767 21.627 21.632 21.627c11.862-.001 21.623-9.769 21.623-21.631C81.253 47.761 71.491 38 59.628 38C47.762 38 38 47.763 38 59.627Zm6.959 158.058h29.307a4 4 0 0 0 4-4V101.66a4 4 0 0 0-4-4H44.959a4 4 0 0 0-4 4v112.025a4 4 0 0 0 4 4Z" /></g></svg>
            </a>
            <a href="">
              <svg className="imgSpecialSize hover:scale-[105%]" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"><path fill="currentColor" d="M1.75 2h12.5c.966 0 1.75.784 1.75 1.75v8.5A1.75 1.75 0 0 1 14.25 14H1.75A1.75 1.75 0 0 1 0 12.25v-8.5C0 2.784.784 2 1.75 2ZM1.5 12.251c0 .138.112.25.25.25h12.5a.25.25 0 0 0 .25-.25V5.809L8.38 9.397a.75.75 0 0 1-.76 0L1.5 5.809v6.442Zm13-8.181v-.32a.25.25 0 0 0-.25-.25H1.75a.25.25 0 0 0-.25.25v.32L8 7.88Z" /></svg>
            </a>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className='min-h-[250px] max:w-[1920px] w-full flex lg:justify-end justify-center z-[11]'
        variants={animationVariants3}
      >
        <div className="h-full w-[90%] flex justify-center items-center">
          <div className='h-[90%] w-[80%] flex items-center mt-[100px] lg:mt-[40px]'>
            <p className='text font-roboto font-normal dark:text-[#DADDE2] text-[#303030]'>
              I am driven by innovation, aiming to merge computer engineering and web design to develop impactful projects. My focus lies in creating initiatives that address societal needs by harnessing technology for substantive and meaningful change. I am currently dedicated to building a platform or system aimed at simplifying the learning process for STEM subjects.
            </p>
          </div>
        </div>
      </motion.div>


      <motion.div
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className='h-[250px] max:w-[1920px] w-full flex justify-end-reverse z-30'
        variants={animationVariants4}
      >
        <div className="flex justify-center items-center h-full lg:w-[90%] w-full">
          <div className="h-[90%] lg:w-[70%]  w-full flex flex-row lg:justify-normal justify-center items-center">
            <h1 className='sub-text font-roboto container-special-five italic font-semibold lg:mt-0 sm:mt-[60px] 380:mt-[85px] mt-[100px] dark:text-[#DADDE2] text-[#303030]'> Passion is key.</h1>
          </div>
        </div>
      </motion.div>

      <motion.div
        ref={ref}
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 1.5, delay: 1.5 }}
        className="md:scale-100 scale-75 mouse_scroll mx-auto w-[24px] h-[100px] z-[12] lg:translate-y-[-100%] translate-y-[-10%]"
      >
        <div className="mouse dark:bg-transparent bg-black border-2 dark:border-white border-[#303030]">
          <div className="wheel"></div>
        </div>
        <div>
          <span className="m_scroll_arrows unu border-r-2 border-b-2 dark:border-white border-[#303030]"></span>
          <span className="m_scroll_arrows doi border-r-2 border-b-2 dark:border-white border-[#303030]"></span>
          <span className="m_scroll_arrows trei border-r-2 border-b-2 dark:border-white border-[#303030]"></span>
        </div>
      </motion.div>


      <img src="src\assets\img3.jpg" alt="" className="dark:visible invisible absolute h-full w-screen animate-left-first object-cover  bg-black opacity-[0.20] max:opacity-0" />

      <img src="src\assets\imgf3.jpg" alt="" className=" 
        dark:visible invisible h-full w-screen  absolute object-cover  animate-left-second bg-black opacity-[0.20] max:opacity-0" />

      <img src="src\assets\light.jpg" alt="" className="dark:invisible visible absolute h-full w-screen animate-left-first object-cover  bg-white opacity-[0.8]" />

      <img src="src\assets\lightFlipped.jpg" alt="" className=" 
  dark:invisible visible h-full w-screen  absolute object-cover animate-left-second bg-white opacity-[0.8]" />






 */}

        {/* <div className="container w-[80%] h-full sm:mt-[150px] mt-[150px]">
        <motion.h1
          initial={{ opacity: 0, x: -100 }}
          animate={controls}
          transition={{ duration: 1 }}
          className="hSpecialSize text-left font-extrabold text-white font-source flex flex-row items-center sm:gap-x-10 gap-x-4"
          whileInView={{ opacity: 1, x: 0 }}
        >
          About
          <a href="https://github.com/gridaniel" target="_blank">
            <svg className="imgSpecialSize" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"><path fill="aliceblue" d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38c0-.27.01-1.13.01-2.2c0-.75-.25-1.23-.54-1.48c1.78-.2 3.65-.88 3.65-3.95c0-.88-.31-1.59-.82-2.15c.08-.2.36-1.02-.08-2.12c0 0-.67-.22-2.2.82c-.64-.18-1.32-.27-2-.27c-.68 0-1.36.09-2 .27c-1.53-1.03-2.2-.82-2.2-.82c-.44 1.1-.16 1.92-.08 2.12c-.51.56-.82 1.28-.82 2.15c0 3.06 1.86 3.75 3.64 3.95c-.23.2-.44.55-.51 1.07c-.46.21-1.61.55-2.33-.66c-.15-.24-.6-.83-1.23-.82c-.67.01-.27.38.01.53c.34.19.73.9.82 1.13c.16.45.68 1.31 2.69.94c0 .67.01 1.3.01 1.49c0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
          </a>
          <a href="https://www.linkedin.com/in/dangoliveira/" target="_blank">
            <svg className="imgSpecialSize" xmlns="http://www.w3.org/2000/svg" width="256" height="256" viewBox="0 0 256 256"><g fill="none"><rect width="256" height="256" fill="#fff" rx="60" /><rect width="256" height="256" fill="#0A66C2" rx="60" /><path fill="#fff" d="M184.715 217.685h29.27a4 4 0 0 0 4-3.999l.015-61.842c0-32.323-6.965-57.168-44.738-57.168c-14.359-.534-27.9 6.868-35.207 19.228a.32.32 0 0 1-.595-.161V101.66a4 4 0 0 0-4-4h-27.777a4 4 0 0 0-4 4v112.02a4 4 0 0 0 4 4h29.268a4 4 0 0 0 4-4v-55.373c0-15.657 2.97-30.82 22.381-30.82c19.135 0 19.383 17.916 19.383 31.834v54.364a4 4 0 0 0 4 4ZM38 59.627c0 11.865 9.767 21.627 21.632 21.627c11.862-.001 21.623-9.769 21.623-21.631C81.253 47.761 71.491 38 59.628 38C47.762 38 38 47.763 38 59.627Zm6.959 158.058h29.307a4 4 0 0 0 4-4V101.66a4 4 0 0 0-4-4H44.959a4 4 0 0 0-4 4v112.025a4 4 0 0 0 4 4Z" /></g></svg>
          </a>
          <svg className="imgSpecialSize" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"><path fill="currentColor" d="M1.75 2h12.5c.966 0 1.75.784 1.75 1.75v8.5A1.75 1.75 0 0 1 14.25 14H1.75A1.75 1.75 0 0 1 0 12.25v-8.5C0 2.784.784 2 1.75 2ZM1.5 12.251c0 .138.112.25.25.25h12.5a.25.25 0 0 0 .25-.25V5.809L8.38 9.397a.75.75 0 0 1-.76 0L1.5 5.809v6.442Zm13-8.181v-.32a.25.25 0 0 0-.25-.25H1.75a.25.25 0 0 0-.25.25v.32L8 7.88Z" /></svg>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={controls}
          transition={{ duration: 1, delay: 0.5 }}
          className="pSpecialSize font-noto mt-[15px] text-gray"
          whileInView={{ opacity: 1, y: 0 }}
        >
          I am an innovation-driven individual with a deep interest in searching for avenues to revolutionize the realm of web-development, machine learning and artificial intelligence through personal projects. I am currently dedicated to using my expertise on engineering material and web-development to create a platform or system of methods that will facilitate the learning of engineering based subjects, such as mathematics and physics.
        </motion.p>
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 1.5, delay: 1.5 }}
          className="mouse_scroll mt-[60px] mx-auto block w-[24px] h-[100px]"
        >
          <div className="mouse">
            <div className="wheel"></div>
          </div>
          <div>
            <span className="m_scroll_arrows unu"></span>
            <span className="m_scroll_arrows doi"></span>
            <span className="m_scroll_arrows trei"></span>
          </div>
        </motion.div>


      </div> */}


      </div >

    </div>

  )
}

export default About;