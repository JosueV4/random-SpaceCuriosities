import React, { useState } from 'react';
import './index.css';
import phrases from './assets/data.json';
import backgrounds from './assets/background.json';
import Card from './components/Card';
import Source from './components/Source';

const App = () => {
  const [backgroundIndex, SetBackgroundIndex] = useState(
    Math.floor(Math.random() * backgrounds.length),
  );

  const [phraseIndex, setPhraseIndex] = useState(
    Math.floor(Math.random() * phrases.length),
  );

  const changePhrase = () => {
    let newPhrase = Math.floor(Math.random() * phrases.length);
    while (newPhrase === phraseIndex) {
      newPhrase = Math.floor(Math.random() * phrases.length);
    }
    setPhraseIndex(newPhrase);

    let newBackground = Math.floor(Math.random() * backgrounds.length);
    while (newBackground === backgroundIndex) {
      newBackground = Math.floor(Math.random() * backgrounds.length);
    }
    SetBackgroundIndex(newBackground);
  };

  const backgroundImg = { backgroundImage: `url(${backgrounds[backgroundIndex].img})` };

  return (
    <div
      className="App h-screen bg-cover bg-center flex flex-col justify-start items-center gap-7 pt-40"
      style={backgroundImg}
    >
      <h1 className="text-white text-5xl">INFOGALAX</h1>
      <Card phrases={phrases[phraseIndex]} changePhrase={changePhrase} />
      <Source phrase={phrases[phraseIndex]} />
    </div>
  );
};

export default App;
