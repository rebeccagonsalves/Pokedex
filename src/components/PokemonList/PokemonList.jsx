import React from 'react';
import './PokemonList.css';
import PokemonCard from '../PokemonCard/PokemonCard';

const PokemonList = ({ pokemonList }) => {
  return (
    <div className="pokemon-list">
      {pokemonList.map((poke, idx) => (
        <PokemonCard key={idx} pokemon={poke} />
      ))}
    </div>
  );
};

export default PokemonList;
