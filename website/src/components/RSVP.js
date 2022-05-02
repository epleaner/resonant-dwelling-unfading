import React from 'react';

const RSVP = function () {
  return (
    <>
      <div className="container flex items-center justify-center px-10">
        <form name="savethedate-rsvp" method="post">
          <input type="hidden" name="form-name" value="savethedate-rsvp" />
          <div className="mb-6">
            <label htmlFor="name" className="inline-block mb-2 text-xl text-gray-700">
              Name(s)
            </label>
            <input
              type="text"
              className="w-full px-10 py-4 m-0 mb-10 text-base font-normal text-gray-700 transition ease-in-out bg-white border-b border-gray-300 border-solid bg-clip-padding focus:text-gray-700 focus:bg-white active:border-none active:outline-none focus:border-none focus:outline-none focus-visible:border-none"
              id="name"
              name="name"
              aria-describedby="nameHelp"
              placeholder=""
            />
          </div>
          <div className="mb-6">
            <label htmlFor="answer" className="inline-block mb-2 text-xl text-gray-700">
              Will you be able to join us?
            </label>
            <input
              type="text"
              className="w-full px-10 py-4 m-0 mb-10 text-base font-normal text-gray-700 transition ease-in-out bg-white border-b border-gray-300 border-solid bg-clip-padding focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              id="answer"
              name="answer"
              aria-describedby="emailHelp"
              placeholder=""
            />
          </div>
          <button
            type="submit"
            className="inline-flex justify-center px-8 py-4 mt-3 text-2xl font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
          >
            💌
          </button>
        </form>
      </div>
    </>
  );
};

export default RSVP;
