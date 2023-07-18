import React from 'react'

const ExerciseSix = () => {
    const JSONinput = [
        {
            id: '1',
            setup: "What's the best thing about a Boolean?",
            punchline: "Even if you're wrong, you're only off by a bit"
        },
        {
            id: '2',
            setup: 'Why do programmers wear glasses?',
            punchline: 'Because they need to C#'
        }
    ]


  return (
    <div className='w-2/3 bg-green-300/25 flex px-4 py-3 gap-3 flex-wrap my-0 mx-auto'>
        {JSONinput.map(e => (
            <div key={e.id} className="bg-white w-1/4 space-y-6 py-6 px-4 text-center rounded-lg">
                <h2 className='text-2xl font-bold'>{e.setup}</h2>
                <div>{e.punchline}</div>
            </div>
        ))}
    </div>
  )
}

export default ExerciseSix