import React from 'react';
import RSVPModal from './Modal';
const SaveTheDate = function () {
  return (
    <div>
      <div className="container flex items-center justify-center px-8 pt-8">
        <div>
          <h1 className="mb-8 text-center text-9xl">
            Save
            <br />
            <em>the</em>
            <br />
            Date
          </h1>
          <h1 className="mb-2 text-xl font-bold text-center">pem and eli</h1>
          <h1 className="mb-2 text-xl font-bold text-center">are getting married</h1>
          <h1 className="mb-2 text-xl font-bold text-center">april 2nd, 2022</h1>
          <h1 className="mb-2 text-xl font-bold text-center">san francisco</h1>
          <h1 className="mb-8 text-xl font-bold text-center">
            <em>invitation forthcoming</em>
          </h1>
          <div className="flex justify-center">
            <RSVPModal />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SaveTheDate;
