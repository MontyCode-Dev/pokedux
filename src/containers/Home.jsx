import React from 'react';
import { SearchBar } from '../components';
import { PokemonList } from '../components/pokemon';

const Home = () => {
    return (
        <div className='Home'>
          <h1 className="text-3xl font-bold underline">
            Hello world!
          </h1>
          <SearchBar />
          <PokemonList />
        </div>
    );
};

export default Home;
