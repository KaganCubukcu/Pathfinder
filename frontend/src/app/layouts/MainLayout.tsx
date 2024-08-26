import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/shared/Header';
import Footer from '../components/shared/Footer';
import Hero from '../components/Hero';
import { HiMiniArrowTrendingDown } from 'react-icons/hi2';
import CallToAction from '../components/CallToAction';

const MainLayout: React.FC = () => {
  return (
    <div className="bg-black">
      <Header />
      <main className="container mx-auto px-6 py-4">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
