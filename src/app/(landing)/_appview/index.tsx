import React from 'react';

import Header from './header';
import Footer from './footer';

type AppViewProps = {
  children: React.ReactNode;
  className?: string;
  scrollEffect?: boolean;
};


const AppView = ({ children, className, scrollEffect = true }: AppViewProps) => {
  return (
      <div className="min-h-screen flex flex-col justify-between text-color">
          <div className={className}>
              <Header scrollEffect={scrollEffect} />
              <main className="w-full pt-[80px] h-full">{children}</main>
          </div>
          <Footer />
      </div>
  );
};

export default AppView;