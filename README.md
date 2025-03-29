# Pokemon Rolodex
This application is a Pokemon Rolodex that displays a list of Pokémon fetched from the [PokeAPI](https://pokeapi.co/). The app demonstrates core React concepts including:

- A form for user input (search functionality)
- Data fetching via the Fetch API inside a lifecycle method (`componentDidMount`)
- A component-based architecture using props to pass data
- Attractive styling using CSS and Google Fonts


## Deployed App
You can view the live app at:  
[https://rebeccagonsalves.github.io/Pokedex](https://rebeccagonsalves.github.io/Pokedex)

## Features
- **Search Form**: Filter Pokémon by name with autocomplete suggestions.
- **Dynamic Filtering Logic**: Combines filters using React state.
- **Paginated Results**: Displays Pokémon in pages (2 rows at a time), with navigation.
- **View Pokémon Details**: Click a card to see a detailed modal with height, weight, types, abilities and base stats (HP, Attack, Defense, Speed, etc.)
- **Clean and Responsive UI:** Custom CSS with a Google Font and background gradient.
- **Deployment:** Deployed online (via GitHub Pages) and the code is maintained in a Git repository.

## Setup
1. Clone the repository.
2. Run `npm install` to install dependencies.
3. Run `npm start` to launch the development server.
4. To build for production, run `npm run build`.
5. To deploy, run 'npm run deploy'
