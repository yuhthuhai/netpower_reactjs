import React, { useState, useEffect } from 'react'

const ExerciseSeven = () => {
    const [searchValue, setSearchValue] = useState("");
    const [filteredArray, setFilteredArray] = useState<string[]>([]);

    const array = [
        "Banana",
        "Apple",
        "Orange",
        "Mango",
        "Pineapple",
        "Watermelon"
    ]

    useEffect(() => {
        setFilteredArray(array.filter(ele => ele.toLowerCase().includes(searchValue.toLowerCase())))
    }, [searchValue])
    

  return (
    <div className='w-1/3 flex flex-col my-0 mx-auto'>
        <input type="text" className="search-bar grow outline-none border border-solid border-slate-200 px-6 py-4 mt-32" placeholder='Search...' value={searchValue} onChange={(e) => setSearchValue(e.target.value)}/>
        <div className='text-center space-y-6 mt-10'>
            {filteredArray.map(ele => (
                <div>{ele}</div>
            ))}
        </div>
    </div>
  )
}

export default ExerciseSeven