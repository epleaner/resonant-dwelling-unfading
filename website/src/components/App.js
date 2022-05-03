import React from 'react';
import Home from './Home';
import Animation from './Animation';
import './App.scss';

const App = () => {
  return (
    <div className="relative">
      <div className="absolute">
        <Animation />
      </div>
      <div className="container relative flex items-center justify-center max-w-screen-xl min-h-screen page-wrapper">
        <Home />
      </div>
    </div>
  );
};

export default App;
