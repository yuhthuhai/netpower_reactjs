import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import ExerciseOne from './pages/ExerciseOne';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/ex1' element={<ExerciseOne />}/>
      </Routes>
    </>
  );
}

export default App;
