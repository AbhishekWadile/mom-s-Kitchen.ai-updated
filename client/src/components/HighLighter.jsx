import React from 'react'
// import BoxReveal from './Boxreveal'
import Just from './Just'

function HighLighter() {
  return (
    <div data-scroll data-scroll-section data-scroll-speed="-.1" className='w-full text-[4vh] text-white font-[poppins] bg-cooking bg-cover relative top-9 h-[90vh] flex justify-center items-center'>
      <div className='w-[100%] flex justify-center items-center h-[60vh] '>
         {/* <BoxReveal/> */}
         <Just/>
      </div>
    </div>
  )
}

export default HighLighter
