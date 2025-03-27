import React from 'react';
import './SearchForm.css';

const SearchForm = ({ searchField, onInputChange, onFormSubmit }) => {
  return (
    <form className="search-form" onSubmit={onFormSubmit}>
      <input
        type="text"
        placeholder="Search Pokémon..."
        value={searchField}
        onChange={onInputChange}
        className="search-input"
      />
      <button type="submit" className="search-button">
        Filter
      </button>
    </form>
  );
};

export default SearchForm;
