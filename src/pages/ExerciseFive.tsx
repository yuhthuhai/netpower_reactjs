import React, { FormEvent, useState } from 'react'

const ExerciseFive = () => {
  const [firstName, setFirstName] = useState("First name");
  const [lastName, setLastName] = useState("Last name");
  const [fullName, setFullname] = useState(firstName + " " + lastName);

  async function handleSubmit(event: FormEvent<HTMLFormElement>){
    event.preventDefault();

    setFullname(firstName + " " + lastName);
  }

  return (
    <div className='flex flex-col w-1/4 my-0 mx-auto'>
        <form action="" onSubmit={handleSubmit} className='w-full flex flex-col gap-5 border border-solid border-black p-4 mt-8 rounded-md'>
            <input className='outline-none grow border border-solid border-slate-300 pt-2 pb-2 px-3 rounded-lg' type="text" name='first_name' placeholder='First name' onChange={(e) => setFirstName(e.target.value)}/>
            <input className='outline-none grow border border-solid border-slate-300 pt-2 pb-2 px-3 rounded-lg' type="text" name='last_name' placeholder='Last name' onChange={(e) => setLastName(e.target.value)}/>
            <button type='submit' className='rounded-lg bg-purple-500 hover:bg-purple-700 text-white font-bold pt-2 pb-2 w-1/2 my-0 mx-auto'>Submit</button>
        </form>
        <div className="result mt-4">Your full name is: {fullName}</div>
    </div>
  )
}

export default ExerciseFive