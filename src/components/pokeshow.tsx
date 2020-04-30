import { FC, ReactElement } from "react"
import { IPokecatch } from "./poketypes"

const Pokeshow: FC<IPokecatch> = ({ pokemon, list, setPokemons }): ReactElement => {
  const handleClick = () => {
    if(list.filter(poke => poke.id === pokemon.id).length === 0) {
      setPokemons([
        ...list,
        pokemon,
      ])
    }
  }
  const { id, name, sprites } = pokemon
  return (
    <div>
      <figure>
        <img src={`${sprites.front_default}`}/>
        <div>
          {`#${id} ${name}`}
        </div>
      </figure>
      <input type="button" onClick={handleClick} value="Catch!"/>
    </div>
  )
}

export default Pokeshow