import React from 'react';

import AppView from './_appview';

const AppPrivateLayout = ({ children }: { children: React.ReactNode }) => {
  return (
      <AppView>
          <div className="w-full h-max container mx-auto flex flex-col min-h-screen">
              { children }
          </div>
      </AppView>
  );
};

export default AppPrivateLayout;