import React from 'react';
import Wedding from './Wedding';
import Bubbles from './Bubbles';
import './App.scss';

const App = () => {
  return (
    <>
      <div className="absolute -my-10 -z-10">
        <Bubbles />
      </div>
      <div className="container flex items-center justify-center max-w-screen-xl min-h-screen page-wrapper">
        <Wedding />
      </div>
    </>
  );
};

export default App;
