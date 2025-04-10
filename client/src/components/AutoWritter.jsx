import React from 'react'
// import {useTypewriter,Cursor} from 'react-simple-typewriter'
import { Typewriter } from 'react-simple-typewriter'

function AutoWritter() {
  return (
    <h1 style={{ margin: 'auto 0', fontWeight: 'normal' }} className='flex px-3 items-center h-full'>
        <span style={{ color: 'gray', fontWeight: 'bold' }} className='text-2xl'>
          <Typewriter
            words={['Garnished with caramelized onions, fresh coriander, and toasted cashews for a rich, fragrant look.', 'Long, fluffy basmati rice mixed with colorful vegetables like carrots, peas, cauliflower, and green beans.', 'Golden, charred paneer cubes marinated in spiced yogurt, skewered with colorful bell peppers and onions.']}
            loop={5}
            cursor
            cursorStyle='|'
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </span>
      </h1>
  )
}

export default AutoWritter
