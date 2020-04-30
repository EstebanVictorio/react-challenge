import { FC, ReactElement } from "react";
import { IPokelist } from "./poketypes";
import Pokemon from "components/pokemon"


const Pokelist:FC<IPokelist> = ({ pokemons }):ReactElement => {
  return (
    (pokemons && pokemons.length && (
      <ul>
        {pokemons.map(({ id, name, sprites }) => (
          <li key={id}>
            <Pokemon id={id} name={name} sprites={sprites} />
          </li>
        ))}
      </ul>
    )) ||
    <div>"No pokemons captured yet"</div>
  );
};

export default Pokelist