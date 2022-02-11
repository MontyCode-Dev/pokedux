import React from 'react';
import { PokemonCard } from './';

const PokemonList = () => {
    const pokemons = Array(20).fill({});

    return (
      <div className='wrapper'>
        <div>
          {pokemons.map((pokemon, index) => {
            return <PokemonCard key={`pokemon-${index}`} />;
          })}
        </div>
      </div>
    );
};

export default PokemonList;
