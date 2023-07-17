import React, { useState } from 'react'

const ExerciseFour = () => {
  const [clicks, setClicks] = useState(0);

  return (
    <div className='flex flex-col justify-center items-center gap-10 m-10'>
        <span className='text-center'>Button has been clicked: {clicks} times</span>
        <button className='py-5 px-8 bg-purple-500 rounded-lg hover:bg-purple-700/90 transition-opacity' onClick={() => {setClicks(prev => prev + 1)}}>Click me</button>
    </div>
  )
}

export default ExerciseFour