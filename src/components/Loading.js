import React from 'react'
import { LOADING } from '../assets/script'

const Loading = () => {
  return (
    <div className='message flex-row-reverse"'>
      <div className='message__wrapper message__thinking message__system'>
        {LOADING}
      </div>

    </div>
  )
}

export default Loading