import Pokelist from "components/pokelist"
import Pokeshow from "components/pokeshow"
import {  FC, useEffect, useState } from "react"
import { getPokemon } from "services/api"



const root = document.querySelector("#root")

const App:FC = () => {
  const [pokemons, setPokemons] = useState([]);
  const [search, setSearch] = useState("");
  const [ foundPokemon, setFoundPokemon ] = useState(null)

  const handleChange = e => setSearch(e.target.value);

  useEffect(() => {
    const searchPokemon = async () => {
      const result = await getPokemon(search)
      if (result) {
        setFoundPokemon(result)
      }
    };

    if (search) {
      searchPokemon();
    }
  }, [search]);
  return (
    <div className="App">
      <label>
        <span>Search pokemon:</span>
        <input value={search} onChange={handleChange} />
      </label>
      {
        foundPokemon && (
          <Pokeshow
            list={pokemons}
            pokemon={foundPokemon}
            setPokemons={setPokemons}
          />
        )
      }
      <Pokelist pokemons={pokemons} />
    </div>
  );
}


ReactDOM.render(<App />, root)