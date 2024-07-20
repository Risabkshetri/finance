import React from 'react';
import { Login, Navbar, Footer } from '../index';

const LoginLayout = () => {
  return (
    <div>
      <Navbar />
      <main className="flex-grow flex items-center justify-center p-4 sm:p-6 md:p-8">
        <Login />
      </main>
      <Footer />
    </div>
  );
};

export default LoginLayout;