import React from 'react'
import Card1 from './Card1'
import Card2 from './Card2'
import Card3 from './Card3'

function Services() {
  return (
    <div data-scroll data-scroll-section data-scroll-speed=".2" className='pt-9 bg-white z-[999] w-full text-[poppins] h-[210vh] flex flex-col justify-around items-center'>
        <div className='w-[50%] h-[200vh] flex flex-col justify-center gap-20 items-center'>
            <h1 className='text-3xl font-semibold'>Our Services</h1>
            <Card1 />
            <Card2 />
            <Card3 />
        </div>
    </div>
  )
}

export default Services
