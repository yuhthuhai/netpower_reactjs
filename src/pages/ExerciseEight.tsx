import React, { useState, useEffect } from 'react'

const useInterval = (callback: () => void, delay: number) => {
    useEffect(() => {
      const interval = setInterval(callback, delay);
      return () => clearInterval(interval);
    }, [callback, delay]);
  };

const ExerciseEight = () => {

  const slides = [
    "https://kenwheeler.github.io/slick/img/fonz1.png",
    "https://kenwheeler.github.io/slick/img/fonz2.png",
    "https://kenwheeler.github.io/slick/img/fonz3.png",
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useInterval(() => {
    if (currentSlide >= slides.length - 1) {
        setCurrentSlide(0);
        console.log(currentSlide);
    } else {
        setCurrentSlide(currentSlide + 1);
        console.log(currentSlide);
    }
  }, 5000);


  return (
    <div className='slides-container w-fit my-0 mx-auto relative mt-20'>
        <img className='object-cover rounded-lg ease-out delay-100' src={slides[currentSlide]} alt="" />
        <div className="absolute right-0 top-[40%] bg-black w-fit h-fit py-5">
            <button className='text-white' onClick={() => {
                if (currentSlide >= slides.length - 1) {
                    setCurrentSlide(0);
                    console.log(currentSlide);
                } else {
                    setCurrentSlide(currentSlide + 1);
                    console.log(currentSlide);
                }
            }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m12 30l12-14L12 2"/></svg>
            </button>
        </div>
        <div className="absolute left-0 top-[40%] bg-black w-fit h-fit py-5">
            <button className='text-white' onClick={() => {
                if (currentSlide <= 0) {
                    setCurrentSlide(2);
                } else {
                    setCurrentSlide(currentSlide - 1);
                }
            }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 30L8 16L20 2"/></svg>
            </button>
        </div>
    </div>
  )
}

export default ExerciseEight