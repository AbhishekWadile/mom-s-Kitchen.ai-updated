import React from 'react'

function Card2() {
  return (
    <div data-aos="fade-left" data-aos-duration="1000" data-aos-once="true" className='w-[70vw] shadow-xl h-[90vh] font-[poppins] flex gap-16 px-6 justify-center items-center rounded-xl'>
        <div className='w-[60vw] h-[50vh] flex flex-col  gap-10 justify-center items-center'>
            <h1 className='text-4xl font-semibold'>Fresh Groceries, Delivered Fast.</h1>
            <p className='pl-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut praesentium officiis, nemo facere ratione incidunt itaque iusto impedit ea, optio accusamus quod quo sapiente esse dolore corrupti! Voluptatum, repudiandae. Voluptate dicta corporis voluptatem, voluptas </p>
        </div>
        <div className='bg-ser-2 rounded-xl w-[40vw] bg-cover h-[50vh]'></div>
    </div>
  )
}

export default Card2
