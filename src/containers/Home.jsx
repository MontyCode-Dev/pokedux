import React from 'react';
import { SearchBar } from '../components';
import { PokemonList } from '../components/pokemon';

const Home = () => {
    return (
        <div className='Home'>
          <SearchBar />
          <PokemonList />
        </div>
    );
};

export default Home;
