import React from 'react';

import { Weather } from './Weather';

import type { FC } from 'react';

import './app.css';

export const App: FC = () => {
  const [input, setInput] = React.useState('');
  if (input) {
     const [city, setCity] = React.useState('');
  }

  const doStuff = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInput(event.target.value);
  };


  return (
    <>
      <input
        role="search"
        type="text"
        value={input}
        onChange={doStuff}
      />

      <button onClick={() => setCity(input)}>Show Weather</button>

      <Weather city={city} />
    </>
  );
};
