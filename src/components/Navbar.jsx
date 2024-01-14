import React, { useState } from 'react';

function Navbar({ darkMode, toggleDarkMode }) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };
    return (
        <>
            <nav className="fixed w-screen flex justify-center  items-center z-20 top-0 left-0">
                <div className="w-screen max:max-w-[1920px] lg:h-[80px] border-b-[3px] dark:border-[#0C171B] border-[#ACA9BB] dark:bg-black bg-[#FAF8FF] flex flex-row flex-wrap items-center justify-between px-4">
                    <div className='dark:block hidden w-[100px] h-full relative'>
                        <img className="h-full w-full" src='https://github.com/GriDaniel/site-personal/blob/main/public/images/name-logo.png?raw=true'></img>
                    </div>
                    <div className='block dark:hidden w-[100px] h-full relative'>
                        <img className="h-full w-full" src='https://github.com/GriDaniel/site-personal/blob/main/public/images/personal-logol.png?raw=true'></img>
                    </div>
                    <div className="flex md:order-2 md:w-[1000px] w-[75px] items-center justify-end-reverse">
                        <button data-collapse-toggle="navbar-sticky" type="button" className="ml-[10px] inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:scale-[130%]" aria-expanded={isMenuOpen}
                            onTouchEnd={toggleMenu}
                            onClick={toggleMenu}>
                            <span className="sr-only">Open main menu</span>
                            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15" />
                            </svg>
                        </button>
                    </div>

                    <div className="items-center md:h-full h-screen justify-center hidden md:flex lg:w-[850px] md:w-[616px] w-[725px] md:order-1 " id="navbar-sticky">
                        <ul className="w-full dark:text-white text-[#303030] justify-center bg-transparent flex flex-col xl:gap-2 ml-[20px] lg:mr-[100px] mr-[75px] gap-0 py-4 md:p-0 font-medium rounded-lg md:flex-row md:space-x-8  md:border-0">
                            <li className="group py-2 lg:px-4 px-1 flex flex-row items-center justify-between relative" href="#about">
                                <a href="#about" className="md:hover:scale-[105%] hover:scale-[102%] w-full z-20 lg:px-4 px-1 block py-2 font-satoshi md:text-lg text-2xl" aria-current="page">
                                    About
                                </a>
                                <svg className=" mr-[30px] hidden md:group-hover:hidden group-hover:block absolute top-1/2 right-4 -translate-y-1/2 transform" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12.0519 14.8285L13.4661 16.2427L17.7088 12L13.4661 7.7574L12.0519 9.17161L13.8804 11H6.34321V13H13.8803L12.0519 14.8285Z" fill="currentColor" />
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M19.7782 19.7782C24.0739 15.4824 24.0739 8.51759 19.7782 4.22183C15.4824 -0.0739417 8.51759 -0.0739417 4.22183 4.22183C-0.0739417 8.51759 -0.0739417 15.4824 4.22183 19.7782C8.51759 24.0739 15.4824 24.0739 19.7782 19.7782ZM18.364 18.364C21.8787 14.8492 21.8787 9.15076 18.364 5.63604C14.8492 2.12132 9.15076 2.12132 5.63604 5.63604C2.12132 9.15076 2.12132 14.8492 5.63604 18.364C9.15076 21.8787 14.8492 21.8787 18.364 18.364Z" fill="currentColor" />
                                </svg>
                            </li>
                            <li className="group flex flex-row items-center justify-between relative py-2 lg:px-4 px-1">
                                <a href="#experience" class="w-full md:hover:scale-[105%] hover:scale-[102%]  lg:px-4 px-1  relative block py-2 font-satoshi md:text-lg text-2xl rounded">Experience</a>
                                <svg className=" mr-[30px] hidden md:group-hover:hidden group-hover:block absolute top-1/2 right-4 -translate-y-1/2 transform" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12.0519 14.8285L13.4661 16.2427L17.7088 12L13.4661 7.7574L12.0519 9.17161L13.8804 11H6.34321V13H13.8803L12.0519 14.8285Z" fill="currentColor" />
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M19.7782 19.7782C24.0739 15.4824 24.0739 8.51759 19.7782 4.22183C15.4824 -0.0739417 8.51759 -0.0739417 4.22183 4.22183C-0.0739417 8.51759 -0.0739417 15.4824 4.22183 19.7782C8.51759 24.0739 15.4824 24.0739 19.7782 19.7782ZM18.364 18.364C21.8787 14.8492 21.8787 9.15076 18.364 5.63604C14.8492 2.12132 9.15076 2.12132 5.63604 5.63604C2.12132 9.15076 2.12132 14.8492 5.63604 18.364C9.15076 21.8787 14.8492 21.8787 18.364 18.364Z" fill="currentColor" />
                                </svg>
                            </li>
                            <li className="group flex flex-row items-center justify-between relative py-2 lg:px-4 px-1">
                                <a href="#projects" class="w-full md:hover:scale-[105%] hover:scale-[102%]  lg:px-4 px-1  block py-2 font-satoshi md:text-lg text-2xl rounded">Projects</a>
                                <svg className=" mr-[30px] hidden md:group-hover:hidden group-hover:block absolute top-1/2 right-4 -translate-y-1/2 transform" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12.0519 14.8285L13.4661 16.2427L17.7088 12L13.4661 7.7574L12.0519 9.17161L13.8804 11H6.34321V13H13.8803L12.0519 14.8285Z" fill="currentColor" />
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M19.7782 19.7782C24.0739 15.4824 24.0739 8.51759 19.7782 4.22183C15.4824 -0.0739417 8.51759 -0.0739417 4.22183 4.22183C-0.0739417 8.51759 -0.0739417 15.4824 4.22183 19.7782C8.51759 24.0739 15.4824 24.0739 19.7782 19.7782ZM18.364 18.364C21.8787 14.8492 21.8787 9.15076 18.364 5.63604C14.8492 2.12132 9.15076 2.12132 5.63604 5.63604C2.12132 9.15076 2.12132 14.8492 5.63604 18.364C9.15076 21.8787 14.8492 21.8787 18.364 18.364Z" fill="currentColor" />
                                </svg>
                            </li>
                            <li className="group flex flex-row items-center justify-between relative py-2 lg:px-4 px-1">
                                <a href="https://drive.google.com/file/d/1acwKtKYfRR21OD6UlxZUu_-hRp2HGxow/view?usp=sharing" class="w-full md:hover:scale-[105%] hover:scale-[102%]  lg:px-4 px-1 block py-2 font-satoshi md:text-lg text-2xl rounded">Resume</a>
                                <svg className=" mr-[30px] hidden md:group-hover:hidden group-hover:block absolute top-1/2 right-4 -translate-y-1/2 transform" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12.0519 14.8285L13.4661 16.2427L17.7088 12L13.4661 7.7574L12.0519 9.17161L13.8804 11H6.34321V13H13.8803L12.0519 14.8285Z" fill="currentColor" />
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M19.7782 19.7782C24.0739 15.4824 24.0739 8.51759 19.7782 4.22183C15.4824 -0.0739417 8.51759 -0.0739417 4.22183 4.22183C-0.0739417 8.51759 -0.0739417 15.4824 4.22183 19.7782C8.51759 24.0739 15.4824 24.0739 19.7782 19.7782ZM18.364 18.364C21.8787 14.8492 21.8787 9.15076 18.364 5.63604C14.8492 2.12132 9.15076 2.12132 5.63604 5.63604C2.12132 9.15076 2.12132 14.8492 5.63604 18.364C9.15076 21.8787 14.8492 21.8787 18.364 18.364Z" fill="currentColor" />
                                </svg>
                            </li>
                            <li className="group flex flex-row items-center justify-between relative py-2 lg:px-4 px-1">
                                <a href="#contact" className='w-full relative group'>
                                    <button type="button" class="dark:text-black text-white dark:bg-white bg-[#303030] rounded-full font-satoshi md:text-lg text-2xl lg:px-4 px-5 py-2 text-center md:mr-0 group-hover:scale-105">Contact</button>
                                </a>
                                <svg className="mr-[15px] hidden md:group-hover:hidden group-hover:block absolute top-1/2 right-4 -translate-y-1/2 transform" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12.0519 14.8285L13.4661 16.2427L17.7088 12L13.4661 7.7574L12.0519 9.17161L13.8804 11H6.34321V13H13.8803L12.0519 14.8285Z" fill="currentColor" />
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M19.7782 19.7782C24.0739 15.4824 24.0739 8.51759 19.7782 4.22183C15.4824 -0.0739417 8.51759 -0.0739417 4.22183 4.22183C-0.0739417 8.51759 -0.0739417 15.4824 4.22183 19.7782C8.51759 24.0739 15.4824 24.0739 19.7782 19.7782ZM18.364 18.364C21.8787 14.8492 21.8787 9.15076 18.364 5.63604C14.8492 2.12132 9.15076 2.12132 5.63604 5.63604C2.12132 9.15076 2.12132 14.8492 5.63604 18.364C9.15076 21.8787 14.8492 21.8787 18.364 18.364Z" fill="currentColor" />
                                </svg>
                            </li>
                            <li className="group flex flex-row items-center justify-between relative py-2">
                                <button
                                    id="theme-toggle"
                                    type="button"
                                    className="text-gray-500 hover:scale-[105%] rounded-lg text-sm "
                                    onClick={toggleDarkMode}

                                >
                                    <svg
                                        className={`swap-off fill-current w-8 h-8 ${darkMode ? '' : 'hidden'}`}
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z"></path>


                                    </svg>
                                    <svg
                                        className={`swap-on fill-current w-8 h-8 ${darkMode ? 'hidden' : ''}`}
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"

                                    >

                                        <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z"></path>
                                    </svg>
                                </button>
                            </li>


                        </ul>





                    </div>


                </div>
            </nav >


        </>


    )
}
export default Navbar
