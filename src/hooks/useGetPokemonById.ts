import { useEffect, useState } from "react";
import { getPokemonById } from "../Repository/pokemonsRepository";
import { Pokemon } from "../Types/pokemonsTypes";

export default function useGetPokemonById(id: number): { pokemon: Pokemon | null, isLoading: boolean } {
    const [pokemon, setPokemon] = useState<Pokemon | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(true);

    useEffect(() => {
        getPokemonById(id)
            .then((data) => {
                setPokemon(new Pokemon(data));
            }).finally(() => {
                setIsLoading(false)
            })
    }, []);
    return { pokemon, isLoading }
}