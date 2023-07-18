import React from 'react'

const ExerciseTwo = () => {
  const animals = ['dog', 'cat', 'chicken', 'cow', 'sheep', 'horse'];

  return (
    <div className="flex flex-col w-1/2 gap-1 my-0 mx-auto">
        {animals.map(animal => (
          <>
            <div className="p-5 border-solid border border-slate-500">
              {animal}
            </div>
          </>
        ))}
    </div>
  )
}

export default ExerciseTwo