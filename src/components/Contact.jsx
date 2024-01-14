import React from 'react'

function Contact() {
    return (
        <div className='min-w-screen overflow-x-hidden overflow-hidden flex justify-center items-center dark:bg-black bg-[#F4F4F4]'>
            <div className='md:pt-[50px] pt-[200px] pb-[25px] min-w-screen min-h-[300px] overflow-x-hidden overflow-hidden flex dark:bg-black flex-col bg-[#F4F4F4]'>
                <div className='h-[200px] w-full  flex items-start justify-center'>
                    <h1 id="contact" className='dark:text-white text-black font-satoshi text-5xl'>Stay in touch.</h1>

                </div>
                <div className='max:w-[1920px]  w-screen min-h-[250px]  flex items-center justify-center md:flex-row flex-col'>
                    <div className='md:w-[50%]  w-[85%] h-full flex justify-center items-center'>
                        <div className='min-h-[80%] md:w-[220px] w-full dark:text-white text-black'>
                            <p className='font-satoshi text-xl'>Thank you for visiting my website. <br /><br /> Feel free to reach out — dan.grioliveira@gmail.com</p>

                        </div>
                    </div>
                    <div className='w-[50%] md:mt-0 mt-[75px] h-full flex flex-row justify-center'>
                        <div className='h-full w-[220px] flex flex-row md:justify-end justify-center'>
                            <div className='h-full w-[40px] flex flex-col justify-center items-center'>
                                <div className='h-full w-full flex flex-col justify-end gap-5'>
                                    <a href='https://www.linkedin.com/in/dangoliveira/' target='blank' className='w-[40px] h-[40px] dark:block hidden'>
                                        <img id="myImage" className='hover:scale-105 w-full h-full' src="https://github.com/GriDaniel/site-personal/blob/main/public/images/linked-light.png?raw=true" />
                                    </a>
                                    <a href='https://www.linkedin.com/in/dangoliveira/' target='blank' className='w-[40px] h-[40px] dark:hidden dark'>
                                        <img id="myImage" className='hover:scale-105 w-full h-full' src="https://github.com/GriDaniel/site-personal/blob/main/public/images/linked-dark.png?raw=true" />
                                    </a>
                                    <a href='https://github.com/GriDaniel' target='blank' className='w-[40px] h-[40px] dark:block hidden'>
                                        <img className='hover:scale-105 w-full h-full' src="https://github.com/GriDaniel/site-personal/blob/main/public/images/git-light.png?raw=true" />
                                    </a>
                                    <a href='https://github.com/GriDaniel' target='blank' className='w-[40px] h-[40px] dark:hidden block'>
                                        <img className='hover:scale-105 rounded-full  w-full h-full' src="https://github.com/GriDaniel/site-personal/blob/main/public/images/git-dark.png?raw=true" />
                                    </a>
                                    <a href="">
                                        <svg className='dark:block hover:scale-105 hidden w-[40px] h-[40px]' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" id="mail"><path fill="#ffffff" d="M16,14.81,28.78,6.6A3,3,0,0,0,27,6H5a3,3,0,0,0-1.78.6Z" class="color231f20 svgShape"></path><path fill="#ffffff" d="M16.54,16.84h0l-.17.08-.08,0A1,1,0,0,1,16,17h0a1,1,0,0,1-.25,0l-.08,0-.17-.08h0L2.1,8.26A3,3,0,0,0,2,9V23a3,3,0,0,0,3,3H27a3,3,0,0,0,3-3V9a3,3,0,0,0-.1-.74Z" class="color231f20 svgShape"></path></svg>
                                        <svg className='dark:hidden hover:scale-105 block w-[40px] h-[40px]' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" id="mail"><path fill="#000000" d="M16,14.81,28.78,6.6A3,3,0,0,0,27,6H5a3,3,0,0,0-1.78.6Z" class="color231f20 svgShape"></path><path fill="#000000" d="M16.54,16.84h0l-.17.08-.08,0A1,1,0,0,1,16,17h0a1,1,0,0,1-.25,0l-.08,0-.17-.08h0L2.1,8.26A3,3,0,0,0,2,9V23a3,3,0,0,0,3,3H27a3,3,0,0,0,3-3V9a3,3,0,0,0-.1-.74Z" class="color231f20 svgShape"></path></svg>
                                    </a>

                                </div>
                            </div>

                        </div>
                    </div>

                </div>
                <div className='w-full h-[50px] flex justify-center items-center md:mt-0 mt-[50px]'>
                    <p className='font-satoshi dark:text-white text-black'> © 2024 All Rights Reserved.</p>
                </div>

            </div>

        </div>
    )
}

export default Contact
