import React from 'react'

const ExerciseTwo = () => {
  const animals = ['dog', 'cat', 'chicken', 'cow', 'sheep', 'horse'];

  return (
    <div className="flex flex-col">
        {animals.map(animal => (
          <>
            <div className="p-5 border-solid border-1 border-slate-500">
              {animal}
            </div>
          </>
        ))}
    </div>
  )
}

export default ExerciseTwo