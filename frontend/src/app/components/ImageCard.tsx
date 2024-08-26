import React from 'react';
import BackpackImage4 from '@/assets/backpacks/backpack4.jpg';
import BackpackImage6 from '@/assets/backpacks/backpack6.jpg';

const ImageCard: React.FC = () => {
  return (
    <div className="relative w-[800px] h-[400px] flex justify-end items-start">
      <div className="relative w-[288px] h-[288px]">
        <img src={BackpackImage4} alt="Item 4" className="object-cover w-72 h-72 rounded-lg absolute z-10" />
        <img
          src={BackpackImage6}
          alt="Item 6"
          className="object-cover w-72 h-72 rounded-lg absolute z-20 translate-y-1/2 -translate-x-1/2"
        />
      </div>
    </div>
  );
};

export default ImageCard;
