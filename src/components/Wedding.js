import React from 'react';
import RSVPModal from './Modal';
const SaveTheDate = function () {
  return (
    <div>
      <div className="container flex items-center justify-center px-8">
        <div>
          <h1 className="mb-2 text-xl font-bold text-center text-gray-600">Please join us</h1>
          <h1 className="mb-2 text-xl font-bold text-center text-gray-600">for the wedding of</h1>
          <h1 className="my-8 text-center text-9xl">
            Pem
            <br />
            <em>&</em>
            <br />
            Eli
          </h1>
          <h1 className="mb-2 text-xl font-bold text-center text-gray-600">7pm</h1>
          <h1 className="mb-2 text-xl font-bold text-center text-gray-600">
            <em>Ceremony</em>
          </h1>
          <h1 className="mb-8 text-xl font-bold text-center text-gray-600">
            <a target="_blank" rel="noreferrer noopener" href="https://goo.gl/maps/SyEkxt7sQyjneg6K7">
              Eagle's Point, Lands End
            </a>
          </h1>
          <h1 className="mb-2 text-xl font-bold text-center text-gray-600">8pm</h1>
          <h1 className="mb-2 text-xl font-bold text-center text-gray-600">
            <em>Reception</em>
          </h1>
          <h1 className="mb-2 text-xl font-bold text-center text-gray-600">
            <a target="_blank" rel="noreferrer noopener" href="https://g.page/greens_sf">
              Greens, Fort Mason
            </a>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default SaveTheDate;
