import React from 'react'
import { Icon } from '@iconify/react';

const ExerciseTwo = () => {
  const animals = ['dog', 'cat', 'chicken', 'cow', 'sheep', 'horse'];

  return (
    <div className="flex flex-col w-1/12 mt-32 gap-1 my-0 mx-auto">
        {animals.map(animal => (
          <>
            <div className="p-5 border-solid border border-slate-500 flex gap-4 items-center">
              {(animal === 'chicken') ? (<Icon icon={`streamline-emojis:chicken`} />) : (animal === 'sheep') ? (<Icon className="" icon={`streamline-emojis:ewe-2`} />) : (<Icon className="" icon={`streamline-emojis:${animal}-face`} />)}
              {/* <Icon icon={`streamline-emojis:${animal}-face`} /> */}
              <span>{animal}</span>
            </div>
          </>
        ))}
    </div>
  )
}

export default ExerciseTwo

