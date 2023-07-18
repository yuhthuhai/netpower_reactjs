import React from 'react';
import { Route, Routes, Link } from 'react-router-dom';
import Home from './pages/Home';
import ExerciseOne from './pages/ExerciseOne';
import ExerciseTwo from './pages/ExerciseTwo';
import ExerciseThree from './pages/ExerciseThree';
import ExerciseFour from './pages/ExerciseFour';
import ExerciseFive from './pages/ExerciseFive';
import ExerciseSix from './pages/ExerciseSix';
import ExerciseSeven from './pages/ExerciseSeven';

function App() {
  return (
    <>
      <nav>
        <ul className='flex gap-2 w-full justify-center p-10 bg-purple-700 text-white font-semibold'>
          <li className="navlink-hover">
            <Link to="/">Home</Link>
          </li>
          <li className="navlink-hover">
            <Link to="/ex1">Exercise 1</Link>
          </li>
          <li className="navlink-hover">
            <Link to="/ex2">Exercise 2</Link>
          </li>
          <li className="navlink-hover">
            <Link to="/ex3">Exercise 3</Link>
          </li>
          <li className="navlink-hover">
            <Link to="/ex4">Exercise 4</Link>
          </li>
          <li className="navlink-hover">
            <Link to="/ex5">Exercise 5</Link>
          </li>
          <li className="navlink-hover">
            <Link to="/ex6">Exercise 6</Link>
          </li>
          <li className="navlink-hover">
            <Link to="/ex7">Exercise 7</Link>
          </li>
          <li className="navlink-hover">
            <Link to="/">Exercise 8</Link>
          </li>
          <li className="navlink-hover">
            <Link to="/">Exercise 9</Link>
          </li>
          <li className="navlink-hover">
            <Link to="/"></Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/ex1' element={<ExerciseOne />}/>
        <Route path='/ex2' element={<ExerciseTwo />}/>
        <Route path='/ex3' element={<ExerciseThree />}/>
        <Route path='/ex4' element={<ExerciseFour />}/>
        <Route path='/ex5' element={<ExerciseFive />}/>
        <Route path='/ex6' element={<ExerciseSix />}/>
        <Route path='/ex7' element={<ExerciseSeven />}/>
      </Routes>
    </>
  );
}

export default App;
