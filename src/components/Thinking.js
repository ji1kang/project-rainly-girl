import React from 'react'
import { THINKING } from '../assets/script'

const Thinking = () => {
  return (
    <div className='message flex-row-reverse'>
      <div className='message__thinking message__wrapper'>
        {THINKING}
      </div>

      <div className='mx-4 w-60'>
        소녀
      </div>

    </div>
  )
}

export default Thinking