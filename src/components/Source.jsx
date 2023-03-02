import React from 'react';

const Source = ({ phrase }) => {
  return (
    <div className="text-white h-full flex items-end py-4">
      <p className="text-sm">Fuente: {phrase.author}</p>
    </div>
  );
};

export default Source;
