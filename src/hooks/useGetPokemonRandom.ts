import { useEffect, useState } from "react";
import { getPokemonRandom } from "../Repository/pokemonsRepository";
import { Pokemon } from "../Types/pokemonsTypes";

export default function useGetPokemonRandom(): { pokemon: Pokemon | null, isLoading: boolean } {
    const [pokemon, setPokemon] = useState<Pokemon | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(true);

    useEffect(() => {
        getPokemonRandom()
            .then((data) => {
                setPokemon(new Pokemon(data));
            }).finally(() => {
                setIsLoading(false)
            })
    }, []);
    return { pokemon, isLoading }
}