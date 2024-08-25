import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/shared/Header';
import Footer from '../components/shared/Footer';

const MainLayout: React.FC = () => {
  return (
    <>
      <Header />
      <main className="container mx-auto px-6 py-4">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default MainLayout;
