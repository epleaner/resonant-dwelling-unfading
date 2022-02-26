import React from 'react';
import SaveTheDate from './SaveTheDate';
import Bubbles from './Bubbles';
import './App.scss';

const App = () => {
  return (
    <>
      <div className="absolute -z-10">
        <Bubbles />
      </div>
      <div className="container flex items-center justify-center max-w-screen-xl min-h-screen page-wrapper">
        <SaveTheDate />
      </div>
      {/* <div className="fixed min-w-full text-base text-center bottom-2">🍠</div> */}
    </>
  );
};

export default App;
