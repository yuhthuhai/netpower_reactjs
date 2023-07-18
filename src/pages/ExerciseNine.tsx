import React, { useEffect, useState } from 'react'

interface User {
    id: number,
    first_name: string,
    last_name: string,
    avatar: string,
    employment: {
        title: string,
        key_skill: string,
    }
}

const ExerciseNine = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [isLoaded, setLoaded] = useState(false);

  useEffect(() => {
    fetchData();
  }, [])

  async function fetchData() {
    const res = await fetch('https://random-data-api.com/api/users/random_user?size=10');

    const result = await res.json();
    setUsers(result);
    setLoaded(true);
  }

  return (
    <div className='w-fit bg-green-300/25 flex px-4 py-3 gap-3 flex-wrap my-0 mx-auto justify-evenly'>
        {!isLoaded ? (
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M12,4a8,8,0,0,1,7.89,6.7A1.53,1.53,0,0,0,21.38,12h0a1.5,1.5,0,0,0,1.48-1.75,11,11,0,0,0-21.72,0A1.5,1.5,0,0,0,2.62,12h0a1.53,1.53,0,0,0,1.49-1.3A8,8,0,0,1,12,4Z"><animateTransform attributeName="transform" dur="0.75s" repeatCount="indefinite" type="rotate" values="0 12 12;360 12 12"/></path></svg>
        ) : (
            <>
                {users.map((user) => (
                    <div key={user.id} className="card bg-white px-4 py-8 rounded-xl flex flex-col gap-6 drop-shadow-md">
                        <img src={user.avatar} alt="" />
                        <div className="full-name font-extrabold text-lg">{user.first_name} {user.last_name}</div>
                        <div className="job-title">{user.employment.title}</div>
                    </div>
                ))}
            </>
        )}
    </div>
  )
}

export default ExerciseNine