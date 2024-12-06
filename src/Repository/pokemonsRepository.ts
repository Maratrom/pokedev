import { Pokemon } from "../Types/pokemonsTypes";

export async function getPokemons(): Promise<Pokemon[]> {
    const response = await fetch(`https://pokebuildapi.fr/api/v1/pokemon`);
    const data = await response.json();
    return data;
}


export async function getPokemonRandom(): Promise<Pokemon> {
    const response = await fetch(`https://pokebuildapi.fr/api/v1/random/team`);
    const data = await response.json();
    return data[0];
}

export async function getRandomTeam(): Promise<Pokemon[]> {
    const response = await fetch(`https://pokebuildapi.fr/api/v1/random/team`);
    const data = await response.json();
    return data;

}

export async function getPokemonById(id: number): Promise<Pokemon> {
    const response = await fetch(`https://pokebuildapi.fr/api/v1/pokemon/${id}`);
    const data = await response.json();
    return data;
}

export async function getPokemonsForType(type: string): Promise<Pokemon[]> {
    const response = await fetch(`https://pokebuildapi.fr/api/v1/pokemon/type/${type}`);
    const data = await response.json();
    return data;
}