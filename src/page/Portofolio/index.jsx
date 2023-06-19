import React from 'react'
import Items from './Items'

function Portofolio() {
    return (
        <>
            <div id='portofolio' className='max-w-[1040px] m-auto md:pl-4 py-16'>
                <h1 className='text-4xl font-bold text-center text-[#001b5e]'>Portofolio</h1>
                <div className='mt-15'>
                    <Items/>
                </div>
            </div>
        </>
    )
}

export default Portofolio