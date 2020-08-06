import React from 'react';
import Search from './Search';
import Background from '../images/champion-lillia-spirit-blossom-splash.jpg';

const background = {
  backgroundImage: `url(${Background})`
};

const PATCH_VERSION = 10.16;

const MainPage = ({ onFormSubmit }) => {
  return (
    <div className="h-screen bg-cover bg-no-repeat flex justify-center items-center" style={ background }>
      <div className="rounded bg-gray-900 bg-opacity-75 pb-4 px-4">
        <h1 className="text-6xl text-white text-center">FF@15</h1>
        <p className="text-white text-center text-xl">League of Legends player profile information</p>
        <p className="text-white text-center">Patch: { PATCH_VERSION }</p>
        <Search onFormSubmit={onFormSubmit} />
        <p className="text-white text-center">To test it out, use my summoner name: Big Tastÿ</p>
      </div>
    </div>
  );
}

export default MainPage;
