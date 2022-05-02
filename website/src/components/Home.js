import React from 'react';
import RSVPModal from './Modal';
const SaveTheDate = function () {
  return (
    <div>
      <div className="container flex items-center justify-center px-8">
        <div>
          <h1 className="my-16 text-center text-gray-500 text-7xl md:text-9xl">Resonant, dwelling, unfading</h1>
          <h1 className="mb-2 text-xl font-bold text-center text-gray-400">Wednesday, May 11 5-7pm</h1>
          <h1 className="mb-8 text-xl font-bold text-center text-gray-400">Thursday, May 12 1-3pm, 5-7pm</h1>
          <h1 className="mb-16 text-xl font-bold text-center text-gray-400">
            <a target="_blank" rel="noreferrer noopener" href="https://goo.gl/maps/tkoG55vvNSPdyni3A">
              Center for New Music and Audio Technologies, CNMAT Main Room
              <br />
              1750 Arch Street, Berkeley
            </a>
          </h1>
          <div className="md:px-32 lg:px-64">
            <div className="mb-8 text-xl text-gray-400">
              On May 11 and 12, come experience <em>Resonant, dwelling, unfading</em>, a sound and light installation at
              the Center for New Music and Audio Technologies (CNMAT).
            </div>
            <div className="mb-8 text-xl text-gray-400">
              Designed for full-body interaction, <em>Resonant, dwelling, unfading</em> envelopes you in fabric and
              light, as shadows cast by your body in motion resound spatially in CNMAT’s 16-speaker array.
            </div>
            <div className="mb-2 text-gray-600">
              Please reach out to <a href="mailto:resonantdwelling@gmail.com">resonantdwelling@gmail.com</a> with any
              questions.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SaveTheDate;
