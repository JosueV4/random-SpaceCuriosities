import React from 'react';

const Card = ({ phrases, changePhrase }) => {
  return (
    <div className="flex flex-col items-center justify-center gap-2">
      <div className="w-96 h-44 bg-white opacity-60 rounded-3xl text-center flex items-center">
        <p className="text-base px-6 py-10 ">{phrases.phrase}</p>
      </div>
      <div className="mt-1">
        <button onClick={changePhrase}>
          <img className="h-12" src="/btn.png" alt="btn" />
        </button>
      </div>
    </div>
  );
};

export default Card;
