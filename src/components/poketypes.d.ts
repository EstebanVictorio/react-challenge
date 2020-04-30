import { Dispatch } from "react"

export interface IPokemon {
  id: string,
  name: string,
  sprites: any,
}

export interface IPokelist {
  pokemons: Array<IPokemon>
}

export interface IPokecatch {
  pokemon: IPokemon,
  list: Array<IPokemon>,
  setPokemons: Dispatch<Array<IPokemon>>
}