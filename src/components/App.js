import React from 'react';
import SaveTheDate from './SaveTheDate';
import './App.scss';

const App = () => {
  return (
    <>
      <div className="container flex items-center justify-center max-w-screen-xl min-h-screen page-wrapper">
        <SaveTheDate />
      </div>
      {/* <div className="fixed min-w-full text-base text-center bottom-2">🍠</div> */}
    </>
  );
};

export default App;
