import { useEffect, useState } from "react";
import { getPokemonsForType } from "../Repository/pokemonsRepository";
import { Pokemon } from "../Types/pokemonsTypes";

export default function useGetPokemonsForType(type: string): { pokemons: Pokemon[], isLoading: boolean } {
    const [pokemons, setPokemons] = useState<Pokemon[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(true);

    useEffect(() => {
        getPokemonsForType(type)
            .then((data) => {
                setPokemons(data.map((pokemon: Pokemon) => new Pokemon(pokemon)));
            }).finally(() => {
                setIsLoading(false)
            })
    }, []);
    return { pokemons: pokemons, isLoading }
}