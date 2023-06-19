import React from 'react'
import Work from './Work'

const data = [
    {
        year: 2019,
        companyName: "Arnasa Technology",
        duration: '3 Month',
        position: 'Frontend Developer',
        description:
        `I was working as a Frontend developer in Arnasa technology. 
        I worked on many projects like E-commerce website and other web applications.`
    }
]

function Experience() {
    return (
        <>
            <div id='experience' className='max-w-[1040px] m-auto md:pl-20 p-4 py-16'>
                <h1 className='text-4xl font-bold text-center text-[#001b5e]'>Experience</h1>
                {data.map((item, id) => {
                    return (
                        <Work 
                            key={id}
                            year={item.year}
                            companyName={item.companyName}
                            duration={item.duration}
                            position={item.position}
                            description={item.description}
                        />
                    )
                })}
            </div>
        </>
    )
}

export default Experience