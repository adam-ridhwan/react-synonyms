import React, { useState } from 'react';
import './App.css';
import { useGetSynonyms } from './Hooks/useGetSynonyms';

function App() {
  const [word, setWord] = useState('');
  const { synonyms, isLoading, getSynonyms } = useGetSynonyms();

  const handlefetchSynonyms = (e: React.FormEvent) => {
    e.preventDefault();
    getSynonyms(word);
  };

  const handleSynonymClicked = (newWord: string) => {
    setWord(newWord);
    getSynonyms(newWord);
  };

  return (
    <div className='App'>
      <form onSubmit={handlefetchSynonyms}>
        <label htmlFor='word-input'>Your word</label>
        <input
          value={word}
          onChange={e => setWord(e.target.value)}
          id='word-input'
        ></input>
        <button>Submit</button>
      </form>

      {isLoading ? (
        <div>Loading data...</div>
      ) : (
        <ul>
          {synonyms.map(synonym => (
            <li
              onClick={() => handleSynonymClicked(synonym.word)}
              key={synonym.word}
            >
              {synonym.word}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default App;
