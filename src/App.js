import React, { Component } from 'react';
import './App.css';

// Components
import SearchForm from './components/SearchForm/SearchForm';
import PokemonList from './components/PokemonList/PokemonList';

class App extends Component {
  constructor() {
    super();
    this.state = {
      pokemon: [],        // all fetched Pokémon
      filteredPokemon: [],// Pokémon shown after filter
      searchField: ''     // the user’s typed input
    };
  }

  componentDidMount() {
    // Fetch first 151 Pokémon from PokéAPI
    fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
      .then(response => response.json())
      .then(data => {
        // data.results is an array of Pokémon objects with 'name' and 'url'
        this.setState({
          pokemon: data.results,
          filteredPokemon: data.results // initially show all
        });
      })
      .catch(err => console.error('Error fetching Pokémon:', err));
  }

  handleInputChange = (event) => {
    // Keep track of the typed value in state
    this.setState({ searchField: event.target.value });
  }

  handleFormSubmit = (event) => {
    event.preventDefault(); // prevent page reload

    const { pokemon, searchField } = this.state;
    // Filter by partial match of name
    const filtered = pokemon.filter(p => 
      p.name.toLowerCase().includes(searchField.toLowerCase())
    );
    this.setState({ filteredPokemon: filtered });
  }

  render() {
    const { filteredPokemon, searchField } = this.state;

    return (
      <div className="app-container">
        <h1 className="app-title">Poke Rolodex</h1>
        
        <SearchForm
          searchField={searchField}
          onInputChange={this.handleInputChange}
          onFormSubmit={this.handleFormSubmit}
        />

        <PokemonList pokemonList={filteredPokemon} />
      </div>
    );
  }
}

export default App;
