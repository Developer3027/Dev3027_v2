import React from 'react';
import Sidebar from '../nav/Sidebar';
import Navbar from '../nav/Navbar';
import Footer from '../Footer';

const MainLayout = (props) => {
  const { children } = props;

  return (
    <div className='block w-screen bg-slate-900'>
      <Navbar />
      <div className='flex flex-col items-center justify-center'>
        <Sidebar />
        {children}
      </div>
        <Footer />
    </div>
  );
}

export default MainLayout;

