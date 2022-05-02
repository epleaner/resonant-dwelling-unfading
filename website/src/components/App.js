import React from 'react';
import Home from './Home';
import Bubbles from './Bubbles';
import './App.scss';

const App = () => {
  return (
    <>
      <div className="absolute -my-10">
        <Bubbles />
      </div>
      <div className="container relative flex items-center justify-center max-w-screen-xl min-h-screen page-wrapper">
        <Home />
      </div>
    </>
  );
};

export default App;
