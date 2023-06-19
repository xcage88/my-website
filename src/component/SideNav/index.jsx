import {React, useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faHouseChimney, faBriefcase, faListCheck, faEnvelope } from '@fortawesome/free-solid-svg-icons'

function SideNav() {

    // state
    const [nav, setNav] = useState(false)

    // handling
    const handlingNav = () => {
        setNav(!nav)
        console.log('state change')
    }

    return (
        <>
            <FontAwesomeIcon icon={faBars} onClick={handlingNav} className='absolute top-4 right-4 z-[99] md:hidden'/>
            {nav ? (
                <div className='fixed w-full h-screen bg-white/90 flex flex-col justify-center items-center z-20'>
                    <a onClick={handlingNav} href="#main" className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'>
                        <FontAwesomeIcon icon={faHouseChimney} size='20'/>
                        <span className='pl-4'>Home</span>
                    </a>
                    <a onClick={handlingNav} href="#experience" className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'>
                        <FontAwesomeIcon icon={faBriefcase} size='20'/>
                        <span className='pl-4'>Experience</span>
                    </a>
                    <a onClick={handlingNav} href="#portofolio" className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'>
                        <FontAwesomeIcon icon={faListCheck} size='20'/>
                        <span className='pl-4'>Portofolio</span>
                    </a>
                    <a onClick={handlingNav} href="#contact" className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'>
                        <FontAwesomeIcon icon={faEnvelope} size='20'/>
                        <span className='pl-4'>Contact</span>
                    </a>
                </div>
            ) : null}
            <div className='md:block hidden fixed top-[25%] z-10'>
                <div className='flex flex-col'>
                    <a href="#main" className='rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'>
                        <FontAwesomeIcon icon={faHouseChimney}/>
                    </a>
                    <a href="#experience" className='rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'>
                        <FontAwesomeIcon icon={faBriefcase}/>
                    </a>
                    <a href="#portofolio" className='rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'>
                        <FontAwesomeIcon icon={faListCheck}/>
                    </a>
                    <a href="#contact" className='rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'>
                        <FontAwesomeIcon icon={faEnvelope}/>
                    </a>
                </div>
            </div>
        </>
    )
}

export default SideNav