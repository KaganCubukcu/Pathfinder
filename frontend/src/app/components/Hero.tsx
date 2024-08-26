import React from 'react';
import Carousel from './Carousel';
import ImageCard from './ImageCard';

const Hero: React.FC = () => {
  return (
    <div className="flex items-center justify-between">
      <Carousel />
      <ImageCard />
    </div>
  );
};

export default Hero;
