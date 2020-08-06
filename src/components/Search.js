import React, { useState } from 'react';

const Search = ({ onFormSubmit }) => {
  const [name, setName] = useState('');
  
  const onSubmit = event => {
    event.preventDefault();
    onFormSubmit(name);
  };
  
  return (
    <form onSubmit={onSubmit}>
      <div className="flex justify-around">
        <input onChange={ event => setName(event.target.value) } value={ name } className="rounded w-full my-2 py-2 px-3 focus:outline-none focus:shadow-outline" type="text" placeholder="Enter summoner name"/>
      </div>
    </form>
  );
};

export default Search;
