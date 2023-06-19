import React from 'react'

function Work({year, companyName, duration, position, description}) {
    return (
        <>
            <ol className='flex flex-col md:flex-row relative border-l border-stone-200 mt-20'>
                <li className=' ml-4'>
                    <div className='absolute w-2 h-2 bg-stone-200 rounded-full mt-1.5 -left-1.5 border-white'/>
                    <p className='flex flex-wrap gap-3 flex-row items-center justify-start text-xs md:text-sm'>
                        <span className='inline-block px-2 py-1 font-semibold text-white bg-[#001b5e] rounded-md'>{year}</span>
                        <span className='text-lg font-semibold text-[#001b5e]'>{companyName}</span>
                        <span className='my-1 text-sm font-normal leading-none text-stone-400'>{duration}</span>
                    </p>
                    <p className='text-xl mt-2 mb-2 text-[#0015be] font-bold'>{position}</p>
                    <p className='my-2 text-base font-bold text-stone-500'>{description}</p>
                </li>
            </ol>
        </>
    )
}

export default Work