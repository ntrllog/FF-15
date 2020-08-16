import React, { useRef } from 'react';
import Search from './Search';
import Background from '../images/champion-lillia-spirit-blossom-splash.jpg';

import { PATCH_VERSION } from './App';

const background = {
  backgroundImage: `url(${Background})`
};

const MainPage = ({ searching, onFormSubmit }) => {
  const ref = useRef();
  
  const highlightText = () => {
    window.getSelection().selectAllChildren(ref.current);
  };
  
  return (
    <div className="h-screen bg-cover bg-no-repeat flex justify-center items-center" style={background}>
      <div className="rounded text-white text-center bg-gray-900 bg-opacity-75 pb-4 px-4">
        <h1 className="text-6xl">FF@15</h1>
        <p>(a clone of <a className="link underline" href="https://na.op.gg/summoner/userName=Big+Tast%C3%BF" target="_blank" rel="noopener noreferrer">op.gg</a>)</p>
        <p className="text-xl">League of Legends player profile information</p>
        <p>Patch: {PATCH_VERSION}</p>
        <Search onFormSubmit={onFormSubmit} />
        <p>To test it out, use my summoner name: <button className="bg-gray-300 text-black p-1" ref={ref} onClick={highlightText} >Big Tastÿ</button></p>
        <div className={`ui ${searching === true ? 'active' : ''} inline loader`}></div>
      </div>
    </div>
  );
};

export default MainPage;
