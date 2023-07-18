import React, { useState } from 'react'

const ExerciseThree = () => {
  const [apple, setApple] = useState(false);
  const [banana, setBanana] = useState(false);
  const [tea, setTea] = useState(false);
  const [coffee, setCoffee] = useState(false);

  return (
    <div className='flex flex-col w-fit gap-10 my-0 mx-auto mt-10'>
        <label htmlFor="">
            <input checked={apple} type="checkbox" name="apple" onChange={(e) => {setApple(e.target.checked)}} id="apple" /> Apple
        </label>
        <label htmlFor="">
            <input checked={banana} type="checkbox" name="banana" onChange={(e) => {setBanana(e.target.checked)}} id="banana" /> Banana
        </label>
        <label htmlFor="">
            <input checked={tea} type="checkbox" name="tea" onChange={(e) => {setTea(e.target.checked)}} id="tea" /> Tea
        </label>
        <label htmlFor="">
            <input checked={coffee} type="checkbox" name="coffee" onChange={(e) => {setCoffee(e.target.checked)}} id="coffee" /> Coffee
        </label>
        <div className="result">
            Checked items are: 
            <ul>
                <li>{apple && (<span>Apple</span>)}</li>
                <li>{banana && (<span>Banana</span>)}</li>
                <li>{tea && (<span>Tea</span>)}</li>
                <li>{coffee && (<span>Coffee</span>)}</li>
            </ul>
        </div>
    </div>
  )
}

export default ExerciseThree