import React from 'react';
import RSVPModal from './Modal';
const SaveTheDate = function () {
  return (
    <div>
      <div className="container flex items-center justify-center px-8">
        <div>
          <h1 className="mb-8 text-center text-9xl">
            Save
            <br />
            <em>the</em>
            <br />
            Date
          </h1>
          <h1 className="mb-2 text-xl font-bold text-center text-gray-600">Pem & Eli</h1>
          <h1 className="mb-2 text-xl font-bold text-center text-gray-600">are getting married</h1>
          <h1 className="mb-2 text-xl font-bold text-center text-gray-600">April 2nd, 2022</h1>
          <h1 className="mb-8 text-xl font-bold text-center text-gray-600">San Francisco</h1>
          <h1 className="mb-8 text-xl font-bold text-center text-gray-600">
            <em>invitation forthcoming</em>
          </h1>
          <div className="flex justify-center mt-10">
            <RSVPModal />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SaveTheDate;
