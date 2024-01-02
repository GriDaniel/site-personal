import React from 'react'

function AboutT() {
    return (
        <div className='min-h-screen min-w-screen overflow-hidden flex justify-center overflow-x-hidden bg-blue-400'>
            <div className='max:w-[1920px] w-screen md:h-[1008px] min-h-[1008px] bg-black flex items-center justify-center md:flex-row flex-col'>

                <div className='h-[400px] md:w-[60%] md:h-[500px] w-[80%]  flex md:justify-start md:items-start items-end'>
                    <h1 className='text-[#DADDE2] md:ml-[20px] lg:ml-[100px] sm:text-8xl text-7xl font-satoshi font-bold'>About</h1>
                </div>

                <div className='h-full w-[80%]  flex flex-col items-center justify-center'>
                    <div className='h-[250px] md:block hidden w-full '>

                    </div>
                    <div className='min-h-[500px] w-full  flex flex-col justify-between'>
                        <p className='text-[#DADDE2] mb-auto lg:mr-[100px] md:mr-[50px] font-satoshi text-3xl'>
                            I am driven by innovation, aiming to merge computer engineering and web design to develop impactful projects. My focus lies in creating initiatives that address societal needs by harnessing technology for substantive and meaningful change. I am currently dedicated to building a platform or system aimed at simplifying the learning process for STEM subjects.
                        </p>
                        <div className='h-[250px] w-full flex md:mt-0 mt-[50px] items-start md:flex-row flex-col'>
                            <p className='text-[#DADDE2] md:mt-auto mt-[20px] mr-auto font-satoshi text-5xl font-bold italic'>Passion is Key.</p>
                            <div className='h-full w-[300px] flex md:flex-row md:justify-end mb-auto items-end mr-[50px] lg:mr-[100px]'>
                                <a href=''>
                                    <img className='hover:scale-105 w-[100px] h-[100px]' src="linkedinLOGO.png" alt="" />
                                </a>
                                <a href=''> 
                                    <img className='hover:scale-105 w-[100px] h-[100px]' src="gitlogo.png" alt="" />
                                </a>
                            </div>
                        </div>


                    </div>
                    <div className='h-[250px] w-full flex'>

                    </div>
                </div>


            </div>

        </div>
    )
}

export default AboutT