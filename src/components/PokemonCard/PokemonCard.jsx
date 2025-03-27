import React from 'react';
import './PokemonCard.css';

const PokemonCard = ({ pokemon }) => {
  // Parse the Pokemon's ID from the URL
  const urlSegments = pokemon.url.split('/');
  const pokeId = urlSegments[urlSegments.length - 2];
  const spriteURL = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokeId}.png`;

  return (
    <div className="pokemon-card">
      <img src={spriteURL} alt={pokemon.name} />
      <h3>{pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</h3>
      <p>ID: {pokeId}</p>
    </div>
  );
};

export default PokemonCard;
