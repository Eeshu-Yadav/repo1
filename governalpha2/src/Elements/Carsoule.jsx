import React from 'react'
import { useState, useEffect } from 'react';
import { GrFormPrevious } from "react-icons/gr";
import { GrFormNext } from "react-icons/gr";
import { Link } from 'react-router-dom';

const Carsoule = ({ schemes }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [items, setItems] = useState([]);

  useEffect(() => {
    // Duplicate the items to make an infinite loop illusion
    setItems([...schemes, ...schemes]);

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % schemes.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [schemes]);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % schemes.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + schemes.length) % schemes.length);
  };

  return (
    <div className="relative max-w-[70rem]">
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-500"
          style={{ transform: `translateX(-${currentIndex * 28.8}%)` }}
        >
{items.map((scheme, index) => (
  <Link key={index}  to={`/scheme/${scheme.id}`}>
  <div 
    
    className="px-5 pt-4 pb-3 gap-1 rounded-md bg-richblack-800 mx-5 flex justify-center  flex-col shadow-inner shadow-blue-800"
    style={{
                backgroundColor: 'rgba(255, 255, 224, 0.5)', // Light yellow with transparency
                backdropFilter: 'blur(5px)', // Blur effect
                border: '2px solid #FFD700', // Gold border
                borderRadius: '0.5rem' // Rounded corners
              }}
  >
    <img 
      className="aspect-[6/3] object-fill min-w-[15rem] hover:scale-105 rounded-md transform transition-all duration-500 block hover:shadow-blue-100 hover:shadow-[-1px_-1px_55px_-5px]" 
      src={scheme.image} 
      alt={`Carousel Image ${index + 1}`} 
    />
    <p className='text-yellow-50 font-semibold'>
      {scheme.title.substring(0, 25) + "..."}
    </p>
    <p className='text-richblack-50 text-sm'>
      {scheme.longDescription.substring(0, 60) + "..."}
    </p>
  </div></Link>
))}

        </div>
      </div>
      <button
        className="absolute top-1/2 left-[-1rem] transform -translate-y-1/2 bg-neutral-300 shadow-lg rounded-full p-2"
        onClick={handlePrev}
      >
        <GrFormPrevious className='text-[2rem] text-blue-700 font-bold' />
      </button>
      <button
        className="absolute top-1/2 right-[-1rem] transform -translate-y-1/2 bg-neutral-300 shadow-lg rounded-full p-2"
        onClick={handleNext}
      >
        <GrFormNext className='text-[2rem] text-blue-700 font-bold' />
      </button>
    </div>
  )
}

export default Carsoule;
