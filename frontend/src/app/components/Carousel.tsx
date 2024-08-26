import React, { useState, useEffect } from 'react';
import BackpackImage1 from '@/assets/backpacks/backpack1.jpg';
import BackpackImage2 from '@/assets/backpacks/backpack2.jpg';
import BackpackImage3 from '@/assets/backpacks/backpack3.jpg';
import BackpackImage4 from '@/assets/backpacks/backpack4.jpg';
import { IoIosRadioButtonOff, IoIosRadioButtonOn } from 'react-icons/io';

const images = [
  { src: BackpackImage1, alt: 'Item 1', price: '$29.99' },
  { src: BackpackImage2, alt: 'Item 2', price: '$39.99' },
  { src: BackpackImage3, alt: 'Item 3', price: '$49.99' },
  { src: BackpackImage4, alt: 'Item 4', price: '$59.99' },
];

const Carousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full max-w-[800px] bg-black h-[50vh] rounded-lg shadow-lg">
      <section className="p-4">
        <div className="relative w-full h-[45vh]">
          <div className="relative w-full h-full overflow-hidden">
            <div
              className="absolute w-full h-full flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {images.map((image, index) => (
                <div key={index} className="carousel-item w-full h-full flex-shrink-0 relative">
                  <div className="w-full h-full bg-neutral-50 rounded-md overflow-hidden">
                    <img src={image.src} alt={image.alt} className="object-cover w-full h-full" />
                    <div className="p-4 absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white">
                      <h2 className="text-xl">{image.alt}</h2>
                      <p className="text-lg">{image.price}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="absolute inset-x-0 bottom-4 flex justify-center space-x-2">
              {images.map((_, index) => (
                <button key={index} onClick={() => setCurrentIndex(index)} className="cursor-pointer">
                  {currentIndex === index ? (
                    <IoIosRadioButtonOn className="text-white" />
                  ) : (
                    <IoIosRadioButtonOff className="text-gray-400" />
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Carousel;
