import React, { useState } from 'react';

const Search = ({ onFormSubmit }) => {
  const [name, setName] = useState('');
  
  const onSubmit = event => {
    event.preventDefault();
    onFormSubmit(name);
  };
  
  return (
    <form className="bg-white flex px-2 mt-2" onSubmit={onSubmit}>
      <input onChange={ event => setName(event.target.value) } value={ name } className="w-full rounded my-2 px-3 focus:outline-none" type="text" placeholder="Enter summoner name"/>
      <button onClick={onSubmit} className="px-2 bg-blue-500 self-center focus:outline-none">Search</button>
    </form>
  );
};

export default Search;
