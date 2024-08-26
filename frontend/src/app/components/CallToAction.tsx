import React from 'react';
import { HiMiniArrowTrendingDown } from 'react-icons/hi2';

const CallToAction: React.FC = () => {
  return (
    <div className="flex flex-col p-2 pr-52 justify-end items-end">
      <span className="font-bold flex flex-col justify-center items-center">
        <HiMiniArrowTrendingDown className="text-[100px] rotate-180 text-white" />
        <span className="text-2xl text-white">Now your turn</span>
      </span>
    </div>
  );
};

export default CallToAction;
