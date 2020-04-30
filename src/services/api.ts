export const getPokemon =
  async (pokemon) => {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}/`)
    const json = await response.json()
    return json
  }


export default {
  getPokemon,
}