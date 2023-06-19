import React from 'react'
import SideNav from '../../component/SideNav'
import wisuda from './assets/wisuda.jpg'
import { TypeAnimation } from 'react-type-animation'
import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa'
import { FaHtml5, FaCss3, FaJs, FaReact, FaBootstrap } from 'react-icons/fa'
import { SiTailwindcss } from 'react-icons/si'

function Home() {
    return (
        <>
            <SideNav/>
            <div id='main'>
                <img src={wisuda} alt="profile" className='w-full h-screen object-cover object-center'/>
                <div className='w-full h-screen absolute bg-white/50 top-0 left-0'>
                    <div className='max-w-[700px] m-auto h-full w-full flex flex-col justify-center lg:items-start items-center'>
                        <h1 className='sm:text-5xl text-4xl font-bold text-gray-800'>Hello, I'am Hovi Sohibul Wafa</h1>
                        <h2 className='flex sm:text-3xl text-2xl pt-4 text-gray-800'>
                            I'am a
                            <TypeAnimation
                                sequence={[
                                    'Developer', // Types 'One'
                                    2000, // Waits 1s
                                    'Tech Enthusiast', // Deletes 'One' and types 'Two'
                                    2000, // Waits 2s
                                    'Coder', // Types 'Three' without deleting 'Two'
                                    2000
                                ]}
                                wrapper="div"
                                cursor={true}
                                repeat={Infinity}
                                style={{ fontSize: '1em', display: 'inline-block', paddingLeft: '5px' }}
                            />
                        </h2>
                        <div className='flex justify-around pt-6 max-w-[200px] w-full'>
                            <a href="https://github.com/xcage88" target='_blank'>
                                <FaGithub className='cursor-pointer' size={20}/>
                            </a>
                            <a href="https://www.instagram.com/hovisohibul/" target='_blank'>
                                <FaInstagram className='cursor-pointer' size={20}/>
                            </a>
                            <a href="https://www.linkedin.com/in/hovi-sohibul-wafa-1287001b5/" target='_blank'>
                                <FaLinkedin className='cursor-pointer' size={20}/>
                            </a>
                        </div>
                        <div className='flex justify-between pt-6 max-w-[200px] w-full'>
                            <FaHtml5 className='cursor-pointer' size={20}/>
                            <FaCss3 className='cursor-pointer' size={20}/>
                            <FaJs className='cursor-pointer' size={20}/>
                            <FaBootstrap className='cursor-pointer' size={20}/>
                            <FaReact className='cursor-pointer' size={20}/>
                            <SiTailwindcss className='cursor-pointer' size={20}/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home