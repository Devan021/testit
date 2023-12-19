import React from 'react';

import Header from './header';
import Footer from './footer';

type AppViewProps = {
  children: React.ReactNode;
  className?: string;
};


const AppView = ({ children }: AppViewProps) => {
  return (
      <div className="min-h-screen flex flex-col justify-between text-color">
          <Header />
          <main className="w-full bg-gray-100 flex min-h-screen h-full pt-[80px]">{children}</main>
          <Footer />
      </div>
  );
};

export default AppView;